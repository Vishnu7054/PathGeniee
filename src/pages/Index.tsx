import { useState } from "react";
import StudentForm from "@/components/career/StudentForm";
import AptitudeTest from "@/components/career/AptitudeTest";
import AptitudeResults from "@/components/career/AptitudeResults";
import ResultsDashboard from "@/components/career/ResultsDashboard";
import CourseDetailPage from "@/components/career/CourseDetailPage";
import CollegeCompare from "@/components/career/CollegeCompare";
import ThemeToggle from "@/components/ThemeToggle";
import { StudentFormData, CourseRecommendation } from "@/types/career";
import { AptitudeResult } from "@/types/aptitude";
import { analyzeStudent, getCourseDetail } from "@/data/aiAnalyzer";

type View = "form" | "aptitude" | "aptitude-results" | "results" | "detail" | "compare";

const Index = () => {
  const [view, setView] = useState<View>("form");
  const [formData, setFormData] = useState<StudentFormData | null>(null);
  const [aptitudeResult, setAptitudeResult] = useState<AptitudeResult | null>(null);
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<CourseRecommendation | null>(null);

  const handleFormSubmit = (data: StudentFormData) => {
    setFormData(data);
    setView("aptitude");
    window.scrollTo(0, 0);
  };

  const handleAptitudeComplete = (result: AptitudeResult) => {
    setAptitudeResult(result);
    setView("aptitude-results");
    window.scrollTo(0, 0);
  };

  const handleContinueToResults = () => {
    if (formData) {
      const results = analyzeStudent(formData, aptitudeResult ?? undefined);
      setRecommendations(results);
      setView("results");
      window.scrollTo(0, 0);
    }
  };

  const handleSelectCourse = (courseId: string) => {
    const course = recommendations.find(r => r.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setView("detail");
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <ThemeToggle />
      {view === "compare" && (
        <CollegeCompare onBack={() => { setView("results"); window.scrollTo(0, 0); }} />
      )}
      {view === "detail" && selectedCourse && (() => {
        const detail = getCourseDetail(selectedCourse.id);
        return detail ? <CourseDetailPage course={selectedCourse} detail={detail} onBack={() => { setView("results"); window.scrollTo(0, 0); }} /> : null;
      })()}
      {view === "results" && (
        <ResultsDashboard
          recommendations={recommendations}
          onSelectCourse={handleSelectCourse}
          onBack={() => { setView("aptitude-results"); window.scrollTo(0, 0); }}
          onCompare={() => { setView("compare"); window.scrollTo(0, 0); }}
        />
      )}
      {view === "aptitude-results" && aptitudeResult && (
        <AptitudeResults result={aptitudeResult} onContinue={handleContinueToResults} />
      )}
      {view === "aptitude" && (
        <AptitudeTest onComplete={handleAptitudeComplete} onBack={() => { setView("form"); window.scrollTo(0, 0); }} />
      )}
      {view === "form" && <StudentForm onSubmit={handleFormSubmit} />}
    </>
  );
};

export default Index;
