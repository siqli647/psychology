import React from 'react';
import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react';
import { DifficultyCard } from '../components/DifficultyCard';
import { QUESTIONS } from '../constants';
import { Difficulty } from '../types';

const Home: React.FC = () => {
  const getCount = (diff: Difficulty) => QUESTIONS.filter(q => q.difficulty === diff).length;

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          心理学考研刷题
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto text-lg">
          选择一个难度级别开始练习。题目顺序将自动打乱，助你高效备考。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DifficultyCard
          title="初学阶段"
          description="符合直觉和认知的直观问题，涵盖社会心理学常识、生活应用等。"
          count={getCount(Difficulty.Beginner)}
          icon={BookOpen}
          colorClass="bg-emerald-500"
          linkTo={`/quiz/${Difficulty.Beginner}`}
        />
        <DifficultyCard
          title="进阶阶段"
          description="需要一定的逻辑思考、分析或掌握基本理论才能回答的问题。"
          count={getCount(Difficulty.Intermediate)}
          icon={Lightbulb}
          colorClass="bg-amber-500"
          linkTo={`/quiz/${Difficulty.Intermediate}`}
        />
        <DifficultyCard
          title="专业阶段"
          description="需要具体的专业知识、历史数据、量表分数或解剖学知识的记忆类题目。"
          count={getCount(Difficulty.Advanced)}
          icon={GraduationCap}
          colorClass="bg-rose-500"
          linkTo={`/quiz/${Difficulty.Advanced}`}
        />
      </div>

      <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-100">
        <div>
          <h3 className="text-xl font-bold text-indigo-900 mb-2">复习你的错题</h3>
          <p className="text-indigo-700/80">
            专注于你做错的题目。我们会自动追踪你的薄弱环节。
          </p>
        </div>
        <a 
          href="#/mistakes" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-200"
        >
          前往错题集
        </a>
      </div>
    </div>
  );
};

export default Home;