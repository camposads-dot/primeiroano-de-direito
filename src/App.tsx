import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Instagram, 
  ArrowRight,
  ChevronDown,
  Star 
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

  const content: Record<number, any> = {
    1: {
      image: "/ebook1.png",
      video: "https://www.youtube.com/embed/0esmfaCBjOI",
      features: ["Sequência lógica sem complicação.", "Exemplos Práticos", "Associação com o Código", "Clareza e segurança total."]
    },
    2: {
      image: "/ebook2.png",
      video: "https://www.youtube.com/embed/pzQFMvp9LRk",
      features: ["Esquemas Simplificados", "Exemplos Práticos", "Associação com o Código", "Simulado de prova no final"]
    }
  };

  return (
    <section className="py-16 bg-black text-white border-y border-white/5">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-10 italic leading-tight text-white">
          O QUE MUDA NO SEU <span className="text-red-600">ESTUDO?</span>
        </h2>
        <div className="flex p-1 bg-zinc-900 rounded-2xl border border-white/10 mb-10">
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] transition-all ${activeTab === 1 ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 01
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] transition-all ${activeTab === 2 ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 02
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mb-10 items-center">
          <img src={content[activeTab].image} className="w-full aspect-[3/4] object-cover rounded-lg border border-white/10 shadow-2xl" alt="Capa" />
          <div className="relative w-full aspect-[3/4] bg-zinc-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
             <iframe src={content[activeTab].video} className="absolute top-0 left-0 w-full h-full border-0" allowFullScreen title="Demonstração"></iframe>
          </div>
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
          <span className="text-red-500 font-black mb-4 uppercase text-[10px] tracking-[0.2em]">Simulado de Prova</span>
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
    <SectionTitle title="Para quem é esse combo?" subtitle="Identifique sua fase e veja como podemos acelerar seu aprendizado." />
    <div className="max-w-3xl w-full space-y-6 text-white">
      {[
        { t: "Estudantes do 2° Período", d: "Que querem dar continuidade ao estudo com mais segurança e clareza." },
        { t: "Calouros de Direito", d: "Ainda não entendem as regras básicas e se sentem perdidos nos primeiros dias." },
        { t: "Veteranos de Revisão", d: "Que precisam revisar o conteúdo inicial com precisão, lógica e autoridade." }
      ].map((item, i) => (
        <div key={i} className="bg-zinc-900/50 border-l-4 border-red-600 p-8 rounded-r-2xl border border-white/5">
          <h3 className="text-red-500 font-black text-xl mb-2 uppercase">{item.t}</h3>
          <p className="text-zinc-300 italic font-medium leading-relaxed">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const ExclusiveBonus = () => {
  const bonuses = [
    { title: "Teoria Pura do Direito", description: "Compreenda o Direito em sua essência.", image: "/bonus1.png" },
    { title: "Fatores de Mudança", description: "Entenda porque as leis mudam no sistema jurídico.", image: "/bonus2.png" },
    { title: "As Escolas do Direito", description: "Conheça as escolas que influenciaram o ordenamento.", image: "/bonus3.png" },
    { title: "Direito Natural VS Positivo", description: "O debate que influencia os sistemas jurídicos.", image: "/bonus4.png" }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-center text-4xl md:text-5xl font-black uppercase mb-12">BÔNUS <span className="text-red-600">EXCLUSIVOS</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-red-600/30 transition-all group">
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-800">
                <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1 block">Grátis Hoje</span>
                <h3 className="text-lg font-black uppercase leading-tight text-white mb-2">{bonus.title}</h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickSummary = () => (
  <section className="py-20 px-4 bg-black">
    <div className="container mx-auto max-w-2xl bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-black uppercase mb-1 leading-none text-white tracking-tighter">Não leu tudo?</h2>
      <h3 className="text-3xl md:text-4xl font-black uppercase mb-10 text-red-600 leading-none tracking-tighter">Resumo pra você:</h3>
      <div className="space-y-8 text-zinc-400 font-bold italic text-lg leading-snug">
        <p>Se quer aprender em <span className="text-white">7 dias</span> o que levam <span className="text-white">6 meses</span>, esse método é para você.</p>
        <div className="border-l-4 border-red-600 pl-6 py-3 bg-white/5 rounded-r-2xl">
          <p className="text-zinc-200 not-italic font-medium">"Um guia oficial para acelerar seus estudos e dominar a base da faculdade."</p>
        </div>
        <p className="text-base font-medium text-zinc-500">Garante hoje <span className="text-white font-black">85% de desconto</span> + bônus. <br/>Pagamento único e 7 dias de garantia.</p>
      </div>
      <button className="w-full mt-10 py-6 bg-red-600 hover:bg-red-700 text-white font-black text-xl rounded-2xl uppercase transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
        OK, ME CONVENCEU!
      </button>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-black text-white overflow-hidden">
    <div className="text-center mb-12"><h2 className="text-4xl font-black uppercase italic">QUEM COMPROU <span className="text-red-600">APROVOU...</span></h2></div>
    <div className="flex gap-6 overflow-x-auto px-6 pb-10 scrollbar-hide snap-x">
      {[{n: "Lucas", t: "Os esquemas facilitam muito a memorização.", c: "bg-red-600"}, {n: "Ana", t: "Melhor investimento que fiz no 1° ano.", c: "bg-blue-600"}].map((rev, i) => (
        <div key={i} className="flex-shrink-0 w-80 bg-zinc-900 p-8 rounded-3xl border border-white/5 snap-center">
           <div className="flex items-center gap-4 mb-4">
             <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black ${rev.c}`}>{rev.n[0]}</div>
             <div className="text-yellow-500 flex gap-1"><Star size={12} fill="currentColor"/> <Star size={12} fill="currentColor"/> <Star size={12} fill="currentColor"/></div>
           </div>
           <p className="text-zinc-400 italic">"{rev.t}"</p>
        </div>
      ))}
    </div>
  </section>
);

const Offers = () => (
  <section className="py-24 px-4 bg-zinc-950 text-white text-center">
    <h2 className="text-4xl md:text-6xl font-black uppercase text-red-600 mb-12">Escolha seu acesso:</h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <Card className="flex flex-col border-white/10">
        <h3 className="text-2xl font-black mb-4 uppercase">E-Book Semestre 1</h3>
        <div className="text-4xl font-black mb-6">R$ 37,90</div>
        <Button primary className="w-full">COMPRAR INDIVIDUAL</Button>
      </Card>
      <Card className="flex flex-col border-yellow-400 scale-105 bg-yellow-400/5">
        <div className="bg-yellow-400 text-black text-[10px] font-black py-1 uppercase mb-4">Mais Vendido</div>
        <h3 className="text-3xl font-black mb-4 uppercase">COMBO ESPECIAL</h3>
        <div className="text-5xl font-black text-yellow-400 mb-8">R$ 57,90</div>
        <Button featured className="w-full">GARANTIR COMBO</Button>
      </Card>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const questions = [
    { q: "O material serve para qualquer faculdade?", a: "Sim! Abordamos os conceitos fundamentais de Direito no Brasil." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento no seu e-mail." }
  ];
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle title="Dúvidas Frequentes" />
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="rounded-2xl bg-zinc-900 border border-white/5">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between font-black uppercase text-xs text-white">
                {item.q} <ChevronDown className={openIndex === i ? 'rotate-180' : ''}/>
              </button>
              {openIndex === i && <div className="px-6 pb-6 text-zinc-400 italic text-sm">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Hero />
      <Solution />
      <ScrollingPhotos />
      <TargetAudience />
      <ExclusiveBonus />
      <Testimonials />
      <QuickSummary /> 
      <Offers />
      <FAQ />
      <footer className="py-12 border-t border-white/5 text-center text-[10px] font-black uppercase text-zinc-700">
        © 2026 DIREITO SIMPLIFICADO
      </footer>
    </main>
  );
}