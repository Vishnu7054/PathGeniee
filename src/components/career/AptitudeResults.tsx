import { motion } from "framer-motion";
import { AptitudeResult } from "@/types/aptitude";
import { Brain, BarChart3, Sparkles, ArrowRight, Trophy, Target } from "lucide-react";

interface Props {
  result: AptitudeResult;
  onContinue: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Logical Reasoning": "bg-blue-500",
  "Quantitative Aptitude": "bg-emerald-500",
  "Verbal Ability": "bg-amber-500",
  "Science/Technical Thinking": "bg-violet-500",
  "Creativity & Problem Solving": "bg-rose-500",
};

export default function AptitudeResults({ result, onContinue }: Props) {
  const pct = Math.round((result.totalScore / result.totalQuestions) * 100);
  const grade = pct >= 80 ? "Excellent" : pct >= 60 ? "Good" : pct >= 40 ? "Average" : "Needs Improvement";

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-7 h-7 text-primary-foreground" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Your Aptitude Results</h1>
          </div>
          <p className="text-primary-foreground/80 text-sm">Detailed analysis of your strengths and areas of improvement</p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-6 space-y-6 pb-12">
        {/* Score Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-secondary" />
              <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-primary"
                strokeDasharray={`${pct * 3.27} 327`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{result.totalScore}/{result.totalQuestions}</span>
              <span className="text-xs text-muted-foreground">{pct}%</span>
            </div>
          </div>
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${pct >= 60 ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{grade}</span>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-foreground mb-4">
            <BarChart3 className="w-5 h-5 text-primary" /> Category-wise Performance
          </h3>
          <div className="space-y-4">
            {Object.entries(result.categoryScores).map(([cat, s]) => (
              <div key={cat}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">{cat}</span>
                  <span className="font-bold text-primary">{s.correct}/{s.total}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className={`h-3 rounded-full transition-all duration-700 ${CATEGORY_COLORS[cat] || "bg-primary"}`}
                    style={{ width: `${(s.correct / s.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strength Type */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-foreground mb-3">
            <Brain className="w-5 h-5 text-primary" /> Detected Strength Type
          </h3>
          <div className="inline-block px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-lg mb-4">{result.strengthType}</div>
          <p className="text-sm text-muted-foreground leading-relaxed">{result.strengthExplanation}</p>
        </motion.div>

        {/* Weaknesses */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-foreground mb-3">
            <Target className="w-5 h-5 text-primary" /> Areas for Improvement
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{result.weaknessExplanation}</p>
        </motion.div>

        {/* Continue Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center pt-2">
          <button onClick={onContinue}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold gradient-hero text-primary-foreground hover:opacity-90 transition-all shadow-lg">
            <Sparkles className="w-4 h-4" /> Continue to AI Career Recommendations <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
