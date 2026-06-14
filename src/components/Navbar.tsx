import React from "react";
import { BookOpen, User, Sun, Moon, Briefcase, Award, Users, FileCheck, HelpCircle, GraduationCap, Shield, LogOut } from "lucide-react";
import { User as UserType } from "../types";
import AtimLogo from "./AtimLogo";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentUser: UserType | null;
  onLogout: () => void;
}

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode, currentUser, onLogout }: NavbarProps) {
  const baseItems = [
    { id: "catalog", label: "Təlim Kataloqu", icon: BookOpen },
    { id: "workspace", label: "Mənim Dərslərim", icon: GraduationCap },
    { id: "exam", label: "Qiymətləndirmə", icon: FileCheck },
    { id: "verify", label: "Doğrulama", icon: Award },
    { id: "corporate", label: "Korporativ", icon: Users },
    { id: "mentorship", label: "Mentorluq", icon: HelpCircle },
    { id: "career", label: "Karyera & CV", icon: Briefcase },
  ];

  const adminItem = { id: "admin", label: "Admin Paneli", icon: Shield };

  const navItems = currentUser?.role === "admin" 
    ? [...baseItems, adminItem]
    : baseItems;

  const getInitials = (name: string) => {
    if (!name) return "HA";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  const nameAbbreviation = currentUser ? getInitials(currentUser.fullName) : "HA";
  const displayName = currentUser ? currentUser.fullName : "H.Ağazadə";


  return (
    <header className={`${darkMode ? "bg-[#0b1329] border-[#1e294b] text-slate-100" : "bg-white border-slate-100 text-slate-800"} border-b sticky top-0 z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Slogan */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("catalog")}>
            <AtimLogo variant="horizontal" darkMode={darkMode} />
          </div>

          {/* Nav Items */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`nav-tab-${item.id}`}
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? darkMode
                        ? "bg-[#1e294b] text-[#00bfff]"
                        : "bg-blue-50 text-[#0066cc]"
                      : darkMode
                      ? "text-slate-400 hover:text-slate-200 hover:bg-[#111c38]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3">
            <button
              id="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "text-yellow-400 hover:bg-[#1e294b]" : "text-slate-500 hover:bg-slate-100"
              }`}
              title={darkMode ? "Açıq Rejimə Keç" : "Qaranlıq Rejimə Keç"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className={`h-8 w-px ${darkMode ? "bg-slate-800" : "bg-slate-200"}`}></div>

            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
              }`}>
                {nameAbbreviation}
              </div>
              <span className="text-xs font-medium hidden sm:inline-block max-w-[120px] truncate">{displayName}</span>
            </div>

            {currentUser && (
              <>
                <div className={`h-8 w-px ${darkMode ? "bg-slate-800" : "bg-slate-200"}`}></div>
                <button
                  id="navbar-logout-btn"
                  onClick={onLogout}
                  className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="Sistemdən Çıxış"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
