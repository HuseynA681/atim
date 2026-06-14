import React, { useState, useRef } from "react";
import { Course, User, CourseApplication } from "../types";
import { 
  Search, Filter, BookOpen, Star, Clock, Award, CheckCircle, Tag, Check, 
  Play, Video, Building, Users, Sparkles, Trophy, Lightbulb, Shield, Briefcase, ChevronRight, Volume2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CatalogProps {
  courses: Course[];
  onEnroll: (courseId: string) => void;
  onSelectCourse: (courseId: string) => void;
  darkMode: boolean;
  setActiveTab?: (tab: string) => void;
  currentUser?: User | null;
  applications?: CourseApplication[];
}

export default function Catalog({ 
  courses, 
  onEnroll, 
  onSelectCourse, 
  darkMode, 
  setActiveTab,
  currentUser = null,
  applications = []
}: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Hamısı");
  const [selectedLevel, setSelectedLevel] = useState<string>("Hamısı");
  const [selectedType, setSelectedType] = useState<string>("Hamısı");
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  // Home Screen Interactive Slogan & media controls
  const [activeMediaScene, setActiveMediaScene] = useState<string>("heavy");
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const catalogSearchRef = useRef<HTMLInputElement>(null);

  // Membership states
  const [subscribedTier, setSubscribedTier] = useState<string>("Standard");
  const [showSubscribedModal, setShowSubscribedModal] = useState<boolean>(false);

  const categories = ["Hamısı", ...Array.from(new Set(courses.map((c) => c.category)))];
  const levels = ["Hamısı", "Başlanğıc", "Orta", "Yüksək"];
  const types = ["Hamısı", "Onlayn", "Əyani", "Hibrid"];

  // Filtering logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.trainer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "Hamısı" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "Hamısı" || course.level === selectedLevel;
    const matchesType = selectedType === "Hamısı" || course.type === selectedType;
    const matchesPrice = course.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesLevel && matchesType && matchesPrice;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Health, Safety & Environment (HSE)":
      case "HSE":
        return "bg-rose-500/10 text-rose-500 border-rose-500/20";
      case "Lifting Operations":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Inspection & Engineering":
      case "Mühəndislik":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Oil & Gas":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Construction":
      case "Tikinti":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Leadership":
      case "Biznes":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Digital Skills":
      case "IT":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  const handleFindTraining = () => {
    if (catalogSearchRef.current) {
      catalogSearchRef.current.focus();
      catalogSearchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="space-y-8">
      {/* Premium Video Banner First Screen */}
      <div className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        darkMode 
          ? "bg-[#0b1226]/80 border-slate-800 shadow-2xl shadow-blue-950/20" 
          : "bg-white border-slate-150 shadow-md shadow-slate-100"
      } p-6 sm:p-10 lg:p-12`}>
        {/* Abstract Background highlights */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#00bfff]/5 blur-3xl pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Core Slogan and Prompts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600/10 to-blue-400/10 text-blue-400 tracking-wider border border-blue-500/25">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" />
              ATİM • SKILLS &amp; CERTIFICATION INSTITUTE
            </span>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
                Azərbaycanın <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Ən Güclü</span> Peşəkar İnkişaf Mərkəzi
              </h1>
              
              {/* Target Slogan Quote block requested by user */}
              <div className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-500/5 rounded-r-xl">
                <p className="text-slate-300 font-sans font-medium italic text-sm sm:text-base leading-relaxed">
                  "Bacarıqlarınızı inkişaf etdirin, sertifikat əldə edin və karyeranızı növbəti səviyyəyə daşıyın."
                </p>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest block mt-1 uppercase">— ATİM Rəqəmsal Ekosistem</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Xəzər regionunun tikinti, sənaye, logistika, enerji, mühəndislik və rəqəmsal komandaları üçün beynəlxalq akkreditasiyalı sertifikasiya ekosistemi. Coursera və LinkedIn Learning standartlarında milli peşəkar məktəb.
            </p>

            {/* Core Action buttons requested: "Təlim tap", "Korporativ həllər" */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="landing-find-training-btn"
                onClick={handleFindTraining}
                className="px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <Search className="w-4 h-4" />
                <span>Təlim Tap</span>
              </button>

              <button
                id="landing-corporate-solutions-btn"
                onClick={() => setActiveTab && setActiveTab("corporate")}
                className={`px-6 py-3 rounded-xl text-xs font-bold border active:scale-[0.98] transition-all flex items-center gap-2 ${
                  darkMode 
                    ? "bg-[#121f45] hover:bg-[#1b2b5d] text-slate-200 border-slate-700/60" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200"
                }`}
              >
                <Building className="w-4 h-4 text-slate-400" />
                <span>Korporativ Həllər</span>
              </button>
            </div>

            {/* Quick Trust badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400 text-[11px] pt-2 font-mono">
              <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5 text-amber-500" /> LEEA &amp; OPITO Standartları</span>
              <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-emerald-500" /> IOSH &amp; ATİM Təsdiqli</span>
              <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-cyan-400" /> QR-Kodlu Doğrulama</span>
            </div>
          </div>

          {/* Column 2: Premium Multimedia / Live Industry Simulator */}
          <div className="lg:col-span-5">
            <div className={`p-4 rounded-3xl border ${
              darkMode ? "bg-slate-950/90 border-[#1f2d57]" : "bg-slate-50 border-slate-200"
            } space-y-4 shadow-xl overflow-hidden`}>
              
              {/* Multimedia Screen Frame */}
              <div className="relative rounded-2xl bg-black aspect-video overflow-hidden group border border-slate-800">
                
                {/* Simulated Screen Graphics depending on current scene */}
                <div className="absolute inset-0">
                  {activeMediaScene === "heavy" && (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 flex flex-col justify-between p-4 relative">
                      {/* Grid effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                      <div className="flex justify-between items-start z-10">
                        <span className="px-2 py-0.5 bg-rose-600 text-[9px] font-mono font-bold text-white uppercase rounded tracking-widest animate-pulse">
                          LIVE SIMULATION • ENERJİ &amp; HSE
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">PTW: #90302</span>
                      </div>
                      
                      {/* Industrial visual schema mockup */}
                      <div className="my-auto self-center flex flex-col items-center justify-center space-y-2 z-10">
                        <Video className="w-8 h-8 text-blue-400 animate-bounce" />
                        <span className="text-xs font-mono text-slate-200 font-bold select-none text-center">Process Safety, PTW &amp; H2S Live Demo</span>
                        <div className="flex space-x-1 items-center justify-center">
                          <span className="w-1.5 h-4 bg-emerald-500 animate-pulse rounded-full"></span>
                          <span className="w-1.5 h-6 bg-emerald-400 animate-pulse rounded-full delay-75"></span>
                          <span className="w-1.5 h-3 bg-cyan-400 animate-pulse rounded-full delay-100"></span>
                          <span className="w-1.5 h-5 bg-blue-500 animate-pulse rounded-full delay-150"></span>
                        </div>
                      </div>

                      <div className="flex justify-between items-end z-10 text-[10px] text-slate-400 font-mono bg-black/40 backdrop-blur-sm p-1.5 rounded-lg border border-slate-500/10">
                        <span>FPSO Platforma</span>
                        <span>Energetik Axın: Normal</span>
                      </div>
                    </div>
                  )}

                  {activeMediaScene === "lifting" && (
                    <div className="w-full h-full bg-gradient-to-br from-[#1e1b15] via-slate-900 to-amber-950 flex flex-col justify-between p-4 relative">
                      <div className="absolute inset-0 bg-[radial-gradient(#2d2212_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>
                      <div className="flex justify-between items-start z-10">
                        <span className="px-2 py-0.5 bg-amber-500 text-[9px] font-mono font-bold text-slate-950 uppercase rounded tracking-widest">
                          ACADEMY • LIFTING OPERATIONS
                        </span>
                        <span className="text-[10px] text-slate-450 font-mono">LEEA/OPITO Vibe</span>
                      </div>
                      
                      <div className="my-auto self-center flex flex-col items-center justify-center space-y-1.5 z-10 text-center">
                        <Trophy className="w-8 h-8 text-amber-500 animate-bounce" />
                        <span className="text-xs font-mono text-slate-200 font-bold">Appointed Person &amp; Lifting Inspect</span>
                        <p className="text-[9px] text-slate-405 font-mono">SWL Matrisi &amp; Rigging Kampusu</p>
                      </div>

                      <div className="flex justify-between items-end z-10 text-[10px] text-slate-400 font-mono bg-black/40 backdrop-blur-sm p-1.5 rounded-lg border border-slate-500/10">
                        <span>Kran Yüklənməsi: 85%</span>
                        <span>Radius: 18.5m</span>
                      </div>
                    </div>
                  )}

                  {activeMediaScene === "construction" && (
                    <div className="w-full h-full bg-gradient-to-br from-[#0c2422] via-slate-900 to-stone-900 flex flex-col justify-between p-4 relative">
                      <div className="flex justify-between items-start z-10">
                        <span className="px-2 py-0.5 bg-emerald-600 text-[9px] font-mono font-bold text-white uppercase rounded tracking-widest">
                          SITE MANAGEMENT • TİKİNTİ
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">CISRS Standartı</span>
                      </div>
                      
                      <div className="my-auto self-center flex flex-col items-center justify-center space-y-1.5 z-10">
                        <Building className="w-8 h-8 text-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-slate-200 font-bold">Scaffold Inspection &amp; Temporary Works</span>
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Yoxlama statusu: YAŞIL</span>
                      </div>

                      <div className="flex justify-between items-end z-10 text-[10px] text-slate-450 font-mono bg-black/40 p-1.5 rounded-lg">
                        <span>İstifadəçi: Tural Q.</span>
                        <span>Xəzər Sahə Ofisi</span>
                      </div>
                    </div>
                  )}

                  {activeMediaScene === "digital" && (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex flex-col justify-between p-4 relative">
                      <div className="flex justify-between items-start z-10">
                        <span className="px-2 py-0.5 bg-blue-600 text-[9px] font-mono font-bold text-white uppercase rounded tracking-widest">
                          RƏQƏMSAL • EXCEL &amp; POWER BI
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">AI for Professionals</span>
                      </div>
                      
                      <div className="my-auto self-center flex flex-col items-center justify-center space-y-1 z-10 text-center">
                        <span className="text-2xl font-black text-blue-400 tracking-wider">AI + DATA</span>
                        <span className="text-xs font-mono text-slate-200 font-bold">Advanced Business Analytics</span>
                        <p className="text-[9px] text-slate-400">Excel / Power BI / Prompting Dashboard</p>
                      </div>

                      <div className="flex justify-between items-end z-10 text-[10px] text-slate-400 font-mono bg-black/40 p-1.5 rounded-lg">
                        <span>CPU Status: Optimal</span>
                        <span>Məlumat analizi: Aktiv</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dark overlay play button when paused */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-all cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/30">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Video controls strip */}
                <div className="absolute bottom-2 right-2 left-2 p-1.5 bg-slate-950/70 backdrop-blur-md rounded-xl z-20 flex items-center justify-between border border-slate-800">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center text-xs"
                    >
                      {isVideoPlaying ? "||" : "▶"}
                    </button>
                    <span className="text-[9px] font-mono text-slate-300">DƏRSLƏRƏ BAXIŞ VİDEOSU</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono">
                    <Volume2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Azərbaycan Səsi</span>
                  </div>
                </div>

              </div>

              {/* Selector Tabs representing the requested professional areas */}
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => { setActiveMediaScene("heavy"); setIsVideoPlaying(true); }}
                  className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-center border transition-all ${
                    activeMediaScene === "heavy"
                      ? "bg-blue-600/10 border-blue-500 text-blue-400"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-400 border-transparent"
                  }`}
                >
                  ⚡ Sənaye &amp; HSE
                </button>
                <button
                  onClick={() => { setActiveMediaScene("lifting"); setIsVideoPlaying(true); }}
                  className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-center border transition-all ${
                    activeMediaScene === "lifting"
                      ? "bg-amber-600/10 border-amber-500 text-amber-500"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-400 border-transparent"
                  }`}
                >
                  🏗️ Lifting &amp; Rigging
                </button>
                <button
                  onClick={() => { setActiveMediaScene("construction"); setIsVideoPlaying(true); }}
                  className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-center border transition-all ${
                    activeMediaScene === "construction"
                      ? "bg-emerald-600/10 border-emerald-500 text-emerald-400"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-400 border-transparent"
                  }`}
                >
                  🚧 Construction
                </button>
                <button
                  onClick={() => { setActiveMediaScene("digital"); setIsVideoPlaying(true); }}
                  className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-center border transition-all ${
                    activeMediaScene === "digital"
                      ? "bg-cyan-600/10 border-cyan-500 text-cyan-400"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-400 border-transparent"
                  }`}
                >
                  💻 Ofis &amp; Digital
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Target Statistika Bölməsi requested by user */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Stat item 1 */}
        <div className={`p-5 rounded-3xl border transition-all duration-200 hover:scale-[1.02] ${
          darkMode 
            ? "bg-gradient-to-b from-[#0e1730] to-[#040812] border-slate-850 hover:border-blue-500/20" 
            : "bg-white border-slate-100 shadow-sm hover:shadow"
        } relative overflow-hidden group`}>
          <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
          <div className="flex items-start justify-between">
            <span className="p-2.5 rounded-xl bg-blue-550/10 text-blue-500">
              <Users className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">REAL-TIME</span>
          </div>
          <div className="space-y-1 mt-4">
            <span className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight">10,000+</span>
            <span className="text-xs font-medium text-slate-400 block uppercase tracking-wide">Məzun Tələbə</span>
            <p className="text-[10px] text-slate-500 leading-tight">Azərbaycanın ən nüfuzlu təşkilatlarında karyera quranlar</p>
          </div>
        </div>

        {/* Stat item 2 */}
        <div className={`p-5 rounded-3xl border transition-all duration-200 hover:scale-[1.02] ${
          darkMode 
            ? "bg-gradient-to-b from-[#0e1730] to-[#040812] border-slate-850 hover:border-blue-500/20" 
            : "bg-white border-slate-100 shadow-sm hover:shadow"
        } relative overflow-hidden group`}>
          <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-indigo-500/5 blur-xl group-hover:bg-indigo-500/10 transition-colors"></div>
          <div className="flex items-start justify-between">
            <span className="p-2.5 rounded-xl bg-indigo-550/10 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/5 border border-blue-500/25 px-2 py-0.5 rounded-full font-bold">DOĞRULANAN</span>
          </div>
          <div className="space-y-1 mt-4">
            <span className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight">500+</span>
            <span className="text-xs font-medium text-slate-400 block uppercase tracking-wide">Təlim Proqramı</span>
            <p className="text-[10px] text-slate-500 leading-tight">Yükqaldırma, tikinti, HŞƏM və rəqəmsal istiqamət</p>
          </div>
        </div>

        {/* Stat item 3 */}
        <div className={`p-5 rounded-3xl border transition-all duration-200 hover:scale-[1.02] ${
          darkMode 
            ? "bg-gradient-to-b from-[#0e1730] to-[#040812] border-slate-850 hover:border-blue-500/20" 
            : "bg-white border-slate-100 shadow-sm hover:shadow"
        } relative overflow-hidden group`}>
          <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-colors"></div>
          <div className="flex items-start justify-between">
            <span className="p-2.5 rounded-xl bg-emerald-550/10 text-emerald-400">
              <Building className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/5 border border-purple-500/25 px-2 py-0.5 rounded-full font-bold">SOCAR &amp; CASPIAN</span>
          </div>
          <div className="space-y-1 mt-4">
            <span className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight">100+</span>
            <span className="text-xs font-medium text-slate-400 block uppercase tracking-wide">Korporativ Müştəri</span>
            <p className="text-[10px] text-slate-500 leading-tight">Yükqaldırma, təchizat, təhlükəsizlik üzrə müqavilələr</p>
          </div>
        </div>

        {/* Stat item 4 */}
        <div className={`p-5 rounded-3xl border transition-all duration-200 hover:scale-[1.02] ${
          darkMode 
            ? "bg-gradient-to-b from-[#0e1730] to-[#040812] border-slate-850 hover:border-blue-500/20" 
            : "bg-white border-slate-100 shadow-sm hover:shadow"
        } relative overflow-hidden group`}>
          <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full bg-purple-500/5 blur-xl group-hover:bg-purple-500/10 transition-colors"></div>
          <div className="flex items-start justify-between">
            <span className="p-2.5 rounded-xl bg-purple-550/10 text-purple-400">
              <Award className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-mono text-amber-500 bg-amber-500/5 border border-amber-500/25 px-2 py-0.5 rounded-full font-bold">AKKREDİTOLUNMUŞ</span>
          </div>
          <div className="space-y-1 mt-4">
            <span className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight">50+</span>
            <span className="text-xs font-medium text-slate-400 block uppercase tracking-wide">Ekspert Təlimçi</span>
            <p className="text-[10px] text-slate-500 leading-tight">Beynəlxalq təlimçilik və audit lisenziyalı peşəkarlar</p>
          </div>
        </div>

      </div>

      {/* Filter and Search Bar */}
      <div className={`p-6 rounded-2xl border ${
        darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
      } space-y-6`}>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              ref={catalogSearchRef}
              id="course-search-field"
              type="text"
              placeholder="Kurs, təlimçi və ya açar söz axtar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-11 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-[#121f45] border-slate-800 text-slate-100 placeholder-slate-400"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-500"
              }`}
            />
          </div>

          {/* Pricing slider */}
          <div className="flex items-center space-x-4 w-full lg:max-w-xs justify-end">
            <span className="text-xs font-medium text-slate-400 whitespace-nowrap">Maks. Qiymət: <span className="font-bold text-blue-500 text-sm">{maxPrice} AZN</span></span>
            <input
              id="price-range-slider"
              type="range"
              min="0"
              max="10000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
            />
          </div>
        </div>

        {/* Filters Grid */}
        <div className="flex flex-wrap gap-4 items-center border-t pt-4 border-slate-500/10">
          {/* Categories select pills */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">Kateqoriya:</span>
            {categories.map((cat) => (
              <button
                id={`cat-filter-${cat}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                    : darkMode
                    ? "bg-[#121f45] hover:bg-[#1b2b5d] text-slate-300"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 ml-auto">
            {/* Level Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Səviyyə:</span>
              <select
                id="level-selector"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Type Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Metod:</span>
              <select
                id="type-selector"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-sans font-extrabold tracking-tight">Tələb Olunan Təlimlər ({filteredCourses.length})</h2>
          <span className="text-xs text-slate-400 font-mono">Real-time yenilənmə fəaliyyətdədir</span>
        </div>

        {filteredCourses.length === 0 ? (
          <div className={`text-center py-12 px-4 rounded-3xl border border-dashed ${
            darkMode ? "bg-[#0d1730] border-slate-800" : "bg-slate-50 border-slate-200"
          }`}>
            <Filter className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <p className="text-slate-400 font-medium">Axtarış meyarlarına uyğun təlim proqramı tapılmadı.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Hamısı");
                setSelectedLevel("Hamısı");
                setSelectedType("Hamısı");
                setMaxPrice(10000);
              }}
              className="mt-3 text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
            >
              Filtrləri təmizlə
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col relative rounded-2xl border ${
                    darkMode
                      ? "bg-[#0d1730]/90 border-slate-800 hover:border-blue-500/40"
                      : "bg-white border-slate-100 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-blue-200"
                  } p-5 transition-all group overflow-hidden`}
                >
                  {/* Category Pill and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryColor(course.category)}`}>
                      {course.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      <span className="text-xs font-bold text-slate-400">{course.rating}</span>
                      <span className="text-[10px] text-slate-500">({course.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-base mb-2 select-text tracking-tight hover:text-blue-500 transition-colors cursor-pointer line-clamp-2" onClick={() => onSelectCourse(course.id)}>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4 flex-grow tracking-wide">
                    {course.description}
                  </p>

                  {/* Outcomes Tags */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Öyrəniləcək:</span>
                    <div className="flex flex-wrap gap-1">
                      {course.skillsOutcome.slice(0, 2).map((skill, i) => (
                        <span key={i} className={`text-[10px] px-2 py-0.5 rounded-md ${
                          darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-50 text-slate-600 border border-slate-100"
                        } truncate max-w-[140px]`} title={skill}>
                          {skill}
                        </span>
                      ))}
                      {course.skillsOutcome.length > 2 && (
                        <span className="text-[9px] text-blue-500 font-bold self-center">+{course.skillsOutcome.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Metadata line */}
                  <div className="flex items-center gap-2.5 border-t border-slate-500/10 pt-3 mb-4 text-[11px] text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="h-3 w-px bg-slate-500/20"></div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.certificateType.split(" ")[0]} Sert.</span>
                    </div>
                    <div className="h-3 w-px bg-slate-500/20"></div>
                    <div className="flex items-center space-x-1 select-none">
                      <span className="text-[9px] font-mono font-extrabold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        Fiziki (Əyani)
                      </span>
                    </div>
                  </div>

                  {/* Footer Action and Price */}
                  <div className="flex items-center justify-between pt-1 mt-auto">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase block">Təlim Ödənişi</span>
                      <span className="text-base font-extrabold text-blue-500">{course.price} AZN</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        id={`details-btn-${course.id}`}
                        onClick={() => onSelectCourse(course.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          darkMode
                            ? "bg-[#121f45] hover:bg-[#1b2b5d] text-slate-300"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        Syllabus
                      </button>

                      {(() => {
                        const userApp = applications.find(
                          (a) => a.courseId === course.id && a.username === (currentUser ? currentUser.username : "")
                        );

                        if (course.isEnrolled) {
                          return (
                            <button
                              disabled
                              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center space-x-1 font-sans"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Qoşulub</span>
                            </button>
                          );
                        }

                        if (userApp) {
                          if (userApp.status === "Gözləmədə") {
                            return (
                              <button
                                disabled
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center space-x-1 font-sans"
                              >
                                <Clock className="w-3.5 h-3.5" />
                                <span>Gözləmədə</span>
                              </button>
                            );
                          } else if (userApp.status === "Rədd edilib") {
                            return (
                              <button
                                onClick={() => onEnroll(course.id)}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 hover:scale-[1.02] shadow-sm transition-all font-sans"
                              >
                                Yenidən müraciət edin
                              </button>
                            );
                          }
                        }

                        return (
                          <button
                            id={`enroll-btn-${course.id}`}
                            onClick={() => onEnroll(course.id)}
                            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] shadow-sm transition-all font-sans"
                          >
                            Yazıl
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Target Üzvlük Sistemi (Membership System) */}
      <div className={`p-8 rounded-3xl border ${
        darkMode ? "bg-gradient-to-b from-[#0d1730] to-[#050915] border-slate-800" : "bg-white border-slate-100 shadow-sm"
      } space-y-8 mt-12`}>
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] bg-blue-500/10 text-blue-400 font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/25">
            DƏYƏR ZƏNCİRİ • EKOSİSTEM PLANS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-black tracking-tight text-white leading-tight">
            ATİM Üzvlük Proqramları
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            İstər peşəkar inkişaf arzulayan fərdi tələbə, istərsə də komandasının təlim matrisini idarə edən qrup rəhbəri olun, sizə uyğun bir ekosistem paketi mövcuddur.
          </p>
        </div>

        {/* Pricing/Membership Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Box 1: Standard */}
          <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
            subscribedTier === "Standard"
              ? "border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/20"
              : darkMode 
                ? "bg-[#111c38]/30 border-slate-850 hover:border-slate-700" 
                : "bg-slate-50 border-slate-200"
          }`}>
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 font-mono">FƏRDİ BAZA</span>
                <h3 className="text-lg font-extrabold text-white">Standard Plan</h3>
                <p className="text-[10px] text-slate-400">Platformaya ilkin və ömürboyu giriş paketi</p>
              </div>

              <div className="py-2">
                <span className="text-3xl font-black text-white">0 AZN</span>
                <span className="text-xs text-slate-500 ml-1">/ ömürboyu</span>
              </div>

              <div className="space-y-2.5 border-t border-slate-500/10 pt-4">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Təlim kataloq bazasından yararlanmaq</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">İctimai mütəxəssis blog məqalələri</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Aylıq ödənişsiz sənaye webinarları</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSubscribedTier("Standard");
                setShowSubscribedModal(true);
              }}
              className="mt-6 px-4 py-2.5 rounded-xl text-xs font-bold w-full transition-all bg-slate-800 text-slate-300 hover:bg-slate-750"
            >
              {subscribedTier === "Standard" ? "Aktivdir" : "Standard Planı Seç"}
            </button>
          </div>

          {/* Box 2: Professional - Highlighted */}
          <div className="p-6 rounded-2xl border-2 border-blue-500 bg-[#0d1b3c]/80 relative flex flex-col justify-between shadow-lg shadow-blue-500/10 transform md:-translate-y-2">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-extrabold tracking-widest text-[9px] uppercase px-3 py-1 rounded-full border border-blue-400/30">
              ⚡ TÖVSİYƏ EDİLƏN
            </span>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-blue-400 font-mono">FƏRDİ PREMİUM</span>
                <h3 className="text-lg font-extrabold text-white">Professional Plan</h3>
                <p className="text-[10px] text-slate-300">Uğurlu beynəlxalq və dövlət sertifikasiya üstünlükləri</p>
              </div>

              <div className="py-2">
                <span className="text-3xl font-black text-white">29 AZN</span>
                <span className="text-xs text-slate-400 ml-1">/ aylıq</span>
              </div>

              <div className="space-y-2.5 border-t border-slate-500/10 pt-4">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">Bütün dərslərdə 15% xüsusi endirim</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">Onlayn rəqəmsal sertifikat reyestrinə daxil edilmə</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">İldə 4 dəfə ödənişsiz ekspert mentorluğu</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">Karyera mərkəzi CV-yaradıcıya premium giriş</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSubscribedTier("Professional");
                setShowSubscribedModal(true);
              }}
              className="mt-6 px-4 py-2.5 rounded-xl text-xs font-extrabold w-full transition-all bg-blue-600 hover:bg-blue-700 text-white shadow shadow-blue-500/40"
            >
              {subscribedTier === "Professional" ? "Aktivdir" : "Professional Üzv Ol"}
            </button>
          </div>

          {/* Box 3: Corporate */}
          <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
            subscribedTier === "Corporate"
              ? "border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/20"
              : darkMode 
                ? "bg-[#111c38]/30 border-slate-850 hover:border-slate-700" 
                : "bg-slate-50 border-slate-200"
          }`}>
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 font-mono">ŞİRKƏTLƏR ÜÇÜN</span>
                <h3 className="text-lg font-extrabold text-white">Corporate Plan</h3>
                <p className="text-[10px] text-slate-400">Şirkət daxili HRM inteqrasiyası və LMS lisenziyaları</p>
              </div>

              <div className="py-2">
                <span className="text-2xl font-black text-white">Fərdi / Müqavilə və Audit</span>
                <p className="text-[9px] text-slate-500 mt-1">Geniş işçi heyəti üçün adaptiv hesablama</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-500/10 pt-4">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Özəl təşkilati HRM - İşçi idarəetmə paneli</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Real-time təlim tərəqqisi analitikası</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Hesabatlı təlim matrisi və uyğunluq monitoru</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Özəl imtahan yenilənmə və təkrar sınaq portali</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSubscribedTier("Corporate");
                if (setActiveTab) {
                  setActiveTab("corporate");
                }
              }}
              className="mt-6 px-4 py-2.5 rounded-xl text-xs font-bold w-full transition-all bg-slate-800 text-slate-300 hover:bg-slate-750 flex items-center justify-center gap-1.5"
            >
              <span>Kabinetə Keç</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Target Skills & Certification Institute Model and Revenue Streams Presentation */}
      <div className={`p-8 rounded-3xl border ${
        darkMode ? "bg-gradient-to-r from-[#081023] via-[#0b1731] To-[#050b16] border-slate-850" : "bg-slate-50 border-slate-200"
      } space-y-6 mt-12`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0080ff]/10 text-[#00bfff] text-[10px] font-bold font-mono uppercase tracking-widest border border-[#00bfff]/20">
              <Lightbulb className="w-3.5 h-3.5 text-blue-400" />
              ATİM STRATEJİ PLANI: LTV MAKSİMİZASİYASI
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              ATİM: Sadə Təlim Mərkəzi deyil, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300">"Skills &amp; Certification Institute"</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Azərbaycan və Xəzər regionunun aparıcı sənaye platforması olaraq, bir tələbənin ömürboyu dəyəri (LTV) sadəcə 300 AZN ilə məhdudlaşmır. Peşəkarlar karyera inkişafı və lisenziyalaşma çərçivəsində illər boyu sistemlə sıx bağlı qalırlar.
            </p>

            {/* Custom Interactive flow showcasing 3K-10K LTV cycle */}
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-[10px] font-bold font-mono uppercase text-blue-400 tracking-wider block">
                Ömürboyu Tədris və Qazanc Dövriyyəsi (LTV: 3,000 - 10,000+ AZN)
              </span>
              <div className="grid grid-cols-5 gap-1.5 text-center text-[9px] font-mono">
                <div className="p-1 px-1.5 rounded bg-blue-950/40 border border-blue-500/20">
                  <div className="font-bold text-slate-200">1. Qəbul</div>
                  <div className="text-slate-500 mt-0.5">Baza HSE (150 AZN)</div>
                </div>
                <div className="flex items-center justify-center text-blue-500">→</div>
                <div className="p-1 px-1.5 rounded bg-indigo-950/40 border border-indigo-500/20">
                  <div className="font-bold text-slate-200">2. İxtisas</div>
                  <div className="text-slate-400 mt-0.5">LEEA / IOSH (1,000 AZN)</div>
                </div>
                <div className="flex items-center justify-center text-blue-500">→</div>
                <div className="p-1 px-1.5 rounded bg-emerald-950/40 border border-[#00ff80]/15">
                  <div className="font-bold text-[#00ff80]">3. Karyera</div>
                  <div className="text-[#00ff80]/60 mt-0.5">Pro/Corporate (LTV 5K+)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue sources cards */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">Əlavə Gəlir və Brendləşmə Mexanizmləri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-blue-500 font-bold">
                  <span className="text-xs bg-blue-500/10 p-1 rounded">🛡️</span>
                  <span className="text-xs text-slate-200 font-sans">Sertifikat Yenilənməsi</span>
                </div>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  İki və ya üç ildən bir beynəlxalq standartlı QR sertifikatların lisenziya xidmət haqqı qarşılıqlı yenilənməsi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-amber-500 font-bold">
                  <span className="text-xs bg-amber-500/10 p-1 rounded">📝</span>
                  <span className="text-xs text-slate-200 font-sans">İmtahan Giriş haqları</span>
                </div>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Xarici akkreditasiyalı beynəlxalq kurikulumların (IOSH, LEEA) imtahan rüsumları və təkrari imtahan biletləri satışı.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-emerald-500 font-bold">
                  <span className="text-xs bg-emerald-500/10 p-1 rounded">🔍</span>
                  <span className="text-xs text-slate-200 font-sans">Korporativ Auditlər</span>
                </div>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Şirkətlərin tikinti və yükqaldırma sənaye sahələrində avadanlıq və kəmərlərin inspeksiyası, rəsmi rəy sənədi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-purple-400 font-bold">
                  <span className="text-xs bg-purple-500/10 p-1 rounded">👥</span>
                  <span className="text-xs text-slate-200 font-sans">Təlimçi Akkreditasiyası</span>
                </div>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Milli müfəttişlərə ATİM adından sertifikat vermək və təlim proqramları tədris etmək hüququnun (Franchise) satışı.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Custom Subscribed Success Alert Modal */}
      <AnimatePresence>
        {showSubscribedModal && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`w-full max-w-sm p-6 rounded-3xl border text-center space-y-4 relative ${
                darkMode ? "bg-[#0b1226] border-slate-800 text-slate-100" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                ✔
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-white">Təbrik edirik!</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Siz uğurla ATİM <span className="text-blue-400 font-bold font-mono">{subscribedTier}</span> statusu əldə etdiniz. Platformanın bütün xüsusiyyətləri hesabınıza inteqrasiya olundu.
                </p>
              </div>
              <button
                onClick={() => setShowSubscribedModal(false)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all w-full"
              >
                Təşəkkürlər
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
