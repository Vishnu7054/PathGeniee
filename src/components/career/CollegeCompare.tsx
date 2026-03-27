import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Scale, Trophy, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface CollegeData {
  id: string;
  name: string;
  location: string;
  courseOffered: string;
  fees: string;
  admissionProcess: string;
  entranceExam: string;
  placementPercentage: string;
  avgPackage: string;
  highestPackage: string;
  topRecruiters: string[];
  rating: number;
}

const allColleges: CollegeData[] = [
  { id: "iit-bombay", name: "IIT Bombay", location: "Mumbai, Maharashtra", courseOffered: "B.Tech CSE (AI & ML)", fees: "₹8,00,000", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", placementPercentage: "95%", avgPackage: "₹28 LPA", highestPackage: "₹2.1 Cr", topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Amazon", "Apple"], rating: 97 },
  { id: "iit-delhi", name: "IIT Delhi", location: "New Delhi, Delhi", courseOffered: "B.Tech CSE (AI & ML)", fees: "₹8,40,000", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", placementPercentage: "94%", avgPackage: "₹26 LPA", highestPackage: "₹1.8 Cr", topRecruiters: ["Google", "Meta", "Adobe", "Samsung", "Uber"], rating: 96 },
  { id: "iit-madras", name: "IIT Madras", location: "Chennai, Tamil Nadu", courseOffered: "B.Tech CSE (AI & ML)", fees: "₹8,00,000", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", placementPercentage: "93%", avgPackage: "₹25 LPA", highestPackage: "₹1.5 Cr", topRecruiters: ["Microsoft", "Amazon", "Flipkart", "Intel", "TCS"], rating: 95 },
  { id: "bits-pilani", name: "BITS Pilani", location: "Pilani, Rajasthan", courseOffered: "B.Tech CSE", fees: "₹20,00,000", admissionProcess: "BITSAT Score", entranceExam: "BITSAT", placementPercentage: "90%", avgPackage: "₹22 LPA", highestPackage: "₹1.2 Cr", topRecruiters: ["Google", "Microsoft", "DE Shaw", "Atlassian", "Oracle"], rating: 92 },
  { id: "nit-trichy", name: "NIT Trichy", location: "Tiruchirappalli, Tamil Nadu", courseOffered: "B.Tech CSE", fees: "₹6,00,000", admissionProcess: "JEE Main Rank", entranceExam: "JEE Main", placementPercentage: "88%", avgPackage: "₹16 LPA", highestPackage: "₹80 LPA", topRecruiters: ["Amazon", "Walmart", "Cisco", "Infosys", "Wipro"], rating: 88 },
  { id: "vit-vellore", name: "VIT Vellore", location: "Vellore, Tamil Nadu", courseOffered: "B.Tech CSE (AI)", fees: "₹12,00,000", admissionProcess: "VITEEE Rank", entranceExam: "VITEEE", placementPercentage: "85%", avgPackage: "₹12 LPA", highestPackage: "₹60 LPA", topRecruiters: ["TCS", "Cognizant", "Infosys", "Zoho", "HCL"], rating: 82 },
  { id: "srm-chennai", name: "SRM Institute", location: "Chennai, Tamil Nadu", courseOffered: "B.Tech CSE", fees: "₹14,00,000", admissionProcess: "SRMJEE Rank", entranceExam: "SRMJEE", placementPercentage: "82%", avgPackage: "₹10 LPA", highestPackage: "₹50 LPA", topRecruiters: ["Accenture", "Infosys", "TCS", "Wipro", "CTS"], rating: 78 },
  { id: "chandigarh-uni", name: "Chandigarh University", location: "Mohali, Punjab", courseOffered: "B.Tech CSE (AI)", fees: "₹8,40,000", admissionProcess: "CUCET / Direct", entranceExam: "CUCET", placementPercentage: "80%", avgPackage: "₹8 LPA", highestPackage: "₹42 LPA", topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"], rating: 75 },
  { id: "lpu", name: "Lovely Professional University", location: "Phagwara, Punjab", courseOffered: "B.Tech CSE", fees: "₹7,60,000", admissionProcess: "LPUNEST / Direct", entranceExam: "LPUNEST", placementPercentage: "78%", avgPackage: "₹7 LPA", highestPackage: "₹40 LPA", topRecruiters: ["Byju's", "Amazon", "Flipkart", "Infosys", "HCL"], rating: 72 },
  { id: "amity-noida", name: "Amity University", location: "Noida, Uttar Pradesh", courseOffered: "B.Tech CSE", fees: "₹13,60,000", admissionProcess: "Amity JEE / Direct", entranceExam: "Amity JEE", placementPercentage: "75%", avgPackage: "₹7.5 LPA", highestPackage: "₹35 LPA", topRecruiters: ["Capgemini", "TCS", "Wipro", "Deloitte", "EY"], rating: 70 },
  { id: "aiims-delhi", name: "AIIMS Delhi", location: "New Delhi, Delhi", courseOffered: "MBBS", fees: "₹1,50,000", admissionProcess: "NEET UG Rank", entranceExam: "NEET UG", placementPercentage: "100%", avgPackage: "₹12 LPA", highestPackage: "₹50 LPA", topRecruiters: ["Apollo Hospitals", "Fortis", "Max Healthcare", "AIIMS", "Govt Hospitals"], rating: 99 },
  { id: "nlsiu-bangalore", name: "NLSIU Bangalore", location: "Bangalore, Karnataka", courseOffered: "BA LLB", fees: "₹5,00,000", admissionProcess: "CLAT Rank", entranceExam: "CLAT", placementPercentage: "92%", avgPackage: "₹18 LPA", highestPackage: "₹45 LPA", topRecruiters: ["AZB & Partners", "Cyril Amarchand", "Trilegal", "Khaitan & Co", "S&R Associates"], rating: 94 },
  { id: "iim-ahmedabad", name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", courseOffered: "BBA / IPM", fees: "₹25,00,000", admissionProcess: "IPMAT Score", entranceExam: "IPMAT", placementPercentage: "100%", avgPackage: "₹32 LPA", highestPackage: "₹1.5 Cr", topRecruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs", "JPMorgan"], rating: 98 },
  { id: "isi-kolkata", name: "ISI Kolkata", location: "Kolkata, West Bengal", courseOffered: "B.Stat / B.Math / Data Science", fees: "₹2,00,000", admissionProcess: "ISI Admission Test", entranceExam: "ISI Entrance", placementPercentage: "90%", avgPackage: "₹20 LPA", highestPackage: "₹70 LPA", topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "DE Shaw", "Tower Research"], rating: 93 },
];

