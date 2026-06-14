import React, { useState } from "react";
import { JobVacancy } from "../types";
import { Briefcase, UploadCloud, CheckCircle, AlertTriangle, PlayCircle, Loader2, Award, Sparkles, MapPin, Building, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CareerProps {
  vacancies: JobVacancy[];
  darkMode: boolean;
}

export default function Career({ vacancies, darkMode }: CareerProps) {
  const [selectedVacancyId, setSelectedVacancyId] = useState<string>(vacancies[0]?.id || "v-1");
  const [cvText, setCvText] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Results structures
  const [analyzed, setAnalyzed] = useState(false);
  const [atsScore, setAtsScore] = useState<number>(0);
  const [skillGaps, setSkillGaps] = useState<string[]>([]);
  const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]);
  const [generalFeedback, setGeneralFeedback] = useState("");

  const handleCvAnalysisSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvText.trim()) {
      alert("Xahiş olunur CV-nizin mətnini və ya iş fəaliyyətlərinizi bura daxil edin.");
      return;
    }

    setLoading(true);
    setAnalyzed(false);

    const targetVacancyObj = vacancies.find((v) => v.id === selectedVacancyId);

    try {
      const res = await fetch("/api/analyze-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cvText,
          targetRole: targetVacancyObj?.title || "Sənaye Spesialisti"
        }),
      });

      const data = await res.json();
      if (data.atsScore !== undefined) { // Now strictly expecting JSON, so data.text is not a primary check
        const score = data.atsScore || 70;
        setAtsScore(score);
        setSkillGaps(data.skillGaps || ["Analiz məlumatı tapılmadı"]);
        setRecommendedCourses(data.recommendedCourses || ["ATİM Ümumi Kataloq"]);
        setGeneralFeedback(data.generalFeedback || "Uğurlu analiz."); // Removed data.text fallback
        setAnalyzed(true);
      } else {
        alert("Xəta baş verdi. Sistem müstəqil/test qiymətləndirməsi aparacaq.");
      }
    } catch (e) {
      console.error(e);
      alert("AI Analizində xəta. Səhifəni yenidən yoxlayın.");
    } finally {
      setLoading(false);
    }
  };

  const selectedVacancy = vacancies.find((v) => v.id === selectedVacancyId) || vacancies[0];

  return (
    <div className="space-y-8">
      {/* Intro visual decoration */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
        darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-800" : "bg-gradient-to-r from-blue-50/20 to-indigo-50/10 border-slate-100"
      }`}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-blue-500">
            <Sparkles className="w-5 h-5 text-[#00bfff] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">ATİM CV Skaneri &amp; Karyera</span>
          </div>
          <h2 className="text-2xl font-sans font-extrabold tracking-tight">
            Süni İntellektli ATS Qiymətləndiriliməsi
          </h2>
          <p className="text-slate-455 text-xs max-w-2xl">
            Socar, BP, Caspian Logistics kimi qabaqcıl şirkətlərin vakansiyalarını seçin, öz CV mətninizi əlavə edərək hədəf vakansiyaya uyğunluq ATS faizini yoxlayın və çatışmayan bacarıqlar üçün kurs məsləhətləri alın.
          </p>
        </div>
      </div>

      {/* Main CV scanner inputs and feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - inputs */}
        <div className={`p-6 rounded-2xl border ${
          darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-105 shadow-sm"
        } space-y-6`}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
            <UploadCloud className="w-4.5 h-4.5 text-blue-500" />
            <span>CV Mətn Analizi və Hədəf Vakansiya</span>
          </h3>

          <form onSubmit={handleCvAnalysisSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Hədəf Vakansiyanı Seçin</label>
              <select
                id="target-vacancy-selector"
                value={selectedVacancyId}
                onChange={(e) => setSelectedVacancyId(e.target.value)}
                className={`w-full p-2.5 rounded-xl text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-705"
                }`}
              >
                {vacancies.map((v) => (
                  <option key={v.id} value={v.id}>{v.title} — {v.company}</option>
                ))}
              </select>
            </div>

            {/* Selected Vacancy Metadata summary */}
            <div className="bg-slate-500/5 p-3 rounded-xl space-y-1.5 text-xs">
              <div className="flex items-center space-x-2 text-white">
                <Building className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-bold">{selectedVacancy.company}</span>
                <span className="h-1.5 w-1.5 bg-slate-600 rounded-full"></span>
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">{selectedVacancy.location}</span>
              </div>
              <p className="text-[11px] text-slate-450 line-clamp-2 leading-snug">
                Tələblər: {selectedVacancy.requirements.join(", ")}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-400 uppercase">CV və ya İş Təcrübələriniz</label>
                <button
                  type="button"
                  onClick={() => setCvText(
                    "Ad: Həsən Ağazadə\nTəhsil: AzTU Cihazqayırma Mühəndisliyi\nTəcrübə: İki il SOCAR şöbəsində mütəxəssis köməkçisi, texniki təhlükəsizlik təlimləri, ingilis dili (orta), SQL lüğəti azacıq."
                  )}
                  className="text-[10px] text-blue-400 font-bold hover:underline"
                >
                  Nümunə CV yüklə
                </button>
              </div>
              
              <textarea
                id="cv-scanner-input-textarea"
                placeholder="Öz təcrübə, təhsil və bacarıqlarınızı bura kopyalayın (və ya qısa mətn yazın)..."
                value={cvText}
                onChange={(e) => setCvText(e.target.value)}
                className={`w-full h-48 p-4 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans leading-relaxed resize-none border ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-250 text-slate-700"
                }`}
                required
              />
            </div>

            <button
              id="analyze-cv-submit"
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 font-extrabold text-white text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center space-x-1.5 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Süni İntellekt analiz aparır...</span>
                </>
              ) : (
                <>
                  <Briefcase className="w-4 h-4" />
                  <span>Süni İntellektlə CV Skan Et</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right column - results */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {analyzed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-6 rounded-2xl border ${
                  darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
                } space-y-6`}
              >
                {/* Result header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#00bfff] font-mono tracking-widest font-extrabold uppercase">CV Skan Nəticəsi</span>
                  <div className="flex items-center space-x-1.5 text-xs text-white uppercase bg-slate-500/10 px-2.5 py-1 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                    <span>Gemini AI verified</span>
                  </div>
                </div>

                {/* ATS score gauge */}
                <div className="space-y-2 text-center py-4 bg-slate-500/5 rounded-2xl border border-slate-500/10">
                  <div className="text-4xl font-extrabold text-emerald-500 font-mono">{atsScore}%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ATS Uyğunluq Reytinqi</div>
                  <div className="max-w-xs mx-auto bg-slate-350/10 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        atsScore >= 75 ? "bg-emerald-500" : atsScore >= 50 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${atsScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Skill Gaps identified */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Bacarıq boşluqları (Skill Gaps)</span>
                  <div className="space-y-1.5 pl-1">
                    {skillGaps.map((gap, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{gap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended ATİM courses list */}
                <div className="space-y-3 pb-2 border-t border-slate-500/10 pt-4">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">Məsləhət Görülən Kurslar</span>
                  <div className="space-y-2">
                    {recommendedCourses.map((rc, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-blue-600/5 border border-blue-500/20 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-white font-medium">
                          <Award className="w-4 h-4 text-blue-500" />
                          <span>{rc}</span>
                        </div>
                        <button
                          onClick={() => {
                            const catalogBtn = document.getElementById("nav-tab-catalog");
                            if (catalogBtn) catalogBtn.click();
                          }}
                          className="text-[10px] bg-[#1e294b] text-[#00bfff] font-bold px-2 py-1 rounded-md"
                        >
                          Dərsə Get
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General critique feedback */}
                <div className="pt-4 border-t border-slate-500/10 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Ümumi Rəy</span>
                  <p className="text-xs text-slate-400 leading-relaxed italic select-text">
                    "{generalFeedback}"
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className={`p-8 text-center rounded-2xl border border-dashed flex flex-col items-center justify-center h-full min-h-[350px] ${
                darkMode ? "bg-[#0d1730] border-slate-805" : "bg-slate-50 border-slate-200"
              }`}>
                <Briefcase className="w-12 h-12 text-slate-500 mb-3" />
                <h4 className="text-base font-bold">Heç bir analiz mövcud deyil</h4>
                <p className="text-xs text-slate-450 mt-1 max-w-xs mx-auto">
                  Sol tərəfdəki form vasitəsilə CV mətninizi əlavə edib analiz edin və ATS xüsusi göstəricilərini anında buradan izləyin.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Active vacancy boards */}
      <div className="space-y-4">
        <h3 className="text-base font-sans font-extrabold tracking-tight">Mövcud Sənaye Vakansiyaları ({vacancies.length})</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vacancies.map((v) => {
            const isSelected = selectedVacancyId === v.id;
            return (
              <div
                id={`vacancy-board-${v.id}`}
                key={v.id}
                onClick={() => {
                  setSelectedVacancyId(v.id);
                  setAnalyzed(false); // reset until analyzed
                }}
                className={`p-5 rounded-2xl border cursor-pointer hover:border-blue-500/30 transition-all ${
                  isSelected
                    ? "bg-blue-600/5 border-blue-500"
                    : darkMode
                    ? "bg-[#0d1730] border-slate-800"
                    : "bg-white border-slate-100"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block font-mono">{v.category} sənaye</span>
                    <h4 className="text-xs font-bold text-white max-w-[200px] truncate">{v.title}</h4>
                    <p className="text-[11px] text-slate-400">{v.company}</p>
                  </div>

                  <span className="text-emerald-400 font-bold text-xs">{v.salary}</span>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-500/5 pt-3 mt-4 text-[10px] text-slate-500">
                  <span>📍 {v.location}</span>
                  <div className="h-2 w-px bg-slate-500/20"></div>
                  <span>📚 {v.requirements.length} tələb daxil</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
