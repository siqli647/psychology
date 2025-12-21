
import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS } from '../constants';
import { getStoredStats, updateQuestionStats } from '../utils';
import { Question, QuestionType } from '../types';
import { AlertCircle, CheckCircle2, ArrowRight, Home, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mistakes: React.FC = () => {
  const navigate = useNavigate();
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const loadMistakes = useCallback(() => {
    const stats = getStoredStats();
    const mistakes = QUESTIONS.filter(q => (stats[q.id]?.mistakeCount || 0) > 0);
    setMistakeQuestions(mistakes);
    setCurrentIndex(0);
    resetTurn();
  }, []);

  useEffect(() => {
    loadMistakes();
  }, [loadMistakes]);

  const resetTurn = () => {
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handleOptionSelect = (label: string) => {
    if (isSubmitted) return;
    const currentQ = mistakeQuestions[currentIndex];
    if (currentQ.type === QuestionType.Multi) {
      setSelectedAnswers(prev => prev.includes(label) ? prev.filter(a => a !== label) : [...prev, label]);
    } else {
      setSelectedAnswers([label]);
    }
  };

  const checkAnswer = () => {
    const currentQ = mistakeQuestions[currentIndex];
    let correct = false;
    const correctAns = currentQ.correctAnswer;
    if (Array.isArray(correctAns)) {
      correct = JSON.stringify([...selectedAnswers].sort()) === JSON.stringify([...correctAns].sort());
    } else {
      correct = selectedAnswers[0] === correctAns;
    }
    setIsCorrect(correct);
    setIsSubmitted(true);
    // 这里依然更新统计，如果答对了，在下次进入错题集时，该题可能会消失（取决于你的逻辑，这里默认保留历史记录，但在统计页展示改善）
    updateQuestionStats(currentQ.id, correct);
  };

  const handleNext = () => {
    if (currentIndex < mistakeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetTurn();
    } else {
      alert("所有错题已回顾一遍！");
      navigate('/');
    }
  };

  if (mistakeQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">暂无错题！</h2>
        <p className="text-slate-500 mb-8">所有的真题都已经攻克了，去开始新的练习吧。</p>
        <button onClick={() => navigate('/')} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100">返回首页</button>
      </div>
    );
  }

  const currentQ = mistakeQuestions[currentIndex];
  const displayOptions = currentQ.type === QuestionType.TrueFalse ? ['True', 'False'] : currentQ.options || [];

  return (
    <div className="max-w-2xl mx-auto pb-24">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center"><AlertCircle size={20} /></div>
          <h2 className="text-2xl font-bold text-slate-800">错题互动练习</h2>
        </div>
        <button onClick={loadMistakes} className="text-slate-400 hover:text-indigo-600 flex items-center gap-1 text-sm font-bold"><RefreshCcw size={14}/> 重置序列</button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-rose-50/30">
          <span className="text-rose-600 text-xs font-black uppercase tracking-widest bg-rose-100 px-3 py-1 rounded-full">攻克模式</span>
          <span className="text-slate-400 text-sm font-mono">{currentIndex + 1} / {mistakeQuestions.length}</span>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-8 leading-snug">{currentQ.text}</h3>
          <div className="space-y-4 mb-8">
            {displayOptions.map((opt, idx) => {
              const label = opt.includes('.') ? opt.split('.')[0].trim() : opt;
              const isSelected = selectedAnswers.includes(label);
              let btnClass = isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-900" : "border-slate-100 hover:border-slate-300";
              if (isSubmitted) {
                const isActual = Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer.includes(label) : currentQ.correctAnswer === label;
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
            <div className={`p-6 rounded-2xl mb-8 ${isCorrect ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
              <h4 className={`font-black mb-2 ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>{isCorrect ? '这次做对了，有进步！' : '还是做错了，再看看解析'}</h4>
              {!isCorrect && <p className="font-bold text-rose-900">正确答案：{Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer.join(', ') : currentQ.correctAnswer}</p>}
              {/* Fixed: currentQuestion was not defined, use currentQ instead */}
              {currentQ.explanation && <p className="text-slate-600 text-sm mt-3 leading-relaxed">解析：{currentQ.explanation}</p>}
            </div>
          )}

          <div className="flex gap-4">
            {!isSubmitted ? (
              <button onClick={checkAnswer} disabled={selectedAnswers.length === 0} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-all disabled:opacity-30">检查答案</button>
            ) : (
              <button onClick={handleNext} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">下一题 <ArrowRight size={20} /></button>
            )}
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/')} className="mt-8 w-full py-4 text-slate-400 font-bold hover:text-slate-600 flex items-center justify-center gap-2"><Home size={18}/> 返回首页</button>
    </div>
  );
};

export default Mistakes;
