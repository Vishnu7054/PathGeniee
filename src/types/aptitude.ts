export interface AptitudeQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface AptitudeResult {
  totalScore: number;
  totalQuestions: number;
  categoryScores: Record<string, { correct: number; total: number }>;
  strengthType: string;
  strengthExplanation: string;
  weaknessExplanation: string;
  answers: number[];
}

export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [
  {
    id: 1, category: "Logical Reasoning",
    question: "If 5 machines make 5 items in 5 minutes, how many machines are needed to make 10 items in 5 minutes?",
    options: ["5", "10", "15", "20"], correctIndex: 1,
  },
  {
    id: 2, category: "Logical Reasoning",
    question: "Find the next number: 2, 4, 8, 16, __",
    options: ["18", "24", "32", "40"], correctIndex: 2,
  },
  {
    id: 3, category: "Verbal Ability",
    question: 'Choose the correct synonym of "Rapid"',
    options: ["Slow", "Fast", "Weak", "Late"], correctIndex: 1,
  },
  {
    id: 4, category: "Verbal Ability",
    question: "Which sentence is grammatically correct?",
    options: ["He go to school daily", "He goes to school daily", "He going school daily", "He gone school daily"], correctIndex: 1,
  },
  {
    id: 5, category: "Quantitative Aptitude",
    question: "A train travels 60 km in 1 hour. How far will it travel in 30 minutes?",
    options: ["15 km", "20 km", "30 km", "40 km"], correctIndex: 2,
  },
  {
    id: 6, category: "Quantitative Aptitude",
    question: "If 3x + 2 = 11, find x",
    options: ["2", "3", "4", "5"], correctIndex: 1,
  },
  {
    id: 7, category: "Science/Technical Thinking",
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Petrol", "Wind", "Diesel"], correctIndex: 2,
  },
  {
    id: 8, category: "Science/Technical Thinking",
    question: "Which part of a computer is called the brain?",
    options: ["Monitor", "CPU", "Mouse", "Keyboard"], correctIndex: 1,
  },
  {
    id: 9, category: "Creativity & Problem Solving",
    question: "If you face a difficult problem and no solution works, what is the best approach?",
    options: ["Quit", "Try different methods and learn from failure", "Wait for others", "Ignore the problem"], correctIndex: 1,
  },
  {
    id: 10, category: "Creativity & Problem Solving",
    question: "Which activity best represents creativity?",
    options: ["Solving a fixed math equation", "Writing a story or designing a logo", "Memorizing formulas", "Doing repetitive work"], correctIndex: 1,
  },
];
