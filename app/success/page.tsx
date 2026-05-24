"use client";

import { Sparkles } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] aspect-square rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] aspect-square rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-stone-900/80 backdrop-blur-md border border-stone-850 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
          <span className="text-white text-3xl font-bold">✓</span>
        </div>

        <h2 className="font-serif text-3xl font-bold tracking-tight mb-2 uppercase" style={{ textShadow: "0 0 10px rgba(16, 185, 129, 0.4)" }}>
          Pagamento Aprovado!
        </h2>
        <p className="text-stone-400 text-sm mb-8">
          Muito obrigado por apoiar o Estilo! Seu acesso completo e vitalício já está disponível.
        </p>

        {/* Activation Code Display */}
        <div className="w-full bg-stone-950 border border-stone-850 rounded-2xl p-6 mb-8 flex flex-col items-center">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-2 font-semibold">Seu Código de Ativação</p>
          <p className="text-rose-400 text-4xl font-mono font-bold tracking-widest select-all">
            ESTILO7
          </p>
          <p className="text-stone-500 text-[10px] mt-2">Dê dois toques no código acima para copiar</p>
        </div>

        {/* Automatic Unlock Button */}
        <a
          href="make-ia://success"
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 rounded-2xl shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-center mb-4 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          Retornar ao Aplicativo
        </a>

        <div className="w-full text-stone-500 text-xs space-y-2 mt-4 border-t border-stone-850 pt-6">
          <p>
            Se o botão acima não abrir seu app automaticamente, copie o código <strong className="text-stone-300">ESTILO7</strong>, abra o aplicativo Estilo e cole-o no campo de ativação.
          </p>
        </div>
      </div>
    </div>
  );
}
