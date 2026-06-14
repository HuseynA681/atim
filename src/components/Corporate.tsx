import React, { useState } from "react";
import { CorporateEmployee, Course } from "../types";
import { Users, UserPlus, TrendingUp, AlertTriangle, CheckCircle, PlusCircle, Building, Mail, ShieldAlert, Award, ArrowUpRight, ShieldCheck, Briefcase, FileText, Settings, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CorporateProps {
  initialEmployees: CorporateEmployee[];
  courses: Course[];
  darkMode: boolean;
}

export default function Corporate({ initialEmployees, courses, darkMode }: CorporateProps) {
  const [employees, setEmployees] = useState<CorporateEmployee[]>(() => {
    const saved = localStorage.getItem("atim_corporate_employees");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialEmployees;
  });

  const saveEmployees = (updated: CorporateEmployee[]) => {
    setEmployees(updated);
    localStorage.setItem("atim_corporate_employees", JSON.stringify(updated));
  };

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmpName, setNewEmpName] = useState("");
  const [newEmpEmail, setNewEmpEmail] = useState("");
  const [newEmpDept, setNewEmpDept] = useState("Texniki Avadanlıqlar");
  const [newEmpCourse, setNewEmpCourse] = useState(courses[0]?.id || "hse-101");

  // Interactive Custom Corporate Solutions States
  const [selectedSolution, setSelectedSolution] = useState<string>("matrices");
  const [employeeScale, setEmployeeScale] = useState<number>(50);
  const [siteCount, setSiteCount] = useState<number>(2);
  const [requestedQuote, setRequestedQuote] = useState<boolean>(false);

  // Calculations for Corporate Dashboard
  const totalEmployeesWithData = employees.length;
  const certifiedCount = employees.reduce((acc, current) => acc + current.certificatesCount, 0);
  const compliantCount = employees.filter((e) => e.complianceStatus === "Tətbiq Edilib").length;
  const delayedCount = employees.filter((e) => e.complianceStatus === "Gecikir").length;
  const queuingCount = employees.filter((e) => e.complianceStatus === "Növbədə").length;

  const compliancePercentage = Math.round((compliantCount / totalEmployeesWithData) * 100) || 0;

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName || !newEmpEmail) {
      alert("Xahiş olunur bütün məlumatları doldurun.");
      return;
    }

    const newEmp: CorporateEmployee = {
      id: `emp-${Date.now()}`,
      name: newEmpName,
      email: newEmpEmail,
      department: newEmpDept,
      complianceStatus: "Növbədə",
      assignedCourses: [newEmpCourse],
      progress: { [newEmpCourse]: 0 },
      certificatesCount: 0,
    };

    const updated = [newEmp, ...employees];
    saveEmployees(updated);
    setNewEmpName("");
    setNewEmpEmail("");
    setShowAddForm(false);
  };

  const handleChangeStatus = (empId: string, newStatus: "Tətbiq Edilib" | "Gecikir" | "Növbədə") => {
    const updated = employees.map((emp) =>
      emp.id === empId ? { ...emp, complianceStatus: newStatus } : emp
    );
    saveEmployees(updated);
  };

  const getComplianceBadgeStyle = (status: "Tətbiq Edilib" | "Gecikir" | "Növbədə") => {
    switch (status) {
      case "Tətbiq Edilib":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Gecikir":
        return "bg-rose-500/10 text-rose-500 border-rose-500/20";
      case "Növbədə":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-550/20";
    }
  };

  return (
    <div className="space-y-8">
      {/* Upper overview header with stats cards */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row gap-6 justify-between items-start md:items-center ${
        darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-800" : "bg-gradient-to-r from-blue-50/20 to-indigo-50/10 border-slate-100"
      }`}>
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center space-x-2 text-blue-500">
            <Building className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Korporativ Təlim Kabineti</span>
          </div>
          <h2 className="text-2xl font-sans font-extrabold tracking-tight">
            Şirkət İnteqrasiyalı İnkişaf Paneli
          </h2>
          <p className="text-slate-400 text-xs">
            Böyük təşkilat və korporasiyaların komandalarını, əməyin təhlükəsizliyi qaydalarına uyğunluq (compliance) və rəqəmsal sertifikatı statuslarını real-time qaydada tənzimləyin.
          </p>
        </div>

        <div>
          <button
            id="corp-add-employee-trigger"
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center space-x-1.5 transition-all shadow-md shadow-blue-500/10"
          >
            <UserPlus className="w-4 h-4" />
            <span>Yeni Əməkdaş Əlavə Et</span>
          </button>
        </div>
      </div>

      {/* Stats Bento boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Employees */}
        <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-1`}>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Ümumi Əməkdaş</span>
          <div className="text-2xl font-extrabold text-white">{totalEmployeesWithData} nəfər</div>
          <p className="text-[10px] text-slate-500 leading-none">Aktiv öyrənmə və tərəqqidə</p>
        </div>

        {/* Global Compliance */}
        <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-1`}>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Compliance (Uyğunluq)</span>
          <div className="text-2xl font-extrabold text-emerald-500 font-mono">{compliancePercentage}%</div>
          <div className="w-full bg-slate-500/10 h-1.5 rounded-full overflow-hidden mt-1-2">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${compliancePercentage}%` }}></div>
          </div>
        </div>

        {/* Active certificates */}
        <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-1`}>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Qazanılmış Sertifikatlar</span>
          <div className="text-2xl font-extrabold text-blue-500">{certifiedCount} ədəd</div>
          <p className="text-[10px] text-slate-500 leading-none">Rəsmi dövlət və ya beynəlxalq</p>
        </div>

        {/* Delayed warnings */}
        <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-1`}>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Gecikmə (Delayed)</span>
          <div className="text-2xl font-extrabold text-rose-500">{delayedCount} nəfər</div>
          <p className="text-[10px] text-slate-500 leading-none">Təlimləri vaxtında bitirməyənlər</p>
        </div>
      </div>

      {/* Add Employee slide custom modal */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-6 rounded-2xl border ${
              darkMode ? "bg-[#0b1226] border-slate-800" : "bg-slate-50 border-slate-200"
            } space-y-4 overflow-hidden`}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">Yeni Əməkdaş Qeydiyyatı Formu</h3>
            <form onSubmit={handleCreateEmployee} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Adı və Soyadı</label>
                <input
                  id="corp-new-emp-name"
                  type="text"
                  placeholder="Məs: Cavid Qasimov"
                  value={newEmpName}
                  onChange={(e) => setNewEmpName(e.target.value)}
                  className={`w-full p-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-300"
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">E-Poçt Ünvanı</label>
                <input
                  id="corp-new-emp-email"
                  type="email"
                  placeholder="cavid.q@socar.az"
                  value={newEmpEmail}
                  onChange={(e) => setNewEmpEmail(e.target.value)}
                  className={`w-full p-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-300"
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Departament</label>
                <input
                  id="corp-new-emp-dept"
                  type="text"
                  placeholder="Məs: HƏMƏ/HSE Şöbəsi"
                  value={newEmpDept}
                  onChange={(e) => setNewEmpDept(e.target.value)}
                  className={`w-full p-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-300"
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Təyin ediləcək Təlim</label>
                <select
                  id="corp-new-emp-course"
                  value={newEmpCourse}
                  onChange={(e) => setNewEmpCourse(e.target.value)}
                  className={`w-full p-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-white border-slate-300 text-slate-705"
                  }`}
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-4 flex justify-end space-x-2 pt-2">
                <button
                  id="corp-new-emp-cancel-btn"
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-xl text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all font-bold"
                >
                  İmtina
                </button>
                <button
                  id="corp-new-emp-submit-btn"
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white transition-all font-extrabold"
                >
                  Komandaya Qoş
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Employees Table/Grid tracking progress */}
      <div className={`p-6 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-4`}>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-sans font-extrabold tracking-tight">Əməkdaşların İnkişaf Qrafiki dərsləri</h3>
          <span className="text-xs text-slate-500">Müntəzəm compliance yoxlama mexanizmi</span>
        </div>

        {/* Desktop View Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-500/10 text-slate-450 uppercase tracking-wider font-mono text-[10px]">
                <th className="py-3 px-4">Əməkdaş</th>
                <th className="py-3 px-4">Şöbə</th>
                <th className="py-3 px-4">Təyin olunan Təlim dərsi</th>
                <th className="py-3 px-4">Tərəqqi (Progress)</th>
                <th className="py-3 px-4">Uyğunluq Statusu</th>
                <th className="py-3 px-4 text-center">Sertifikatlar</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                const assignedCourseId = emp.assignedCourses[0];
                const courseTitle = courses.find((c) => c.id === assignedCourseId)?.title || "Seçim dərsi";
                const progressVal = emp.progress[assignedCourseId] || 0;

                return (
                  <tr key={emp.id} className="border-b border-slate-500/5 hover:bg-slate-500/5 transition-colors">
                    <td className="py-3.5 px-4">
                      <div>
                        <div className="font-bold text-slate-200">{emp.name}</div>
                        <div className="text-[10px] text-slate-500 flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>{emp.email}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-slate-400">
                      {emp.department}
                    </td>

                    <td className="py-3.5 px-4 text-slate-300 font-medium max-w-[205px] truncate" title={courseTitle}>
                      {courseTitle}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-slate-500/10 h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${
                            progressVal === 100 ? "bg-emerald-500" : "bg-blue-500"
                          }`} style={{ width: `${progressVal}%` }}></div>
                        </div>
                        <span className="font-mono font-bold text-[10px] text-slate-400">{progressVal}%</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <select
                        id={`corp-emp-status-select-${emp.id}`}
                        value={emp.complianceStatus}
                        onChange={(e) => handleChangeStatus(emp.id, e.target.value as any)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getComplianceBadgeStyle(emp.complianceStatus)} focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer bg-slate-100 dark:bg-slate-900`}
                      >
                        <option value="Tətbiq Edilib">Tətbiq Edilib</option>
                        <option value="Növbədə">Növbədə</option>
                        <option value="Gecikir">Gecikir</option>
                      </select>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center space-x-1 text-blue-400 font-bold">
                        <Award className="w-4 h-4" />
                        <span>{emp.certificatesCount}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Corporate Solutions Suite requested by outer brief */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${
        darkMode ? "bg-gradient-to-b from-[#0d1730] to-[#050915] border-slate-800" : "bg-white border-slate-150 shadow-sm"
      } space-y-6`}>
        <div className="space-y-2">
          <span className="text-[10px] bg-blue-500/10 text-blue-400 font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/25">
            XİDMƏT KATALOQU • 5,000 — 100,000+ AZN
          </span>
          <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white leading-tight">
            ATİM Korporativ Həllər Portfeli
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Milli və beynəlxalq audit tələblərinə cavab verən, sənaye müəssisələrinin risklərini sıfıra endirən peşəkar institusional xidmətlər.
          </p>
        </div>

        {/* 7 Core services requested by user */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div 
            onClick={() => setSelectedSolution("matrices")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "matrices"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-blue-500 font-bold">1</span>
              <span className="text-xs font-bold text-slate-200">Təlim Matrisləri</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              Bütün texniki heyət və vəzifələr üçün illik fərdi normativ dərslərinin və təlim matrislərinin qurulması.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("assessment")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "assessment"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-blue-400 font-bold">2</span>
              <span className="text-xs font-bold text-slate-200 font-sans">Kompetensiyanın Qiymətləndirilməsi</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              İşçi heyətinin praktiki qabiliyyət, nəzəri lisenziya və təhlükəsizlik qaydalarının rəsmi imtahan yoxlanılması.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("auditPrep")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "auditPrep"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-[#00bfff] font-bold">3</span>
              <span className="text-xs font-bold text-slate-200">Auditə Hazırlıq</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              OPITO, LEEA, beynəlxalq neft-qaz sifarişçiləri and BP standartlı sənaye auditlərinə müştərinin tam hazırlanması.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("consulting")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "consulting"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-[#00bfff] font-bold">4</span>
              <span className="text-xs font-bold text-slate-200">HSE Konsaltinq</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              Əməyin təhlükəsizliyi daxili kitabçaları, risk qiymətləndirmə (HAZID/HAZOP) və hadisələrin araşdırılması.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("isoPrep")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "isoPrep"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-blue-400 font-bold">5</span>
              <span className="text-xs font-bold text-slate-200">ISO Hazırlıq</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              ISO 9001, 14001, 45001 vahid keyfiyyət və ekoloji idarəetmə standartı sənədlər paketi və audit sertifikasiyası.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("liftingAudits")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "liftingAudits"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-[#00bfff] font-bold">6</span>
              <span className="text-xs font-bold text-slate-200 font-sans">Lifting / Rigging Auditləri</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              Yükqaldırma avadanlıqlarının kran və digər sənaye mexanizmlərin rəsmi beynəlxalq yoxlanışı və LEEA rəyi.
            </p>
          </div>

          <div 
            onClick={() => setSelectedSolution("management")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedSolution === "management"
                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-550/10 text-blue-400 font-bold">7</span>
              <span className="text-xs font-bold text-slate-200 font-sans">Kompetensiyaların İdarə Edilməsi</span>
            </div>
            <p className="text-[11px] text-slate-450 mt-2 leading-snug">
              İllik ixtisaslaşma proqramları, fərdi kadr inkişaf profili və inteqrasiyalı sənaye imtahanları.
            </p>
          </div>

        </div>

        {/* Dynamic Budget Calculator Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-slate-500/10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] uppercase font-mono font-bold text-blue-400 tracking-wider flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              İNTERAKTİV BÜDCƏ VƏ PLAN SİMULYATORU
            </span>
            
            <div className="space-y-4">
              {/* Slider 1: Employee Scale */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Təlim alacaq işçi heyəti ölçüsü</span>
                  <span className="font-bold font-mono text-white bg-blue-950 px-2 py-0.5 rounded border border-blue-500/25">{employeeScale} nəfər</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={employeeScale} 
                  onChange={(e) => setEmployeeScale(Number(e.target.value))}
                  className="w-full accent-blue-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Site Counts */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-350">Yoxlanılacaq / Audit sahələrinin sayı</span>
                  <span className="font-bold font-mono text-white bg-blue-900 px-2 py-0.5 rounded">{siteCount} obyekt</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={siteCount} 
                  onChange={(e) => setSiteCount(Number(e.target.value))}
                  className="w-full accent-blue-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block mb-1">Seçilmiş Aktiv Servis</span>
              <span className="text-xs font-bold text-white capitalize">
                {selectedSolution === "matrices" && "1. Təlim Matrislərinin Qurulması (Base: 5,000 AZN)"}
                {selectedSolution === "assessment" && "2. Kompetensiya və Bilik Qiymətləndirilməsi (Base: 12,000 AZN)"}
                {selectedSolution === "auditPrep" && "3. Beynəlxalq Sənaye Auditlərinə Dəstək (Base: 8,000 AZN)"}
                {selectedSolution === "consulting" && "4. HSE Professional Konsaltinq (Base: 15,000 AZN)"}
                {selectedSolution === "isoPrep" && "5. ISO 9001, 14001, 45001 Hazırlıq (Base: 20,000 AZN)"}
                {selectedSolution === "liftingAudits" && "6. Lifting sənaye auditləri (Base: 10,000 AZN)"}
                {selectedSolution === "management" && "7. Kompleks Kompetensiya İdarəetməsi (Base: 25,000 AZN)"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-[#12214a] to-[#040813] border border-blue-500/25 text-center space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-405">TƏXMİNİ SEKTORAL BÜDCƏ</span>
              <div className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight mt-1">
                {(
                  (selectedSolution === "matrices" ? 5000 : selectedSolution === "assessment" ? 12000 : selectedSolution === "auditPrep" ? 8000 : selectedSolution === "consulting" ? 15000 : selectedSolution === "isoPrep" ? 20000 : selectedSolution === "liftingAudits" ? 10000 : 25000)
                  + (employeeScale * 140)
                  + (siteCount * 3850)
                ).toLocaleString("en-US")} AZN
              </div>
              <p className="text-[10px] text-slate-400 mt-1">*Bu qiymət ilkin smeta olub, fərdi sənaye razılaşması ilə dəyişilə bilər.</p>
            </div>

            <button
              id="corporate-rfq-submit-btn"
              onClick={() => {
                setRequestedQuote(true);
                setTimeout(() => setRequestedQuote(false), 5000);
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-extrabold text-xs transition-all rounded-xl shadow-lg shadow-blue-500/25"
            >
              Rəsmi Sənaye Təklifi Al (RFQ)
            </button>
          </div>

        </div>
      </div>

      {/* Success alert message for RFQ */}
      {requestedQuote && (
        <div id="corporate-success-toast" className="p-4 rounded-xl bg-emerald-500/10 border border-[#00ff80]/20 text-[#00ff80] text-xs font-semibold flex items-center justify-between transition-all">
          <div className="flex items-center space-x-2">
            <span>✔</span>
            <span>Rəsmi sorğunuz uğurla yaradıldı! Təlimçilərimiz 24 saat ərzində sizinlə əlaqə saxlayacaqlar.</span>
          </div>
          <button onClick={() => setRequestedQuote(false)} className="text-slate-400 hover:text-white">X</button>
        </div>
      )}

      {/* Corporate Compliance Matrix summary */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row gap-6 justify-between ${
        darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-800" : "bg-white border-slate-100 shadow-sm"
      }`}>
        <div className="space-y-2">
          <span className="text-[10px] text-blue-500 font-extrabold uppercase tracking-widest block font-mono">BİRGƏ İNKİŞAF APİ</span>
          <h3 className="text-lg font-bold font-sans">API İnteqrasiya Modulu (HRM / ERP)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            ATİM-in xüsusi rəqəmsal API-ləri sayəsində komandanızın qazandığı sənaye balları və sınaq imtahan rəyləri birbaşa daxili SAP, 1C və ya HRM platformanıza real-time ötürülür.
          </p>
        </div>
        <button
          onClick={() => alert("ATİM API Sənədlər paketi tezliklə təqdim olunacaq!")}
          className="bg-slate-800 hover:bg-slate-700 text-[#00bfff] font-bold border border-blue-500/20 py-3 px-5 rounded-xl text-xs transition-all self-center whitespace-nowrap"
        >
          Texniki Sənədlər (API Docs)
        </button>
      </div>
    </div>
  );
}
