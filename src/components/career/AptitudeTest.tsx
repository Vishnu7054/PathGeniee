import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APTITUDE_QUESTIONS, AptitudeResult } from "@/types/aptitude";
import { ChevronRight, ChevronLeft, Clock, Brain, CheckCircle2, AlertCircle } from "lucide-react";

interface Props {
  onComplete: (result: AptitudeResult) => void;
  onBack: () => void;
}

function computeResult(answers: number[]): AptitudeResult {
  const categoryScores: Record<string, { correct: number; total: number }> = {};
  let totalScore = 0;

  APTITUDE_QUESTIONS.forEach((q, i) => {
    if (!categoryScores[q.category]) categoryScores[q.category] = { correct: 0, total: 0 };
    categoryScores[q.category].total++;
    if (answers[i] === q.correctIndex) {
      totalScore++;
      categoryScores[q.category].correct++;
    }
  });

  const catEntries = Object.entries(categoryScores);
  const best = catEntries.reduce((a, b) => (b[1].correct / b[1].total) > (a[1].correct / a[1].total) ? b : a);
  const worst = catEntries.reduce((a, b) => (b[1].correct / b[1].total) < (a[1].correct / a[1].total) ? b : a);

  const strengthMap: Record<string, string> = {
    "Logical Reasoning": "Analytical",
    "Quantitative Aptitude": "Analytical",
    "Verbal Ability": "Communication",
    "Science/Technical Thinking": "Technical",
    "Creativity & Problem Solving": "Creative",
  };

  const strengthType = strengthMap[best[0]] || "Analytical";

  const strengthExplanation = `You show strong aptitude in ${best[0]} (${best[1].correct}/${best[1].total}). This indicates a ${strengthType.toLowerCase()} mindset — you excel at tasks requiring ${
    strengthType === "Analytical" ? "logic, patterns, and structured problem-solving" :
    strengthType === "Communication" ? "language comprehension, articulation, and verbal reasoning" :
    strengthType === "Technical" ? "scientific thinking, understanding systems, and technical concepts" :
    "innovative thinking, creative solutions, and out-of-the-box approaches"
  }. Careers that leverage this strength will be the most fulfilling for you.`;

  const weaknessExplanation = best[0] === worst[0]
    ? "Your performance is balanced across all categories. Keep building on all areas equally."
    : `Your ${worst[0]} score (${worst[1].correct}/${worst[1].total}) suggests room for improvement. Consider practicing more problems in this area to become a well-rounded candidate. This doesn't limit your options — many successful professionals develop these skills over time.`;

  return { totalScore, totalQuestions: 10, categoryScores, strengthType, strengthExplanation, weaknessExplanation, answers };
}

export default function AptitudeTest({ onComplete, onBack }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete(computeResult(answers));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const selectOption = useCallback((idx: number) => {
    setAnswers(prev => { const n = [...prev]; n[current] = idx; return n; });
  }, [current]);

  const q = APTITUDE_QUESTIONS[current];
  const answeredCount = answers.filter(a => a !== -1).length;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="w-7 h-7 text-primary-foreground" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Aptitude & Strength Test</h1>
          </div>
          <p className="text-primary-foreground/80 text-sm">Answer 10 questions to evaluate your strengths</p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-6">
        {/* Stats Bar */}
        <div className="glass-card rounded-2xl p-4 mb-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {answeredCount}/10 answered
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Clock className={`w-4 h-4 ${timeLeft < 60 ? "text-destructive" : "text-primary"}`} />
              <span className={timeLeft < 60 ? "text-destructive" : ""}>{minutes}:{seconds.toString().padStart(2, "0")}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{q.category}</span>
        </div>

        {/* Progress */}
        <div className="w-full bg-secondary rounded-full h-2 mb-6">
          <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${((current + 1) / 10) * 100}%` }} />
        </div>

        {/* Question Card */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-start gap-3 mb-8">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{current + 1}</span>
                <h2 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">{q.question}</h2>
              </div>

              <div className="grid gap-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      answers[current] === i
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-border hover:border-primary/40 hover:bg-secondary/50"
                    }`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      answers[current] === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {optionLabels[i]}
                    </span>
                    <span className="font-medium text-foreground">{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={() => current === 0 ? onBack() : setCurrent(c => c - 1)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> {current === 0 ? "Back to Form" : "Previous"}
            </button>
            {current < 9 ? (
              <button
                onClick={() => setCurrent(c => c + 1)}
                disabled={answers[current] === -1}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onComplete(computeResult(answers))}
                disabled={answers.some(a => a === -1)}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold gradient-hero text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all shadow-lg"
              >
                <AlertCircle className="w-4 h-4" /> Submit Test
              </button>
            )}
          </div>

          {/* Question dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-primary scale-125" :
                  answers[i] !== -1 ? "bg-primary/50" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
