import React, { useState, useEffect } from 'react';
import { QUESTIONS } from '../constants';
import { getStoredStats } from '../utils';
import { Question } from '../types';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const Mistakes: React.FC = () => {
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const stats = getStoredStats();
    // Filter questions that have at least 1 mistake
    const mistakes = QUESTIONS.filter(q => (stats[q.id]?.mistakeCount || 0) > 0);
    setMistakeQuestions(mistakes);
  }, []);

  const handleNext = () => {
    if (currentIndex < mistakeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      // Loop back
      setCurrentIndex(0);
      setShowAnswer(false);
    }
  };

  if (mistakeQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">太棒了，没有错题！</h2>
        <p className="text-slate-500">你还没有记录任何错误答案。继续保持练习！</p>
      </div>
    );
  }

  const currentQ = mistakeQuestions[currentIndex];
  const stats = getStoredStats()[currentQ.id];

  return (
    <div className="max-w-2xl mx-auto pb-24">
      <div className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
          <AlertCircle size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">错题回顾</h2>
          <p className="text-slate-500 text-sm">正在复习 {mistakeQuestions.length} 道错题</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-start">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">
             做错 {stats.mistakeCount} 次
          </span>
          <span className="text-slate-400 text-sm font-medium">
            {currentIndex + 1} / {mistakeQuestions.length}
          </span>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6 leading-snug">
            {currentQ.text}
          </h3>

          <div className="space-y-3 mb-8">
            {(currentQ.options || ['正确', '错误']).map((opt, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                {opt === 'True' ? '正确' : opt === 'False' ? '错误' : opt}
              </div>
            ))}
          </div>

          {showAnswer ? (
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h4 className="text-indigo-900 font-bold mb-2">正确答案：</h4>
              <p className="text-indigo-700 text-lg font-bold mb-2">
                {Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer.join(', ') : currentQ.correctAnswer}
              </p>
              {currentQ.explanation && (
                <p className="text-indigo-800/80 text-sm">{currentQ.explanation}</p>
              )}
            </div>
          ) : (
             <div className="h-24 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl mb-6">
                <p className="text-slate-400 font-medium">点击“显示答案”查看解析</p>
             </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="flex-1 bg-white border-2 border-indigo-100 text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
            >
              {showAnswer ? '隐藏答案' : '显示答案'}
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              下一题 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mistakes;