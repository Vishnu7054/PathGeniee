import { motion } from "framer-motion";
import { CourseRecommendation } from "@/types/career";
import { Sparkles, Clock, BarChart3, Zap, ArrowRight, ArrowLeft, Scale } from "lucide-react";

interface Props {
  recommendations: CourseRecommendation[];
  onSelectCourse: (courseId: string) => void;
  onBack: () => void;
  onCompare?: () => void;
}

const demandColors: Record<string, string> = {
  "Very High": "bg-success/10 text-success",
  "High": "bg-primary/10 text-primary",
  "Medium": "bg-warning/10 text-warning",
  "Low": "bg-muted text-muted-foreground",
};

export default function ResultsDashboard({ recommendations, onSelectCourse, onBack }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Form
          </button>
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">AI Analysis Complete</h1>
              <p className="text-primary-foreground/70 mt-1">Here are your top career recommendations based on your profile</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-6 pb-12">
        <div className="grid gap-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 cursor-pointer group"
              onClick={() => onSelectCourse(rec.id)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-3xl">
                    {rec.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-heading font-bold text-foreground">{rec.name}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${demandColors[rec.futureDemand]}`}>
                      {rec.futureDemand} Demand
                    </span>
                    {i === 0 && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                        🏆 Best Match
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{rec.matchReason}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {rec.duration}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5" /> {rec.difficultyLevel}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> {rec.requiredStream}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                      <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="6"
                        strokeDasharray={`${(rec.suitabilityScore / 100) * 220} 220`}
                        strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{rec.suitabilityScore}%</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
