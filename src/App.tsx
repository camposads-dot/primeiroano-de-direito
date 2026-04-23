import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Instagram, 
  ArrowRight,
  ChevronDown,
  Star // Adicione este aqui
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

  const content = {
    1: {
      image: "/ebook1.png",
      // Use o formato /embed/ do YouTube para evitar bloqueios e barras de rolagem
      video: "https://www.youtube.com/embed/0esmfaCBjOI?si=Avj9RzKA86KORTpJ",
      features: [
        "Sequência lógica sem complicação.",
        "Exemplos Práticos",
        "Associação com o Código",
        "Clareza e segurança total."
      ]
    },
    2: {
      image: "/ebook2.png",
      video: "https://www.youtube.com/embed/pzQFMvp9LRk?si=gZv11brS-zBC-y5o",
      features: [
        "Esquemas Simplificados",
        "Exemplos Práticos",
        "Associação com o Código",
        "Espaço para anotações",
        "Plano de Estudo incluso",
        "Simulado de prova no final de cada disciplina"
      ]
    }
  };

  return (
    <section className="py-16 bg-black text-white border-y border-white/5">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-10 italic leading-tight">
          O QUE MUDA NO SEU <span className="text-brand-red">ESTUDO?</span>
        </h2>

        {/* Abas */}
        <div className="flex p-1 bg-zinc-900 rounded-2xl border border-white/10 mb-10">
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] transition-all ${activeTab === 1 ? 'bg-brand-red text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 01
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] transition-all ${activeTab === 2 ? 'bg-brand-red text-white' : 'text-zinc-500'}`}
          >
            E-BOOK 02
          </button>
        </div>

        {/* MÍDIA ALINHADA (Mesmo Tamanho e Sem Rolagem) */}
        <div className="grid grid-cols-2 gap-4 w-full mb-10 items-center">
          {/* Capa do Ebook */}
          <div className="relative">
             <div className="absolute inset-0 bg-brand-red/10 blur-2xl rounded-full"></div>
             <img 
               src={content[activeTab].image} 
               alt="Capa Ebook" 
               className="w-full aspect-[3/4] object-cover rounded-lg border border-white/10 shadow-2xl relative z-10"
             />
          </div>

          {/* Vídeo YouTube Estático */}
          <div className="relative w-full aspect-[3/4] bg-zinc-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
             <iframe 
               src={content[activeTab].video}
               className="absolute top-0 left-0 w-full h-full border-0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               title="Demonstração"
             ></iframe>
          </div>
        </div>

        {/* BENEFÍCIOS ATUALIZADOS */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {content[activeTab].features.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-2 bg-zinc-900/40 p-4 rounded-lg border border-white/5 min-h-[80px] justify-center"
            >
              <CheckCircle2 size={16} className="text-brand-red shrink-0" />
              <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-tight leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>

        <Button featured={true} className="w-full mt-10 py-5 text-sm">
          GARANTIR COMBO COMPLETO
        </Button>
      </div>
    </section>
  );
};

const ScrollingPhotos = () => {
  // Lista de títulos dinâmicos para cada imagem
  const photoData = [
    { id: 1, title: "Simulado de Prova" },
    { id: 2, title: "Questões Comentadas" },
    { id: 3, title: "Esquemas Práticos" },
    { id: 4, title: "Resumos de Aula" },
    { id: 5, title: "Dicas de Estudo" },
    { id: 6, title: "Base do Direito" },
  ];

  // Duplicamos a lista para o scroll ser infinito e fluido
  const displayPhotos = [...photoData, ...photoData];

  return (
    <div className="w-full py-20 overflow-hidden bg-black border-b border-white/5">
      <div className="flex animate-scroll gap-8">
        {displayPhotos.map((item, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center w-64">
            <span className="text-red-500 font-black mb-4 uppercase text-[10px] tracking-[0.2em] text-center">
              {item.title}
            </span>
            <div className="w-full h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-transform hover:scale-105 duration-500 group">
              <img 
                src={`/foto${item.id}.png`} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Caso a imagem não carregue, mostra um fundo cinza com o título
                  e.currentTarget.src = "https://via.placeholder.com/256x320/18181b/ffffff?text=Carregando...";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const ExclusiveBonus = () => {
  const bonuses = [
    {
      title: "Teoria Pura do Direito - Hans Kelsen",
      description: "A obra mais importante para compreender o Direito em sua essência.",
      image: "/bonus1.png" // Substitua pelo caminho da sua imagem
    },
    {
      title: "Fatores de Mudança no Direito",
      description: "Entenda porque as leis mudam, quais forças influenciam o sistema jurídico.",
      image: "/bonus2.png"
    },
    {
      title: "As Escolas do Direito",
      description: "O Direito não é uma ciência exata, pois existem diversas formas de interpretação, conheça as escolas que influenciaram o ordenamento que conhecemos hoje.",
      image: "/bonus3.png"
    },
    {
      title: "Direito Natural VS Direito Positivo",
      description: "O debate entre Direito Natural e Direito Positivo não é apenas uma questão filosófica, mas também prática, já que influencia diretamente a forma como os sistemas jurídicos se estruturam e como os direitos individuais são protegidos ou limitados em diferentes sociedades.",
      image: "/bonus4.png"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            BÔNUS <span className="text-brand-red">EXCLUSIVOS</span>
          </h2>
          <p className="text-zinc-400 font-medium italic">
            Materiais estratégicos para acelerar sua jornada acadêmica.
          </p>
        </div>

        {/* Grid de Bônus: 2 colunas no desktop, 1 no mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-green-500/30 transition-all group"
            >
              {/* Miniatura da Imagem */}
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={bonus.image} 
                  alt={bonus.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Texto do Bônus */}
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] mb-1">
                  Grátis Hoje
                </span>
                <h3 className="text-lg font-black uppercase leading-tight mb-2">
                  {bonus.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Chamada Final */}
        <div className="mt-16 text-center">
          <Button featured={true} className="w-full md:w-auto px-16 py-6 text-xl red-glow">
            QUERO O COMBO COM TODOS OS BÔNUS
          </Button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // O ERRO ESTAVA AQUI: A lista 'reviews' precisa existir para o .map funcionar
  const reviews = [
    {
      name: "Lucas Silva",
      initial: "L",
      stars: 5,
      text: "O material é direto ao ponto. Consegui entender em uma semana o que o professor enrolou o mês todo.",
      color: "bg-red-600"
    },
    {
      name: "Mariana Costa",
      initial: "M",
      stars: 5,
      text: "Os esquemas facilitam demais a revisão para as provas. Vale cada centavo!",
      color: "bg-zinc-700"
    },
    {
      name: "Ricardo Alves",
      initial: "R",
      stars: 5,
      text: "Finalmente alguém que explica Direito sem usar palavras difíceis o tempo todo.",
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-black text-white selection:bg-red-600 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 italic leading-tight">
          QUEM COMPROU <span className="text-red-600">APROVOU...</span>
        </h2>
      </div>
      
      <div className="w-full relative">
        {/* Adicionei 'flex' e 'overflow-x-auto' para o scroll lateral funcionar */}
        <div className="flex gap-6 overflow-x-auto pb-8 px-[10%] snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-[85%] md:w-[400px] snap-center bg-zinc-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${review.color} shadow-inner text-white font-black uppercase text-2xl`}>
                  {review.initial}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{review.name}</h3>
                  <div className="flex gap-0.5 text-yellow-500">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-zinc-300 italic font-medium leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
              "Criminologia, Antropologia, História do Direito",
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

