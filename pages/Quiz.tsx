
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../constants';
import { QuizSection, Question, QuestionType } from '../types';
import { shuffleArray, updateQuestionStats } from '../utils';
import { CheckCircle2, XCircle, ArrowRight, Save } from 'lucide-react';

const Quiz: React.FC = () => {
  const { difficulty: sectionParam } = useParams<{ difficulty: string }>();
  const navigate = useNavigate();
  
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Initialize Quiz
  useEffect(() => {
    if (sectionParam) {
      const filtered = QUESTIONS.filter(q => q.section === sectionParam);
      setQuizQuestions(shuffleArray(filtered));
      setCurrentIndex(0);
      setSelectedAnswers([]);
      setIsSubmitted(false);
    }
  }, [sectionParam]);

  const currentQuestion = quizQuestions[currentIndex];

  const handleOptionSelect = (optionLabel: string) => {
    if (isSubmitted) return;

    if (currentQuestion.type === QuestionType.Multi) {
      setSelectedAnswers(prev => 
        prev.includes(optionLabel) 
          ? prev.filter(a => a !== optionLabel) 
          : [...prev, optionLabel]
      );
    } else {
      setSelectedAnswers([optionLabel]);
    }
  };

  const checkAnswer = useCallback(() => {
    if (!currentQuestion) return;

    let correct = false;
    const correctAns = currentQuestion.correctAnswer;

    if (Array.isArray(correctAns)) {
      const sortedSelected = [...selectedAnswers].sort();
      const sortedCorrect = [...correctAns].sort();
      correct = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    } else {
      correct = selectedAnswers[0] === correctAns;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    
    // 更新本地持久化统计
    updateQuestionStats(currentQuestion.id, correct);
    
    // 显示自动保存提示
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 2000);
  }, [currentQuestion, selectedAnswers]);

  const nextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsSubmitted(false);
      setIsCorrect(false);
    } else {
      const confirm = window.confirm("你已经完成了本部分练习！是否重新打乱顺序再练一遍？");
      if (confirm) {
        setQuizQuestions(shuffleArray(quizQuestions));
        setCurrentIndex(0);
        setSelectedAnswers([]);
        setIsSubmitted(false);
      } else {
        navigate('/');
      }
    }
  };

  const getSectionLabel = (sec: string) => {
    switch(sec) {
      case QuizSection.Part1: return "第一部分 (Part 1)";
      case QuizSection.Part2: return "第二部分 (Part 2)";
      case QuizSection.Part3: return "第三部分 (Part 3)";
      default: return sec;
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-4">载入题目中...</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-indigo-600 font-semibold hover:underline"
        >
          返回首页
        </button>
      </div>
    );
  }

  const getOptionLabel = (opt: string) => opt.split('.')[0].trim(); 
  const displayOptions = currentQuestion.type === QuestionType.TrueFalse 
    ? ['True', 'False'] 
    : currentQuestion.options || [];

  return (
    <div className="max-w-2xl mx-auto pb-24 relative">
      {/* 自动保存提示 */}
      <div className={`fixed top-20 right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 z-50 ${showSaveToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <Save size={16} />
        <span className="text-sm font-bold">进度已持久化保存</span>
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-slate-500 font-medium">
        <span className="bg-slate-200 px-3 py-1 rounded-full text-slate-700">
          {sectionParam ? getSectionLabel(sectionParam) : '练习'}
        </span>
        <span className="font-mono">
          进度: {currentIndex + 1} / {quizQuestions.length}
        </span>
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-10 bg-slate-50/50 border-b border-slate-100">
          <div className="flex gap-2 mb-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide
              ${currentQuestion.type === QuestionType.Multi ? 'bg-amber-100 text-amber-700' : 
                currentQuestion.type === QuestionType.TrueFalse ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {currentQuestion.type === QuestionType.Multi ? '多选题' : 
               currentQuestion.type === QuestionType.TrueFalse ? '判断题' : '单选题'}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
            {currentQuestion.text}
          </h2>
        </div>

        <div className="p-8 md:p-10 space-y-4">
          {displayOptions.map((opt, idx) => {
            const isTF = currentQuestion.type === QuestionType.TrueFalse;
            const label = isTF ? opt : getOptionLabel(opt);
            const isSelected = selectedAnswers.includes(label);
            
            let containerClass = "border-slate-100 hover:bg-slate-50 hover:border-slate-300";
            if (isSelected) containerClass = "border-indigo-600 bg-indigo-50/50 text-indigo-900";
            
            if (isSubmitted) {
              const correctAns = currentQuestion.correctAnswer;
              const isActualCorrect = Array.isArray(correctAns) ? correctAns.includes(label) : correctAns === label;
              
              if (isActualCorrect) {
                containerClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
              } else if (isSelected && !isActualCorrect) {
                containerClass = "border-rose-500 bg-rose-50 text-rose-900";
              } else {
                containerClass = "opacity-40 border-slate-50 grayscale-[0.5]";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(label)}
                disabled={isSubmitted}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 shadow-sm ${containerClass}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-1
                  ${isSelected ? 'border-current' : 'border-slate-200'}`}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                </div>
                <span className="font-semibold text-lg">
                  {isTF && opt === 'True' ? '正确' : isTF && opt === 'False' ? '错误' : opt}
                </span>
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`px-10 py-8 border-t-2 ${isCorrect ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'}`}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-white shadow-sm shrink-0">
                {isCorrect ? <CheckCircle2 className="text-emerald-600" /> : <XCircle className="text-rose-600" />}
              </div>
              <div className="flex-1">
                <h3 className={`font-black text-xl mb-2 ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                  {isCorrect ? '真棒！回答正确' : '差一点，回答错误'}
                </h3>
                {!isCorrect && (
                   <div className="text-rose-900 mb-4 inline-block bg-white/80 px-4 py-2 rounded-xl border border-rose-100 font-bold">
                     正确答案: {Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(', ') : 
                      (currentQuestion.correctAnswer === 'True' ? '正确' : currentQuestion.correctAnswer === 'False' ? '错误' : currentQuestion.correctAnswer)}
                   </div>
                )}
                {currentQuestion.explanation && (
                  <div className="mt-4 p-5 bg-white/70 rounded-2xl border border-slate-200/50">
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900">解析：</span> {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={checkAnswer}
              disabled={selectedAnswers.length === 0}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]"
            >
              提交答案
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl active:scale-[0.98]"
            >
              下一题 <ArrowRight size={22} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
