import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Instagram, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

// --- Componentes Baseados no seu CSS ---

const Button = ({ children, className = '', primary = true, featured = false, ...props }: any) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-4 rounded-xl font-display font-black text-lg uppercase tracking-tight transition-all duration-300 flex items-center justify-center gap-2 ${
      featured
        ? 'bg-brand-yellow text-black yellow-glow hover:brightness-110'
        : primary 
          ? 'bg-brand-red text-white red-glow hover:brightness-110' 
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ title, subtitle }: any) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl text-gradient mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p className="text-zinc-muted text-base md:text-lg max-w-2xl mx-auto italic font-medium">
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Seções ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden">
    <header className="h-12 border-b border-white/5 flex items-center px-4 md:px-8 justify-between bg-black/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-brand-red rounded-full pulse-dot"></div>
        <span className="micro-label !text-brand-red">
          Oferta Limitada: 85% OFF
        </span>
      </div>
    </header>

    <div className="flex-1 flex items-center px-6 py-12">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-8xl">
            PARE DE SE <br/> <span className="text-brand-red">PERDER</span> <br/> NO DIREITO.
          </h1>
          <p className="text-zinc-muted text-xl font-bold max-w-lg mx-auto lg:mx-0 italic">
            "Entenda o 1° Ano com o método aprovado por +400 calouros. Direto e sem confusão."
          </p>
          <Button featured className="w-full sm:w-fit px-12 py-6 text-xl mx-auto lg:mx-0">
            QUERO MEU ACESSO <ArrowRight size={20} />
          </Button>
          <div className="flex items-center justify-center lg:justify-start gap-4">
             <div className="text-zinc-500 line-through text-sm font-bold">R$ 157,90</div>
             <div className="text-2xl font-black text-brand-red">COMBO: R$ 57,90</div>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" frameBorder="0" allowFullScreen title="video"></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl text-center mb-10 italic">
          O QUE MUDA NO SEU <span className="text-brand-red">ESTUDO?</span>
        </h2>

        <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-12">
          <button onClick={() => setActiveTab(1)} className={`px-8 py-3 rounded-xl micro-label transition-all ${activeTab === 1 ? 'bg-brand-red text-white' : ''}`}>E-BOOK 01</button>
          <button onClick={() => setActiveTab(2)} className={`px-8 py-3 rounded-xl micro-label transition-all ${activeTab === 2 ? 'bg-brand-red text-white' : ''}`}>E-BOOK 02</button>
        </div>

        <div className="w-56 md:w-72 aspect-[3/4] rounded-xl overflow-hidden relative mb-8 red-glow">
           <img src={activeTab === 1 ? "/ebook1.png" : "/ebook2.png"} alt="Ebook" className="w-full h-full object-cover rounded-xl border border-white/10 relative z-10" />
        </div>

        <div className="w-full max-w-md space-y-3">
          {activeTab === 1 ? (
            <div className="glass p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 size={16} className="text-brand-red" />
              <p className="text-sm font-bold text-zinc-300">Sequência lógica sem complicação.</p>
            </div>
          ) : (
            <div className="glass p-5 rounded-xl">
               <ul className="space-y-2">
                 {["Esquemas", "Prática", "Código", "Simulados"].map((t, i) => (
                   <li key={i} className="micro-label flex items-center gap-2"><div className="w-1 h-1 bg-brand-red" /> {t}</li>
                 ))}
               </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ScrollingPhotos = () => (
  <div className="w-full py-20 overflow-hidden border-b border-white/5">
    <div className="animate-scroll gap-8">
      {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
        <div key={i} className="flex-shrink-0 flex flex-col items-center">
          <span className="micro-label mb-4 text-brand-red">Simulado de Prova</span>
          <div className="w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-transform hover:scale-105 duration-500">
            <img src={`/foto${num}.png`} alt="Review" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TargetAudience = () => (
  <section className="py-24 px-4 flex flex-col items-center">
    <SectionTitle title="Para quem é esse combo?" subtitle="Identifique sua fase e veja como podemos acelerar seu aprendizado." />
    <div className="max-w-3xl w-full space-y-6">
      {[
        { t: "Estudantes do 2° Período", d: "Para quem quer segurança e clareza na continuidade." },
        { t: "Calouros de Direito", d: "Para quem se sente perdido nos primeiros dias." },
        { t: "Veteranos de Revisão", d: "Para quem precisa revisar com precisão e lógica." }
      ].map((item, i) => (
        <div key={i} className="glass border-l-4 border-l-brand-red p-8 rounded-r-2xl hover:bg-white/10 transition-colors">
          <h3 className="text-brand-red text-xl mb-2">{item.t}</h3>
          <p className="text-zinc-300 italic font-medium">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Offers = () => (
  <section className="py-24 px-4 bg-zinc-950">
     <div className="container mx-auto max-w-7xl">
      <SectionTitle title="Escolha seu acesso:" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        <div className="glass p-8 rounded-2xl flex flex-col">
          <h3 className="text-2xl mb-1 text-zinc-400">E-Book Semestre 1</h3>
          <p className="text-xs text-zinc-500 mb-8 italic">6 meses em 7 dias</p>
          <div className="mb-8">
             <div className="text-zinc-600 line-through text-sm font-bold">R$ 67,90</div>
             <div className="text-4xl font-black text-white">R$ 37,90</div>
          </div>
          <Button primary={false} className="mt-auto w-full">COMPRAR AGORA</Button>
        </div>

        <div className="glass p-8 rounded-2xl flex flex-col scale-105 border-brand-yellow/50 relative">
          <div className="absolute top-0 right-0 bg-brand-yellow text-black text-[10px] font-black px-4 py-1 uppercase">Mais Vendido</div>
          <h3 className="text-3xl mb-1 text-brand-yellow">COMBO ESPECIAL 2026</h3>
          <p className="micro-label text-brand-yellow mb-8">E-Book 1 + E-Book 2 + 4 Bônus</p>
          <div className="mb-8">
             <div className="text-zinc-500 line-through text-sm font-bold">De R$ 157,90 por</div>
             <div className="text-6xl font-black text-brand-yellow">R$ 57,90</div>
          </div>
          <Button featured={true} className="mt-auto w-full">GARANTIR MINHA VAGA</Button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <SectionTitle title="Dúvidas Frequentes" />
      <div className="space-y-4">
        {[
          { q: "O material serve para qualquer faculdade?", a: "Sim! Conceitos fundamentais base de todas as grades do Brasil." },
          { q: "Como recebo o acesso?", a: "Imediatamente após o pagamento via e-mail." }
        ].map((item, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            <h4 className="text-sm mb-2 text-white">{item.q}</h4>
            <p className="text-zinc-400 italic text-sm">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Biography = () => (
  <section className="py-24 px-4 bg-zinc-950">
    <div className="container mx-auto max-w-4xl glass rounded-[3rem] p-12 text-center">
      <div className="w-32 h-32 mx-auto mb-8 border-4 border-brand-red rounded-full overflow-hidden red-glow">
        <img src="https://picsum.photos/seed/legal/400/400" alt="Natan" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-4xl mb-4">Opa! Muito prazer 👋</h2>
      <p className="text-zinc-muted text-lg font-bold italic max-w-2xl mx-auto">
        Me chamo <span className="text-white">Natan Campos</span>. 6º período de Direito, ajudando calouros a entenderem a base de forma clara.
      </p>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Solution />
      <ScrollingPhotos />
      <TargetAudience />
      <Offers />
      <FAQ />
      <Biography />
      <footer className="py-12 border-t border-white/5 text-center micro-label text-zinc-700">
        © 2026 DIREITO SIMPLIFICADO
      </footer>
    </main>
  );
}