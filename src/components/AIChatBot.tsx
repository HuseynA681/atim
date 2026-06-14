import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Loader2, Sparkles, AlertCircle, Bot, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AIChatBotProps {
  darkMode: boolean;
}

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIChatBot({ darkMode }: AIChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Salam! Mən ATİM Süni İntellekt rəqəmsal köməkçisiyəm. HƏSET/HSE normaları, Logistika, layihə idarəolunması (ISO, Nəqliyyat), SQL, İT proqramlaşdırma üzrə dərslərimizin mövzularını kəşf etmək yaxud mürəkkəb terminləri soruşmaq üçün buradayam. Necə kömək edə bilərəm?"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal.trim();
    setInputVal("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: messages.map((m) => ({
            role: m.role,
            content: m.text
          }))
        }),
      });

      const data = await res.json();
      const responseText = data.text;
      if (responseText) {
        setMessages((prev) => [...prev, { role: "model", text: responseText }]);
      } else {
        setMessages((prev) => [...prev, { role: "model", text: "Xəta baş verdi. Sistem xətası." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "model", text: "Yarımçıq server xətası baş verdi." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <button
        id="ai-chat-trigger-floating"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-[#00bfff] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all outline-none"
        title="AI Dərs Köçəkçisi"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        )}
      </button>

      {/* Main Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className={`absolute bottom-20 right-0 w-[420px] max-w-[90vw] h-[550px] rounded-3xl border shadow-xl flex flex-col overflow-hidden ${
              darkMode ? "bg-[#0c1022] border-[#222f5a]" : "bg-white border-slate-200"
            }`}
          >
            {/* Thread Header */}
            <div className="bg-gradient-to-r from-[#0066cc] to-[#00bfff] px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold leading-none uppercase">ATİM Tutor AI</h3>
                  <span className="text-[9px] font-medium tracking-wide text-blue-100 flex items-center gap-1 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                    <span>Gemini 3.5 Flash dərsləri</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  id="ai-chat-reset-chat"
                  onClick={() => {
                    if (window.confirm("Süni İntellekt söhbətini sıfırlamaq istəyirsiniz? Söhbət tarixçəsi silinəcək.")) {
                      setMessages([
                        {
                          role: "model",
                          text: "Salam! Mən ATİM Süni İntellekt rəqəmsal köməkçisiyəm. HƏSET/HSE normaları, Logistika, layihə idarəolunması (ISO, Nəqliyyat), SQL, İT proqramlaşdırma üzrə dərslərimizin mövzularını kəşf etmək yaxud mürəkkəb terminləri soruşmaq üçün buradayam. Necə kömək edə bilərəm?"
                        }
                      ]);
                    }
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                  title="Söhbəti Sıfırla"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  id="ai-chat-close-drawer"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bubble Thread Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed ${
              darkMode ? "bg-[#080b18]" : "bg-slate-50"
            }`}>
              {messages.map((m, idx) => {
                const isModel = m.role === "model";
                return (
                  <div key={idx} className={`flex ${isModel ? "justify-start" : "justify-end"}`}>
                    <div className={`p-3.5 rounded-2xl max-w-[85%] select-text whitespace-pre-wrap ${
                      isModel
                        ? darkMode
                          ? "bg-[#121c38] text-slate-100 border border-slate-550/10 rounded-tl-none"
                          : "bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none"
                        : "bg-blue-600 text-white rounded-tr-none"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className={`p-4 rounded-2xl ${darkMode ? "bg-[#121c38]" : "bg-white"} rounded-tl-none flex items-center space-x-2`}>
                    <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                    <span className="text-[10px] text-slate-400 font-mono">Dərs AI yazır...</span>
                  </div>
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            {/* Form Input Message */}
            <form onSubmit={handleSendMessage} className={`p-3 border-t flex gap-2 items-center ${
              darkMode ? "bg-[#0c1022] border-[#222f5a]" : "bg-white border-slate-100"
            }`}>
              <input
                id="ai-chatbot-input-field"
                type="text"
                placeholder="HSE, Logistika və ya digər sualları daxil edin..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className={`flex-1 px-3 py-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode ? "bg-[#121f45] border-slate-800 text-slate-200" : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              />
              <button
                id="ai-chatbot-submit-msg"
                type="submit"
                disabled={!inputVal.trim() || loading}
                className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shrink-0 transition-all disabled:opacity-40"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