const QuickSummary = () => (
  <section className="py-20 px-4 bg-black">
    <div className="container mx-auto max-w-2xl bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-black uppercase mb-1 leading-none text-white tracking-tighter">Não leu tudo?</h2>
      <h3 className="text-3xl md:text-4xl font-black uppercase mb-10 text-red-600 leading-none tracking-tighter">Resumo pra você:</h3>
      <div className="space-y-8 text-zinc-400 font-bold italic text-lg leading-snug">
        <p>Se quer aprender em <span className="text-white">7 dias</span> o que levam <span className="text-white">6 meses</span>, esse método é para você.</p>
        <div className="border-l-4 border-red-600 pl-6 py-3 bg-white/5 rounded-r-2xl">
          <p className="text-zinc-200 not-italic font-medium text-base">"Um guia oficial para acelerar seus estudos e dominar a base da faculdade."</p>
        </div>
        <p className="text-base font-medium text-zinc-500">Garante hoje <span className="text-white font-black">85% de desconto</span> + bônus. <br/>Pagamento único e 7 dias de garantia.</p>
      </div>
      <button className="w-full mt-10 py-6 bg-red-600 hover:bg-red-700 text-white font-black text-xl rounded-2xl uppercase transition-all">OK, ME CONVENCEU!</button>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-24 px-6 bg-black text-white text-center border-t border-white/5">
    <div className="container mx-auto max-w-2xl">
      {/* Ícone de Escudo Vermelho */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="w-12 h-12 text-white"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 leading-none tracking-tighter">
        RISCO ZERO: <br/>
        <span className="text-white">GARANTIA INCONDICIONAL</span>
      </h2>

      <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-12 italic">
        Experimente o método por 7 dias. Se você não sentir clareza, segurança ou vantagem competitiva em seus estudos, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>

      {/* Selos de Confiança */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center justify-center gap-3 text-zinc-500 uppercase text-[10px] font-black tracking-widest">
          <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          Pagamento Seguro
        </div>
        <div className="flex items-center justify-center gap-3 text-zinc-500 uppercase text-[10px] font-black tracking-widest">
          <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          Acesso Instantâneo
        </div>
        <div className="flex items-center justify-center gap-3 text-zinc-500 uppercase text-[10px] font-black tracking-widest">
          <ArrowRight size={14} strokeWidth={3} />
          Satisfação Garantida
        </div>
      </div>

      <Button featured className="w-full py-6 text-xl">
        QUERO O COMBO COMPLETO
      </Button>
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
  <section className="py-24 px-6 bg-black">
    <div className="container mx-auto max-w-4xl">
      <div className="bg-zinc-900/40 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Foto com Glow de Autoridade */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 rounded-full"></div>
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-red-600 p-1 relative z-10">
              <img 
  src="/perfil.png" 
  alt="Natan Campos"
  className="w-full h-full rounded-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
/>
            </div>
          </div>
        </div>

        {/* Texto de Alta Conversão */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            OPA! MUITO PRAZER 👋
          </h2>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-200 font-medium leading-relaxed italic">
              Me chamo <span className="text-white font-black not-italic underline decoration-red-600 underline-offset-4">Natan Campos</span>. 
              Atualmente no <span className="text-white font-black">7º período de Direito</span>, já ajudei mais de 400 calouros a dominarem a base do curso sem termos técnicos complicados.
            </p>
            
            <p className="text-zinc-500 text-lg font-medium leading-relaxed">
              Minha missão é clara: <span className="text-zinc-300 font-bold italic">economizar o seu tempo.</span> Estudei na <span className="text-zinc-300 font-bold">PUC/RS</span> e desenvolvi uma estratégia prática para você aprender em 7 dias o que a faculdade tenta ensinar em meses.
            </p>
          </div>

          {/* Social Proof e Garantia */}
          <div className="pt-10 flex flex-col items-center gap-8 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                Método Validado
              </div>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                +400 Alunos Satisfeitos
              </div>
            </div>

            <a 
              href="https://instagram.com/nataneodireito" 
              target="_blank" 
              className="flex items-center gap-3 bg-zinc-800/50 hover:bg-zinc-800 px-6 py-3 rounded-full border border-white/10 transition-all group"
            >
              <Instagram size={20} className="group-hover:text-red-500 transition-colors" />
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white">@nataneodireito</span>
            </a>
          </div>
        </div>

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
      <ExclusiveBonus />
      <Testimonials />
      <Offers />
      <QuickSummary />
      <Guarantee />
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