import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DifficultyCardProps {
  title: string;
  description: string;
  count: number;
  icon: LucideIcon;
  colorClass: string;
  linkTo: string;
}

export const DifficultyCard: React.FC<DifficultyCardProps> = ({
  title,
  description,
  count,
  icon: Icon,
  colorClass,
  linkTo,
}) => {
  return (
    <Link to={linkTo} className="block group">
      <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {count} Questions
        </div>
      </div>
    </Link>
  );
};
