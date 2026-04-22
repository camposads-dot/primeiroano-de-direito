import { motion } from 'framer-motion'; // Ajustado para framer-motion
import { 
  CheckCircle2, 
  ChevronRight, 
  Play, 
  Star, 
  MessageCircle, 
  BookOpen, 
  Layout, 
  FileText, 
  Lock, 
  HelpCircle, 
  Instagram, 
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useState, useRef } from 'react';

// --- Components ---

const Button = ({ children, className = '', primary = true, featured = false, ...props }: any) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-4 rounded-lg font-black text-lg uppercase tracking-tight transition-all duration-300 flex items-center justify-center gap-2 ${
      featured
        ? 'bg-yellow-400 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-yellow-500'
        : primary 
          ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220, 38, 38, 0.4)] hover:bg-red-700' 
          : 'bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700'
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ title, subtitle, centered = true }: any) => (
  <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-3 uppercase text-white"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-base md:text-lg font-medium max-w-xl mx-auto leading-tight"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = '', glow = false, featured = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-xl bg-zinc-900 border border-white/10 relative overflow-hidden ${featured ? 'border-yellow-400/50 bg-yellow-400/5' : ''} ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col overflow-hidden bg-black text-white">
    <header className="h-10 border-b border-white/10 flex items-center px-4 md:px-8 justify-between bg-black/40 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          Turma 2026: Acesso Prioritário
        </span>
      </div>
    </header>

    <div className="flex-1 flex items-center px-4 md:px-8">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            PARE DE SE <span className="text-red-500">PERDER</span> NO DIREITO.
          </h1>
          <p className="text-zinc-400 text-lg mb-6 max-w-lg">
            Entenda o 1° Ano com o método aprovado por +400 calouros. Simples, direto e sem confusão.
          </p>
          <Button className="mb-6">
            QUERO MEU ACESSO <ArrowRight size={18} />
          </Button>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              {[12, 32, 45, 56].map((img, i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${img}`} className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              ))}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-zinc-400 font-semibold">+400 alunos</span>
              <span className="text-[10px] text-zinc-500 uppercase">método testado</span>
            </div>
          </div>
          <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-between max-w-sm">
            <div className="text-zinc-500 line-through text-sm font-bold">R$ 157,90</div>
            <div className="text-xl font-black text-red-500">COMBO: R$ 57,90</div>
          </div>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
           <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="py-16 px-4 bg-zinc-950 border-y border-white/5 text-white">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle title="O Problema" subtitle="Por que o início da faculdade confunde tanta gente?" />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <AlertCircle size={20} />, title: "Conceitos Abstratos", text: "Teorias complexas apresentadas sem contexto ou base sólida." },
          { icon: <MessageCircle size={20} />, title: "Juridiquês Difícil", text: "Termos técnicos que afastam o aluno antes mesmo de entender o básico." },
          { icon: <Clock size={20} />, title: "Sempre Atrasado", text: "A sensação de nunca estar dominando nada e sempre correndo atrás." }
        ].map((item, i) => (
          <Card key={i} className="hover:border-red-500/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-black mb-2 uppercase">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-16 px-4 relative overflow-hidden bg-black text-white">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <header className="mb-6">
            <h3 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">A Solução Definitiva</h3>
            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase mb-4 tracking-tighter">O que muda no seu estudo?</h2>
          </header>
          <div className="space-y-4 text-zinc-400 font-medium">
            <div className="flex gap-3">
              <CheckCircle2 size={18} className="text-red-500 mt-0.5" />
              <p>Acesso a uma sequência lógica sem complicação.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 size={18} className="text-red-500 mt-0.5" />
              <p>Clareza e segurança para acompanhar a faculdade.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6">
          <div className="flex -space-x-8 md:-space-x-12">
            <div className="w-40 md:w-56 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-zinc-800">
              <img src="/ebook1.png" alt="Ebook 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] font-black text-red-500 uppercase">E-book 01</p>
            </div>
            <div className="w-40 md:w-56 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative mt-6 z-10 bg-zinc-800">
              <img src="/ebook2.png" alt="Ebook 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] font-black text-red-500 uppercase">E-book 02</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Offers = () => (
  <section className="py-24 px-4 relative bg-zinc-950 text-white">
     <div className="container mx-auto max-w-7xl">
      <SectionTitle title="Escolha seu acesso:" subtitle="Invista agora e garanta sua vantagem competitiva desde o 1º dia." />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="flex flex-col h-full hover:border-white/30 transition-all">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-1">E-Book Semestre 1</h3>
            <p className="text-[10px] uppercase font-bold text-zinc-500">Aprenda os primeiros 6 meses de Direito em 7 dias</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
             <div className="text-zinc-500 line-through text-sm font-bold">R$ 67,90</div>
             <div className="text-4xl font-black">R$ 37,90</div>
          </div>
          <Button primary={false} className="w-full mt-auto">COMPRAR AGORA</Button>
        </Card>

        <Card featured={true} className="flex flex-col h-full scale-105 relative z-10 shadow-2xl border-yellow-400">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-bl-lg uppercase">Mais Vendido</div>
          <div className="mb-8">
            <h3 className="text-3xl font-black mb-1">COMBO ESPECIAL 2026</h3>
            <p className="text-[10px] uppercase font-bold text-zinc-300">E-Book 1 + E-Book 2 + 4 Bônus</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
             <div className="text-zinc-500 line-through text-sm font-bold">De R$ 157,90 por</div>
             <div className="text-5xl font-black text-yellow-400">R$ 57,90</div>
          </div>
          <Button featured={true} className="w-full text-xl mt-auto">GARANTIR MINHA VAGA</Button>
        </Card>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-24 px-4 bg-red-600/5 text-white">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-block mb-8 p-6 bg-red-600 rounded-full shadow-lg">
        <ShieldCheck size={64} className="text-white" />
      </motion.div>
      <h2 className="text-4xl font-extrabold mb-6 uppercase">Risco Zero</h2>
      <p className="text-gray-400 text-xl mb-10">7 dias de garantia incondicional.</p>
    </div>
  </section>
);

const Biography = () => (
   <section className="py-24 px-4 bg-black text-white">
    <div className="container mx-auto max-w-5xl">
       <div className="bg-zinc-900 rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-white/10">
         <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-full overflow-hidden border-2 border-white/20">
           <img src="https://picsum.photos/seed/legalexpert/400/400" alt="Natan Campos" className="w-full h-full object-cover" />
         </div>
         <div className="flex-1 text-left">
           <h2 className="text-3xl font-black mb-4">Opa! Muito prazer 👋</h2>
           <p className="text-zinc-400 font-medium">Me chamo <span className="text-white font-bold">Natan Campos</span>. Estou no 6º período de Direito e ajudo calouros a entenderem a base do Direito de forma clara.</p>
         </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 px-8 border-t border-white/5 bg-zinc-950 text-center text-white">
    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">© 2026 Direito Simplificado</div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-red-500 selection:text-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Offers />
      <Guarantee />
      <Biography />
      <Footer />
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <Button className="w-full py-5 text-xl font-black shadow-2xl bg-red-600">QUERO O COMBO COMPLETO</Button>
      </motion.div>
    </main>
  );
}