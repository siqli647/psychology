import React from 'react';
import { BookOpen, Layers, Zap } from 'lucide-react';
import { DifficultyCard } from '../components/DifficultyCard';
import { QUESTIONS } from '../constants';
import { QuizSection } from '../types';

const Home: React.FC = () => {
  const getCount = (section: QuizSection) => QUESTIONS.filter(q => q.section === section).length;

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          心理学考研刷题大师
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          全库已囊括四份真题共计 <span className="text-indigo-600 font-bold">250</span> 道真题。题目按顺序分为三部分，助您无死角复习。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DifficultyCard
          title="第一部分 (Part 1)"
          description="包含题目 1-83。侧重基础心理学与社会心理学内容。"
          count={getCount(QuizSection.Part1)}
          icon={BookOpen}
          colorClass="bg-indigo-500"
          linkTo={`/quiz/${QuizSection.Part1}`}
        />
        <DifficultyCard
          title="第二部分 (Part 2)"
          description="包含题目 84-166。涵盖发展、咨询及变态心理学重点考点。"
          count={getCount(QuizSection.Part2)}
          icon={Layers}
          colorClass="bg-violet-500"
          linkTo={`/quiz/${QuizSection.Part2}`}
        />
        <DifficultyCard
          title="第三部分 (Part 3)"
          description="包含题目 167-250。聚焦心理测量、综合知识及高频考点复习。"
          count={getCount(QuizSection.Part3)}
          icon={Zap}
          colorClass="bg-fuchsia-500"
          linkTo={`/quiz/${QuizSection.Part3}`}
        />
      </div>

      <div className="bg-white rounded-3xl p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">回顾错题集</h3>
          <p className="text-slate-500">
            练习过程中所有的错误回答都会自动记录，方便您进行针对性强化。
          </p>
        </div>
        <a 
          href="#/mistakes" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-100 whitespace-nowrap"
        >
          查看错题集
        </a>
      </div>
    </div>
  );
};

export default Home;