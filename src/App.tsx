import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  MessageCircle, 
  BookOpen, 
  ArrowRight,
  Clock,
  ShieldCheck,
  AlertCircle,
  Lock,
  Zap,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

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
  <section className="relative min-h-screen flex flex-col overflow-hidden bg-black text-white">
    <header className="h-12 border-b border-white/5 flex items-center px-4 md:px-8 justify-between bg-zinc-950">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
          Oferta por Tempo Limitado: 85% OFF
        </span>
      </div>
    </header>

    <div className="flex-1 flex items-center px-4 md:px-8 py-12">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full">
            <Zap size={14} className="text-red-600" fill="currentColor"/>
            <span className="text-[10px] font-black uppercase text-red-500">Método Direito Simplificado</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            A BASE DO <br/> <span className="text-red-600">DIREITO</span> <br/> SEM MISTÉRIO.
          </h1>
          <p className="text-zinc-400 text-xl font-bold max-w-lg leading-snug italic">
            "Aprenda o que a faculdade demora meses para ensinar em apenas 7 dias."
          </p>
          <Button featured className="w-full sm:w-fit px-12 py-6 text-xl">
            QUERO O COMBO COMPLETO <ArrowRight size={20} />
          </Button>
          <div className="flex items-center gap-4 border-t border-white/5 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-14 h-14 rounded-full border-4 border-black object-cover" alt="Aluno" />
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex text-yellow-400"><Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /></div>
              <p className="text-xs font-black uppercase tracking-tight text-white">+400 CALOUROS APROVADOS</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-red-600/20 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
             <iframe className="w-full h-full" src="https://www.youtube.com/embed/PbOzmQFBgU8" frameBorder="0" allowFullScreen></iframe>
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
      title: "E-book 01: O Início",
      tagline: "Primeiros 6 meses em 7 dias",
      video: "https://www.youtube.com/embed/PbOzmQFBgU8",
      images: ["/ebook1.png", "/preview1.png", "/preview2.png"],
      benefits: ["Sequência lógica para iniciantes", "Fim do juridiquês difícil", "Manual da Graduação (BÔNUS)"]
    },
    ebook2: {
      title: "E-book 02: Avançado",
      tagline: "Estratégias do 2º Semestre",
      video: "https://www.youtube.com/embed/PbOzmQFBgU8",
      images: ["/ebook2.png", "/preview3.png", "/preview4.png", "/preview5.png"],
      benefits: [
        "Esquemas Simplificados",
        "Exemplos Práticos Reais",
        "Associação Direta com o Código",
        "Espaço para anotações",
        "Plano de Estudo (7 dias)",
        "Simulados por disciplina"
      ]
    }
  };

  return (
    <section className="py-24 px-4 bg-black text-white border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">POR DENTRO DO <span className="text-red-600">MÉTODO</span></h2>
          <div className="flex p-1 bg-zinc-900/50 rounded-2xl w-fit mx-auto border border-white/10">
            {['ebook1', 'ebook2'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${activeTab === tab ? 'bg-red-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
              >
                {tab === 'ebook1' ? 'E-book 01' : 'E-book 02'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
               <iframe className="w-full h-full" src={content[activeTab].video} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-black uppercase text-red-600">{content[activeTab].title}</h3>
              <div className="grid gap-4">
                {content[activeTab].benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 items-center font-bold text-zinc-300 italic">
                    <CheckCircle2 size={20} className="text-red-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase text-zinc-600 tracking-[0.3em]">Arraste para conhecer as páginas:</h4>
            <div className="flex gap-5 overflow-x-auto pb-10 snap-x no-scrollbar">
              {content[activeTab].images.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl snap-center bg-zinc-800 transition-transform hover:scale-[1.02]">
                  <img src={img} className="w-full h-full object-cover" alt="Preview" />
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-red-600/5 border border-red-600/10 text-center">
              <p className="text-[10px] font-black uppercase text-red-500 tracking-widest">Acesso Vitalício Incluído nesta versão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 px-4 bg-zinc-950">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle title="QUEM JÁ TESTOU, APROVOU" subtitle="Veja o que dizem os calouros que simplificaram seus estudos." />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Letícia M.", text: "O Ebook 1 me salvou na primeira semana. Os conceitos que pareciam impossíveis ficaram claros." },
          { name: "Ricardo F.", text: "Melhor investimento que fiz. O plano de estudos do Ebook 2 é sensacional para os simulados." },
          { name: "Ana Clara", text: "Finalmente entendi o código penal sem precisar de um dicionário do lado." }
        ].map((t, i) => (
          <Card key={i} className="border-zinc-800 hover:border-red-600/30 transition-all">
            <div className="flex text-yellow-400 mb-4"><Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/></div>
            <p className="text-zinc-400 font-medium italic mb-6">"{t.text}"</p>
            <p className="text-white font-black uppercase text-xs tracking-tighter">— {t.name}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Offers = () => (
  <section className="py-24 px-4 relative bg-black text-white">
     <div className="container mx-auto max-w-7xl">
      <SectionTitle title="ESCOLHA SEU PLANO" />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <Card className="flex flex-col opacity-80 hover:opacity-100 transition-all">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-zinc-500">E-Book Individual</h3>
            <p className="text-zinc-400 text-sm font-bold italic">Semestre 1 ou Semestre 2</p>
          </div>
          <div className="mb-8 space-y-2">
             <div className="text-zinc-600 line-through text-sm font-bold tracking-widest uppercase italic">R$ 67,90</div>
             <div className="text-6xl font-black tracking-tighter">R$ 37,90</div>
          </div>
          <Button primary={false} className="w-full mt-auto">COMPRAR APENAS UM</Button>
        </Card>

        <Card featured={true} className="flex flex-col h-full scale-105 relative z-10 shadow-[0_0_80px_rgba(234,179,8,0.1)] border-yellow-400 py-12">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[11px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest">OFERTA LIMITADA</div>
          <div className="mb-8">
            <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">COMBO <br/> <span className="text-yellow-400 underline">ESPECIAL 2026</span></h3>
            <p className="text-sm uppercase font-black text-zinc-300 tracking-tighter">E-Book 1 + E-Book 2 + TODOS OS BÔNUS</p>
          </div>
          <div className="mb-10 space-y-2">
             <div className="text-zinc-500 line-through text-lg font-bold italic">De R$ 157,90 por</div>
             <div className="text-8xl font-black text-yellow-400 tracking-tighter leading-none">R$ 57,90</div>
          </div>
          <Button featured={true} className="w-full text-2xl mt-auto py-8">GARANTIR MINHA VAGA AGORA</Button>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400 tracking-widest">
              <CheckCircle2 size={14} className="text-yellow-400" /> Acesso Vitalício
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400 tracking-widest">
              <CheckCircle2 size={14} className="text-yellow-400" /> Todos os Bônus (Cronograma + Manuais)
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-24 px-4 bg-zinc-950 border-t border-white/5">
    <div className="container mx-auto max-w-4xl text-center">
      <div className="relative inline-block mb-12">
        <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative p-10 bg-red-600 rounded-full shadow-2xl">
          <ShieldCheck size={80} className="text-white" />
        </div>
      </div>
      <h2 className="text-6xl font-black mb-6 uppercase tracking-tighter italic">SATISFAÇÃO OU <br/> SEU DINHEIRO DE VOLTA</h2>
      <p className="text-zinc-400 text-2xl mb-8 font-bold italic">7 dias de garantia incondicional.</p>
      <div className="max-w-xl mx-auto p-6 border border-white/5 rounded-2xl bg-black/50 text-zinc-500 text-sm font-medium">
        "Se por qualquer motivo você achar que o Direito Simplificado não é para você, basta nos enviar um e-mail. Devolvemos 100% do seu valor, sem perguntas e sem letras miúdas."
      </div>
    </div>
  </section>
);

const Biography = () => (
   <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
       <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row gap-16 items-center border border-white/5 relative z-10">
         <div className="w-48 h-48 md:w-64 md:h-64 bg-zinc-800 rounded-3xl overflow-hidden border-4 border-red-600 -rotate-3 shrink-0 shadow-2xl">
           <img src="https://picsum.photos/seed/legal/500/500" alt="Natan Campos" className="w-full h-full object-cover" />
         </div>
         <div className="flex-1 text-left">
           <span className="text-red-500 font-black uppercase text-xs tracking-[0.5em] mb-4 block">Sobre o Autor</span>
           <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Opa! Muito <br/> prazer 👋</h2>
           <p className="text-zinc-400 text-xl font-bold leading-relaxed italic">
             Me chamo <span className="text-white">Natan Campos</span>. Sou estudante de Direito e criei o método que eu gostaria de ter recebido no primeiro dia de aula. <br/><br/>
             Chega de textos impossíveis e termos que ninguém usa. Aqui o foco é **clareza** e **resultado**.
           </p>
         </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-8 border-t border-white/5 bg-zinc-950 text-center text-white">
    <div className="flex justify-center gap-8 mb-10">
       <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-red-600 transition-all"><MessageCircle size={20}/></a>
       <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-red-600 transition-all"><Calendar size={20}/></a>
    </div>
    <div className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.5em] mb-4">© 2026 DIREITO SIMPLIFICADO</div>
    <div className="text-[8px] text-zinc-800 font-bold uppercase">Todos os direitos reservados. Este site não é afiliado ao Google ou Meta.</div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-red-500 selection:text-white">
      <Hero />
      <Solution />
      <Testimonials />
      <Offers />
      <Guarantee />
      <Biography />
      <Footer />
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <Button featured className="w-full py-6 text-xl font-black shadow-2xl">QUERO O COMBO COMPLETO</Button>
      </motion.div>
    </main>
  );
}