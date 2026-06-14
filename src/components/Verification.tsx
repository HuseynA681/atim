import React, { useState } from "react";
import { Certificate } from "../types";
import { Search, Award, CheckCircle, FileCheck, ShieldAlert, ShieldCheck, Printer, Calendar, QrCode, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VerificationProps {
  certificates: Certificate[];
  darkMode: boolean;
}

export default function Verification({ certificates, darkMode }: VerificationProps) {
  const [searchId, setSearchId] = useState("");
  const [verifiedResult, setVerifiedResult] = useState<Certificate | null>(null);
  const [searched, setSearched] = useState(false);
  const [selectedPrintCert, setSelectedPrintCert] = useState<Certificate | null>(null);

  const handleVerifyPress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    const matched = certificates.find(
      (c) => c.id.toLowerCase() === searchId.trim().toLowerCase()
    );
    setVerifiedResult(matched || null);
    setSearched(true);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Search Bar section */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${
        darkMode ? "bg-gradient-to-r from-[#0d1730] to-[#121f45] border-slate-800" : "bg-white border-slate-100 shadow-sm"
      } space-y-4`}>
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
            Etibarlı Rəqəmsal Doğrulama Portalı
          </span>
          <h2 className="text-2xl font-sans font-extrabold tracking-tight">
            ATİM Sertifikat Verifikasiya Mərkəzi
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            ATİM tərəfindən verilən bütün peşəkar və beynəlxalq rəqəmsal sertifikatlar unikal nömrə (Serial ID) və ya QR kod vasitəsilə 24/7 onlayn şəkildə yoxlana bilər.
          </p>
        </div>

        <form onSubmit={handleVerifyPress} className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              id="verification-id-input"
              type="text"
              placeholder="Sertifikat ID-ni daxil edin... (məs: ATİM-2026-X1)"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
              }`}
            />
          </div>
          <button
            id="verification-submit-btn"
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 rounded-xl transition-all"
          >
            Yoxla
          </button>
        </form>

        <div className="text-center">
          <span className="text-[10px] text-slate-500 font-mono">
            Nümunə yoxlama ID-lərindən biri: <strong className="text-blue-500">ATİM-2026-X1</strong>,  <strong className="text-blue-500">ATİM-2026-X2</strong>
          </span>
        </div>
      </div>

      {/* Verification Query Result Output */}
      {searched && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {verifiedResult ? (
              <>
                {/* Result card 1 - Status check */}
                <div className={`p-6 rounded-2xl border md:col-span-1 flex flex-col justify-between ${
                  darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
                }`}>
                  <div className="space-y-4">
                    <div className="bg-emerald-500/10 text-emerald-500 p-3 rounded-xl inline-flex self-start">
                      <ShieldCheck className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Sertifikat Təsdiqləndi</span>
                      <h4 className="text-base font-bold font-sans">Sənəd Tam Etibarlıdır!</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Bu rəqəmsal sertifikat ATİM verilənlər bazasında qeydiyyatdan keçmişdir və qeyd olunan şəxsə məxsusluğu təsdiq edir.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-500/10 pt-4 mt-6">
                    <button
                      id="view-cert-details-btn"
                      onClick={() => setSelectedPrintCert(verifiedResult)}
                      className="w-full bg-[#121f45] hover:bg-[#1b2b5d] text-[#00bfff] font-bold text-xs py-2 rounded-xl flex items-center justify-center space-x-1 transition-all"
                    >
                      <Award className="w-4 h-4" />
                      <span>Sertifikatı Göstər</span>
                    </button>
                  </div>
                </div>

                {/* Result card 2 - Details block */}
                <div className={`p-6 rounded-2xl border md:col-span-2 space-y-4 ${
                  darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
                }`}>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Məlumat Təfərrüatları</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">Sertifikat Sahibi</span>
                      <span className="text-sm font-bold text-white select-text">{verifiedResult.userName}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">İmtahan Balı</span>
                      <span className="text-sm font-bold text-emerald-500 font-mono">{verifiedResult.score} Bal (Keçib)</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">Layihə / Təlim Adı</span>
                      <span className="text-sm font-bold text-white leading-snug">{verifiedResult.courseName}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">Sənəd Tipi</span>
                      <span className="text-sm font-bold text-blue-400">{verifiedResult.type}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">Verilmə Tarixi</span>
                      <span className="text-sm font-bold text-white flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span>{verifiedResult.issueDate}</span>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 block uppercase">Sertifikat Serial No</span>
                      <span className="text-sm font-mono font-bold text-blue-500 tracking-wider font-mono">{verifiedResult.id}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-500/10 pt-4 mt-6 flex items-center space-x-4">
                    <div className="p-2 bg-white rounded-lg border">
                      <QrCode className="w-12 h-12 text-black" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <p>Doğrulanan QR kod unikal nömrə ilə əlaqəlidir.</p>
                      <p className="font-mono">{verifiedResult.qrCodeValue}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className={`p-8 text-center rounded-3xl border md:col-span-3 ${
                darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-150"
              }`}>
                <ShieldAlert className="w-12 h-12 text-rose-500 mx-auto mb-3" />
                <h4 className="text-base font-bold">Xətalı və ya Mövcud Olmayan Sertifikat Kodu!</h4>
                <p className="text-xs text-slate-450 mt-1 max-w-md mx-auto">
                  Daxil etdiyiniz ID nömrəsinə dair heç bir etibarlı qeydiyyat tapılmadı. Xahiş edirik nömrəni yenidən yoxlayın və ya təlimi tamamladığınızdan əmin olun.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* List of active certificates for visual delight */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-sans font-extrabold tracking-tight">Qazanılmış Sertifikatlarım ({certificates.length})</h3>
          <span className="text-[10px] text-slate-500">Müstəqil nümayəndələr üçün rəqəmsal sənədlər</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              id={`my-cert-card-${cert.id}`}
              key={cert.id}
              className={`p-6 rounded-2xl border flex items-start gap-4 hover:border-blue-500/30 transition-all ${
                darkMode ? "bg-[#0d1730] border-slate-800" : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              <div className="bg-blue-600/10 text-[#00bfff] p-3 rounded-xl shrink-0">
                <Award className="w-6 h-6 text-blue-500" />
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div>
                  <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest font-mono">ID: {cert.id}</span>
                  <h4 className="text-sm font-bold truncate text-slate-100 leading-snug">{cert.courseName}</h4>
                  <p className="text-[11px] text-slate-400">Ümumi Toplanan Bal: <strong className="text-emerald-500">{cert.score}%</strong></p>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <button
                    id={`verify-shortcut-${cert.id}`}
                    onClick={() => {
                      setSearchId(cert.id);
                      setVerifiedResult(cert);
                      setSearched(true);
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    className="text-[11px] text-blue-400 hover:text-blue-500 underline font-semibold focus:outline-none"
                  >
                    Məlumatları Yoxla
                  </button>
                  <button
                    id={`print-cert-btn-${cert.id}`}
                    onClick={() => setSelectedPrintCert(cert)}
                    className="text-[11px] text-emerald-400 hover:text-emerald-500 underline font-semibold focus:outline-none"
                  >
                    Diplomu Yüklə / Çap Et
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deluxe Digital Certificate Modal Viewer */}
      {selectedPrintCert && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
          <div className={`w-full max-w-4xl p-6 md:p-10 rounded-3xl border text-slate-800 ${
            darkMode ? "bg-[#0c0f1a] border-slate-800" : "bg-white border-slate-350"
          } space-y-6 relative`}>
            
            {/* Top Close */}
            <button
              id="close-cert-modal"
              onClick={() => setSelectedPrintCert(null)}
              className="absolute top-4 right-4 text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-lg px-2.5 py-1.5 font-bold transition-all"
            >
              Bağla [X]
            </button>

            {/* Print Friendly Certificate Frame - High Luxury Layout */}
            <div id="printable-certificate-container" className="border-[8px] border-double border-slate-700 bg-[#FAF9F5] p-6 md:p-12 text-slate-900 rounded-xl space-y-8 relative overflow-hidden font-sans shadow-2xl">
              {/* Background Watermark/Badges */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-[1px] border-amber-500/10 flex items-center justify-center pointer-events-none mb-12">
                <Award className="w-48 h-48 text-amber-500/[0.04]" />
              </div>

              {/* Certificate header */}
              <div className="text-center space-y-3">
                <div className="text-amber-600 font-serif text-xs font-bold tracking-widest uppercase">
                  ATİM Skills, Training &amp; Certification Ecosystem
                </div>
                <h1 className="text-3xl md:text-5xl font-serif text-slate-900 font-extrabold tracking-tight">
                  UĞUR SERTİFİKATI
                </h1>
                <div className="w-32 h-0.5 bg-amber-500 mx-auto"></div>
                <span className="text-[10px] text-slate-500 font-mono italic">
                  Sertifikat Qeydiyyat Nömrəsi: {selectedPrintCert.id}
                </span>
              </div>

              {/* Certificate content statement */}
              <div className="text-center space-y-4 max-w-2xl mx-auto my-8">
                <span className="text-xs text-slate-500 tracking-wider block">Bu sənəd rəsmi olaraq təsdiqləyir ki,</span>
                <h2 className="text-2xl md:text-3xl font-serif text-blue-900 font-bold tracking-tight select-text">
                  {selectedPrintCert.userName}
                </h2>
                <p className="text-xs text-slate-650 max-w-lg mx-auto leading-relaxed">
                  ATİM çərçivəsində təşkil olunmuş <strong className="font-extrabold text-slate-900">{selectedPrintCert.courseName}</strong> təlim proqramını və keçirilən peşəkar sənaye imtahan fəaliyyətlərini {selectedPrintCert.score}% nəticə ilə uğurla tamamlamışdır.
                </p>
              </div>

              {/* Footer details, QR Code and Signatures mockup */}
              <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-6 my-4">
                <div className="text-left space-y-1 text-xs">
                  <p className="text-slate-500">Doğrulama Növü: <span className="font-bold text-slate-900">{selectedPrintCert.type}</span></p>
                  <p className="text-slate-500">Verilmə Tarixi: <span className="font-bold text-slate-900">{selectedPrintCert.issueDate}</span></p>
                  <p className="text-slate-500">Baş Direktor: <span className="font-serif italic font-bold text-slate-800">Cəmil Əlizadə (İmza)</span></p>
                </div>

                {/* QR Code inside the printable box */}
                <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200">
                  <div className="p-0.5">
                    <QrCode className="w-16 h-16 text-black" />
                  </div>
                  <div className="text-[9px] text-slate-600 max-w-[150px] leading-tight space-y-1">
                    <div className="font-bold">QR Kodla Doğrula</div>
                    <p className="font-mono text-[8px] break-all">{selectedPrintCert.qrCodeValue}</p>
                    <p className="italic text-emerald-600">Stat: Etibarlıdır</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print trigger CTA */}
            <div className="flex justify-end space-x-3 pt-2">
              <button
                id="modal-print-trigger-btn"
                onClick={handlePrintCertificate}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl flex items-center space-x-1.5 transition-all shadow-md shadow-emerald-500/10"
              >
                <Printer className="w-4 h-4" />
                <span>Çap Et (Sistem İnteqrasiyalı PDF)</span>
              </button>
              <button
                id="modal-close-trigger-btn"
                onClick={() => setSelectedPrintCert(null)}
                className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
              >
                Bağla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
