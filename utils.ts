
import { UserStats } from './types';

const STORAGE_KEY = 'psy_prep_stats_v2';

export const getStoredStats = (): UserStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    return JSON.parse(stored);
  } catch (e) {
    console.error("无法读取本地练习记录:", e);
    return {};
  }
};

export const saveStats = (stats: UserStats) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("无法保存练习记录到本地:", e);
  }
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

export const clearAllStats = () => {
  localStorage.removeItem(STORAGE_KEY);
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
