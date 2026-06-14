import React, { useState } from "react";
import { Mentor, BookedSession } from "../types";
import { HelpCircle, Star, Calendar, MessageSquare, PlusCircle, Check, DollarSign, Clock, ListCollapse, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MentorshipProps {
  mentors: Mentor[];
  onUpdateMentors: (updated: Mentor[]) => void;
  darkMode: boolean;
}

export default function Mentorship({ mentors, onUpdateMentors, darkMode }: MentorshipProps) {
  const [sessions, setSessions] = useState<BookedSession[]>([
    {
      id: "sess-1",
      mentorId: "m-1",
      mentorName: "Tofiq Həsənov",
      dateTime: "18 İyun 2026, 18:30",
      topic: "NEBOSH Diploma imtahanına hazırlıq strategiyası",
      status: "Təsdiqləndi"
    }
  ]);

  const [bookingMentor, setBookingMentor] = useState<Mentor | null>(null);
  const [bookingDate, setBookingDate] = useState("2026-06-20");
  const [bookingHour, setBookingHour] = useState("");
  const [bookingTopic, setBookingTopic] = useState("");

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [mName, setMName] = useState("");
  const [mRole, setMRole] = useState("");
  const [mCompany, setMCompany] = useState("");
  const [mCategory, setMCategory] = useState("IT");
  const [mRate, setMRate] = useState(30);
  const [mExp, setMExp] = useState("");

  const handleBookSessionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingMentor || !bookingHour || !bookingTopic) {
      alert("Xahiş edirik bütün xanaları doldurun.");
      return;
    }

    const newSession: BookedSession = {
      id: `sess-${Date.now()}`,
      mentorId: bookingMentor.id,
      mentorName: bookingMentor.name,
      dateTime: `${bookingDate}, ${bookingHour}`,
      topic: bookingTopic,
      status: "Təsdiqləndi"
    };

    setSessions((prev) => [...prev, newSession]);
    setBookingMentor(null);
    setBookingHour("");
    setBookingTopic("");
    alert("Mentorluq sessiyası uğurla təyin edildi!");
  };

  const handleRegisterMentor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mName || !mRole || !mCompany || !mExp) {
      alert("Xahiş edirik tələb olunan bütün məlumatları doldurun.");
      return;
    }

    const newMentor: Mentor = {
      id: `m-${Date.now()}`,
      name: mName,
      role: mRole,
      company: mCompany,
      category: mCategory,
      rating: 5.0,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      hourlyRate: mRate,
      experience: mExp,
      availableHours: ["Həftəiçi 19:00 - 21:00", "Şənbə 10:00 - 15:00"]
    };

    onUpdateMentors([...mentors, newMentor]);
    setMName("");
    setMRole("");
    setMCompany("");
    setMExp("");
    setShowRegisterForm(false);
    alert("Təbrik edirik! Mentor qeydiyyatınız uğurla tamamlandı. Komandamız sənədlərinizi incələyəcək.");
  };

  return (
    <div className="space-y-8">
      {/* Upper info section */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
        darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-800" : "bg-gradient-to-r from-blue-50/20 to-indigo-50/10 border-slate-100"
      }`}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-blue-500">
            <HelpCircle className="w-5 h-5 text-[#00bfff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">ATİM Peşəkar Mentorluq Müşavirəsi</span>
          </div>
          <h2 className="text-2xl font-sans font-extrabold tracking-tight select-text">
            Sənaye Ekspertlərindən Fərdi Dəstək Alın
          </h2>
          <p className="text-slate-450 text-xs max-w-2xl">
            Təlim dərsləri ilə yanaşı gələcək layihələr, imtahanlar və ya karyera istiqaməti barədə birbaşa sənayenin qabaqcıl rəhbər şəxslərindən 1-ə-1 canlı videobağlantı vasitəsilə bələdçilik dərsləri sifariş edin.
          </p>
        </div>

        <div>
          <button
            id="register-mentor-trigger-btn"
            onClick={() => setShowRegisterForm(!showRegisterForm)}
            className="bg-[#1e294b] hover:bg-[#253569] text-[#00bfff] font-bold text-xs py-2.5 px-4 rounded-xl border border-[#00bfff]/20 transition-all flex items-center space-x-1.5 whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Mentor Kimi Qeydiyyatdan Keç</span>
          </button>
        </div>
      </div>

      {/* Booked Sessions list status */}
      <div className={`p-5 rounded-2xl border ${darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"} space-y-4`}>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Planlaşdırılmış Görüşlərim</h3>
        
        {sessions.length === 0 ? (
          <p className="text-xs text-slate-500">Hazırda heç bir aktiv görüş təyin edilməyib.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessions.map((sess) => (
              <div key={sess.id} className="p-4 rounded-xl bg-slate-500/5 border border-slate-500/10 flex items-start justify-between">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-emerald-450 flex items-center space-x-1 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{sess.status} (Canlı Zoom/Meet)</span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-snug">{sess.topic}</h4>
                  <p className="text-[11px] text-slate-400">Mentor: <strong className="text-slate-350">{sess.mentorName}</strong></p>
                  <p className="text-[11px] text-slate-450 font-mono">📅 {sess.dateTime}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Register Mentor Form slide transition */}
      <AnimatePresence>
        {showRegisterForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-6 rounded-2xl border ${
              darkMode ? "bg-[#0b1226] border-slate-800" : "bg-slate-50 border-slate-200"
            } space-y-4 overflow-hidden`}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">ATİM Mentor Şəbəkəsinə Qoşul</h3>
            <form onSubmit={handleRegisterMentor} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Adınız və Soyadınız</label>
                <input
                  id="mentor-form-name"
                  type="text"
                  placeholder="Məs: Toğrul Əliyev"
                  value={mName}
                  onChange={(e) => setMName(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Hazırkı Vəzifəniz</label>
                <input
                  id="mentor-form-role"
                  type="text"
                  placeholder="Məs: Baş Layihə Rəhbəri (PMO)"
                  value={mRole}
                  onChange={(e) => setMRole(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">İşlədiyiniz Şirkət</label>
                <input
                  id="mentor-form-company"
                  type="text"
                  placeholder="BP Azərbaycan və ya Microsoft"
                  value={mCompany}
                  onChange={(e) => setMCompany(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Kateqoriya</label>
                <select
                  id="mentor-form-category"
                  value={mCategory}
                  onChange={(e) => setMCategory(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-705"
                  }`}
                >
                  <option value="HSE">HSE (Əməyin Təhlükəsizliyi)</option>
                  <option value="IT">Data və İT Proqramlaşdırma</option>
                  <option value="Logistika">Təchizat və Logistika</option>
                  <option value="Mühəndislik">Energetika və Mühəndislik</option>
                  <option value="Biznes">Biznes və PMO İdarəetmə</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Saatlıq Məsləhət Haqqı (AZN)</label>
                <input
                  id="mentor-form-rate"
                  type="number"
                  min="0"
                  value={mRate}
                  onChange={(e) => setMRate(Number(e.target.value))}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="space-y-1 md:col-span-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Təcrübə Keçmişiniz (Tərcümeyi-hal qısaca)</label>
                <textarea
                  id="mentor-form-exp"
                  placeholder="Məs: 10 ildən çox layihələrin idarə olunması, Scrum / Kanban təcrübəsi. Scrum master rəsmi beynəlxalq sertifikatlarım var..."
                  value={mExp}
                  onChange={(e) => setMExp(e.target.value)}
                  className={`w-full h-20 p-3 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="md:col-span-3 flex justify-end space-x-2 pt-2">
                <button
                  id="mentor-form-cancel"
                  type="button"
                  onClick={() => setShowRegisterForm(false)}
                  className="px-4 py-2 rounded-xl text-xs bg-slate-800 text-slate-300 font-bold hover:bg-slate-700"
                >
                  İmtina
                </button>
                <button
                  id="mentor-form-submit"
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs bg-[#0066cc] hover:bg-blue-700 text-white font-extrabold"
                >
                  Müraciəti Tamamla
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid of mentors */}
      <div>
        <h3 className="text-base font-sans font-extrabold tracking-tight mb-4">Mövcud Sahə Mentorlarımız</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div
              id={`mentor-card-${mentor.id}`}
              key={mentor.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between hover:border-blue-500/30 transition-all ${
                darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              <div className="space-y-4">
                {/* Identity profile row */}
                <div className="flex items-center space-x-3">
                  <img
                    referrerPolicy="no-referrer"
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-500/10 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-white leading-tight">{mentor.name}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{mentor.role}</p>
                    <p className="text-[10px] text-blue-500 font-medium font-mono">{mentor.company}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Təcrübə bələdçisi:</span>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {mentor.experience}
                  </p>
                </div>

                {/* Rating and Hourly rate line */}
                <div className="flex items-center justify-between text-xs border-y border-slate-500/5 py-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <span className="font-bold">{mentor.rating}</span>
                    <span className="text-[10px] text-slate-500">({mentor.reviewsCount} rəy)</span>
                  </div>

                  <div className="flex items-center space-x-0.5 font-bold font-mono text-emerald-400 text-xs">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>{mentor.hourlyRate} AZN / saat</span>
                  </div>
                </div>

                {/* Available Hours list */}
                <div className="space-y-1 text-[11px] text-slate-400">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Münasib Saatlar:</span>
                  <div className="flex flex-wrap gap-1">
                    {mentor.availableHours.map((h, idx) => (
                      <span key={idx} className="bg-slate-500/5 border border-slate-500/10 px-2 py-0.5 rounded text-[10px]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Trigger buttons */}
              <button
                id={`book-sess-trigger-${mentor.id}`}
                onClick={() => {
                  setBookingMentor(mentor);
                  setBookingHour(mentor.availableHours[0] || "");
                }}
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition-all shadow-sm flex items-center justify-center space-x-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Görüş Planlaşdır</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Book a Session Modal Popup */}
      {bookingMentor && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm">
          <form
            onSubmit={handleBookSessionSubmit}
            className={`w-full max-w-md p-6 rounded-3xl border ${
              darkMode ? "bg-[#0c0f1a] border-slate-800" : "bg-white border-slate-300"
            } space-y-4`}
          >
            <div className="flex items-center justify-between border-b border-slate-500/10 pb-3">
              <h3 className="text-sm font-extrabold uppercase text-blue-500 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                <span>Görüş Təqvimi Tərtibi</span>
              </h3>
              <button
                type="button"
                onClick={() => setBookingMentor(null)}
                className="text-slate-450 hover:text-white font-bold text-xs"
              >
                [X] Close
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Müraciət etdiyiniz: <strong className="text-white">{bookingMentor.name}</strong> ({bookingMentor.company})
            </p>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Görüş Tarixi</label>
                <input
                  id="booking-date-field"
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Münasib Saat Aralığı</label>
                <select
                  id="booking-hour-select"
                  value={bookingHour}
                  onChange={(e) => setBookingHour(e.target.value)}
                  className={`w-full p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-305" : "bg-white border-slate-200 text-slate-705"
                  }`}
                  required
                >
                  {bookingMentor.availableHours.map((h, idx) => (
                    <option key={idx} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Müzakirə olunacaq Məsələ / Sual</label>
                <textarea
                  id="booking-topic-text"
                  placeholder="Məsələn: SQL join sorğuları üzrə praktiki tapşırıqda qarşılaşdığım problem..."
                  value={bookingTopic}
                  onChange={(e) => setBookingTopic(e.target.value)}
                  className={`w-full h-20 p-3 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-white border-slate-200"
                  }`}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-3">
              <button
                type="button"
                onClick={() => setBookingMentor(null)}
                className="px-4 py-2 rounded-xl text-xs bg-slate-800 text-slate-350 hover:bg-slate-700"
              >
                İmtina
              </button>
              <button
                id="booking-form-submit-all"
                type="submit"
                className="px-4 py-2 rounded-xl text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold"
              >
                Sessiyanı Təsdiqlə
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
