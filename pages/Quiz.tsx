
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS } from '../constants';
import { Question, QuestionType } from '../types';
import { updateQuestionStats, getQuizProgress, saveQuizProgress } from '../utils';
import { ArrowRight, Save, Home, RefreshCw } from 'lucide-react';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  
  // Initialize from persisted progress
  const [currentIndex, setCurrentIndex] = useState(() => getQuizProgress());
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

  // Save progress whenever currentIndex changes
  useEffect(() => {
    saveQuizProgress(currentIndex);
  }, [currentIndex]);

  const handleOptionSelect = (optionLabel: string) => {
    if (isSubmitted) return;
    if (currentQuestion.type === QuestionType.Multi) {
      setSelectedAnswers(prev => prev.includes(optionLabel) ? prev.filter(a => a !== optionLabel) : [...prev, optionLabel]);
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
    updateQuestionStats(currentQuestion.id, correct);
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 2000);
  }, [currentQuestion, selectedAnswers]);

  const nextQuestion = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsSubmitted(false);
      setIsCorrect(false);
    } else {
      alert("全库 691 道题已全部练习完成！");
      saveQuizProgress(0); // Reset progress on completion
      navigate('/');
    }
  };

  const jumpToStart = () => {
    if (window.confirm("确定要返回第一题开始练习吗？")) {
      setCurrentIndex(0);
      setSelectedAnswers([]);
      setIsSubmitted(false);
      setIsCorrect(false);
    }
  };

  if (!currentQuestion) return <div className="text-center p-20 font-bold">加载中...</div>;

  const getOptionLabel = (opt: string) => opt.includes('.') ? opt.split('.')[0].trim() : opt;
  const displayOptions = currentQuestion.type === QuestionType.TrueFalse ? ['True', 'False'] : currentQuestion.options || [];

  return (
    <div className="max-w-2xl mx-auto pb-24 relative">
      <div className={`fixed top-20 right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 z-50 ${showSaveToast ? 'opacity-100' : 'opacity-0'}`}>
        <Save size={16} /><span>进度已保存</span>
      </div>
      
      <div className="mb-6 flex items-center justify-between text-sm text-slate-500 font-medium">
        <button onClick={() => navigate('/')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
          <Home size={16}/> 退出练习
        </button>
        <div className="flex items-center gap-4">
          <button onClick={jumpToStart} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
            <RefreshCw size={14}/> 从头开始
          </button>
          <span className="font-mono bg-slate-100 px-2 py-1 rounded">进度: {currentIndex + 1} / {QUESTIONS.length}</span>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-10 bg-slate-50/50 border-b border-slate-100">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700 uppercase mb-4 inline-block">ID: {currentQuestion.id} | {currentQuestion.type}</span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">{currentQuestion.text}</h2>
        </div>
        <div className="p-8 md:p-10 space-y-4">
          {displayOptions.map((opt, idx) => {
            const label = getOptionLabel(opt);
            const isSelected = selectedAnswers.includes(label);
            let btnClass = isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-900" : "border-slate-100 hover:border-slate-300";
            if (isSubmitted) {
              const isActual = Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.includes(label) : currentQuestion.correctAnswer === label;
              if (isActual) btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
              else if (isSelected) btnClass = "border-rose-500 bg-rose-50 text-rose-900";
              else btnClass = "opacity-40 border-slate-50";
            }
            return (
              <button key={idx} onClick={() => handleOptionSelect(label)} disabled={isSubmitted} className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${btnClass}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-1 ${isSelected ? 'border-current' : 'border-slate-200'}`}>{isSelected && <div className="w-2.5 h-2.5 rounded-full bg-current" />}</div>
                <span className="font-semibold text-lg">{opt === 'True' ? '正确' : opt === 'False' ? '错误' : opt}</span>
              </button>
            );
          })}
        </div>
        {isSubmitted && (
          <div className={`px-10 py-8 border-t-2 ${isCorrect ? 'bg-emerald-50' : 'bg-rose-50'}`}>
            <h3 className={`font-black text-xl mb-2 ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>{isCorrect ? '回答正确！' : '回答错误'}</h3>
            {!isCorrect && <div className="font-bold text-rose-900 mb-2">正确答案: {Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(', ') : currentQuestion.correctAnswer}</div>}
            {currentQuestion.explanation && <p className="text-slate-600 text-sm mt-2 font-medium">解析：{currentQuestion.explanation}</p>}
          </div>
        )}
        <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-end">
          {!isSubmitted ? (
            <button onClick={checkAnswer} disabled={selectedAnswers.length === 0} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-lg disabled:opacity-30">提交答案</button>
          ) : (
            <button onClick={nextQuestion} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-lg flex items-center gap-3">下一题 <ArrowRight size={22} /></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
