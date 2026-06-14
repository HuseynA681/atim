import React, { useState } from "react";
import { User } from "../types";
import { Lock, User as UserIcon, ArrowRight, AlertCircle, Shield, Sparkles, CheckCircle, GraduationCap, Key } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AtimLogo from "./AtimLogo";

interface LoginProps {
  users: User[];
  onLoginSuccess: (user: User) => void;
  onUpdateUserPassword: (username: string, password: string) => void;
  darkMode: boolean;
}

type LoginStep = "username" | "password" | "create_password";

export default function Login({ users, onLoginSuccess, onUpdateUserPassword, darkMode }: LoginProps) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [step, setStep] = useState<LoginStep>("username");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successAnimation, setSuccessAnimation] = useState(false);

  const handleUsernameNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const targetUsername = usernameInput.trim().toLowerCase();
    if (!targetUsername) {
      setErrorMessage("İstifadəçi adı daxil edilməlidir.");
      return;
    }

    // Find the user
    const foundUser = users.find((u) => u.username === targetUsername);

    if (!foundUser) {
      setErrorMessage(
        "Bu istifadəçi adı sistemdə tapılmadı. Hesab yaratmaq hüququ yalnız İnzibatçıdadır (Admin). Yeni hesab yaradılması üçün onunla əlaqə saxlayın."
      );
      return;
    }

    setSelectedUser(foundUser);

    // Check if password exists
    if (!foundUser.password) {
      setStep("create_password");
    } else {
      setStep("password");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!selectedUser) return;

    if (passwordInput === selectedUser.password) {
      triggerSuccess(selectedUser);
    } else {
      setErrorMessage("Şifrə yanlışdır. Yenidən cəhd edin.");
    }
  };

  const handleCreatePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!selectedUser) return;

    if (newPassword.length < 4) {
      setErrorMessage("Şifrə ən azı 4 simvoldan ibarət olmalıdır.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Şifrələr bir-biri ilə uyğun gəlmir.");
      return;
    }

    // Update the password in database/localStorage
    onUpdateUserPassword(selectedUser.username, newPassword);

    // Create updated user object
    const updatedUser = { ...selectedUser, password: newPassword };
    setSelectedUser(updatedUser);

    // Trigger success login
    triggerSuccess(updatedUser);
  };

  const triggerSuccess = (user: User) => {
    setSuccessAnimation(true);
    setTimeout(() => {
      onLoginSuccess(user);
    }, 1500);
  };

  const handleBack = () => {
    setStep("username");
    setPasswordInput("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage(null);
    setSelectedUser(null);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 font-sans ${
      darkMode ? "bg-[#060a13] text-slate-100" : "bg-slate-100 text-slate-900"
    } relative overflow-hidden select-none`}>
      {/* Visual Ambient Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <AtimLogo variant="full" size="md" darkMode={darkMode} />
        </div>

        {/* Dynamic Card Container */}
        <motion.div
          layout
          className={`p-8 rounded-3xl border ${
            darkMode ? "bg-[#0d1730]/90 border-slate-800" : "bg-white border-slate-200/60 shadow-lg"
          } shadow-2xl backdrop-blur-md overflow-hidden relative`}
        >
          <AnimatePresence mode="wait">
            {successAnimation ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Uğurlu Giriş!</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Portala daxil olursunuz. Xoş gəldiniz, <strong className="text-blue-400">{selectedUser?.fullName}</strong>.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mx-auto mt-4"></div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Error Banner */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 text-xs rounded-xl bg-orange-600/15 border border-orange-500/20 text-orange-400 flex items-start space-x-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errorMessage}</span>
                  </motion.div>
                )}

                {/* STEP 1: Username Entry Screen */}
                {step === "username" && (
                  <motion.form
                    key="step-username"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    onSubmit={handleUsernameNext}
                    className="space-y-4"
                  >
                    <div className="space-y-1.5">
                      <h2 className="text-base font-bold">Daxil Olun</h2>
                      <p className="text-xs text-slate-400">
                        Admin tərəfindən sizə təqdim olunmuş istifadəçi adını (username) qeyd edin.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <UserIcon className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          id="login-username-input"
                          type="text"
                          placeholder="Məsələn: admin və ya hasan"
                          value={usernameInput}
                          onChange={(e) => setUsernameInput(e.target.value)}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none font-mono ${
                            darkMode ? "bg-[#121f45] border-slate-850 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-800"
                          }`}
                          required
                          autoFocus
                        />
                      </div>
                    </div>

                    <button
                      id="login-username-continue-btn"
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center space-x-1"
                    >
                      <span>Davam Et</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Developer Guide Box */}
                    <div className="border border-indigo-500/10 bg-indigo-505/5 p-3 rounded-2xl text-[11px] leading-relaxed text-slate-400 space-y-1">
                      <div className="flex items-center space-x-1.5 text-blue-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="font-bold">Test Hesabları:</span>
                      </div>
                      <p>• <strong>admin</strong> (Bütün paneli idarə edir. Şifrə: <strong className="text-amber-400">admin</strong>)</p>
                      <p>• <strong>hasan</strong> (Öncədən yaradılmış tələbə. İlk girişdə yeni şifrə istəyəcək!)</p>
                    </div>
                  </motion.form>
                )}

                {/* STEP 2: Password Entry Screen */}
                {step === "password" && (
                  <motion.form
                    key="step-password"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    onSubmit={handlePasswordSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-blue-400 flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>{selectedUser?.role === "admin" ? "Admin Girişi" : "İstifadəçi Girişi"}</span>
                      </span>
                      <h2 className="text-base font-bold">Şifrənizi Daxil Edin</h2>
                      <p className="text-xs text-slate-400">
                        Hi, <strong className="text-slate-200">{selectedUser?.fullName}</strong>! Hesabınıza daxil olmaq üçün şifrənizi yazın.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          id="login-password-input"
                          type="password"
                          placeholder="Şifrə"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                            darkMode ? "bg-[#121f45] border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-800"
                          }`}
                          required
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-slate-800 hover:bg-slate-755 text-slate-300 font-bold text-xs py-2.5 rounded-xl transition-all"
                      >
                        Geri qayıt
                      </button>
                      <button
                        id="login-password-submit-btn"
                        type="submit"
                        className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10"
                      >
                        Portal Giriş
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: Setup First-Time Password Screen */}
                {step === "create_password" && (
                  <motion.form
                    key="step-create-password"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onSubmit={handleCreatePasswordSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider inline-flex items-center space-x-1 animate-pulse">
                        <Key className="w-3 h-3" />
                        <span>İlk giriş / Şifrə Təyini</span>
                      </span>
                      <h2 className="text-base font-bold">Yeni Şifrə Təyin Edin</h2>
                      <p className="text-xs text-slate-400">
                        Salam, <strong className="text-slate-200">{selectedUser?.fullName}</strong>! İnzibatçı sizi sistemdə qeydiyyatdan keçirib. Hesabı qorumaq üçün rəqəmsal şifrə yaradın.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Yeni Şifrə</label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            id="login-new-password-input"
                            type="password"
                            placeholder="Ən azı 4 simvol"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                              darkMode ? "bg-[#121f45] border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                            required
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Şifrənin Təkrarı</label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            id="login-confirm-password-input"
                            type="password"
                            placeholder="Şifrəni yenidən yazın"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none ${
                              darkMode ? "bg-[#121f45] border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-slate-800 hover:bg-slate-755 text-slate-300 font-bold text-xs py-2.5 rounded-xl transition-all"
                      >
                        Geri qayıt
                      </button>
                      <button
                        id="login-create-password-submit-btn"
                        type="submit"
                        className="flex-[2] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-emerald-500/10"
                      >
                        Şifrəni Təsdiqlə və Giriş Et
                      </button>
                    </div>
                  </motion.form>
                )}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Brand visual badge */}
        <p className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-widest leading-relaxed">
          Azərbaycan Respublikası Sənaye Təlimi İdarəetmə Kompleksi<br />
          Platform Veriyalığı: Canlı Ekosistem v3.5
        </p>
      </div>
    </div>
  );
}
