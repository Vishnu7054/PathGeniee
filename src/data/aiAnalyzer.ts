import { StudentFormData, CourseRecommendation, CourseDetail } from "@/types/career";
import { AptitudeResult } from "@/types/aptitude";

const courseDatabase: Record<string, { base: Partial<CourseRecommendation>; detail: CourseDetail }> = {
  "btech-cse-ai": {
    base: {
      name: "B.Tech CSE (AI & ML)",
      duration: "4 Years",
      difficultyLevel: "Hard",
      requiredStream: "Science (PCM)",
      futureDemand: "Very High",
      icon: "🤖",
    },
    detail: {
      overview: {
        description: "Bachelor of Technology in Computer Science with specialization in Artificial Intelligence and Machine Learning. This program combines core CS fundamentals with advanced AI/ML concepts, preparing students for cutting-edge technology roles.",
        eligibility: "10+2 with Physics, Chemistry, Mathematics. Minimum 60% aggregate (varies by college).",
        duration: "4 Years (8 Semesters)",
        skillsGained: ["Python Programming", "Machine Learning", "Deep Learning", "Data Structures", "Neural Networks", "NLP", "Computer Vision", "Cloud Computing", "Statistics"],
        entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEE", "State CETs"],
      },
      roadmap: [
        { year: 1, title: "Foundation Year", subjects: ["Mathematics I & II", "Physics", "Chemistry", "Programming in C/Python", "Engineering Drawing"], skills: ["Basic Programming", "Analytical Thinking", "Problem Solving"], tools: ["VS Code", "Python IDLE", "GCC Compiler"], languages: ["C", "Python"], projects: [{ level: "Beginner", name: "Calculator App" }, { level: "Beginner", name: "Student Management System" }] },
        { year: 2, title: "Core Development", subjects: ["Data Structures", "Algorithms", "DBMS", "OOP with Java", "Discrete Mathematics", "Computer Networks"], skills: ["DSA", "Database Design", "OOP Concepts", "Web Basics"], tools: ["MySQL", "Git/GitHub", "IntelliJ IDEA"], languages: ["Java", "SQL", "JavaScript"], projects: [{ level: "Intermediate", name: "E-Commerce Website" }, { level: "Intermediate", name: "Chat Application" }] },
        { year: 3, title: "AI/ML Specialization", subjects: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Big Data Analytics", "Cloud Computing"], skills: ["ML Model Building", "Neural Networks", "Data Pipeline", "Cloud Deployment"], tools: ["TensorFlow", "PyTorch", "AWS/GCP", "Jupyter Notebook", "Docker"], languages: ["Python", "R"], projects: [{ level: "Advanced", name: "Sentiment Analysis Engine" }, { level: "Advanced", name: "Object Detection System" }] },
        { year: 4, title: "Specialization & Placement", subjects: ["Reinforcement Learning", "GANs", "MLOps", "Ethics in AI", "Capstone Project"], skills: ["Research", "System Design", "MLOps", "Technical Writing"], tools: ["Kubernetes", "MLflow", "Weights & Biases"], projects: [{ level: "Advanced", name: "AI-Powered Healthcare Diagnosis" }, { level: "Advanced", name: "Autonomous Drone Navigation" }] },
      ],
      semesters: [
        { semester: 1, subjects: ["Mathematics I", "Physics", "Programming in C", "Engineering Drawing", "Communication Skills"] },
        { semester: 2, subjects: ["Mathematics II", "Chemistry", "Programming in Python", "Environmental Science", "Basic Electronics"] },
        { semester: 3, subjects: ["Data Structures", "Discrete Mathematics", "Digital Logic", "OOP with Java", "Probability & Statistics"] },
        { semester: 4, subjects: ["Algorithms", "DBMS", "Computer Organization", "Operating Systems", "Linear Algebra"] },
        { semester: 5, subjects: ["Machine Learning", "Computer Networks", "Software Engineering", "Theory of Computation", "Elective I"] },
        { semester: 6, subjects: ["Deep Learning", "NLP", "Big Data Analytics", "Cloud Computing", "Elective II"] },
        { semester: 7, subjects: ["Computer Vision", "Reinforcement Learning", "Information Security", "Elective III", "Mini Project"] },
        { semester: 8, subjects: ["Capstone Project", "Ethics in AI", "Elective IV", "Industry Internship"] },
      ],
      colleges: [
        { name: "IIT Bombay", city: "Mumbai", state: "Maharashtra", type: "Government", totalFees: "₹8,00,000", yearWiseFees: ["₹2,00,000", "₹2,00,000", "₹2,00,000", "₹2,00,000"], hostelFee: "₹25,000/year", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", courseTimeline: "July–May", category: "top-government" },
        { name: "IIT Delhi", city: "New Delhi", state: "Delhi", type: "Government", totalFees: "₹8,40,000", yearWiseFees: ["₹2,10,000", "₹2,10,000", "₹2,10,000", "₹2,10,000"], hostelFee: "₹22,000/year", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", courseTimeline: "July–May", category: "top-government" },
        { name: "IIT Madras", city: "Chennai", state: "Tamil Nadu", type: "Government", totalFees: "₹8,00,000", yearWiseFees: ["₹2,00,000", "₹2,00,000", "₹2,00,000", "₹2,00,000"], hostelFee: "₹20,000/year", admissionProcess: "JEE Advanced Rank", entranceExam: "JEE Advanced", courseTimeline: "July–May", category: "top-government" },
        { name: "NIT Trichy", city: "Tiruchirappalli", state: "Tamil Nadu", type: "Government", totalFees: "₹6,00,000", yearWiseFees: ["₹1,50,000", "₹1,50,000", "₹1,50,000", "₹1,50,000"], hostelFee: "₹18,000/year", admissionProcess: "JEE Main Rank", entranceExam: "JEE Main", courseTimeline: "July–May", category: "top-government" },
        { name: "BITS Pilani", city: "Pilani", state: "Rajasthan", type: "Private", totalFees: "₹20,00,000", yearWiseFees: ["₹5,00,000", "₹5,00,000", "₹5,00,000", "₹5,00,000"], hostelFee: "₹1,20,000/year", admissionProcess: "BITSAT Score", entranceExam: "BITSAT", courseTimeline: "August–May", category: "top-private" },
        { name: "VIT Vellore", city: "Vellore", state: "Tamil Nadu", type: "Private", totalFees: "₹12,00,000", yearWiseFees: ["₹3,00,000", "₹3,00,000", "₹3,00,000", "₹3,00,000"], hostelFee: "₹1,00,000/year", admissionProcess: "VITEEE Rank", entranceExam: "VITEEE", courseTimeline: "July–May", category: "top-private" },
        { name: "SRM Institute", city: "Chennai", state: "Tamil Nadu", type: "Private", totalFees: "₹14,00,000", yearWiseFees: ["₹3,50,000", "₹3,50,000", "₹3,50,000", "₹3,50,000"], hostelFee: "₹1,10,000/year", admissionProcess: "SRMJEE Rank", entranceExam: "SRMJEE", courseTimeline: "July–May", category: "top-private" },
        { name: "Chandigarh University", city: "Mohali", state: "Punjab", type: "Private", totalFees: "₹8,40,000", yearWiseFees: ["₹2,10,000", "₹2,10,000", "₹2,10,000", "₹2,10,000"], hostelFee: "₹85,000/year", admissionProcess: "CUCET / Direct", entranceExam: "CUCET", courseTimeline: "August–June", category: "budget-friendly" },
        { name: "Lovely Professional University", city: "Phagwara", state: "Punjab", type: "Private", totalFees: "₹7,60,000", yearWiseFees: ["₹1,90,000", "₹1,90,000", "₹1,90,000", "₹1,90,000"], hostelFee: "₹80,000/year", admissionProcess: "LPUNEST / Direct", entranceExam: "LPUNEST", courseTimeline: "August–June", category: "budget-friendly" },
        { name: "Amity University", city: "Noida", state: "Uttar Pradesh", type: "Private", totalFees: "₹13,60,000", yearWiseFees: ["₹3,40,000", "₹3,40,000", "₹3,40,000", "₹3,40,000"], hostelFee: "₹1,20,000/year", admissionProcess: "Amity JEE / Direct", entranceExam: "Amity JEE", courseTimeline: "July–May", category: "top-private" },
      ],
      futureScope: {
        demandIndia: "AI/ML engineers are among the most in-demand professionals in India. The market is expected to grow 35% annually through 2030, with Bengaluru, Hyderabad, and Pune as major hubs.",
        globalScope: "Global AI market projected to reach $1.8 trillion by 2030. Massive opportunities in the US, UK, Canada, Germany, Singapore, and UAE.",
        industriesHiring: ["IT & Software", "Healthcare", "Finance & Banking", "E-Commerce", "Automotive", "Defence", "Education", "Manufacturing", "Agriculture Tech"],
        growthPrediction: "AI roles are expected to grow 40% by 2030. India alone will need 1 million+ AI professionals by 2028.",
        aiAutomationRisk: "Low",
      },
      jobRoles: [
        { title: "AI/ML Engineer", fresherSalary: "₹6–12 LPA", twoYearSalary: "₹12–20 LPA", fiveYearSalary: "₹20–40 LPA", tenYearSalary: "₹40–80 LPA" },
        { title: "Data Scientist", fresherSalary: "₹5–10 LPA", twoYearSalary: "₹10–18 LPA", fiveYearSalary: "₹18–35 LPA", tenYearSalary: "₹35–70 LPA" },
        { title: "NLP Engineer", fresherSalary: "₹7–14 LPA", twoYearSalary: "₹14–22 LPA", fiveYearSalary: "₹22–40 LPA", tenYearSalary: "₹40–75 LPA" },
        { title: "Computer Vision Engineer", fresherSalary: "₹6–12 LPA", twoYearSalary: "₹12–20 LPA", fiveYearSalary: "₹20–38 LPA", tenYearSalary: "₹38–65 LPA" },
        { title: "MLOps Engineer", fresherSalary: "₹5–10 LPA", twoYearSalary: "₹10–18 LPA", fiveYearSalary: "₹18–32 LPA", tenYearSalary: "₹32–55 LPA" },
        { title: "Research Scientist", fresherSalary: "₹8–15 LPA", twoYearSalary: "₹15–25 LPA", fiveYearSalary: "₹25–50 LPA", tenYearSalary: "₹50–1 Cr+" },
        { title: "AI Product Manager", fresherSalary: "₹8–14 LPA", twoYearSalary: "₹14–24 LPA", fiveYearSalary: "₹24–45 LPA", tenYearSalary: "₹45–80 LPA" },
        { title: "Robotics Engineer", fresherSalary: "₹5–10 LPA", twoYearSalary: "₹10–16 LPA", fiveYearSalary: "₹16–30 LPA", tenYearSalary: "₹30–55 LPA" },
      ],
      companies: [
        { name: "Google India", type: "Global", roles: ["AI Engineer", "Research Scientist"] },
        { name: "Microsoft India", type: "Global", roles: ["ML Engineer", "Data Scientist"] },
        { name: "Amazon", type: "Global", roles: ["Applied Scientist", "ML Engineer"] },
        { name: "Meta", type: "Global", roles: ["AI Research", "ML Engineer"] },
        { name: "OpenAI", type: "Global", roles: ["Research Engineer", "AI Safety"] },
        { name: "NVIDIA", type: "Global", roles: ["Deep Learning Engineer", "AI Architect"] },
        { name: "Apple", type: "Global", roles: ["ML Engineer", "Siri AI Team"] },
        { name: "DeepMind", type: "Global", roles: ["Research Scientist", "AI Engineer"] },
        { name: "Tesla", type: "Global", roles: ["Autopilot AI", "Computer Vision"] },
        { name: "IBM India", type: "Global", roles: ["AI Consultant", "Watson Developer"] },
        { name: "TCS", type: "Indian", roles: ["AI Developer", "Data Scientist"] },
        { name: "Infosys", type: "Indian", roles: ["AI Engineer", "ML Specialist"] },
        { name: "Wipro", type: "Indian", roles: ["AI/ML Developer", "Data Analyst"] },
        { name: "Reliance Jio", type: "Indian", roles: ["AI Engineer", "Platform Engineer"] },
        { name: "Flipkart", type: "Indian", roles: ["Data Scientist", "ML Engineer"] },
        { name: "Paytm", type: "Indian", roles: ["AI Developer", "Risk Analyst"] },
        { name: "Zoho", type: "Indian", roles: ["AI Engineer", "Product Developer"] },
        { name: "PhonePe", type: "Indian", roles: ["ML Engineer", "Data Scientist"] },
        { name: "Ola", type: "Indian", roles: ["AI Research", "ML Engineer"] },
        { name: "BYJU'S", type: "Indian", roles: ["AI Content", "Recommendation Engine"] },
      ],
      highestPayingRoles: ["AI Research Scientist", "ML Engineering Manager", "AI Product Lead", "Deep Learning Architect"],
      highestPayingCountries: ["United States", "Switzerland", "United Kingdom", "Canada", "Australia", "Singapore", "Germany", "UAE"],
      actionPlan: {
        sevenDays: [
          "Research JEE Main/Advanced syllabus and exam pattern",
          "Register on coding platforms (LeetCode, HackerRank)",
          "Start learning Python basics from YouTube/Coursera",
          "List target colleges and their cutoff ranks",
          "Join online communities (r/JEENEETards, PrepInsta)",
        ],
        threeMonths: [
          "Complete Python fundamentals and basic DSA",
          "Start JEE preparation with NCERT books",
          "Build 2-3 small Python projects",
          "Learn basics of Machine Learning (Andrew Ng course)",
          "Practice 50+ coding problems",
          "Explore college websites and admission processes",
        ],
        oneYear: [
          "Score well in JEE Main / entrance exams",
          "Complete intermediate DSA and algorithm courses",
          "Build a portfolio with 5+ projects on GitHub",
          "Learn basics of TensorFlow/PyTorch",
          "Apply for scholarships and fee waivers",
          "Attend tech meetups and hackathons",
          "Start contributing to open source projects",
        ],
      },
    },
  },
  "bsc-data-science": {
    base: { name: "B.Sc Data Science", duration: "3 Years", difficultyLevel: "Moderate", requiredStream: "Science/Commerce (Math required)", futureDemand: "Very High", icon: "📊" },
    detail: {
      overview: { description: "Bachelor of Science in Data Science focuses on statistics, programming, and data analysis techniques. Students learn to extract insights from large datasets using modern tools.", eligibility: "10+2 with Mathematics. Minimum 55% aggregate.", duration: "3 Years (6 Semesters)", skillsGained: ["Python", "R Programming", "Statistics", "SQL", "Data Visualization", "Machine Learning Basics", "Excel Analytics"], entranceExams: ["CUET", "University-specific entrance tests", "Merit-based admission"] },
      roadmap: [
        { year: 1, title: "Foundation", subjects: ["Statistics I", "Mathematics", "Python Programming", "Introduction to Data Science"], skills: ["Statistical Thinking", "Python Basics", "Excel"], tools: ["Python", "Excel", "Google Sheets"], languages: ["Python"], projects: [{ level: "Beginner", name: "Data Cleaning Project" }] },
        { year: 2, title: "Core Skills", subjects: ["Machine Learning", "Database Systems", "Data Visualization", "Probability"], skills: ["ML Algorithms", "SQL", "Visualization"], tools: ["Tableau", "MySQL", "Jupyter"], languages: ["Python", "SQL", "R"], projects: [{ level: "Intermediate", name: "Sales Prediction Model" }] },
        { year: 3, title: "Specialization", subjects: ["Big Data", "Deep Learning Intro", "Capstone Project", "Business Analytics"], skills: ["Big Data Processing", "Model Deployment", "Presentation"], tools: ["Apache Spark", "Power BI", "AWS"], projects: [{ level: "Advanced", name: "Real-time Analytics Dashboard" }] },
      ],
      semesters: [
        { semester: 1, subjects: ["Statistics I", "Calculus", "Python Programming", "English Communication"] },
        { semester: 2, subjects: ["Linear Algebra", "Probability", "R Programming", "Environmental Studies"] },
        { semester: 3, subjects: ["DBMS", "Data Visualization", "Statistical Methods", "Discrete Math"] },
        { semester: 4, subjects: ["Machine Learning", "Data Mining", "Web Technologies", "Elective I"] },
        { semester: 5, subjects: ["Big Data Analytics", "Time Series Analysis", "Cloud Computing", "Elective II"] },
        { semester: 6, subjects: ["Capstone Project", "Business Analytics", "Ethics in Data Science", "Elective III"] },
      ],
      colleges: [
        { name: "IIT Madras (Online)", city: "Chennai", state: "Tamil Nadu", type: "Government", totalFees: "₹3,00,000", yearWiseFees: ["₹1,00,000", "₹1,00,000", "₹1,00,000"], hostelFee: "N/A (Online)", admissionProcess: "Qualifier exam", entranceExam: "IIT Madras Qualifier", courseTimeline: "Jan/July intake", category: "top-government" },
        { name: "Christ University", city: "Bengaluru", state: "Karnataka", type: "Private", totalFees: "₹4,50,000", yearWiseFees: ["₹1,50,000", "₹1,50,000", "₹1,50,000"], hostelFee: "₹1,00,000/year", admissionProcess: "Christ entrance + Interview", entranceExam: "Christ Entrance", courseTimeline: "June–April", category: "top-private" },
        { name: "Presidency University", city: "Bengaluru", state: "Karnataka", type: "Private", totalFees: "₹3,60,000", yearWiseFees: ["₹1,20,000", "₹1,20,000", "₹1,20,000"], hostelFee: "₹90,000/year", admissionProcess: "Merit-based", entranceExam: "None", courseTimeline: "August–May", category: "budget-friendly" },
        { name: "St. Xavier's College", city: "Mumbai", state: "Maharashtra", type: "Private", totalFees: "₹2,40,000", yearWiseFees: ["₹80,000", "₹80,000", "₹80,000"], hostelFee: "₹60,000/year", admissionProcess: "Merit + Interview", entranceExam: "Xavier's Entrance", courseTimeline: "June–April", category: "budget-friendly" },
        { name: "Symbiosis (SSDS)", city: "Pune", state: "Maharashtra", type: "Private", totalFees: "₹6,00,000", yearWiseFees: ["₹2,00,000", "₹2,00,000", "₹2,00,000"], hostelFee: "₹1,20,000/year", admissionProcess: "SET + PI", entranceExam: "Symbiosis SET", courseTimeline: "July–May", category: "top-private" },
      ],
      futureScope: { demandIndia: "Data Science roles growing 30% annually in India. Every industry needs data professionals.", globalScope: "Global data science market to reach $700B by 2030.", industriesHiring: ["IT", "Banking", "Healthcare", "Retail", "Telecom", "Consulting"], growthPrediction: "30% annual growth through 2030.", aiAutomationRisk: "Low" },
      jobRoles: [
        { title: "Data Analyst", fresherSalary: "₹4–7 LPA", twoYearSalary: "₹7–12 LPA", fiveYearSalary: "₹12–22 LPA", tenYearSalary: "₹22–40 LPA" },
        { title: "Data Scientist", fresherSalary: "₹5–10 LPA", twoYearSalary: "₹10–18 LPA", fiveYearSalary: "₹18–32 LPA", tenYearSalary: "₹32–55 LPA" },
        { title: "Business Analyst", fresherSalary: "₹4–8 LPA", twoYearSalary: "₹8–14 LPA", fiveYearSalary: "₹14–25 LPA", tenYearSalary: "₹25–45 LPA" },
        { title: "ML Engineer", fresherSalary: "₹6–12 LPA", twoYearSalary: "₹12–20 LPA", fiveYearSalary: "₹20–35 LPA", tenYearSalary: "₹35–60 LPA" },
        { title: "Data Engineer", fresherSalary: "₹5–9 LPA", twoYearSalary: "₹9–16 LPA", fiveYearSalary: "₹16–28 LPA", tenYearSalary: "₹28–50 LPA" },
        { title: "BI Developer", fresherSalary: "₹3–6 LPA", twoYearSalary: "₹6–10 LPA", fiveYearSalary: "₹10–20 LPA", tenYearSalary: "₹20–35 LPA" },
      ],
      companies: [
        { name: "Google", type: "Global", roles: ["Data Scientist"] }, { name: "Amazon", type: "Global", roles: ["Data Analyst"] },
        { name: "Microsoft", type: "Global", roles: ["Data Engineer"] }, { name: "Deloitte", type: "Global", roles: ["Analytics Consultant"] },
        { name: "McKinsey", type: "Global", roles: ["Data Analyst"] }, { name: "Goldman Sachs", type: "Global", roles: ["Quant Analyst"] },
        { name: "Accenture", type: "Global", roles: ["Data Scientist"] }, { name: "IBM", type: "Global", roles: ["Data Engineer"] },
        { name: "Netflix", type: "Global", roles: ["Analytics Engineer"] }, { name: "Uber", type: "Global", roles: ["Data Scientist"] },
        { name: "TCS", type: "Indian", roles: ["Data Analyst"] }, { name: "Infosys", type: "Indian", roles: ["Data Scientist"] },
        { name: "Wipro", type: "Indian", roles: ["BI Developer"] }, { name: "Mu Sigma", type: "Indian", roles: ["Decision Scientist"] },
        { name: "Fractal", type: "Indian", roles: ["Data Scientist"] }, { name: "Tiger Analytics", type: "Indian", roles: ["Senior Analyst"] },
        { name: "Flipkart", type: "Indian", roles: ["Data Analyst"] }, { name: "Swiggy", type: "Indian", roles: ["Analytics Lead"] },
        { name: "Razorpay", type: "Indian", roles: ["Data Engineer"] }, { name: "CRED", type: "Indian", roles: ["Data Scientist"] },
      ],
      highestPayingRoles: ["Chief Data Officer", "Lead Data Scientist", "ML Engineering Manager"],
      highestPayingCountries: ["United States", "Switzerland", "United Kingdom", "Canada", "Australia"],
      actionPlan: {
        sevenDays: ["Install Python and Jupyter Notebook", "Start learning pandas library", "Explore Kaggle datasets", "Join data science communities"],
        threeMonths: ["Complete Python for Data Science course", "Build 2 data analysis projects", "Learn SQL fundamentals", "Start learning statistics"],
        oneYear: ["Master ML fundamentals", "Build portfolio on GitHub", "Get an internship", "Compete in Kaggle competitions", "Apply to target colleges"],
      },
    },
  },
  "mbbs": {
    base: { name: "MBBS (Medicine)", duration: "5.5 Years", difficultyLevel: "Very Hard", requiredStream: "Science (PCB)", futureDemand: "Very High", icon: "🏥" },
    detail: {
      overview: { description: "Bachelor of Medicine and Bachelor of Surgery. The most prestigious medical degree preparing students for clinical practice, surgery, and specialized medicine.", eligibility: "10+2 with PCB. Minimum 50% (40% for reserved). Must qualify NEET UG.", duration: "5.5 Years (4.5 Years + 1 Year Internship)", skillsGained: ["Clinical Diagnosis", "Patient Care", "Anatomy", "Pharmacology", "Surgery Basics", "Medical Ethics", "Emergency Medicine"], entranceExams: ["NEET UG"] },
      roadmap: [
        { year: 1, title: "Pre-Clinical", subjects: ["Anatomy", "Physiology", "Biochemistry"], skills: ["Dissection", "Lab Techniques", "Medical Terminology"], tools: ["Microscope", "Dissection Kit"], projects: [{ level: "Beginner", name: "Anatomy Model Study" }] },
        { year: 2, title: "Para-Clinical", subjects: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"], skills: ["Drug Knowledge", "Disease Identification", "Lab Diagnosis"], tools: ["Lab Equipment", "Clinical Simulations"], projects: [{ level: "Intermediate", name: "Case Study Presentations" }] },
        { year: 3, title: "Clinical Rotations I", subjects: ["Medicine", "Surgery", "OBG", "Pediatrics"], skills: ["Patient Interaction", "Clinical Examination", "History Taking"], tools: ["Stethoscope", "Medical Instruments"], projects: [{ level: "Intermediate", name: "Clinical Case Reports" }] },
        { year: 4, title: "Clinical Rotations II + Internship", subjects: ["ENT", "Ophthalmology", "Dermatology", "Psychiatry", "Orthopaedics"], skills: ["Emergency Care", "Minor Procedures", "Diagnosis"], tools: ["Hospital Equipment"], projects: [{ level: "Advanced", name: "Research Paper" }] },
      ],
      semesters: [
        { semester: 1, subjects: ["Anatomy I", "Physiology I", "Biochemistry I"] },
        { semester: 2, subjects: ["Anatomy II", "Physiology II", "Biochemistry II"] },
        { semester: 3, subjects: ["Pathology", "Pharmacology I", "Microbiology I"] },
        { semester: 4, subjects: ["Pharmacology II", "Microbiology II", "Forensic Medicine"] },
        { semester: 5, subjects: ["Medicine I", "Surgery I", "OBG I"] },
        { semester: 6, subjects: ["Medicine II", "Surgery II", "Pediatrics"] },
        { semester: 7, subjects: ["ENT", "Ophthalmology", "Community Medicine"] },
        { semester: 8, subjects: ["Electives", "Dermatology", "Psychiatry"] },
      ],
      colleges: [
        { name: "AIIMS Delhi", city: "New Delhi", state: "Delhi", type: "Government", totalFees: "₹6,500", yearWiseFees: ["₹1,500", "₹1,000", "₹1,000", "₹1,000", "₹2,000"], hostelFee: "₹1,200/year", admissionProcess: "NEET UG All India Rank", entranceExam: "NEET UG", courseTimeline: "August–March", category: "top-government" },
        { name: "JIPMER Puducherry", city: "Puducherry", state: "Puducherry", type: "Government", totalFees: "₹12,500", yearWiseFees: ["₹2,500", "₹2,500", "₹2,500", "₹2,500", "₹2,500"], hostelFee: "₹3,000/year", admissionProcess: "NEET UG Rank", entranceExam: "NEET UG", courseTimeline: "August–March", category: "top-government" },
        { name: "Maulana Azad Medical College", city: "New Delhi", state: "Delhi", type: "Government", totalFees: "₹30,000", yearWiseFees: ["₹6,000", "₹6,000", "₹6,000", "₹6,000", "₹6,000"], hostelFee: "₹5,000/year", admissionProcess: "NEET UG Delhi State Rank", entranceExam: "NEET UG", courseTimeline: "August–March", category: "top-government" },
        { name: "CMC Vellore", city: "Vellore", state: "Tamil Nadu", type: "Private", totalFees: "₹3,50,000", yearWiseFees: ["₹70,000", "₹70,000", "₹70,000", "₹70,000", "₹70,000"], hostelFee: "₹40,000/year", admissionProcess: "NEET UG + CMC Selection", entranceExam: "NEET UG", courseTimeline: "August–March", category: "top-private" },
        { name: "Manipal KMC", city: "Manipal", state: "Karnataka", type: "Private", totalFees: "₹62,00,000", yearWiseFees: ["₹12,40,000", "₹12,40,000", "₹12,40,000", "₹12,40,000", "₹12,40,000"], hostelFee: "₹1,50,000/year", admissionProcess: "NEET UG Score", entranceExam: "NEET UG", courseTimeline: "September–March", category: "top-private" },
      ],
      futureScope: { demandIndia: "India has severe doctor shortage (1:1400 ratio vs WHO recommended 1:1000). Massive demand for next 20+ years.", globalScope: "Doctors are in demand worldwide. USMLE, PLAB open doors to US, UK practice.", industriesHiring: ["Hospitals", "Pharma", "Research", "Government Health", "Telemedicine", "Medical Devices"], growthPrediction: "Healthcare sector growing 22% CAGR in India.", aiAutomationRisk: "Low" },
      jobRoles: [
        { title: "General Physician", fresherSalary: "₹6–10 LPA", twoYearSalary: "₹10–15 LPA", fiveYearSalary: "₹15–30 LPA", tenYearSalary: "₹30–60 LPA" },
        { title: "Surgeon (Post PG)", fresherSalary: "₹10–18 LPA", twoYearSalary: "₹18–30 LPA", fiveYearSalary: "₹30–60 LPA", tenYearSalary: "₹60–1.5 Cr" },
        { title: "Cardiologist", fresherSalary: "₹12–20 LPA", twoYearSalary: "₹20–35 LPA", fiveYearSalary: "₹35–70 LPA", tenYearSalary: "₹70–2 Cr" },
        { title: "Dermatologist", fresherSalary: "₹8–15 LPA", twoYearSalary: "₹15–25 LPA", fiveYearSalary: "₹25–50 LPA", tenYearSalary: "₹50–1 Cr" },
        { title: "Radiologist", fresherSalary: "₹10–18 LPA", twoYearSalary: "₹18–28 LPA", fiveYearSalary: "₹28–55 LPA", tenYearSalary: "₹55–1.2 Cr" },
        { title: "Government Doctor", fresherSalary: "₹8–12 LPA", twoYearSalary: "₹12–18 LPA", fiveYearSalary: "₹18–30 LPA", tenYearSalary: "₹30–50 LPA" },
      ],
      companies: [
        { name: "Apollo Hospitals", type: "Indian", roles: ["Doctor", "Surgeon"] }, { name: "Fortis Healthcare", type: "Indian", roles: ["Physician", "Specialist"] },
        { name: "Max Healthcare", type: "Indian", roles: ["Doctor", "Consultant"] }, { name: "AIIMS", type: "Indian", roles: ["Doctor", "Researcher"] },
        { name: "Medanta", type: "Indian", roles: ["Surgeon", "Specialist"] }, { name: "Narayana Health", type: "Indian", roles: ["Doctor"] },
        { name: "Manipal Hospitals", type: "Indian", roles: ["Doctor", "Surgeon"] }, { name: "Tata Memorial", type: "Indian", roles: ["Oncologist"] },
        { name: "PGIMER", type: "Indian", roles: ["Researcher", "Doctor"] }, { name: "Kokilaben Hospital", type: "Indian", roles: ["Specialist"] },
        { name: "Mayo Clinic", type: "Global", roles: ["Doctor", "Researcher"] }, { name: "Johns Hopkins", type: "Global", roles: ["Physician"] },
        { name: "Cleveland Clinic", type: "Global", roles: ["Surgeon"] }, { name: "NHS (UK)", type: "Global", roles: ["Doctor"] },
        { name: "WHO", type: "Global", roles: ["Public Health"] }, { name: "MSF", type: "Global", roles: ["Field Doctor"] },
        { name: "Mass General", type: "Global", roles: ["Doctor"] }, { name: "Charité Berlin", type: "Global", roles: ["Researcher"] },
        { name: "Mount Sinai", type: "Global", roles: ["Physician"] }, { name: "Stanford Health", type: "Global", roles: ["Surgeon"] },
      ],
      highestPayingRoles: ["Neurosurgeon", "Cardiologist", "Plastic Surgeon", "Orthopedic Surgeon"],
      highestPayingCountries: ["United States", "Australia", "United Kingdom", "Canada", "Germany", "UAE"],
      actionPlan: {
        sevenDays: ["Register for NEET UG coaching / self study", "Get NCERT Biology, Physics, Chemistry books", "Create study schedule", "Join NEET preparation communities"],
        threeMonths: ["Complete NCERT syllabus once", "Start solving previous year NEET papers", "Focus on Biology (highest weightage)", "Take mock tests weekly"],
        oneYear: ["Score 600+ in NEET UG", "Apply to government medical colleges", "Explore scholarship options", "Start anatomy basics from YouTube", "Visit target college campuses"],
      },
    },
  },
  "bba": {
    base: { name: "BBA (Business Administration)", duration: "3 Years", difficultyLevel: "Easy", requiredStream: "Any Stream", futureDemand: "High", icon: "💼" },
    detail: {
      overview: { description: "Bachelor of Business Administration prepares students for management roles in various industries. Covers marketing, finance, HR, and operations.", eligibility: "10+2 from any stream. Minimum 50% aggregate.", duration: "3 Years (6 Semesters)", skillsGained: ["Management", "Marketing", "Finance", "HR", "Communication", "Leadership", "Business Strategy"], entranceExams: ["IPMAT", "DU JAT", "NPAT", "SET", "CUET"] },
      roadmap: [
        { year: 1, title: "Business Fundamentals", subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication"], skills: ["Teamwork", "Presentation", "Basic Accounting"], tools: ["MS Office", "Google Workspace"], projects: [{ level: "Beginner", name: "Business Plan Draft" }] },
        { year: 2, title: "Functional Areas", subjects: ["Marketing Management", "Financial Management", "HRM", "Operations Management"], skills: ["Market Analysis", "Financial Analysis", "Team Leadership"], tools: ["Excel Advanced", "SPSS"], projects: [{ level: "Intermediate", name: "Marketing Campaign" }] },
        { year: 3, title: "Specialization", subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Capstone Project"], skills: ["Strategy", "Innovation", "Global Thinking"], tools: ["Tally", "SAP Basics"], projects: [{ level: "Advanced", name: "Startup Business Plan" }] },
      ],
      semesters: [
        { semester: 1, subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "English"] },
        { semester: 2, subjects: ["Organizational Behavior", "Business Statistics", "Cost Accounting", "IT for Business"] },
        { semester: 3, subjects: ["Marketing Management", "Financial Management", "Business Law", "Quantitative Methods"] },
        { semester: 4, subjects: ["HRM", "Operations Management", "Consumer Behavior", "Elective I"] },
        { semester: 5, subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Elective II"] },
        { semester: 6, subjects: ["Business Ethics", "Capstone Project", "Summer Internship Report", "Elective III"] },
      ],
      colleges: [
        { name: "Shaheed Sukhdev CBS", city: "New Delhi", state: "Delhi", type: "Government", totalFees: "₹75,000", yearWiseFees: ["₹25,000", "₹25,000", "₹25,000"], hostelFee: "₹30,000/year", admissionProcess: "DU JAT / CUET", entranceExam: "CUET", courseTimeline: "July–May", category: "top-government" },
        { name: "NMIMS Mumbai", city: "Mumbai", state: "Maharashtra", type: "Private", totalFees: "₹12,00,000", yearWiseFees: ["₹4,00,000", "₹4,00,000", "₹4,00,000"], hostelFee: "₹2,00,000/year", admissionProcess: "NPAT Score", entranceExam: "NPAT", courseTimeline: "June–April", category: "top-private" },
        { name: "Christ University", city: "Bengaluru", state: "Karnataka", type: "Private", totalFees: "₹6,00,000", yearWiseFees: ["₹2,00,000", "₹2,00,000", "₹2,00,000"], hostelFee: "₹1,00,000/year", admissionProcess: "Christ Entrance", entranceExam: "Christ Entrance", courseTimeline: "June–April", category: "top-private" },
        { name: "Symbiosis (SIBM)", city: "Pune", state: "Maharashtra", type: "Private", totalFees: "₹8,00,000", yearWiseFees: ["₹2,66,000", "₹2,66,000", "₹2,68,000"], hostelFee: "₹1,20,000/year", admissionProcess: "SET + PI", entranceExam: "SET", courseTimeline: "July–May", category: "top-private" },
        { name: "Chandigarh University", city: "Mohali", state: "Punjab", type: "Private", totalFees: "₹3,60,000", yearWiseFees: ["₹1,20,000", "₹1,20,000", "₹1,20,000"], hostelFee: "₹85,000/year", admissionProcess: "Merit / CUCET", entranceExam: "CUCET", courseTimeline: "August–June", category: "budget-friendly" },
      ],
      futureScope: { demandIndia: "Management graduates are needed in every industry. BBA + MBA is a powerful combination.", globalScope: "Business management is universally valued. MBA from top schools opens global doors.", industriesHiring: ["FMCG", "Banking", "Consulting", "IT", "Retail", "Startups", "Real Estate"], growthPrediction: "Steady 15% growth. MBA after BBA can significantly boost career.", aiAutomationRisk: "Medium" },
      jobRoles: [
        { title: "Management Trainee", fresherSalary: "₹3–5 LPA", twoYearSalary: "₹5–8 LPA", fiveYearSalary: "₹8–15 LPA", tenYearSalary: "₹15–30 LPA" },
        { title: "Marketing Executive", fresherSalary: "₹3–6 LPA", twoYearSalary: "₹6–10 LPA", fiveYearSalary: "₹10–20 LPA", tenYearSalary: "₹20–40 LPA" },
        { title: "HR Executive", fresherSalary: "₹3–5 LPA", twoYearSalary: "₹5–8 LPA", fiveYearSalary: "₹8–15 LPA", tenYearSalary: "₹15–28 LPA" },
        { title: "Business Analyst", fresherSalary: "₹4–7 LPA", twoYearSalary: "₹7–12 LPA", fiveYearSalary: "₹12–22 LPA", tenYearSalary: "₹22–40 LPA" },
        { title: "Operations Manager", fresherSalary: "₹3–6 LPA", twoYearSalary: "₹6–10 LPA", fiveYearSalary: "₹10–18 LPA", tenYearSalary: "₹18–35 LPA" },
      ],
      companies: [
        { name: "Hindustan Unilever", type: "Indian", roles: ["MT", "Marketing"] }, { name: "ITC", type: "Indian", roles: ["MT", "Sales"] },
        { name: "Reliance", type: "Indian", roles: ["Management", "Operations"] }, { name: "HDFC Bank", type: "Indian", roles: ["Banking", "Finance"] },
        { name: "Mahindra", type: "Indian", roles: ["MT", "Strategy"] }, { name: "Tata Group", type: "Indian", roles: ["MT", "Operations"] },
        { name: "Bajaj", type: "Indian", roles: ["Sales", "Marketing"] }, { name: "Godrej", type: "Indian", roles: ["Marketing", "HR"] },
        { name: "Aditya Birla", type: "Indian", roles: ["MT", "Finance"] }, { name: "L&T", type: "Indian", roles: ["Operations"] },
        { name: "Deloitte", type: "Global", roles: ["Consultant"] }, { name: "PwC", type: "Global", roles: ["Associate"] },
        { name: "EY", type: "Global", roles: ["Analyst"] }, { name: "KPMG", type: "Global", roles: ["Associate"] },
        { name: "Accenture", type: "Global", roles: ["Analyst"] }, { name: "McKinsey", type: "Global", roles: ["Associate"] },
        { name: "BCG", type: "Global", roles: ["Associate"] }, { name: "P&G", type: "Global", roles: ["Brand Manager"] },
        { name: "Unilever", type: "Global", roles: ["MT"] }, { name: "Amazon", type: "Global", roles: ["Operations"] },
      ],
      highestPayingRoles: ["Management Consultant", "Investment Banker", "Product Manager"],
      highestPayingCountries: ["United States", "United Kingdom", "Singapore", "UAE", "Canada"],
      actionPlan: {
        sevenDays: ["Research BBA entrance exams (IPMAT, NPAT, CUET)", "Start reading business news daily", "List target colleges", "Join preparation groups"],
        threeMonths: ["Prepare for entrance exams", "Read 2-3 business books", "Improve communication skills", "Start a small business project"],
        oneYear: ["Clear entrance exams", "Join a good BBA program", "Start building leadership experience", "Network with industry professionals", "Get an internship"],
      },
    },
  },
  "llb": {
    base: { name: "BA LLB / LLB (Law)", duration: "5 Years / 3 Years", difficultyLevel: "Hard", requiredStream: "Any Stream", futureDemand: "High", icon: "⚖️" },
    detail: {
      overview: { description: "Law degree preparing students for legal practice, judiciary, corporate law, and public policy. BA LLB is a 5-year integrated program after 12th.", eligibility: "10+2 from any stream. Minimum 45% aggregate.", duration: "5 Years (BA LLB) / 3 Years (LLB after graduation)", skillsGained: ["Legal Research", "Argumentation", "Drafting", "Constitutional Law", "Criminal Law", "Corporate Law", "Negotiation"], entranceExams: ["CLAT", "AILET", "LSAT India", "MH CET Law"] },
      roadmap: [
        { year: 1, title: "Legal Foundation", subjects: ["Constitutional Law", "Legal Methods", "Political Science", "English"], skills: ["Legal Reading", "Argument Building"], tools: ["SCC Online", "Manupatra"], projects: [{ level: "Beginner", name: "Moot Court Observation" }] },
        { year: 2, title: "Core Law", subjects: ["Criminal Law", "Contract Law", "Family Law", "Torts"], skills: ["Case Analysis", "Legal Drafting"], tools: ["Legal Databases"], projects: [{ level: "Intermediate", name: "Case Brief Writing" }] },
        { year: 3, title: "Specialized Law", subjects: ["Corporate Law", "Property Law", "Labour Law", "Jurisprudence"], skills: ["Corporate Drafting", "Negotiation"], tools: ["Westlaw"], projects: [{ level: "Intermediate", name: "Moot Court Participation" }] },
        { year: 4, title: "Advanced Practice", subjects: ["Intellectual Property", "International Law", "Tax Law", "ADR"], skills: ["Courtroom Skills", "Client Counseling"], tools: ["Court Filing Systems"], projects: [{ level: "Advanced", name: "Legal Aid Clinic" }] },
      ],
      semesters: [
        { semester: 1, subjects: ["Constitutional Law I", "Legal Methods", "Political Science I", "Economics I"] },
        { semester: 2, subjects: ["Constitutional Law II", "Law of Torts", "Political Science II", "Sociology"] },
        { semester: 3, subjects: ["Criminal Law I", "Contract Law I", "Family Law I", "History"] },
        { semester: 4, subjects: ["Criminal Law II", "Contract Law II", "Family Law II", "English"] },
        { semester: 5, subjects: ["Corporate Law", "Property Law", "Labour Law I", "Jurisprudence"] },
        { semester: 6, subjects: ["Tax Law", "Environmental Law", "Labour Law II", "ADR"] },
        { semester: 7, subjects: ["IP Law", "International Law", "CPC", "Elective I"] },
        { semester: 8, subjects: ["Human Rights", "Cyber Law", "Clinical Course", "Elective II"] },
      ],
      colleges: [
        { name: "NLSIU Bangalore", city: "Bengaluru", state: "Karnataka", type: "Government", totalFees: "₹10,00,000", yearWiseFees: ["₹2,00,000", "₹2,00,000", "₹2,00,000", "₹2,00,000", "₹2,00,000"], hostelFee: "₹50,000/year", admissionProcess: "CLAT Rank", entranceExam: "CLAT", courseTimeline: "August–May", category: "top-government" },
        { name: "NALSAR Hyderabad", city: "Hyderabad", state: "Telangana", type: "Government", totalFees: "₹9,00,000", yearWiseFees: ["₹1,80,000", "₹1,80,000", "₹1,80,000", "₹1,80,000", "₹1,80,000"], hostelFee: "₹45,000/year", admissionProcess: "CLAT Rank", entranceExam: "CLAT", courseTimeline: "August–May", category: "top-government" },
        { name: "NLU Delhi", city: "New Delhi", state: "Delhi", type: "Government", totalFees: "₹8,50,000", yearWiseFees: ["₹1,70,000", "₹1,70,000", "₹1,70,000", "₹1,70,000", "₹1,70,000"], hostelFee: "₹40,000/year", admissionProcess: "AILET Rank", entranceExam: "AILET", courseTimeline: "August–May", category: "top-government" },
        { name: "Symbiosis Law School", city: "Pune", state: "Maharashtra", type: "Private", totalFees: "₹15,00,000", yearWiseFees: ["₹3,00,000", "₹3,00,000", "₹3,00,000", "₹3,00,000", "₹3,00,000"], hostelFee: "₹1,20,000/year", admissionProcess: "SET + PI", entranceExam: "SET", courseTimeline: "July–May", category: "top-private" },
        { name: "Amity Law School", city: "Noida", state: "Uttar Pradesh", type: "Private", totalFees: "₹8,00,000", yearWiseFees: ["₹1,60,000", "₹1,60,000", "₹1,60,000", "₹1,60,000", "₹1,60,000"], hostelFee: "₹1,00,000/year", admissionProcess: "Merit / Amity Entrance", entranceExam: "Amity Entrance", courseTimeline: "July–May", category: "budget-friendly" },
      ],
      futureScope: { demandIndia: "Legal profession growing with corporate expansion, startups needing legal counsel, and increasing litigation.", globalScope: "International law firms and MNCs hire Indian law graduates. LLM from abroad enhances prospects.", industriesHiring: ["Law Firms", "Corporate Legal", "Government", "NGOs", "Judiciary", "Consulting", "IP Firms"], growthPrediction: "20% growth in corporate law sector. Judiciary always needs qualified lawyers.", aiAutomationRisk: "Low" },
      jobRoles: [
        { title: "Corporate Lawyer", fresherSalary: "₹8–15 LPA", twoYearSalary: "₹15–25 LPA", fiveYearSalary: "₹25–50 LPA", tenYearSalary: "₹50–1.5 Cr" },
        { title: "Litigation Lawyer", fresherSalary: "₹3–6 LPA", twoYearSalary: "₹6–12 LPA", fiveYearSalary: "₹12–30 LPA", tenYearSalary: "₹30–80 LPA" },
        { title: "Judge (after exam)", fresherSalary: "₹8–12 LPA", twoYearSalary: "₹12–18 LPA", fiveYearSalary: "₹18–30 LPA", tenYearSalary: "₹30–50 LPA" },
        { title: "Legal Consultant", fresherSalary: "₹5–10 LPA", twoYearSalary: "₹10–18 LPA", fiveYearSalary: "₹18–35 LPA", tenYearSalary: "₹35–60 LPA" },
        { title: "IP Lawyer", fresherSalary: "₹6–12 LPA", twoYearSalary: "₹12–20 LPA", fiveYearSalary: "₹20–40 LPA", tenYearSalary: "₹40–80 LPA" },
      ],
      companies: [
        { name: "AZB & Partners", type: "Indian", roles: ["Associate"] }, { name: "Cyril Amarchand", type: "Indian", roles: ["Associate"] },
        { name: "Khaitan & Co", type: "Indian", roles: ["Associate"] }, { name: "Trilegal", type: "Indian", roles: ["Associate"] },
        { name: "Shardul Amarchand", type: "Indian", roles: ["Associate"] }, { name: "L&L Partners", type: "Indian", roles: ["Associate"] },
        { name: "Nishith Desai", type: "Indian", roles: ["Associate"] }, { name: "JSA", type: "Indian", roles: ["Associate"] },
        { name: "Economic Laws Practice", type: "Indian", roles: ["Associate"] }, { name: "Samvad Partners", type: "Indian", roles: ["Associate"] },
        { name: "Clifford Chance", type: "Global", roles: ["Associate"] }, { name: "Linklaters", type: "Global", roles: ["Associate"] },
        { name: "Allen & Overy", type: "Global", roles: ["Associate"] }, { name: "Baker McKenzie", type: "Global", roles: ["Associate"] },
        { name: "White & Case", type: "Global", roles: ["Associate"] }, { name: "Herbert Smith", type: "Global", roles: ["Associate"] },
        { name: "Freshfields", type: "Global", roles: ["Associate"] }, { name: "DLA Piper", type: "Global", roles: ["Associate"] },
        { name: "Norton Rose", type: "Global", roles: ["Associate"] }, { name: "Hogan Lovells", type: "Global", roles: ["Associate"] },
      ],
      highestPayingRoles: ["M&A Lawyer", "IP Attorney", "Senior Partner", "General Counsel"],
      highestPayingCountries: ["United States", "United Kingdom", "Singapore", "Australia", "UAE"],
      actionPlan: {
        sevenDays: ["Register for CLAT preparation", "Start reading legal awareness sections", "Buy CLAT prep books", "Join CLAT prep communities"],
        threeMonths: ["Complete CLAT syllabus once", "Practice logical reasoning daily", "Read newspapers for current affairs", "Take mock tests"],
        oneYear: ["Score well in CLAT/AILET", "Apply to top NLUs", "Start reading landmark judgments", "Join debate/MUN clubs", "Build communication skills"],
      },
    },
  },
};

function generateId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
}

function computeSuitability(formData: StudentFormData, courseId: string): number {
  let score = 50;
  const course = courseDatabase[courseId];
  if (!course) return score;

  const interests = formData.interests;
  const interestMap: Record<string, string[]> = {
    "btech-cse-ai": ["AI/ML", "Software Development", "Data Science", "Cybersecurity", "Cloud Computing", "Robotics/IoT"],
    "bsc-data-science": ["Data Science", "AI/ML", "Software Development", "Finance"],
    "mbbs": ["Medicine", "Pharmacy"],
    "bba": ["Business", "Finance", "Government Jobs"],
    "llb": ["Law", "Government Jobs"],
  };

  const relevant = interestMap[courseId] || [];
  const matchCount = interests.filter(i => relevant.includes(i)).length;
  score += matchCount * 10;

  if (formData.skills.logicalThinking > 7) score += 5;
  if (formData.skills.technicalInterest > 7 && courseId.includes("btech")) score += 10;
  if (formData.skills.communication > 7 && (courseId === "bba" || courseId === "llb")) score += 10;
  if (formData.skills.creativity > 7) score += 3;

  if (formData.percentage > 85) score += 8;
  else if (formData.percentage > 70) score += 4;

  return Math.min(98, Math.max(40, score + Math.floor(Math.random() * 8)));
}

function generateMatchReason(formData: StudentFormData, courseId: string): string {
  const reasons: Record<string, string> = {
    "btech-cse-ai": `Based on your strong interest in technology and ${formData.skills.technicalInterest >= 7 ? "excellent" : "good"} technical aptitude, B.Tech CSE (AI & ML) is an outstanding match. Your ${formData.skills.logicalThinking >= 7 ? "strong logical thinking" : "analytical skills"} combined with interests in ${formData.interests.filter(i => ["AI/ML", "Software Development", "Data Science"].includes(i)).join(", ") || "technology"} make this a high-potential career path with exceptional salary growth.`,
    "bsc-data-science": `Your analytical abilities and interest in data-driven fields make B.Sc Data Science a strong fit. With ${formData.percentage}% academics and ${formData.skills.problemSolving >= 7 ? "excellent problem-solving skills" : "growing analytical capabilities"}, you can excel in this rapidly growing field that offers strong job security and competitive salaries.`,
    "mbbs": `Your interest in ${formData.interests.includes("Medicine") ? "medicine" : "healthcare"} combined with ${formData.percentage >= 80 ? "strong academics" : "your dedication"} suggests MBBS could be your calling. This profession offers unmatched job security, social prestige, and the opportunity to save lives while earning well.`,
    "bba": `Your ${formData.skills.leadership >= 7 ? "strong leadership" : "management potential"} and ${formData.skills.communication >= 7 ? "excellent communication" : "interpersonal"} skills align perfectly with a BBA program. This versatile degree opens doors to marketing, finance, HR, and entrepreneurship across all industries.`,
    "llb": `With ${formData.skills.communication >= 7 ? "excellent communication skills" : "your analytical mind"} and interest in ${formData.interests.includes("Law") ? "law" : "justice and governance"}, a law degree offers a prestigious career path. The legal profession provides high earning potential, intellectual challenge, and the power to drive change.`,
  };
  return reasons[courseId] || "This course aligns well with your profile and career aspirations.";
}

export function analyzeStudent(formData: StudentFormData): CourseRecommendation[] {
  const allCourseIds = Object.keys(courseDatabase);

  const recommendations = allCourseIds.map(id => {
    const course = courseDatabase[id];
    const score = computeSuitability(formData, id);
    return {
      id,
      name: course.base.name!,
      suitabilityScore: score,
      matchReason: generateMatchReason(formData, id),
      duration: course.base.duration!,
      difficultyLevel: course.base.difficultyLevel!,
      requiredStream: course.base.requiredStream!,
      futureDemand: course.base.futureDemand!,
      icon: course.base.icon!,
    } as CourseRecommendation;
  });

  return recommendations.sort((a, b) => b.suitabilityScore - a.suitabilityScore).slice(0, 5);
}

export function getCourseDetail(courseId: string): CourseDetail | null {
  return courseDatabase[courseId]?.detail || null;
}
