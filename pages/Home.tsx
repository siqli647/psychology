
import React, { useState, useMemo, useEffect } from 'react';
import { Play, AlertCircle, BarChart3, RotateCcw, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QUESTIONS } from '../constants';
import { getStoredStats, clearAllStats, getQuizProgress } from '../utils';

const Home: React.FC = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const { answeredCount, mistakeCount, currentProgress } = useMemo(() => {
    const stats = getStoredStats();
    const answered = Object.keys(stats || {}).length;
    const mistakes = QUESTIONS.filter(q => (stats?.[q.id]?.mistakeCount || 0) > 0).length;
    const progress = getQuizProgress();
    
    return { 
      answeredCount: answered, 
      mistakeCount: mistakes,
      currentProgress: progress 
    };
  }, [refreshKey]);

  // 3秒后自动退出确认状态
  useEffect(() => {
    let timer: number;
    if (isConfirming) {
      timer = window.setTimeout(() => setIsConfirming(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isConfirming]);

  const handleResetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }
    
    // 执行重置逻辑
    clearAllStats();
    setIsConfirming(false);
    // 关键修复：通过改变 key 强制 useMemo 重新计算，实现 UI 归零
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">
          心理学考研真题大师
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          已收录真题全库 <span className="text-indigo-600 font-bold">{QUESTIONS.length}</span> 道题目。
          全量覆盖四份历年核心真题，不设分类。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/quiz/all" className="relative group overflow-hidden bg-indigo-600 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-95">
          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-white">
              <Play fill="currentColor" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-2">
                {currentProgress > 0 ? '继续顺序练习' : '开始顺序练习'}
              </h3>
              <p className="text-indigo-100 font-medium">
                {currentProgress > 0 ? `当前正处于第 ${currentProgress + 1} 题` : '按顺序挑战全部 691 道真题，沉浸式刷题体验。'}
              </p>
            </div>
            <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest">
              累计已答: {answeredCount} / {QUESTIONS.length}
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 bg-white/10 w-64 h-64 rounded-full group-hover:scale-150 transition-transform duration-700" />
        </Link>

        <Link to="/mistakes" className="relative group overflow-hidden bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-xl transition-all hover:border-rose-200 hover:shadow-rose-100 hover:scale-[1.02] active:scale-95">
          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center text-rose-600">
              <AlertCircle size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">错题集回顾</h3>
              <p className="text-slate-500 font-medium">针对性攻克薄弱环节，支持查看详细解析。</p>
            </div>
            <div className={`text-sm font-bold uppercase tracking-widest ${mistakeCount > 0 ? 'text-rose-500' : 'text-slate-400'}`}>
              当前错题: {mistakeCount} 道
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-all">
        <div className="flex items-center gap-6">
           <div className="bg-white/10 p-4 rounded-2xl text-indigo-400">
             <BarChart3 size={32} />
           </div>
           <div>
             <h4 className="text-white text-xl font-bold">学习进度统计</h4>
             <p className="text-slate-400 font-medium">基于 691 道题的全量正确率分析报告。</p>
           </div>
        </div>
        <div className="flex gap-4">
          <button 
            type="button"
            onClick={handleResetClick}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border active:scale-95 shadow-lg ${
              isConfirming 
                ? 'bg-rose-600 text-white border-rose-500 animate-pulse' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isConfirming ? <ShieldAlert size={18} /> : <RotateCcw size={18} />}
            {isConfirming ? '再次点击确认' : '重置进度'}
          </button>
          <Link to="/stats" className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black hover:bg-indigo-50 transition-all flex items-center active:scale-95 shadow-lg">
            查看报告
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
