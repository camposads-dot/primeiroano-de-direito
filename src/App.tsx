import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Instagram, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = '', primary = true, featured = false, ...props }: any) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-4 rounded-xl font-black text-lg uppercase tracking-tight transition-all duration-300 flex items-center justify-center gap-2 ${
      featured
        ? 'bg-yellow-400 text-black shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:bg-yellow-500'
        : primary 
          ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-700' 
          : 'bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700'
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ title, subtitle, centered = true }: any) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-4 uppercase text-white"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p className="text-zinc-400 text-base md:text-lg font-medium max-w-2xl mx-auto leading-tight italic">
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = '', featured = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden ${featured ? 'border-yellow-400/50 bg-yellow-400/5' : ''} ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
    <header className="h-12 border-b border-white/5 flex items-center px-4 md:px-8 justify-between bg-zinc-950">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
          Oferta por Tempo Limitado: 85% OFF
        </span>
      </div>
    </header>

    <div className="flex-1 flex items-center px-6 py-12">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            PARE DE SE <br/> <span className="text-red-600">PERDER</span> <br/> NO DIREITO.
          </h1>
          <p className="text-zinc-400 text-xl font-bold max-w-lg mx-auto lg:mx-0 italic">
            "Entenda o 1° Ano com o método aprovado por +400 calouros. Direto e sem confusão."
          </p>
          <Button featured className="w-full sm:w-fit px-12 py-6 text-xl mx-auto lg:mx-0">
            QUERO MEU ACESSO <ArrowRight size={20} />
          </Button>
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
             <div className="text-zinc-500 line-through text-sm font-bold">R$ 157,90</div>
             <div className="text-2xl font-black text-red-500">COMBO: R$ 57,90</div>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" frameBorder="0" allowFullScreen title="Video"></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-20 bg-black text-white border-y border-white/5">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-10 italic">
          O QUE MUDA NO SEU <span className="text-red-600">ESTUDO?</span>
        </h2>

        <div className="flex p-1 bg-zinc-900 rounded-2xl border border-white/10 mb-12">
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-8 py-3 rounded-xl font-black uppercase text-xs transition-all ${activeTab === 1 ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 01
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`px-8 py-3 rounded-xl font-black uppercase text-xs transition-all ${activeTab === 2 ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 02
          </button>
        </div>

        <div className="w-56 md:w-72 aspect-[3/4] rounded-xl overflow-hidden relative shadow-2xl mb-8">
           <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full"></div>
           <img 
            src={activeTab === 1 ? "/ebook1.png" : "/ebook2.png"} 
            alt="Capa Ebook" 
            className="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl relative z-10"
          />
        </div>

        <div className="w-full max-w-md space-y-3">
          {activeTab === 1 ? (
            <>
              <div className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                <p className="text-sm font-bold text-zinc-300">Acesso a uma sequência lógica sem complicação.</p>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                <p className="text-sm font-bold text-zinc-300">Clareza e segurança para acompanhar a faculdade.</p>
              </div>
            </>
          ) : (
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-white/5">
              <ul className="space-y-3">
                {[
                  "Esquemas Simplificados",
                  "Exemplos Práticos",
                  "Associação com o Código",
                  "Espaço para anotações",
                  "Plano de Estudo incluso",
                  "Simulado de prova no final"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-xs font-black uppercase text-zinc-300 tracking-tight">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" /> {item}
                  </li>
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
  <div className="w-full py-20 overflow-hidden bg-black border-b border-white/5">
    <div className="flex animate-scroll whitespace-nowrap gap-8">
      {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
        <div key={i} className="flex-shrink-0 flex flex-col items-center">
          <span className="text-red-500 font-black mb-4 uppercase text-[10px] tracking-[0.2em]">
            Simulado de Prova
          </span>
          <div className="w-64 h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-transform hover:scale-105 duration-500">
            <img src={`/foto${num}.png`} alt="Review" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TargetAudience = () => (
  <section className="py-24 px-4 flex flex-col items-center bg-black">
    <SectionTitle 
      title="Para quem é esse combo?" 
      subtitle="Identifique sua fase e veja como podemos acelerar seu aprendizado." 
    />
    <div className="max-w-3xl w-full space-y-6">
      <div className="bg-zinc-900/50 border-l-4 border-red-600 p-8 rounded-r-2xl border border-white/5 hover:bg-zinc-900 transition-colors">
        <h3 className="text-red-500 font-black text-xl mb-2 uppercase">Estudantes do 2° Período</h3>
        <p className="text-zinc-300 italic font-medium leading-relaxed">
          Que querem dar continuidade ao estudo com mais segurança e clareza.
        </p>
      </div>

      <div className="bg-zinc-900/50 border-l-4 border-red-600 p-8 rounded-r-2xl border border-white/5 hover:bg-zinc-900 transition-colors">
        <h3 className="text-red-500 font-black text-xl mb-2 uppercase">Calouros de Direito</h3>
        <p className="text-zinc-300 italic font-medium leading-relaxed">
          Ainda não entendem as regras básicas e se sentem perdidos nos primeiros dias.
        </p>
      </div>

      <div className="bg-zinc-900/50 border-l-4 border-red-600 p-8 rounded-r-2xl border border-white/5 hover:bg-zinc-900 transition-colors">
        <h3 className="text-red-500 font-black text-xl mb-2 uppercase">Veteranos de Revisão</h3>
        <p className="text-zinc-300 italic font-medium leading-relaxed">
          Que precisam revisar o conteúdo inicial com precisão, lógica e autoridade.
        </p>
      </div>
    </div>
  </section>
);

const Offers = () => (
  <section className="py-24 px-4 relative bg-zinc-950">
     <div className="container mx-auto max-w-7xl">
      {/* Título em Vermelho conforme solicitado */}
      <div className="mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase text-brand-red mb-4"
        >
          Escolha seu acesso:
        </motion.h2>
        <p className="text-zinc-muted text-base md:text-lg max-w-2xl mx-auto italic font-medium">
          Invista agora e garanta sua vantagem competitiva desde o 1º dia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
        
        {/* CARD 1: E-BOOK SEMESTRE 1 (Paleta Vermelha) */}
        <Card className="flex flex-col h-full border-brand-red/20 hover:border-brand-red/50 transition-all relative overflow-hidden group">
          {/* Sutil brilho vermelho ao fundo */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-red/5 blur-[80px] group-hover:bg-brand-red/10 transition-colors" />
          
          <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-black mb-1 uppercase text-white">E-Book Semestre 1</h3>
            <p className="text-[10px] uppercase font-bold text-brand-red tracking-[0.2em] mb-8">
              Aprenda os primeiros 6 meses de Direito em 7 dias!
            </p>
          </div>

          <div className="mb-8 flex items-baseline gap-2 relative z-10">
             <div className="text-zinc-600 line-through text-sm font-bold">R$ 67,90</div>
             <div className="text-5xl font-black text-white leading-none">R$ 37,90</div>
          </div>

          {/* Entrega de valor em Vermelho */}
          <ul className="space-y-4 mb-10 flex-grow relative z-10">
            {[
              "Introdução ao Estudo do Direito",
              "Ciências Políticas, Estado e Constituição",
              "Criminologia, Antropologia, Histótia do Direito",
              "+ 2 Bônus Exclusivos"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-center text-zinc-300 font-bold text-xs uppercase tracking-tight">
                <CheckCircle2 size={18} className="text-brand-red" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>

          <Button primary={true} className="w-full mt-auto py-5 red-glow">
            COMPRAR INDIVIDUAL
          </Button>
        </Card>

        {/* CARD 2: COMBO ESPECIAL (Destaque Amarelo com novos itens) */}
        <Card featured={true} className="flex flex-col h-full border-brand-yellow/50 scale-105 relative z-20 shadow-[0_0_60px_rgba(234,179,8,0.15)] bg-brand-card">
          <div className="absolute top-0 right-0 bg-brand-yellow text-black text-[10px] font-black px-6 py-2 uppercase tracking-tighter shadow-xl">
            Mais Vendido
          </div>
          
          <div className="mb-8">
            <h3 className="text-3xl font-black mb-1 uppercase text-white leading-[0.9]">COMBO <br/> <span className="text-brand-yellow">ESPECIAL 2026</span></h3>
            <p className="text-[10px] uppercase font-bold text-brand-yellow/80 mb-8 tracking-[0.2em]">E-Book 1 + E-Book 2 + 4 Bônus</p>
          </div>

          <div className="mb-8 flex items-baseline gap-2 leading-none">
             <div className="text-zinc-500 line-through text-sm font-bold uppercase">De R$ 157,90 por</div>
             <div className="text-6xl font-black text-brand-yellow leading-none">R$ 57,90</div>
          </div>

          {/* Novos itens solicitados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-10 text-[10px] font-black text-white uppercase tracking-tight">
            {[
              "Esquemas Simplificados",
              "Exemplos Práticos",
              "Associação com o Código",
              "Espaço para anotações",
              "Plano de Estudo incluso",
              "Simulado por disciplina"
            ].map((feature, i) => (
              <div key={i} className="flex gap-2 items-center bg-white/5 p-2 rounded-lg border border-white/5">
                <CheckCircle2 size={14} className="text-brand-yellow shrink-0" strokeWidth={3} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button featured={true} className="w-full text-xl py-6 yellow-glow">
            GARANTIR COMBO COMPLETO
          </Button>
        </Card>

      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const questions = [
    { q: "O material serve para qualquer faculdade?", a: "Sim! Abordamos os conceitos fundamentais que são base de todas as grades curriculares de Direito no Brasil." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com os links para download." },
    { q: "Posso imprimir os E-books?", a: "Com certeza! Os materiais são entregues em PDF de alta qualidade." }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle title="Dúvidas Frequentes" />
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between font-black uppercase text-sm text-white"
              >
                {item.q}
                <ChevronDown size={20} className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-zinc-400 italic font-medium">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Biography = () => (
  <section className="py-24 px-4 bg-zinc-950">
    <div className="container mx-auto max-w-4xl bg-zinc-900 rounded-[3rem] p-12 border border-white/10 text-center">
      <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-8 border-4 border-red-600 overflow-hidden shadow-2xl">
        <img src="https://picsum.photos/seed/legal/400/400" alt="Natan Campos" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-4xl font-black uppercase mb-4 text-white">Opa! Muito prazer 👋</h2>
      <p className="text-zinc-400 text-lg font-bold italic leading-relaxed max-w-2xl mx-auto">
        Me chamo <span className="text-white">Natan Campos</span>. Estou no 6º período de Direito e ajudo calouros a entenderem a base do Direito de forma clara e organizada.
      </p>
      <div className="mt-8 flex justify-center gap-6 text-zinc-500 uppercase font-black text-[10px] tracking-[0.2em]">
        <span>7 Dias de Garantia</span>
        <span>Compra Segura</span>
        <Instagram size={16} className="text-red-600" />
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-red-600">
      <Hero />
      <Solution />
      <ScrollingPhotos />
      <TargetAudience />
      <Offers />
      <FAQ />
      <Biography />
      <footer className="py-12 border-t border-white/5 text-center text-[10px] font-black uppercase text-zinc-700 tracking-widest">
        © 2026 DIREITO SIMPLIFICADO
      </footer>
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <Button featured className="w-full py-6 text-xl">GARANTIR COMBO AGORA</Button>
      </motion.div>
    </main>
  );
}