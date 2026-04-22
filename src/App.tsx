/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion'; // Ajustado de 'motion/react' para 'framer-motion'
import { 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  Layout, 
  Lock, 
  HelpCircle, 
  Instagram, 
  ArrowRight,
  Clock,
  ShieldCheck,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { useState, useRef } from 'react';

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
        <div className="space-y-8">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            PARE DE SE <br/> <span className="text-red-600">PERDER</span> <br/> NO DIREITO.
          </h1>
          <p className="text-zinc-400 text-xl font-bold max-w-lg italic">
            "Entenda o 1° Ano com o método aprovado por +400 calouros. Direto e sem confusão."
          </p>
          <Button featured className="w-full sm:w-fit px-12 py-6 text-xl">
            QUERO MEU ACESSO <ArrowRight size={20} />
          </Button>
          <div className="flex items-center gap-4 pt-4">
             <div className="text-zinc-500 line-through text-sm font-bold">R$ 157,90</div>
             <div className="text-2xl font-black text-red-500">COMBO: R$ 57,90</div>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => {
  const [activeTab, setActiveTab] = useState<'ebook1' | 'ebook2'>('ebook1');

  return (
    <section className="py-24 px-4 bg-black text-white border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">O QUE MUDA NO SEU <span className="text-red-600">ESTUDO?</span></h2>
          <div className="flex p-1 bg-zinc-900 rounded-2xl w-fit mx-auto border border-white/10">
            <button 
              onClick={() => setActiveTab('ebook1')}
              className={`px-10 py-4 rounded-xl font-black uppercase text-xs transition-all ${activeTab === 'ebook1' ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
            >
              E-book 01
            </button>
            <button 
              onClick={() => setActiveTab('ebook2')}
              className={`px-10 py-4 rounded-xl font-black uppercase text-xs transition-all ${activeTab === 'ebook2' ? 'bg-red-600 text-white' : 'text-zinc-500'}`}
            >
              E-book 02
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 italic">
              <CheckCircle2 size={24} className="text-red-600 shrink-0" />
              <p className="font-bold text-zinc-300">Acesso a uma sequência lógica que prioriza o entendimento sem complicação.</p>
            </div>
            <div className="flex gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 italic">
              <CheckCircle2 size={24} className="text-red-600 shrink-0" />
              <p className="font-bold text-zinc-300">Clareza e segurança para acompanhar a faculdade com autoridade.</p>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="w-64 aspect-[3/4] bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-white/10 rotate-[-5deg] relative z-20">
              <img src={activeTab === 'ebook1' ? "/ebook1.png" : "/ebook2.png"} className="w-full h-full object-cover" />
            </div>
            <div className="w-64 aspect-[3/4] bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-white/10 rotate-[5deg] absolute opacity-30">
               <img src={activeTab === 'ebook1' ? "/ebook2.png" : "/ebook1.png"} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Offers = () => (
  <section className="py-24 px-4 bg-zinc-950">
     <div className="container mx-auto max-w-7xl">
      <SectionTitle title="Escolha seu acesso:" subtitle="Invista agora e garanta sua vantagem competitiva." />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        <Card className="flex flex-col">
          <h3 className="text-2xl font-black mb-1 uppercase text-zinc-400">E-Book Semestre 1</h3>
          <p className="text-xs font-bold text-zinc-500 mb-8 italic">Os primeiros 6 meses em 7 dias</p>
          <div className="mb-8">
             <div className="text-zinc-600 line-through text-sm font-bold">R$ 67,90</div>
             <div className="text-4xl font-black text-white">R$ 37,90</div>
          </div>
          <Button primary={false} className="mt-auto w-full">COMPRAR AGORA</Button>
        </Card>

        <Card featured={true} className="flex flex-col scale-105 border-yellow-400">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 uppercase">Mais Vendido</div>
          <h3 className="text-3xl font-black mb-1 uppercase">COMBO ESPECIAL 2026</h3>
          <p className="text-xs font-black text-yellow-400 mb-8 uppercase">E-Book 1 + E-Book 2 + 4 Bônus</p>
          <div className="mb-8">
             <div className="text-zinc-500 line-through text-sm font-bold">De R$ 157,90 por</div>
             <div className="text-6xl font-black text-yellow-400">R$ 57,90</div>
          </div>
          <Button featured={true} className="mt-auto w-full">GARANTIR MINHA VAGA</Button>
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
        <img src="https://picsum.photos/seed/legal/400/400" className="w-full h-full object-cover" />
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