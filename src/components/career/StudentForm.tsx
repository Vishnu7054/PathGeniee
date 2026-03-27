import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StudentFormData, INTERESTS, STRONG_SUBJECTS, INDIAN_STATES, GOALS, BUDGETS } from "@/types/career";
import { ChevronRight, ChevronLeft, Sparkles, GraduationCap, MapPin, Target, Wallet, Brain } from "lucide-react";

const STEPS = ["Education", "Location & Interests", "Skills & Strengths", "Goals & Budget"];

const defaultForm: StudentFormData = {
  level: "", stream: "", percentage: 75, state: "", city: "",
  interests: [], strongSubjects: [],
  skills: { logicalThinking: 5, creativity: 5, communication: 5, leadership: 5, problemSolving: 5, technicalInterest: 5 },
  goal: "", budget: "", preferredCollegeState: "",
};

interface Props {
  onSubmit: (data: StudentFormData) => void;
}

export default function StudentForm({ onSubmit }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<StudentFormData>(defaultForm);

  const updateField = <K extends keyof StudentFormData>(key: K, value: StudentFormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleArray = (key: "interests" | "strongSubjects", val: string) => {
    setForm(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }));
  };

  const updateSkill = (skill: keyof StudentFormData["skills"], val: number) => {
    setForm(prev => ({ ...prev, skills: { ...prev.skills, [skill]: val } }));
  };

  const canProceed = () => {
    if (step === 0) return form.level && form.percentage > 0 && (form.level === "10th" || form.stream);
    if (step === 1) return form.state && form.interests.length > 0;
    if (step === 2) return form.strongSubjects.length > 0;
    if (step === 3) return form.goal && form.budget;
    return true;
  };

  const stepIcons = [
    <GraduationCap key="edu" className="w-5 h-5" />,
    <MapPin key="loc" className="w-5 h-5" />,
    <Brain key="skills" className="w-5 h-5" />,
    <Target key="goal" className="w-5 h-5" />,
  ];

  const renderSkillSlider = (label: string, skill: keyof StudentFormData["skills"]) => (
    <div key={skill} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-bold text-primary">{form.skills[skill]}/10</span>
      </div>
      <input
        type="range" min={1} max={10} value={form.skills[skill]}
        onChange={e => updateSkill(skill, Number(e.target.value))}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="gradient-hero py-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">CareerCompass AI</h1>
          </div>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            AI-powered career guidance to find your perfect course and career path
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-8">
        {/* Progress Bar */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all ${i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {stepIcons[i]}
                  <span className="hidden sm:inline">{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-8 md:w-16 h-0.5 mx-1 transition-colors ${i < step ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>

        {/* Form Steps */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">📚 Education Details</h2>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Student Level</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["10th", "12th"].map(l => (
                        <button key={l} onClick={() => updateField("level", l as "10th" | "12th")}
                          className={`p-4 rounded-xl border-2 text-center font-medium transition-all ${form.level === l ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                          {l === "10th" ? "After 10th" : "After 12th"}
                        </button>
                      ))}
                    </div>
                  </div>
                  {form.level === "12th" && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Stream</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Science", "Commerce", "Arts"].map(s => (
                          <button key={s} onClick={() => updateField("stream", s as any)}
                            className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition-all ${form.stream === s ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Percentage / CGPA</label>
                    <input type="number" min={0} max={100} value={form.percentage}
                      onChange={e => updateField("percentage", Number(e.target.value))}
                      className="w-full p-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter percentage (e.g., 85)" />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">📍 Location & Interests</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">State</label>
                      <select value={form.state} onChange={e => updateField("state", e.target.value)}
                        className="w-full p-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none">
                        <option value="">Select State</option>
                        {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">City</label>
                      <input type="text" value={form.city} onChange={e => updateField("city", e.target.value)}
                        className="w-full p-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none"
                        placeholder="Your City" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Interests (select multiple)</label>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map(i => (
                        <button key={i} onClick={() => toggleArray("interests", i)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${form.interests.includes(i) ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>
                          {i}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">🧠 Skills & Strong Subjects</h2>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Strong Subjects</label>
                    <div className="flex flex-wrap gap-2">
                      {STRONG_SUBJECTS.map(s => (
                        <button key={s} onClick={() => toggleArray("strongSubjects", s)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${form.strongSubjects.includes(s) ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 pt-2">
                    <label className="block text-sm font-medium text-foreground">Rate Your Skills (1-10)</label>
                    {renderSkillSlider("Logical Thinking", "logicalThinking")}
                    {renderSkillSlider("Creativity", "creativity")}
                    {renderSkillSlider("Communication", "communication")}
                    {renderSkillSlider("Leadership", "leadership")}
                    {renderSkillSlider("Problem Solving", "problemSolving")}
                    {renderSkillSlider("Technical Interest", "technicalInterest")}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">🎯 Goals & Budget</h2>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Career Goal</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {GOALS.map(g => (
                        <button key={g} onClick={() => updateField("goal", g)}
                          className={`p-3 rounded-xl border-2 text-sm text-center font-medium transition-all ${form.goal === g ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget (Annual)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {BUDGETS.map(b => (
                        <button key={b} onClick={() => updateField("budget", b)}
                          className={`p-3 rounded-xl border-2 text-sm text-center font-medium transition-all ${form.budget === b ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred College State</label>
                    <select value={form.preferredCollegeState} onChange={e => updateField("preferredCollegeState", e.target.value)}
                      className="w-full p-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none">
                      <option value="">Any State</option>
                      {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button onClick={() => setStep(s => s - 1)} disabled={step === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={() => onSubmit(form)} disabled={!canProceed()}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold gradient-hero text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all shadow-lg">
                <Sparkles className="w-4 h-4" /> Analyze & Suggest Best Courses
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
