export enum QuestionType {
  Single = 'Single',
  Multi = 'Multi',
  TrueFalse = 'TrueFalse'
}

export enum Difficulty {
  Beginner = 'Beginner', // 初学：直觉和常识
  Intermediate = 'Intermediate', // 进阶：需要逻辑思考
  Advanced = 'Advanced' // 专业：需要背诵和专业知识
}

export interface Question {
  id: string;
  text: string;
  options?: string[]; // A, B, C, D...
  correctAnswer: string | string[]; // "A" or ["A", "B"] or "True"
  type: QuestionType;
  difficulty: Difficulty;
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