const compareFields: { key: keyof CollegeData; label: string }[] = [
  { key: "location", label: "Location" },
  { key: "courseOffered", label: "Course Offered" },
  { key: "fees", label: "Total Fees" },
  { key: "admissionProcess", label: "Admission Process" },
  { key: "entranceExam", label: "Entrance Exam" },
  { key: "placementPercentage", label: "Placement %" },
  { key: "avgPackage", label: "Avg Package" },
  { key: "highestPackage", label: "Highest Package" },
];

function parseLPA(s: string): number {
  const m = s.match(/([\d.]+)\s*(LPA|Cr)/i);
  if (!m) return 0;
  const val = parseFloat(m[1]);
  return m[2].toLowerCase() === "cr" ? val * 100 : val;
}

function parseFee(s: string): number {
  return parseInt(s.replace(/[₹,]/g, "")) || 0;
}

function getBestChoice(a: CollegeData, b: CollegeData): { winner: CollegeData; reason: string } {
  const scoreA = a.rating * 0.4 + parseInt(a.placementPercentage) * 0.35 + (1 - parseFee(a.fees) / 3000000) * 25;
  const scoreB = b.rating * 0.4 + parseInt(b.placementPercentage) * 0.35 + (1 - parseFee(b.fees) / 3000000) * 25;
  if (scoreA >= scoreB) {
    return { winner: a, reason: `${a.name} scores higher on placement rate, rating, and value for fees.` };
  }
  return { winner: b, reason: `${b.name} scores higher on placement rate, rating, and value for fees.` };
}

interface Props {
  onBack: () => void;
}

export default function CollegeCompare({ onBack }: Props) {
  const [collegeA, setCollegeA] = useState<string>("");
  const [collegeB, setCollegeB] = useState<string>("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return allColleges;
    return allColleges.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const dataA = allColleges.find(c => c.id === collegeA);
  const dataB = allColleges.find(c => c.id === collegeB);
  const best = dataA && dataB ? getBestChoice(dataA, dataB) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8" />
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold">Compare Colleges</h1>
              <p className="text-primary-foreground/80 text-sm">Select two colleges to compare side by side</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search colleges..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">College A</label>
            <Select value={collegeA} onValueChange={setCollegeA}>
              <SelectTrigger><SelectValue placeholder="Select College A" /></SelectTrigger>
              <SelectContent>
                {filtered.map(c => (
                  <SelectItem key={c.id} value={c.id} disabled={c.id === collegeB}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">College B</label>
            <Select value={collegeB} onValueChange={setCollegeB}>
              <SelectTrigger><SelectValue placeholder="Select College B" /></SelectTrigger>
              <SelectContent>
                {filtered.map(c => (
                  <SelectItem key={c.id} value={c.id} disabled={c.id === collegeA}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Comparison Table */}
        {dataA && dataB ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-4 text-left font-semibold text-muted-foreground w-1/4">Criteria</th>
                    <th className="p-4 text-left font-semibold text-primary w-[37.5%]">{dataA.name}</th>
                    <th className="p-4 text-left font-semibold text-accent w-[37.5%]">{dataB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {compareFields.map((f, i) => (
                    <tr key={f.key} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-muted-foreground">{f.label}</td>
                      <td className="p-4 text-foreground">{String(dataA[f.key])}</td>
                      <td className="p-4 text-foreground">{String(dataB[f.key])}</td>
                    </tr>
                  ))}
                  <tr className="bg-background">
                    <td className="p-4 font-medium text-muted-foreground">Top Recruiters</td>
                    <td className="p-4"><div className="flex flex-wrap gap-1">{dataA.topRecruiters.map(r => <span key={r} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">{r}</span>)}</div></td>
                    <td className="p-4"><div className="flex flex-wrap gap-1">{dataB.topRecruiters.map(r => <span key={r} className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs">{r}</span>)}</div></td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium text-muted-foreground">AI Rating</td>
                    <td className="p-4"><span className="font-bold text-lg text-primary">{dataA.rating}/100</span></td>
                    <td className="p-4"><span className="font-bold text-lg text-accent">{dataB.rating}/100</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Best Choice */}
            {best && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6 border-2 border-success/30 bg-success/5">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="h-6 w-6 text-success" />
                  <h3 className="font-heading font-bold text-lg text-foreground">🏆 Best Choice: {best.winner.name}</h3>
                </div>
                <p className="text-muted-foreground">{best.reason}</p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Scale className="h-16 w-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Select two colleges above to see the comparison</p>
          </div>
        )}
      </div>
    </div>
  );
}
