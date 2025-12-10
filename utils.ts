import { UserStats } from './types';

export const getStoredStats = (): UserStats => {
  const stored = localStorage.getItem('psy_prep_stats');
  return stored ? JSON.parse(stored) : {};
};

export const saveStats = (stats: UserStats) => {
  localStorage.setItem('psy_prep_stats', JSON.stringify(stats));
};

export const updateQuestionStats = (
  questionId: string,
  isCorrect: boolean
): UserStats => {
  const stats = getStoredStats();
  const current = stats[questionId] || {
    mistakeCount: 0,
    correctCount: 0,
    lastAnswered: 0
  };

  stats[questionId] = {
    mistakeCount: isCorrect ? current.mistakeCount : current.mistakeCount + 1,
    correctCount: isCorrect ? current.correctCount + 1 : current.correctCount,
    lastAnswered: Date.now()
  };

  saveStats(stats);
  return stats;
};

// Fisher-Yates shuffle
export const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
