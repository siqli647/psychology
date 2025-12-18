import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { QUESTIONS } from '../constants';
import { getStoredStats } from '../utils';
import { AlertTriangle, Trophy } from 'lucide-react';

const Stats: React.FC = () => {
  const data = useMemo(() => {
    const stats = getStoredStats();
    // Map questions to stats, sort by mistakes desc
    const qStats = QUESTIONS.map(q => ({
      id: q.id,
      text: q.text.substring(0, 10) + '...', // Truncate for display
      fullText: q.text,
      mistakes: stats[q.id]?.mistakeCount || 0,
      correct: stats[q.id]?.correctCount || 0
    }))
    .filter(item => item.mistakes > 0) // Only show items with mistakes
    .sort((a, b) => b.mistakes - a.mistakes)
    .slice(0, 10); // Top 10

    return qStats;
  }, []);

  const totalMistakes = useMemo(() => {
      const stats = getStoredStats();
      return Object.values(stats).reduce((acc, curr) => acc + curr.mistakeCount, 0);
  }, []);

  const totalCorrect = useMemo(() => {
    const stats = getStoredStats();
    return Object.values(stats).reduce((acc, curr) => acc + curr.correctCount, 0);
  }, []);

  return (
    <div className="pb-24">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800">学习统计</h2>
        <p className="text-slate-500 mt-2">基于你的答题历史生成的分析报告。</p>
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

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
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
          <div className="h-64 flex flex-col items-center justify-center text-slate-400">
             <BarChart size={48} className="mb-2 opacity-20" />
             <p>暂无数据，快开始刷题吧！</p>
          </div>
        )}
      </div>

      {data.length > 0 && (
        <div className="mt-8">
           <h3 className="text-lg font-bold text-slate-800 mb-4">重点关注题目</h3>
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
        </div>
      )}
    </div>
  );
};

export default Stats;