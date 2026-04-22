import { motion, AnimatePresence } from 'framer-motion';
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
import { useState } from 'react';

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
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-base md:text-lg font-medium max-w-2xl mx-auto leading-tight"
      >
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
    className={`p-8 rounded-xl bg-zinc-900 border border-white/10 relative overflow-hidden ${featured ? 'border-yellow-400/50 bg-yellow-400/5 shadow-[0_0_30px_rgba(234,179,8,0.05)]' : ''} ${className}`}
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

    <div className="flex-1 flex items-center px-4 md:px-8 py-12">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tighter">
            PARE DE SE <span className="text-red-500 italic">PERDER</span> NO DIREITO.
          </h1>
          <p className="text-zinc-400 text-xl mb-8 max-w-lg font-medium leading-relaxed">
            Entenda a base do 1° Ano com o método aprovado por +400 calouros. Simples, direto e sem confusão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="px-10">
              QUERO MEU ACESSO <ArrowRight size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              {[12, 32, 45, 56].map((img, i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${img}`} className="w-12 h-12 rounded-full border-2 border-black object-cover" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white font-black tracking-tight">+400 ALUNOS SATISFEITOS</span>
              <div className="flex text-yellow-400 gap-0.5"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-red-600/20 rounded-2xl blur opacity-30"></div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
             <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => {
  const [activeTab, setActiveTab] = useState<'ebook1' | 'ebook2'>('ebook1');

  const content = {
    ebook1: {
      title: "E-book 01: O Guia do Calouro",
      video: "https://www.youtube.com/embed/PbOzmQFBgU8",
      images: ["/ebook1.png", "/preview1.png", "/preview2.png"],
      benefits: ["Sequência lógica sem complicação", "Clareza para acompanhar a faculdade", "Bônus: Manual da Graduação"]
    },
    ebook2: {
      title: "E-book 02: Direito Simplificado 2.0",
      video: "https://www.youtube.com/embed/PbOzmQFBgU8", // Trocar pelo vídeo do ebook 2
      images: ["/ebook2.png", "/preview3.png", "/preview4.png", "/preview5.png"],
      benefits: [
        "Esquemas Simplificados",
        "Exemplos Práticos",
        "Associação com o Código",
        "Espaço para anotações",
        "Plano de Estudo incluso",
        "Simulado de prova final"
      ]
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black text-white border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h3 className="text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-4">A Solução Definitiva</h3>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">O que muda no seu estudo?</h2>
          
          {/* SELETOR DE ABAS */}
          <div className="flex p-1 bg-zinc-900 rounded-xl w-fit mx-auto border border-white/10">
            <button 
              onClick={() => setActiveTab('ebook1')}
              className={`px-8 py-3 rounded-lg font-black uppercase text-sm transition-all ${activeTab === 'ebook1' ? 'bg-red-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              E-book 01
            </button>
            <button 
              onClick={() => setActiveTab('ebook2')}
              className={`px-8 py-3 rounded-lg font-black uppercase text-sm transition-all ${activeTab === 'ebook2' ? 'bg-red-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              E-book 02
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* VÍDEO E VANTAGENS */}
            <div className="space-y-8">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                <iframe className="w-full h-full" src={content[activeTab].video} frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="space-y-4 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <h4 className="text-xl font-black uppercase text-red-500 tracking-tight">O que você recebe:</h4>
                <div className="grid gap-3">
                  {content[activeTab].benefits.map((text, i) => (
                    <div key={i} className="flex gap-3 items-center font-bold text-zinc-300">
                      <CheckCircle2 size={18} className="text-red-500 shrink-0" />
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARROSSEL DE IMAGENS */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500">Preview por dentro:</h4>
              <div className="flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar">
                {content[activeTab].images.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-xl bg-zinc-800 snap-center">
                    <img src={img} className="w-full h-full object-cover" alt="Preview" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-zinc-600 font-black text-[10px] uppercase tracking-tighter">
                Arrastar para ver mais <ArrowRight size={12} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Offers = () => (
  <section className="py-24 px-4 relative bg-zinc-950 text-white">
     <div className="container mx-auto max-w-7xl">
      <SectionTitle title="Escolha seu acesso:" subtitle="Invista agora e garanta sua vantagem competitiva desde o 1º dia." />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        <Card className="flex flex-col h-full hover:border-white/20 transition-all">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2 uppercase">E-Book Semestre 1</h3>
            <p className="text-[11px] uppercase font-bold text-zinc-500 tracking-widest">Aprenda os primeiros 6 meses de Direito em 7 dias</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
             <div className="text-zinc-500 line-through text-sm font-bold">R$ 67,90</div>
             <div className="text-5xl font-black">R$ 37,90</div>
          </div>
          <Button primary={false} className="w-full mt-auto">COMPRAR AGORA</Button>
        </Card>

        <Card featured={true} className="flex flex-col h-full scale-105 relative z-10 shadow-[0_0_50px_rgba(234,179,8,0.1)] border-yellow-400">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-bl-lg uppercase tracking-tighter">Mais Vendido</div>
          <div className="mb-8">
            <h3 className="text-3xl font-black mb-2 uppercase">COMBO ESPECIAL 2026</h3>
            <p className="text-[11px] uppercase font-bold text-yellow-400/80 tracking-widest">E-Book 1 + E-Book 2 + 4 Bônus</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
             <div className="text-zinc-400 line-through text-base font-bold italic">De R$ 157,90 por</div>
             <div className="text-6xl font-black text-yellow-400">R$ 57,90</div>
          </div>
          <Button featured={true} className="w-full text-xl mt-auto py-6">GARANTIR MINHA VAGA</Button>
          <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-black uppercase text-zinc-400 tracking-tighter">
            <span className="flex items-center gap-1"><Lock size={12}/> Compra Segura</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12}/> Acesso Vitalício</span>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-24 px-4 bg-zinc-900/30 text-white border-y border-white/5">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-block mb-8 p-8 bg-red-600 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)]">
        <ShieldCheck size={64} className="text-white" />
      </motion.div>
      <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter italic">Risco Zero</h2>
      <p className="text-zinc-400 text-2xl mb-4 font-bold tracking-tight">7 dias de garantia incondicional.</p>
      <p className="text-zinc-500 text-sm max-w-md mx-auto">Se você não entender a base do direito em 7 dias, devolvemos 100% do seu dinheiro sem perguntas.</p>
    </div>
  </section>
);

const Biography = () => (
   <section className="py-24 px-4 bg-black text-white">
    <div className="container mx-auto max-w-5xl">
       <div className="bg-zinc-900 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-white/10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-5"><Layout size={200}/></div>
         <div className="w-32 h-32 md:w-48 md:h-48 bg-zinc-800 rounded-2xl overflow-hidden border-2 border-red-600 rotate-3 shrink-0">
           <img src="https://picsum.photos/seed/legalexpert/400/400" alt="Natan Campos" className="w-full h-full object-cover" />
         </div>
         <div className="flex-1 text-left z-10">
           <span className="text-red-500 font-black uppercase text-xs tracking-widest mb-2 block">O Criador</span>
           <h2 className="text-4xl font-black mb-6 tracking-tighter">Opa! Muito prazer 👋</h2>
           <p className="text-zinc-400 text-lg font-medium leading-relaxed">
             Me chamo <span className="text-white font-bold underline decoration-red-600">Natan Campos</span>. Estou no 6º período de Direito e ajudo calouros a entenderem a base do Direito de forma clara, sem o peso do juridiquês acadêmico.
           </p>
         </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-8 border-t border-white/5 bg-black text-center text-white">
    <div className="flex justify-center gap-6 mb-8 text-zinc-500">
      <Instagram size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
      <MessageCircle size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
    </div>
    <div className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.4em]">© 2026 Direito Simplificado</div>
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
      
      {/* Botão Flutuante Mobile */}
      <motion.div 
        initial={{ y: 100 }} 
        animate={{ y: 0 }} 
        className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
      >
        <Button className="w-full py-5 text-xl font-black shadow-[0_10px_30px_rgba(220,38,38,0.5)] bg-red-600">
          QUERO O COMBO COMPLETO
        </Button>
      </motion.div>
    </main>
  );
}

const PainPoints = () => (
  <section className="py-24 px-4 bg-zinc-950 border-y border-white/5 text-white relative">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle title="O Problema" subtitle="Por que o início da faculdade confunde tanta gente?" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <AlertCircle size={24} />, title: "Conceitos Abstratos", text: "Teorias complexas apresentadas sem contexto ou base sólida." },
          { icon: <MessageCircle size={24} />, title: "Juridiquês Difícil", text: "Termos técnicos que afastam o aluno antes mesmo de entender o básico." },
          { icon: <Clock size={24} />, title: "Sempre Atrasado", text: "A sensação de nunca estar dominando nada e sempre correndo atrás." }
        ].map((item, i) => (
          <Card key={i} className="group hover:bg-zinc-900/80 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">{item.icon}</div>
            <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);