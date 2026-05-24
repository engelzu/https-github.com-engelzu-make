import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Droplet, Sun } from "lucide-react";

export default function ColorQuiz({ onClose, onComplete }: { onClose: () => void, onComplete: (palette: string) => void }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0); // < 0 = Fria, > 0 = Quente

  const questions = [
    {
      title: "Como sua pele reage ao sol?",
      icon: Sun,
      options: [
        { label: "Fica vermelha e queima fácil", value: -1, color: "bg-rose-100 text-rose-700" },
        { label: "Bronzeia fácil e fica dourada", value: 1, color: "bg-amber-100 text-amber-700" }
      ]
    },
    {
      title: "Olhe para as veias do seu pulso:",
      icon: Droplet,
      options: [
        { label: "Parecem azuis ou roxas", value: -1, color: "bg-indigo-100 text-indigo-700" },
        { label: "Parecem esverdeadas", value: 1, color: "bg-emerald-100 text-emerald-700" }
      ]
    },
    {
      title: "Quais joias iluminam mais seu rosto?",
      icon: Sparkles,
      options: [
        { label: "Joias em Prata", value: -1, color: "bg-stone-200 text-stone-700" },
        { label: "Joias em Ouro", value: 1, color: "bg-yellow-200 text-yellow-800" }
      ]
    }
  ];

  const handleAnswer = (val: number) => {
    setScore(prev => prev + val);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Concluiu
      const result = score + val > 0 ? "Quente (Outono/Primavera)" : "Fria (Inverno/Verão)";
      setStep(99); // Tela de resultado
      setTimeout(() => {
        onComplete(result);
        onClose();
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-stone-100 text-stone-500 rounded-full hover:bg-stone-200 z-10">
          <X className="w-5 h-5" />
        </button>

        {step < questions.length ? (
          <div className="p-8 pt-12 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-rose-500 tracking-widest uppercase mb-4">Pergunta {step + 1} de 3</span>
            {(() => { const Icon = questions[step].icon; return <Icon className="w-12 h-12 text-stone-300 mb-6" />; })()}
            <h2 className="font-serif text-2xl text-stone-900 mb-8">{questions[step].title}</h2>
            
            <div className="flex flex-col gap-4 w-full">
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full p-4 rounded-2xl font-medium transition-all hover:scale-105 active:scale-95 ${opt.color}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 py-16 flex flex-col items-center text-center bg-stone-900 text-white">
            <Sparkles className="w-16 h-16 text-rose-400 mb-6 animate-[spin_4s_linear_infinite]" />
            <h2 className="font-serif text-3xl mb-4">Sua Paleta é...</h2>
            <div className="text-rose-400 font-bold text-2xl tracking-wide uppercase px-6 py-3 bg-rose-500/10 rounded-2xl border border-rose-500/20">
              {score > 0 ? "Quente" : "Fria"}
            </div>
            <p className="text-stone-400 mt-6 text-sm">
              Estamos personalizando suas dicas...
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
