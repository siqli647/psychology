import React from 'react';
import { Play, AlertCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QUESTIONS } from '../constants';
import { getStoredStats } from '../utils';

const Home: React.FC = () => {
  const stats = getStoredStats();
  const mistakeCount = QUESTIONS.filter(q => (stats[q.id]?.mistakeCount || 0) > 0).length;
  const answeredCount = Object.keys(stats).length;

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
              <h3 className="text-3xl font-black text-white mb-2">全库顺序练习</h3>
              <p className="text-indigo-100 font-medium">按顺序挑战全部 691 道真题，沉浸式刷题体验。</p>
            </div>
            <div className="text-indigo-100 text-sm font-bold uppercase tracking-widest">
              总进度: {answeredCount} / {QUESTIONS.length}
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

      <div className="bg-slate-900 rounded-[2rem] p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-6">
           <div className="bg-white/10 p-4 rounded-2xl text-indigo-400">
             <BarChart3 size={32} />
           </div>
           <div>
             <h4 className="text-white text-xl font-bold">学习进度统计</h4>
             <p className="text-slate-400">基于 691 道题的全量正确率分析报告。</p>
           </div>
        </div>
        <Link to="/stats" className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black hover:bg-indigo-50 transition-all">
          查看报告
        </Link>
      </div>
    </div>
  );
};

export default Home;