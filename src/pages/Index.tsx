import { useState } from "react";
import StudentForm from "@/components/career/StudentForm";
import AptitudeTest from "@/components/career/AptitudeTest";
import AptitudeResults from "@/components/career/AptitudeResults";
import ResultsDashboard from "@/components/career/ResultsDashboard";
import CourseDetailPage from "@/components/career/CourseDetailPage";
import { StudentFormData, CourseRecommendation } from "@/types/career";
import { AptitudeResult } from "@/types/aptitude";
import { analyzeStudent, getCourseDetail } from "@/data/aiAnalyzer";

type View = "form" | "aptitude" | "aptitude-results" | "results" | "detail";

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

  if (view === "detail" && selectedCourse) {
    const detail = getCourseDetail(selectedCourse.id);
    if (detail) {
      return <CourseDetailPage course={selectedCourse} detail={detail} onBack={() => { setView("results"); window.scrollTo(0, 0); }} />;
    }
  }

  if (view === "results") {
    return <ResultsDashboard recommendations={recommendations} onSelectCourse={handleSelectCourse} onBack={() => { setView("aptitude-results"); window.scrollTo(0, 0); }} />;
  }

  if (view === "aptitude-results" && aptitudeResult) {
    return <AptitudeResults result={aptitudeResult} onContinue={handleContinueToResults} />;
  }

  if (view === "aptitude") {
    return <AptitudeTest onComplete={handleAptitudeComplete} onBack={() => { setView("form"); window.scrollTo(0, 0); }} />;
  }

  return <StudentForm onSubmit={handleFormSubmit} />;
};

export default Index;
