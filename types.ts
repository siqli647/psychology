
export enum QuestionType {
  Single = 'Single',
  Multi = 'Multi',
  TrueFalse = 'TrueFalse'
}

export interface Question {
  id: string;
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  type: QuestionType;
  explanation?: string;
}

export interface UserStats {
  [questionId: string]: {
    mistakeCount: number;
    correctCount: number;
    lastAnswered: number;
  };
}

export interface AppState {
  stats: UserStats;
}
