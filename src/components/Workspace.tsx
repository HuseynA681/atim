import React, { useState } from "react";
import { Course } from "../types";
import { PlayCircle, FileText, CheckSquare, Square, Save, ArrowRight, Laptop, MessageSquare, Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface WorkspaceProps {
  courses: Course[];
  onToggleLesson: (courseId: string, lessonId: number) => void;
  onSaveNotes: (courseId: string, notes: string) => void;
  onGoToExam: (category: string, courseName: string) => void;
  darkMode: boolean;
}

export default function Workspace({ courses, onToggleLesson, onSaveNotes, onGoToExam, darkMode }: WorkspaceProps) {
  const enrolledCourses = courses.filter((c) => c.isEnrolled);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(enrolledCourses[0]?.id || "");
  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [notesText, setNotesText] = useState<string>("");
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const activeCourse = enrolledCourses.find((c) => c.id === selectedCourseId) || enrolledCourses[0];

  // Sync notes when activeCourse changes
  React.useEffect(() => {
    if (activeCourse) {
      setNotesText(activeCourse.notes || "");
      // Auto selection active lesson as first uncompleted
      const firstUncompleted = activeCourse.syllabus.find((l) => !l.completed);
      if (firstUncompleted) {
        setActiveLessonId(firstUncompleted.id);
      } else if (activeCourse.syllabus.length > 0) {
        setActiveLessonId(activeCourse.syllabus[0].id);
      }
    }
  }, [activeCourse]);

  const handleSaveNotesPress = () => {
    if (activeCourse) {
      onSaveNotes(activeCourse.id, notesText);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  const handleToggleLessonCheckbox = (lessonId: number) => {
    if (activeCourse) {
      onToggleLesson(activeCourse.id, lessonId);
    }
  };

  if (enrolledCourses.length === 0) {
    return (
      <div className={`text-center py-20 px-6 rounded-3xl border border-dashed max-w-2xl mx-auto my-12 ${
        darkMode ? "bg-[#0d1730] border-slate-850" : "bg-white border-slate-200 shadow-sm"
      }`}>
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Compass className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-2xl font-sans font-extrabold tracking-tight mb-2">Hələ heç bir təlimə qoşulmamısınız</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
          Sizin üçün hazırlanmış peşəkar sənaye, mühəndislik, IT, biznes və əməyin təhlükəsizliyi dərslərimizin olduğu kataloqlara nəzər salın.
        </p>
        <button
          onClick={() => {
            // Click the navigate button
            const catalogBtn = document.getElementById("nav-tab-catalog");
            if (catalogBtn) catalogBtn.click();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/10 flex items-center space-x-2 mx-auto"
        >
          <span>Kataloqa Keçid</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Active lesson details mockup
  const currentLessonItem = activeCourse?.syllabus.find((s) => s.id === activeLessonId) || activeCourse?.syllabus[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar - Course choice and Syllabus list */}
      <div className="lg:col-span-1 space-y-6">
        {/* Active Enrolled Courses */}
        <div className={`p-4 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-3`}>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block px-1">Qoşulduğum Kurslar</span>
          <div className="space-y-1">
            {enrolledCourses.map((c) => (
              <button
                id={`workspace-course-select-${c.id}`}
                key={c.id}
                onClick={() => setSelectedCourseId(c.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all ${
                  selectedCourseId === c.id
                    ? darkMode
                      ? "bg-[#121f45] text-blue-400 font-bold border-l-4 border-blue-500"
                      : "bg-blue-50/60 text-blue-700 font-bold border-l-4 border-blue-600"
                    : darkMode
                    ? "hover:bg-[#111c38]/50 text-slate-300"
                    : "hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className="text-xs truncate">{c.title}</div>
                <div className="flex items-center space-x-2 mt-1">
                  {/* Progress bar */}
                  <div className="w-full bg-slate-550/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${c.progress || 0}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">{c.progress || 0}%</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Syllabus / Content checklist */}
        <div className={`p-4 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-3`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Tədris Proqramı</span>
            <span className="text-[10px] font-mono text-slate-400 font-bold">
              {activeCourse.syllabus.filter((s) => s.completed).length} / {activeCourse.syllabus.length} bitib
            </span>
          </div>

          <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
            {activeCourse.syllabus.map((lesson) => {
              const isActive = activeLessonId === lesson.id;
              return (
                <div
                  id={`syllabus-item-${lesson.id}`}
                  key={lesson.id}
                  className={`flex items-start justify-between p-2 rounded-xl transition-all ${
                    isActive
                      ? darkMode
                        ? "bg-[#1e294b] border border-blue-500/20"
                        : "bg-slate-50 border border-slate-200"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => setActiveLessonId(lesson.id)}
                    className="flex-1 text-left mr-2 focus:outline-none"
                  >
                    <div className={`text-xs font-semibold leading-tight ${isActive ? "text-blue-500" : "text-slate-400 hover:text-slate-200"}`}>
                      {lesson.id}. {lesson.title}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{lesson.duration}</span>
                  </button>

                  <button
                    id={`toggle-lesson-${activeCourse.id}-${lesson.id}`}
                    onClick={() => handleToggleLessonCheckbox(lesson.id)}
                    className={`p-1 rounded-md transition-colors ${
                      lesson.completed ? "text-emerald-500" : "text-slate-600 hover:text-slate-400"
                    }`}
                  >
                    {lesson.completed ? (
                      <CheckSquare className="w-4.5 h-4.5 stroke-[2.5]" />
                    ) : (
                      <Square className="w-4.5 h-4.5" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="lg:col-span-3 space-y-6">
        {/* Course Header Banner */}
        <div className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
          darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-850" : "bg-gradient-to-r from-blue-50/20 to-indigo-50/10 border-slate-100"
        }`}>
          <div>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{activeCourse.category} təlimi</span>
            <h2 className="text-xl font-bold tracking-tight mb-1">{activeCourse.title}</h2>
            <p className="text-xs text-slate-400">Təlimçi: <span className="text-slate-300 font-medium">{activeCourse.trainer}</span> ({activeCourse.trainerRole})</p>
          </div>

          <div>
            {activeCourse.progress === 100 ? (
              <button
                id="workspace-launch-exam-btn"
                onClick={() => onGoToExam(activeCourse.category, activeCourse.title)}
                className="bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.02] text-white px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center space-x-2 animate-bounce"
              >
                <span>İmtahana Daxil Ol!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Kursu 100% bitirdikdə imtahan açılacaq:
                </span>
                <span className="text-xs bg-slate-500/10 border border-slate-550/20 px-3 py-1 rounded-md text-slate-400 font-mono font-bold">
                  İrəliləyiş: {activeCourse.progress || 0}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content Viewer Simulator */}
        <div className={`rounded-3xl border overflow-hidden ${
          darkMode ? "bg-[#0b1226] border-slate-800" : "bg-slate-900 border-slate-950 shadow-xl"
        }`}>
          {/* Top Bar showing video details */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/40 flex items-center justify-between text-slate-300">
            <div className="flex items-center space-x-2">
              <Laptop className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-tight">ATİM DƏRS PLEYERİ: Dərs {currentLessonItem?.id} - {currentLessonItem?.title}</span>
            </div>
            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">LİVE</span>
          </div>

          {/* Player Display mockup */}
          <div className="aspect-video relative bg-slate-950 flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

            <motion.div
              key={activeLessonId}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-lg space-y-4 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-500 group-hover:scale-110 transition-transform cursor-pointer">
                <PlayCircle className="w-12 h-12" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{currentLessonItem?.title}</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  ATİM mütəxəssis tərəfindən hazırlanmış video dərslik, slayd təqdimatları və daxili mühazirə qeydləri. Tam video yayımı qoşulub, dərsi bitirdikdən sonra sağ tərəfdən tamamlandı olaraq işarələməyi unutmayın.
                </p>
              </div>

              <div className="flex justify-center space-x-3 pt-2">
                <span className="flex items-center space-x-1 text-[11px] bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/50">
                  <PlayCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>Dərsi İzlə (SD/HD)</span>
                </span>
                <span className="flex items-center space-x-1 text-[11px] bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/50">
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Mühazirə Kitabı (PDF)</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Notes and Live Chat module */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notes Area */}
          <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Şəxsi Qeydlərim</span>
              </div>
              <button
                id="workspace-notes-save-btn"
                onClick={handleSaveNotesPress}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-lg flex items-center space-x-1 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Saxla</span>
              </button>
            </div>

            <textarea
              id="workspace-notes-textarea"
              placeholder="Təlim zamanı vacib sahələri, qeydləri bura yazın (Avtomatik və ya Saxla düyməsi ilə dərhal yaddaşda saxlanılır)..."
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              className={`w-full h-40 p-4 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans leading-relaxed resize-none ${
                darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            />

            {savedSuccess && (
              <span className="text-[10px] font-bold text-emerald-500 flex items-center space-x-1 animate-pulse">
                <span>✓ Qeydləriniz uğurla yadda saxlanıldı.</span>
              </span>
            )}
          </div>

          {/* AI Helper Card within Workspace context */}
          <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
            darkMode ? "bg-gradient-to-br from-[#121f45]/50 to-[#0d1730] border-slate-800" : "bg-gradient-to-br from-indigo-50/20 to-white border-slate-100"
          }`}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-500">
                <Sparkles className="w-5 h-5 text-[#00bfff] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Dərs üzrə AI Mentoru</span>
              </div>
              <h3 className="text-sm font-bold leading-tight">Bu dərslə bağlı çətinliyiniz var?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                "Sağ tərəfdəki süni intellekt köməkçimizə müraciət edərək dərslərin mövzularını kəşf edin, mürəkkəb HSE standartlarını, SQL query-lərini və ya PMP terminlərini saniyələr içində izzah etməsini xahiş edin!"
              </p>
            </div>

            <button
              onClick={() => {
                const chatbotBtn = document.getElementById("ai-chat-trigger-floating");
                if (chatbotBtn) {
                  chatbotBtn.click();
                } else {
                  // Direct to main AI Help/Chat widget or just open help
                  alert("Süni İntellekt pəncərəsini açmaq üçün aşağı sağ tərəfdəki göy Robot düyməsinə klikləyin!");
                }
              }}
              className="mt-4 w-full bg-[#1e294b] hover:bg-[#253569] text-[#00bfff] font-bold text-xs py-2 rounded-xl border border-[#00bfff]/20 flex items-center justify-center space-x-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>AI Köməkçisini Açın</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
