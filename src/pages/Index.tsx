import { useState } from "react";
import StudentForm from "@/components/career/StudentForm";
import ResultsDashboard from "@/components/career/ResultsDashboard";
import CourseDetailPage from "@/components/career/CourseDetailPage";
import { StudentFormData, CourseRecommendation } from "@/types/career";
import { analyzeStudent, getCourseDetail } from "@/data/aiAnalyzer";

type View = "form" | "results" | "detail";

const Index = () => {
  const [view, setView] = useState<View>("form");
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<CourseRecommendation | null>(null);

  const handleFormSubmit = (data: StudentFormData) => {
    const results = analyzeStudent(data);
    setRecommendations(results);
    setView("results");
    window.scrollTo(0, 0);
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
    return <ResultsDashboard recommendations={recommendations} onSelectCourse={handleSelectCourse} onBack={() => { setView("form"); window.scrollTo(0, 0); }} />;
  }

  return <StudentForm onSubmit={handleFormSubmit} />;
};

export default Index;
