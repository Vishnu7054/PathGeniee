import { useState } from "react";
import { motion } from "framer-motion";
import { CourseDetail, CourseRecommendation } from "@/types/career";
import {
  ArrowLeft, BookOpen, Map, GraduationCap, Building2, TrendingUp, Briefcase,
  Rocket, ChevronDown, ChevronUp, Search, Filter, MapPin, IndianRupee,
  ExternalLink, Globe, Shield, Clock, Star, CheckCircle2
} from "lucide-react";

interface Props {
  course: CourseRecommendation;
  detail: CourseDetail;
  onBack: () => void;
}

const TABS = [
  { id: "overview", label: "Overview", icon: <BookOpen className="w-4 h-4" /> },
  { id: "roadmap", label: "Roadmap", icon: <Map className="w-4 h-4" /> },
  { id: "subjects", label: "Subjects", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "colleges", label: "Colleges", icon: <Building2 className="w-4 h-4" /> },
  { id: "scope", label: "Future Scope", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "jobs", label: "Jobs & Salary", icon: <Briefcase className="w-4 h-4" /> },
  { id: "action", label: "Action Plan", icon: <Rocket className="w-4 h-4" /> },
];

export default function CourseDetailPage({ course, detail, onBack }: Props) {
  const [activeTab, setActiveTab] = useState("overview");
  const [collegeSearch, setCollegeSearch] = useState("");
  const [collegeFilter, setCollegeFilter] = useState<string>("all");
  const [expandedYear, setExpandedYear] = useState<number | null>(1);

  const filteredColleges = detail.colleges.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(collegeSearch.toLowerCase()) || c.city.toLowerCase().includes(collegeSearch.toLowerCase());
    const matchesFilter = collegeFilter === "all" || c.category === collegeFilter;
    return matchesSearch && matchesFilter;
  });

  const section = (content: React.ReactNode) => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {content}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Results
          </button>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center text-3xl">{course.icon}</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{course.name}</h1>
              <div className="flex items-center gap-4 mt-1 text-sm text-primary-foreground/70">
                <span>{course.duration}</span>
                <span>{course.difficultyLevel}</span>
                <span className="font-bold text-primary-foreground">{course.suitabilityScore}% Match</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeTab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "overview" && section(
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">Course Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.overview.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">Eligibility</h3>
                <p className="text-sm text-muted-foreground">{detail.overview.eligibility}</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">{detail.overview.duration}</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">Skills You'll Gain</h3>
              <div className="flex flex-wrap gap-2">
                {detail.overview.skillsGained.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">Entrance Exams</h3>
              <div className="flex flex-wrap gap-2">
                {detail.overview.entranceExams.map(e => (
                  <span key={e} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">{e}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "roadmap" && section(
          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-foreground">Career Roadmap Timeline</h2>
            {detail.roadmap.map(yr => (
              <div key={yr.year} className="glass-card rounded-2xl overflow-hidden">
                <button onClick={() => setExpandedYear(expandedYear === yr.year ? null : yr.year)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground">Y{yr.year}</div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">{yr.title}</h3>
                      <p className="text-xs text-muted-foreground">{yr.subjects.length} subjects • {yr.skills.length} skills</p>
                    </div>
                  </div>
                  {expandedYear === yr.year ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </button>
                {expandedYear === yr.year && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="px-5 pb-5 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">📚 Subjects</h4>
                      <div className="flex flex-wrap gap-2">{yr.subjects.map(s => <span key={s} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs">{s}</span>)}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">🎯 Skills to Build</h4>
                      <div className="flex flex-wrap gap-2">{yr.skills.map(s => <span key={s} className="px-2.5 py-1 bg-primary/10 text-primary rounded-lg text-xs">{s}</span>)}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">🛠 Tools & Software</h4>
                      <div className="flex flex-wrap gap-2">{yr.tools.map(t => <span key={t} className="px-2.5 py-1 bg-accent/10 text-accent rounded-lg text-xs">{t}</span>)}</div>
                    </div>
                    {yr.languages && yr.languages.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">💻 Languages</h4>
                        <div className="flex flex-wrap gap-2">{yr.languages.map(l => <span key={l} className="px-2.5 py-1 bg-success/10 text-success rounded-lg text-xs">{l}</span>)}</div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2">🚀 Recommended Projects</h4>
                      {yr.projects.map(p => (
                        <div key={p.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${p.level === "Beginner" ? "bg-success/10 text-success" : p.level === "Intermediate" ? "bg-warning/10 text-warning" : "bg-primary/10 text-primary"}`}>{p.level}</span>
                          {p.name}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "subjects" && section(
          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-foreground">Semester-wise Subject Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {detail.semesters.map(sem => (
                <div key={sem.semester} className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center text-xs font-bold text-primary-foreground">S{sem.semester}</div>
                    <h3 className="font-heading font-bold text-foreground">Semester {sem.semester}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {sem.subjects.map(s => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "colleges" && section(
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-bold text-foreground">Colleges Offering This Course</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={collegeSearch} onChange={e => setCollegeSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none"
                  placeholder="Search colleges..." />
              </div>
              <div className="flex gap-2 flex-wrap">
                {[["all", "All"], ["top-government", "🏛 Govt"], ["top-private", "🏢 Private"], ["budget-friendly", "💰 Budget"]].map(([val, label]) => (
                  <button key={val} onClick={() => setCollegeFilter(val)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${collegeFilter === val ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {filteredColleges.map(c => (
                <div key={c.name} className="glass-card-hover rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold text-foreground">{c.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${c.type === "Government" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"}`}>{c.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-3.5 h-3.5" /> {c.city}, {c.state}
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div><span className="text-muted-foreground">Total Fees:</span> <span className="font-bold text-foreground">{c.totalFees}</span></div>
                        <div><span className="text-muted-foreground">Hostel:</span> <span className="font-bold text-foreground">{c.hostelFee}</span></div>
                        <div><span className="text-muted-foreground">Entrance:</span> <span className="font-bold text-foreground">{c.entranceExam}</span></div>
                        <div><span className="text-muted-foreground">Admission:</span> <span className="font-bold text-foreground">{c.admissionProcess}</span></div>
                      </div>
                      <div className="mt-3">
                        <span className="text-xs text-muted-foreground">Year-wise Fees: </span>
                        <span className="text-xs font-medium text-foreground">{c.yearWiseFees.join(" → ")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-xs hover:bg-primary/10 transition-colors">
                        <ExternalLink className="w-3 h-3" /> Website
                      </button>
                      <button className="flex items-center gap-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-xs hover:bg-primary/10 transition-colors">
                        <MapPin className="w-3 h-3" /> Map
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "scope" && section(
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-bold text-foreground">Future Scope (2026–2035)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-foreground">Demand in India</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.futureScope.demandIndia}</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-accent" />
                  <h3 className="font-heading font-bold text-foreground">Global Scope</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.futureScope.globalScope}</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">Industries Hiring</h3>
              <div className="flex flex-wrap gap-2">
                {detail.futureScope.industriesHiring.map(i => (
                  <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">{i}</span>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <h3 className="font-heading font-bold text-foreground">Growth Prediction</h3>
                </div>
                <p className="text-sm text-muted-foreground">{detail.futureScope.growthPrediction}</p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-warning" />
                  <h3 className="font-heading font-bold text-foreground">AI Automation Risk</h3>
                </div>
                <span className={`text-sm font-bold ${detail.futureScope.aiAutomationRisk === "Low" ? "text-success" : detail.futureScope.aiAutomationRisk === "Medium" ? "text-warning" : "text-destructive"}`}>
                  {detail.futureScope.aiAutomationRisk}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jobs" && section(
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-bold text-foreground">Jobs, Companies & Salary</h2>

            {/* Salary Table */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <h3 className="font-heading font-bold text-foreground p-5 pb-0">💰 Salary by Experience</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left text-xs font-medium text-muted-foreground">Role</th>
                      <th className="p-4 text-left text-xs font-medium text-muted-foreground">Fresher</th>
                      <th className="p-4 text-left text-xs font-medium text-muted-foreground">2 Yrs</th>
                      <th className="p-4 text-left text-xs font-medium text-muted-foreground">5 Yrs</th>
                      <th className="p-4 text-left text-xs font-medium text-muted-foreground">10 Yrs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.jobRoles.map(j => (
                      <tr key={j.title} className="border-b border-border/50 hover:bg-secondary/50">
                        <td className="p-4 font-medium text-foreground">{j.title}</td>
                        <td className="p-4 text-muted-foreground">{j.fresherSalary}</td>
                        <td className="p-4 text-muted-foreground">{j.twoYearSalary}</td>
                        <td className="p-4 text-muted-foreground">{j.fiveYearSalary}</td>
                        <td className="p-4 font-bold text-success">{j.tenYearSalary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Companies */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">🇮🇳 Top Indian Companies</h3>
                <div className="space-y-2">
                  {detail.companies.filter(c => c.type === "Indian").map(c => (
                    <div key={c.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50">
                      <span className="font-medium text-sm text-foreground">{c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.roles.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">🌍 Top Global Companies</h3>
                <div className="space-y-2">
                  {detail.companies.filter(c => c.type === "Global").map(c => (
                    <div key={c.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50">
                      <span className="font-medium text-sm text-foreground">{c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.roles.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highest Paying */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-3">⭐ Highest Paying Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {detail.highestPayingRoles.map(r => (
                    <span key={r} className="px-3 py-1.5 bg-warning/10 text-warning rounded-full text-xs font-medium">{r}</span>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-3">🌏 Highest Paying Countries</h3>
                <div className="flex flex-wrap gap-2">
                  {detail.highestPayingCountries.map(c => (
                    <span key={c} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "action" && section(
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-bold text-foreground">Your Action Plan</h2>
            {[
              { title: "📅 Next 7 Days", items: detail.actionPlan.sevenDays, color: "bg-success" },
              { title: "📆 Next 3 Months", items: detail.actionPlan.threeMonths, color: "bg-primary" },
              { title: "🗓 Next 1 Year", items: detail.actionPlan.oneYear, color: "bg-accent" },
            ].map((plan, idx) => (
              <div key={plan.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">{plan.title}</h3>
                <div className="space-y-3">
                  {plan.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
