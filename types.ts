
export enum QuestionType {
  Single = 'Single',
  Multi = 'Multi',
  TrueFalse = 'TrueFalse'
}

export enum QuizSection {
  Part1 = 'Part1',
  Part2 = 'Part2',
  Part3 = 'Part3'
}

export interface Question {
  id: string;
  text: string;
  options?: string[]; // A, B, C, D...
  correctAnswer: string | string[]; // "A" or ["A", "B"] or "True"
  type: QuestionType;
  section: QuizSection;
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
