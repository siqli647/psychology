import { UserStats } from './types';

const STORAGE_KEY = 'psy_prep_stats_v2';
const PROGRESS_KEY = 'psy_prep_quiz_progress';

export const getStoredStats = (): UserStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored === '{}') return {};
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

export const getQuizProgress = (): number => {
  const progress = localStorage.getItem(PROGRESS_KEY);
  if (!progress) return 0;
  const val = parseInt(progress, 10);
  return isNaN(val) ? 0 : val;
};

export const saveQuizProgress = (index: number) => {
  localStorage.setItem(PROGRESS_KEY, index.toString());
};

export const clearAllStats = () => {
  // 彻底清除已知的所有相关 key
  const keys = [STORAGE_KEY, PROGRESS_KEY, 'psy_prep_stats', 'psy_prep_quiz_progress'];
  keys.forEach(k => localStorage.removeItem(k));
  
  // 备用：清除所有带前缀的 key
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('psy_prep_')) {
      localStorage.removeItem(key);
    }
  }
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