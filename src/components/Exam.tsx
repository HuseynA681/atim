import React, { useState, useEffect } from "react";
import { ExamQuestion, Certificate } from "../types";
import { Award, Timer, Sparkles, BookOpen, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ExamProps {
  enrolledCourses: { id: string; title: string; category: string }[];
  onGenerateCertificate: (courseName: string, score: number, type: "Uğur Sertifikatı" | "İştirak Sertifikatı") => void;
  darkMode: boolean;
}

export default function Exam({ enrolledCourses, onGenerateCertificate, darkMode }: ExamProps) {
  const [selectedCategory, setSelectedCategory] = useState("HSE");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [difficulty, setDifficulty] = useState("Orta");
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  // Available seeded courses fallback categories
  const categories = ["HSE", "Logistika", "Mühəndislik", "IT", "Biznes"];

  // Handle timer
  useEffect(() => {
    if (isExamStarted && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isExamStarted && !isFinished) {
      handleFinishExam();
    }
  }, [isExamStarted, isFinished, timeLeft]);

  // Set default course based on selected category or enrolled courses
  useEffect(() => {
    const list = enrolledCourses.filter((c) => c.category === selectedCategory);
    if (list.length > 0) {
      setSelectedCourse(list[0].title);
    } else {
      setSelectedCourse(`${selectedCategory} standart dərsləri`);
    }
  }, [selectedCategory, enrolledCourses]);

  const handleGenerateExamPress = async () => {
    setLoading(true);
    setIsFinished(false);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeft(180); // 3 minutes total

    try {
      const res = await fetch("/api/generate-exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory,
          courseName: selectedCourse,
          difficulty,
        }),
      });
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setIsExamStarted(true);
      } else {
        alert("Sual tapılmadı, xahiş edirik yenidən yoxlayın.");
      }
    } catch (e) {
      console.error(e);
      alert("Xəta baş verdi. Sistem test rejimində hərəkət edəcək.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOptionPress = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleFinishExam = () => {
    // Score calculation
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setIsFinished(true);

    // If score >= 70, generate a QR integrated certificate
    if (finalScore >= 70) {
      onGenerateCertificate(
        selectedCourse || `${selectedCategory} Üzrə Sənaye Qiymətləndirilməsi`,
        finalScore,
        "Uğur Sertifikatı"
      );
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Intro details */}
      {!isExamStarted && (
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
        } space-y-6`}>
          <div className="flex items-center space-x-3 text-blue-500">
            <Sparkles className="w-6 h-6 text-[#00bfff] animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">AI Əsaslı İmtahan Paneli</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight">
              Biliyini Sına, Onlayn Sertifikata İxtisaslaş!
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              Öyrəndiyiniz proqramların imtahanlarını burada verə bilərsiniz. Süni İntellekt (Gemini-3.5-flash) sizin üçün sahəyə uyğun xüsusi sənaye sualları, vaxt limiti təşkil edəcəkdir. Keçid balı <span className="font-bold text-emerald-500">70 Bal-dır</span>.
            </p>
          </div>

          {/* Form setup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-500/10 pt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">İmtahan Kateqoriyası</label>
              <select
                id="exam-category-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">İmtahan üçün mövzu seçimi</label>
              <select
                id="exam-subject-dropdown"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className={`w-full p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                {enrolledCourses.filter((c) => c.category === selectedCategory).map((c) => (
                  <option key={c.id} value={c.title}>{c.title}</option>
                ))}
                <option value={`${selectedCategory} Standart Tədris İmtahanı`}>{selectedCategory} Standart Tədris İmtahanı</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Çətinlik Dərəcəsi</label>
              <div className="flex gap-2">
                {["Asan", "Orta", "Çətin"].map((diff) => (
                  <button
                    id={`diff-btn-${diff}`}
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`flex-1 py-2 px-3 rounded-xl text-[11px] font-bold transition-all ${
                      difficulty === diff
                        ? "bg-blue-600 text-white"
                        : darkMode
                        ? "bg-[#121f45] hover:bg-[#1b2b5d] text-slate-300"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-750"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-500/10">
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>⏱ İmtahan müddəti: <strong>3 dəqiqə</strong></p>
              <p>📝 Sualların sayı: <strong>4 sual</strong></p>
              <p>🎓 Keçid kriteriyası: <strong>&gt;= 70% düzgün cavab</strong></p>
            </div>

            <button
              id="generate-exam-submit-btn"
              onClick={handleGenerateExamPress}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3 rounded-xl text-xs transition-all shadow-md shadow-blue-500/10 flex items-center space-x-2 border disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>AI Hazırlayır...</span>
                </>
              ) : (
                <>
                  <span>İmtahana Başla</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Active Exam Workspace state */}
      {isExamStarted && !isFinished && questions.length > 0 && (
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
        } space-y-6`}>
          {/* Header Progress step with Timer */}
          <div className="flex items-center justify-between border-b border-slate-500/10 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">{selectedCourse} imtahanı</span>
              <div className="text-xs font-bold">
                Sual {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>

            <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${
              timeLeft < 30 ? "bg-rose-500/10 text-rose-500 border-rose-500/20 animate-pulse" : "bg-slate-500/5 text-slate-300 border-slate-500/10"
            }`}>
              <Timer className="w-4 h-4" />
              <span>Geri Sayım: {formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Active Question Display */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-sans font-extrabold tracking-tight text-white select-text">
              {questions[currentQuestionIndex].question}
            </h3>

            {/* Answer choice list */}
            <div className="grid grid-cols-1 gap-3">
              {questions[currentQuestionIndex].options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                return (
                  <button
                    id={`option-btn-${currentQuestionIndex}-${idx}`}
                    key={idx}
                    onClick={() => handleSelectOptionPress(idx)}
                    className={`w-full text-left p-4 rounded-xl text-xs font-semibold focus:outline-none transition-all border ${
                      isSelected
                        ? "bg-blue-600/10 border-blue-500 text-blue-400"
                        : darkMode
                        ? "bg-[#121f45] border-slate-800 hover:bg-[#1b2b5d] text-slate-300"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-mono leading-none ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-500/10 text-slate-400"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Control buttons */}
          <div className="flex items-center justify-between border-t border-slate-500/10 pt-5">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currentQuestionIndex === 0 ? "opacity-30 cursor-not-allowed" : "bg-slate-800 text-slate-300 hover:bg-slate-705"
              }`}
            >
              Əvvəlki Sual
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                id="exam-next-question-btn"
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                Növbəti Sual
              </button>
            ) : (
              <button
                id="exam-submit-all-btn"
                onClick={handleFinishExam}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-emerald-500/10"
              >
                İmtahanı Bitir
              </button>
            )}
          </div>
        </div>
      )}

      {/* Finished Result Showcase state */}
      {isFinished && (
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
        } space-y-8`}>
          {/* Main result heading banner */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-500/5 border border-slate-500/10 text-[#00bfff] animate-pulse">
              <Award className="w-10 h-10 text-blue-500" />
            </div>

            <div>
              <h3 className="text-2xl font-sans font-extrabold tracking-tight">İmtahanın Təhlil Nəticəsi</h3>
              <p className="text-slate-400 text-xs">Kurs: {selectedCourse}</p>
            </div>

            {/* Score circle meter */}
            <div className="inline-block p-4 rounded-3xl bg-slate-500/5 border border-slate-500/10">
              <div className="text-3xl font-extrabold text-blue-500">{score}%</div>
              <div className="text-[10px] font-mono tracking-widest text-slate-500 font-semibold uppercase">Ümumi Toplanmış Bal</div>
            </div>

            <div className="max-w-md mx-auto">
              {score >= 70 ? (
                <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded-2xl border border-emerald-555/20 text-xs space-y-1">
                  <p className="font-extrabold">🎉 Təbriklər! Siz keçid balını aşdınız.</p>
                  <p className="text-slate-400">
                    Sizin üçün QR kodlu, onlayn yoxlanıla bilən **ATİM rəsmi rəqəmsal sertifikatı** dərhal yaradılaraq bazaya əlavə edildi.
                  </p>
                </div>
              ) : (
                <div className="bg-rose-500/10 text-rose-450 p-4 rounded-2xl border border-rose-500/20 text-xs space-y-1">
                  <p className="font-extrabold">☝ Keçid balını toplaya bilmədiniz.</p>
                  <p className="text-slate-400">
                    Narahat olmayın! Yenidən dərsləri təkrar edin və qeydlərinizə göz gəzdirib növbəti cəhdinizi sınaqdan keçirin.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Rationales Analysis */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Sual Cavab Təhlili:</span>
            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctIndex;
                return (
                  <div key={idx} className={`p-4 rounded-2xl border ${
                    isCorrect
                      ? "bg-emerald-500/5 border-emerald-500/20"
                      : "bg-rose-500/5 border-rose-500/20"
                  } space-y-2`}>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-slate-300">
                        {idx + 1}. {q.question}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCorrect ? "bg-emerald-500/15 text-emerald-500" : "bg-rose-500/15 text-rose-500"
                      }`}>
                        {isCorrect ? "Doğru" : "Yanlış"}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 space-y-1 pl-2 border-l border-slate-500/20">
                      <p>Sizin cavabınız: <strong className={isCorrect ? "text-emerald-500" : "text-rose-500"}>
                        {userChoice !== undefined ? q.options[userChoice] : "Cavab verilməyib"}
                      </strong></p>
                      {!isCorrect && (
                        <p>Düzgün cavab: <strong className="text-emerald-500">{q.options[q.correctIndex]}</strong></p>
                      )}
                      <p className="text-[11px] italic text-slate-500 bg-slate-500/5 p-2 rounded-lg mt-2">
                        💡 İzahat: {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action to restart or go to verification */}
          <div className="flex justify-center space-x-3 pt-4 border-t border-slate-500/10">
            <button
              onClick={() => {
                setIsExamStarted(false);
                setIsFinished(false);
              }}
              className="bg-slate-800 text-slate-200 hover:bg-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              Yeni İmtahanda İştirak Et
            </button>

            {score >= 70 && (
              <button
                onClick={() => {
                  const verifyTabBtn = document.getElementById("nav-tab-verify");
                  if (verifyTabBtn) verifyTabBtn.click();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-blue-500/10"
              >
                Sertifikatlarıma Baxış və Doğrulama
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
