/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

const PainPoints = () => (

  <section className="py-16 px-4 bg-brand-dark/50 border-y border-white/5">

    <div className="container mx-auto max-w-6xl">

      <SectionTitle

        title="O  Problema"

        subtitle="Por que o início da faculdade confunde tanta gente?"

      />

      <div className="grid md:grid-cols-3 gap-6">

        {[

          { icon: <AlertCircle size={20} />, title: "Conceitos  Abstratos", text: "Teorias complexas apresentadas sem contexto ou base sólida." },

          { icon: <MessageCircle size={20} />, title: "Juridiquês  Difícil", text: "Termos técnicos que afastam o aluno antes mesmo de ele entender o básico." },

          { icon: <Clock size={20} />, title: "Sempre  Atrasado", text: "A sensação de nunca estar dominando nada e sempre correndo atrás." }

        ].map((item, i) => (

          <Card key={i} className="p-6 hover:border-brand-red/30 transition-colors">

            <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">

              {item.icon}

            </div>

            <h3 className="text-lg font-black mb-2 uppercase">{item.title}</h3>

            <p className="text-zinc-400 text-sm leading-snug">{item.text}</p>

          </Card>

        ))}

      </div>

    </div>

  </section>

);



const Solution = () => (

  <section className="py-16 px-4 relative overflow-hidden">

    <div className="container mx-auto max-w-6xl">

      <div className="grid lg:grid-cols-2 gap-12 items-center">



        {/* TEXTO */}

        <motion.div

          initial={{ opacity: 0, x: -30 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

        >

          <header className="mb-6">

            <h3 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">

              A Solução Definitiva

            </h3>

            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase mb-4 tracking-tighter text-white">

              O que muda no seu estudo?

            </h2>

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



        {/* IMAGENS + VÍDEOS */}

        <motion.div

          initial={{ opacity: 0, x: 30 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          className="flex flex-col items-center gap-6"

        >

          {/* IMAGENS (ESTILO ORIGINAL) */}

          <div className="flex -space-x-8 md:-space-x-12">

            {/* EBOOK 1 */}

            <div className="w-40 md:w-56 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">

              <img

                src="/ebook1.png"

                alt="Ebook 1"

                className="w-full h-full object-cover"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <p className="absolute bottom-3 left-3 text-[10px] font-black text-red-500 uppercase">

                E-book 01

              </p>

            </div>



            {/* EBOOK 2 */}

            <div className="w-40 md:w-56 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative mt-6 z-10">

              <img

                src="/ebook2.png"

                alt="Ebook 2"

                className="w-full h-full object-cover"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <p className="absolute bottom-3 left-3 text-[10px] font-black text-red-500 uppercase">

                E-book 02

              </p>

            </div>

          </div>



          {/* VÍDEOS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">

            <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-900">

              <iframe

                className="w-full h-full"

                src="https://www.youtube.com/embed/VIDEO1"

                title="Video 1"

                allowFullScreen

              />

            </div>

            <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-900">

              <iframe

                className="w-full h-full"

                src="https://www.youtube.com/embed/VIDEO2"

                title="Video 2"

                allowFullScreen

              />

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </section>

);



const Features = () => (

   <section className="py-24 px-4">

    <div className="container mx-auto max-w-7xl">

      <SectionTitle

        title="O  que  você  vai  encontrar"

        subtitle="Construído para quem não tem tempo a perder e quer resultados imediatos."

      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {[

          { icon: <Layout size={20} />, text: "Esquemas Simplificados" },

          { icon: <Layout size={20} />, text: "Exemplos Práticos" },

          { icon: <Layout size={20} />, text: "Associação com o Código" },

          { icon: <Layout size={20} />, text: "Espaço para anotações" },

          { icon: <Layout size={20} />, text: "Plano de Estudo incluso" },

          { icon: <Layout size={20} />, text: "Simulado de prova" },

        ].map((item, i) => (

          <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl hover:bg-white/10 transition-colors">

            <div className="text-brand-red">{item.icon}</div>

            <span className="font-semibold text-sm md:text-base">{item.text}</span>

          </div>

        ))}

      </div>

    </div>

  </section>

)



const TargetAudience = () => (

  <section className="py-24 px-4 bg-brand-card/30">

    <div className="container mx-auto max-w-7xl">

      <SectionTitle

        title="Para  quem  é  esse  combo?"

      />

      <div className="grid md:grid-cols-3 gap-8">

        {[

          { title: "Estudantes  do  2° Período", desc: "Que querem dar continuidade ao estudo com mais segurança." },

          { title: "Calouros  de  Direito", desc: "Ainda não entendem as regras básicas e se sentem perdidos nos primeiros dias." },

          { title: "Veteranos  de  Revisão", desc: "Que precisam revisar o conteúdo inicial para concursos ou prova da OAB." }

        ].map((item, i) => (

          <div key={i} className="p-8 border-l-4 border-brand-red bg-white/5 rounded-r-3xl">

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <p className="text-gray-400">{item.desc}</p>

          </div>

        ))}

      </div>

    </div>

  </section>

);



const Bonus = () => (

  <section className="py-16 px-4">

    <div className="container mx-auto max-w-5xl">

      <SectionTitle

        title="Bônus Inclusos"

        subtitle="Materiais estratégicos para acelerar sua jornada acadêmica."

      />

      <div className="grid md:grid-cols-2 gap-4">

        {[

          { title: "Manual da Graduação", desc: "Bibliografias e ferramentas essenciais para não perder tempo." },

          { title: "Cronograma Estruturado", desc: "Saiba exatamente o que estudar em cada um dos 10 dias." }

        ].map((item, i) => (

          <Card key={i} className="p-4 flex gap-4 items-center bg-zinc-900/40 border-white/5">

            <div className="w-16 h-16 bg-zinc-800 rounded-lg flex-shrink-0 overflow-hidden">

               <img src={`https://picsum.photos/seed/bonus${i}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />

            </div>

            <div>

              <p className="micro-label mb-0.5 !text-green-500">GRÁTIS HOJE</p>

              <h3 className="text-sm font-black uppercase mb-1">{item.title}</h3>

              <p className="text-zinc-500 text-[11px] leading-tight font-medium">{item.desc}</p>

            </div>

          </Card>

        ))}

      </div>

    </div>

  </section>

);



const Testimonials = () => {

  const scrollRef = useRef<HTMLDivElement>(null);



  const testimonials = [

    { name: "Mariana", text: "Finalmente entendi a lógica por trás de Introdução ao Estudo do Direito! Recomendadíssimo.", color: "bg-blue-500" },

    { name: "João Pedro", text: "A didática do Ebook 1 é impressionante. Salvei meu semestre nos últimos 7 dias.", color: "bg-green-500" },

    { name: "Lucas", text: "Os esquemas facilitam muito a memorização. Parabéns pelo método!", color: "bg-purple-500" },

    { name: "Ana Beatriz", text: "Se eu tivesse lido isso antes de começar a faculdade teria sofrido muito menos.", color: "bg-red-500" },

  ];



  return (

    <section className="py-24 px-4 overflow-hidden">

      <div className="container mx-auto max-w-7xl">

        <SectionTitle title="Quem  comprou  aprovou..." />

        <div

          ref={scrollRef}

          className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar"

        >

          {/* We'll use actual chat-style bubbles or cards */}

          {testimonials.map((t, i) => (

            <motion.div

              key={i}

              className="flex-shrink-0 w-[300px] snap-center glass p-6 rounded-3xl"

            >

              <div className="flex items-center gap-3 mb-4">

                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold`}>{t.name[0]}</div>

                <div>

                  <div className="font-bold">{t.name}</div>

                  <div className="flex text-yellow-500"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>

                </div>

              </div>

              <p className="text-gray-300 italic">"{t.text}"</p>

            </motion.div>

          ))}

          {/* Double them for mobile "scroll" feel */}

          {testimonials.map((t, i) => (

             <div key={`dup-${i}`} className="flex-shrink-0 w-[300px] snap-center glass p-6 rounded-3xl">

               <div className="flex items-center gap-3 mb-4">

                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold`}>{t.name[0]}</div>

                <div>

                  <div className="font-bold">{t.name}</div>

                  <div className="flex text-yellow-500"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>

                </div>

              </div>

              <p className="text-gray-300 italic">"{t.text}"</p>

             </div>

          ))}

        </div>

        <p className="text-center text-xs text-gray-500">Arrastar para o lado →</p>

      </div>

    </section>

  );

};



const Offers = () => (

  <section className="py-24 px-4 relative bg-zinc-950">

     <div className="container mx-auto max-w-7xl">

      <SectionTitle

        title="Escolha  seu  acesso:"

        subtitle="Invista agora e garanta sua vantagem competitiva desde o 1º dia."

      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Solo Option */}

        <Card className="flex flex-col h-full border-white/10 hover:border-white/30 transition-all group">

          <div className="mb-8">

            <h3 className="text-2xl font-black mb-1">E-Book  Semestre  1</h3>

            <p className="micro-label">Aprenda os primeiros 6 meses de Direito em 7 dias + 2 Bônus</p>

          </div>

          <div className="mb-8 flex items-baseline gap-2">

             <div className="text-zinc-500 line-through text-sm font-bold">R$ 67,90</div>

             <div className="text-4xl font-black">R$ 37,90</div>

          </div>

          <ul className="space-y-3 mb-10 flex-grow text-xs font-medium text-zinc-400">

            {[

              "E-Book 1: Os primeiros 6 meses de Direito em 7 Dias",

              "+2 Bônus Exclusivos",

              "Acesso vitalício",

              "Suporte Personalizado"

            ].map((text, i) => (

              <li key={i} className="flex items-center gap-3 italic">

                • {text}

              </li>

            ))}

          </ul>

          <Button primary={false} className="w-full">COMPRAR AGORA</Button>

        </Card>



        {/* Combo Option - Highlighted */}

        <Card featured={true} className="flex flex-col h-full border-2 scale-105 relative z-10 shadow-3xl">

          <div className="absolute top-0 right-0 bg-brand-yellow text-black text-[10px] font-black px-4 py-1 rounded-bl-lg uppercase">

            Mais Vendido

          </div>

          <div className="mb-8">

            <h3 className="text-3xl font-black mb-1">COMBO  ESPECIAL  2026</h3>

            <p className="micro-label text-zinc-300">E-Book 1 + E-Book 2 + 4 Bônus</p>

          </div>

          <div className="mb-8 flex items-baseline gap-2">

             <div className="text-zinc-500 line-through text-sm font-bold uppercase tracking-tight">De R$ 157,90 por</div>

             <div className="text-5xl font-black text-brand-yellow">R$ 57,90</div>

          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-10 text-[11px] font-bold text-zinc-300 uppercase tracking-tight">

            {[

              "Esquemas Simplificados",

              "Exemplos Práticos",

              "Plano de Estudo",

              "Simulados Reais"

            ].map((text, i) => (

              <div key={i} className="flex items-center gap-1">• {text}</div>

            ))}

          </div>

          <Button featured={true} className="w-full text-xl shadow-yellow-500/20">GARANTIR MINHA VAGA</Button>

        </Card>

      </div>

    </div>

  </section>

);



const Guarantee = () => (

  <section className="py-24 px-4 bg-brand-red/5">

    <div className="container mx-auto max-w-4xl text-center">

      <motion.div

        initial={{ opacity: 0, scale: 0.8 }}

        whileInView={{ opacity: 1, scale: 1 }}

        viewport={{ once: true }}

        className="inline-block mb-8 p-6 bg-brand-red rounded-full shadow-[0_0_40px_rgba(239,68,68,0.2)]"

      >

        <ShieldCheck size={64} className="text-white" />

      </motion.div>

      <h2 className="text-4xl font-extrabold mb-6">Risco Zero: Garantia Incondicional</h2>

      <p className="text-gray-400 text-xl leading-relaxed mb-10">

        Experimente o método por 7 dias. Se você não sentir clareza, segurança ou vantagem competitiva em seus estudos, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.

      </p>

      <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">

        <div className="flex items-center gap-2"><Lock size={16} /> Pagamento Seguro</div>

        <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Acesso Instantâneo</div>

        <div className="flex items-center gap-2"><ArrowRight size={16} /> Satisfação Garantida</div>

      </div>

    </div>

  </section>

);



const FAQ = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [

    { q: "O material serve para qualquer faculdade?", a: "Sim! Abordamos os conceitos fundamentais que são base de todas as grades curriculares de Direito no Brasil." },

    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com os links para download dos materiais." },

    { q: "Posso imprimir os E-books?", a: "Com certeza! Os materiais são entregues em PDF de alta qualidade, prontos para serem impressos ou usados em tablets." },

    { q: "Tem suporte para tirar dúvidas?", a: "Sim, oferecemos um canal de suporte personalizado por e-mail para todos os compradores do combo." }

  ];



  return (

    <section className="py-24 px-4">

      <div className="container mx-auto max-w-3xl">

        <SectionTitle title="Dúvidas Frequentes" />

        <div className="space-y-4">

          {questions.map((item, i) => (

            <div key={i} className="rounded-2xl glass overflow-hidden transition-all duration-300">

              <button

                onClick={() => setOpenIndex(openIndex === i ? null : i)}

                className="w-full p-6 text-left flex items-center justify-between font-bold text-lg"

              >

                {item.q}

                <HelpCircle size={20} className={`transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />

              </button>

              {openIndex === i && (

                <div className="px-6 pb-6 text-gray-400 leading-relaxed">

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

   <section className="py-24 px-4 bg-brand-dark overflow-hidden">

    <div className="container mx-auto max-w-5xl">

       <div className="glass rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border-white/10">

         <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">

           <img src="https://picsum.photos/seed/legalexpert/400/400" alt="Natan Campos" className="w-full h-full object-cover" referrerPolicy="no-referrer" />

         </div>

         <div className="flex-1 text-left">

           <h4 className="micro-label mb-2">Direito Simplificado</h4>

           <h2 className="text-3xl font-black mb-4">Opa! Muito prazer 👋</h2>

           <div className="space-y-4 text-zinc-400 leading-tight font-medium text-sm">

             <p>Me chamo <span className="text-white font-bold">Natan Campos</span>. Estou no 6º período de Direito e ajudo calouros — ou pessoas que desejam estudar Direito — a entenderem a base do Direito de forma clara e organizada.</p>

           </div>

           <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

              <div className="flex items-center gap-4 text-zinc-300 font-black uppercase text-[10px] tracking-widest">

                <ShieldCheck size={16} className="text-zinc-500" /> 7 DIAS DE GARANTIA • COMPRA SEGURA

              </div>

              <a href="#" className="text-white hover:text-brand-red transition-all">

                <Instagram size={20} />

              </a>

           </div>

         </div>

       </div>

    </div>

  </section>

);



const Footer = () => (

  <footer className="py-4 px-8 border-t border-white/5 bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-4 text-center">

    <p className="micro-label !text-zinc-500">

      Acesso vitalício • Suporte Personalizado • Para Calouros, Veteranos e Entusiastas

    </p>

    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">

      © 2026 Direito Simplificado

    </div>

  </footer>

);



const Summary = () => (

  <section className="py-16 px-4 bg-brand-dark">

    <div className="container mx-auto max-w-3xl">

      <Card className="p-8 border-brand-red/10 relative">

        <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tighter">Não leu tudo? <br/><span className="text-brand-red">Resumo pra você:</span></h2>

        <div className="space-y-4 text-zinc-400 text-sm md:text-base font-medium leading-normal">

          <p>Se quer aprender em <span className="text-white font-bold">7 dias</span> o que levam <span className="text-white font-bold">6 meses</span>, esse método é para você.</p>

          <div className="p-4 bg-zinc-900/50 border-l-2 border-brand-red rounded-r-lg">

            <p className="italic text-zinc-300">"Um guia oficial para acelerar seus estudos e dominar a base da faculdade."</p>

          </div>

          <p>Garante hoje <span className="text-white font-bold">85% de desconto</span> + bônus. Pagamento único e 7 dias de garantia.</p>

        </div>

        <div className="mt-8">

          <Button className="w-full md:w-auto px-10 py-3 text-base">OK, ME CONVENCEU!</Button>

        </div>

      </Card>

    </div>

  </section>

);



// Add this to index.css or use inline for the pulse effect

// I'll add it to index.css in a moment, but let's update App.tsx first.



export default function App() {

  return (

    <main className="min-h-screen">

      <Hero />

      <PainPoints />

      <Solution />

      <Features />

      <TargetAudience />

      <Bonus />

      <Testimonials />

      <Offers />

      <Summary />

      <Guarantee />

      <FAQ />

      <Biography />

      <Footer />

     

      {/* Sticky Bottom CTA for Mobile */}

      <motion.div

        initial={{ y: 100 }}

        animate={{ y: 0 }}

        className="fixed bottom-6 left-6 right-6 z-50 md:hidden"

      >

        <Button className="w-full py-5 text-xl font-black shadow-[0_0_30px_rgba(239,68,68,0.5)]">

          QUERO O COMBO COMPLETO

        </Button>

      </motion.div>

    </main>

  );

}