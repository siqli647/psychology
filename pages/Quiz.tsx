import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../constants';
import { Difficulty, Question, QuestionType } from '../types';
import { shuffleArray, updateQuestionStats } from '../utils';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';

const Quiz: React.FC = () => {
  const { difficulty } = useParams<{ difficulty: string }>();
  const navigate = useNavigate();
  
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Initialize Quiz
  useEffect(() => {
    if (difficulty) {
      const filtered = QUESTIONS.filter(q => q.difficulty === difficulty);
      setQuizQuestions(shuffleArray(filtered));
      setCurrentIndex(0);
      setSelectedAnswers([]);
      setIsSubmitted(false);
    }
  }, [difficulty]);

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
      // For Multi-select
      const sortedSelected = [...selectedAnswers].sort();
      const sortedCorrect = [...correctAns].sort();
      correct = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    } else {
      // For Single or True/False
      correct = selectedAnswers[0] === correctAns;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    updateQuestionStats(currentQuestion.id, correct);
  }, [currentQuestion, selectedAnswers]);

  const nextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsSubmitted(false);
      setIsCorrect(false);
    } else {
      // Quiz Finished logic could go here, for now loop or go home
      const confirm = window.confirm("你已经完成了本组练习！是否重新开始？");
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

  const getDifficultyLabel = (diff: string) => {
    switch(diff) {
      case Difficulty.Beginner: return "初学阶段";
      case Difficulty.Intermediate: return "进阶阶段";
      case Difficulty.Advanced: return "专业阶段";
      default: return diff;
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-4">该难度下暂无题目。</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-indigo-600 font-semibold hover:underline"
        >
          返回首页
        </button>
      </div>
    );
  }

  // Extract label for display (e.g., "A" from "A. Option Text")
  const getOptionLabel = (opt: string) => opt.split('.')[0].trim(); 
  // For True/False, we construct synthetic options if options array is missing
  const displayOptions = currentQuestion.type === QuestionType.TrueFalse 
    ? ['True', 'False'] 
    : currentQuestion.options || [];

  return (
    <div className="max-w-2xl mx-auto pb-24">
      <div className="mb-6 flex items-center justify-between text-sm text-slate-500 font-medium">
        <span>{difficulty ? getDifficultyLabel(difficulty) : '练习'}</span>
        <span>第 {currentIndex + 1} 题 / 共 {quizQuestions.length} 题</span>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        {/* Question Header */}
        <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wide">
              {currentQuestion.type === QuestionType.Multi ? '多选题' : '单选题'}
            </span>
            {currentQuestion.type === QuestionType.TrueFalse && (
               <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide">
               判断题
             </span>
            )}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Options */}
        <div className="p-6 md:p-8 space-y-3">
          {displayOptions.map((opt, idx) => {
            const isTF = currentQuestion.type === QuestionType.TrueFalse;
            const label = isTF ? opt : getOptionLabel(opt);
            const isSelected = selectedAnswers.includes(label);
            
            // Determine styles based on state
            let containerClass = "border-slate-200 hover:bg-slate-50 hover:border-indigo-300";
            if (isSelected) containerClass = "border-indigo-500 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-500";
            
            if (isSubmitted) {
              const correctAns = currentQuestion.correctAnswer;
              const isActualCorrect = Array.isArray(correctAns) ? correctAns.includes(label) : correctAns === label;
              
              if (isActualCorrect) {
                containerClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
              } else if (isSelected && !isActualCorrect) {
                containerClass = "border-red-500 bg-red-50 text-red-900 ring-1 ring-red-500";
              } else {
                containerClass = "opacity-50 border-slate-100";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(label)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${containerClass}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5
                  ${isSelected ? 'border-current' : 'border-slate-300'}`}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                </div>
                <span className="font-medium">{isTF && opt === 'True' ? '正确' : isTF && opt === 'False' ? '错误' : opt}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div className={`px-8 py-6 border-t ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
            <div className="flex items-start gap-3">
              {isCorrect ? <CheckCircle2 className="text-emerald-600 shrink-0" /> : <XCircle className="text-red-600 shrink-0" />}
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                  {isCorrect ? '回答正确！' : '回答错误'}
                </h3>
                {!isCorrect && (
                   <p className="text-red-700 mb-2">
                     正确答案是: <span className="font-bold">{Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(', ') : currentQuestion.correctAnswer}</span>
                   </p>
                )}
                {currentQuestion.explanation && (
                  <p className="text-sm opacity-90 mt-2 p-3 bg-white/50 rounded-lg">
                    <strong>解析：</strong> {currentQuestion.explanation}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={checkAnswer}
              disabled={selectedAnswers.length === 0}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              提交答案
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg"
            >
              下一题 <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;