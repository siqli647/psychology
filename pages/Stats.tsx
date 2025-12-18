
import React, { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { QUESTIONS } from '../constants';
import { getStoredStats, clearAllStats } from '../utils';
import { AlertTriangle, Trophy, Trash2, ShieldCheck } from 'lucide-react';

const Stats: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const data = useMemo(() => {
    const stats = getStoredStats();
    const qStats = QUESTIONS.map(q => ({
      id: q.id,
      text: q.text.substring(0, 10) + '...',
      fullText: q.text,
      mistakes: stats[q.id]?.mistakeCount || 0,
      correct: stats[q.id]?.correctCount || 0
    }))
    .filter(item => item.mistakes > 0)
    .sort((a, b) => b.mistakes - a.mistakes)
    .slice(0, 10);

    return qStats;
  }, [refreshKey]);

  const totalMistakes = useMemo(() => {
      const stats = getStoredStats();
      return Object.values(stats).reduce((acc, curr) => acc + curr.mistakeCount, 0);
  }, [refreshKey]);

  const totalCorrect = useMemo(() => {
    const stats = getStoredStats();
    return Object.values(stats).reduce((acc, curr) => acc + curr.correctCount, 0);
  }, [refreshKey]);

  const handleClearData = () => {
    if (window.confirm("确定要永久清空所有的练习记录和错题集吗？此操作不可撤销。")) {
      clearAllStats();
      setRefreshKey(prev => prev + 1);
    }
  };

  return (
    <div className="pb-24">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800">学习统计</h2>
          <p className="text-slate-500 mt-2">基于您的答题历史生成的分析报告。</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
          <ShieldCheck size={14} />
          数据已加密保存在浏览器本地
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
           <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
             <Trophy size={24} />
           </div>
           <div className="text-3xl font-black text-slate-900">{totalCorrect}</div>
           <div className="text-slate-500 text-sm font-medium">回答正确次数</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
           <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-3">
             <AlertTriangle size={24} />
           </div>
           <div className="text-3xl font-black text-slate-900">{totalMistakes}</div>
           <div className="text-slate-500 text-sm font-medium">累计错误次数</div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">错误率最高的 10 道题</h3>
        
        {data.length > 0 ? (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="text" 
                  type="category" 
                  width={100} 
                  tick={{fontSize: 12, fill: '#64748b'}} 
                />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="mistakes" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? '#e11d48' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400 text-center">
             <p className="mb-2">暂无数据</p>
             <p className="text-sm">当您做错题目时，这里会自动记录并分析。</p>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
           <h3 className="text-lg font-bold text-slate-800 mb-4">重点关注题目</h3>
           {data.length > 0 ? (
             <div className="space-y-3">
               {data.map((item, idx) => (
                 <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-4">
                   <span className="font-mono text-slate-300 font-bold text-xl">#{idx + 1}</span>
                   <div>
                     <p className="text-slate-800 font-medium mb-1">{item.fullText}</p>
                     <p className="text-rose-500 text-sm font-bold">错误 {item.mistakes} 次</p>
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="bg-slate-100/50 rounded-xl p-8 text-center text-slate-400">
               还没有做错任何题目。
             </div>
           )}
        </div>

        <div className="md:w-64">
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <h4 className="text-rose-900 font-bold mb-2 flex items-center gap-2">
              <Trash2 size={16} />
              危险区域
            </h4>
            <p className="text-rose-700 text-xs mb-4 leading-relaxed">
              清空数据将移除本地存储的所有练习进度和错题统计。
            </p>
            <button
              onClick={handleClearData}
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
            >
              清空本地记录
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
