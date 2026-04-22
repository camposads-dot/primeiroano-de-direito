/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Star,
  MessageCircle,
  Lock,
  HelpCircle,
  Instagram,
  ArrowRight,
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
        ? 'bg-yellow-400 text-black'
        : primary
        ? 'bg-red-600 text-white'
        : 'bg-zinc-800 text-white border border-white/10'
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const Card = ({ children, className = '' }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`p-6 rounded-xl bg-zinc-900 border border-white/10 ${className}`}
  >
    {children}
  </motion.div>
);

// --- HERO (ATUALIZADO COM VÍDEO) ---

const Hero = () => (
  <section className="min-h-screen flex items-center px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

      {/* TEXTO */}
      <div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          PARE DE SE <span className="text-red-500">PERDER</span> NO DIREITO
        </h1>

        <p className="text-gray-400 mb-6 text-lg">
          Entenda o 1° ano com o método aprovado por +400 calouros.
          Simples, direto e sem confusão.
        </p>

        <Button className="mb-4">
          QUERO MEU ACESSO <ArrowRight size={18} />
        </Button>

        {/* AVATARES */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/76.jpg",
              "https://randomuser.me/api/portraits/women/65.jpg"
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-8 h-8 rounded-full border border-white/20"
              />
            ))}
          </div>

          <span className="text-xs text-gray-500 uppercase">
            Método testado
          </span>
        </div>

        {/* PREÇO */}
        <div className="mt-6 bg-zinc-900 px-4 py-3 rounded-lg inline-flex gap-4 items-center">
          <span className="line-through text-gray-500 text-sm">
            R$ 157,90
          </span>
          <span className="text-red-500 font-bold text-lg">
            COMBO: R$ 57,90
          </span>
        </div>
      </div>

      {/* VÍDEO YOUTUBE */}
      <div className="w-full">
        <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PbOzmQFBgU8?si=c8ymorxtK93UOHpN"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  </section>
);

// --- OUTRAS SEÇÕES ---

const PainPoints = () => (
  <section className="py-16 px-4">
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { icon: <AlertCircle />, text: 'Conceitos difíceis' },
        { icon: <MessageCircle />, text: 'Juridiquês complicado' },
        { icon: <Clock />, text: 'Sempre atrasado' }
      ].map((item, i) => (
        <Card key={i}>
          {item.icon}
          <p>{item.text}</p>
        </Card>
      ))}
    </div>
  </section>
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 px-4">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="min-w-[250px]">
            <Star />
            <p>Excelente material!</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const data = [
    { q: 'Serve para qualquer faculdade?', a: 'Sim.' },
    { q: 'Como recebo?', a: 'Por email.' }
  ];

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      {data.map((item, i) => (
        <div key={i} className="mb-4">
          <button
            className="font-bold"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
          </button>
          {open === i && <p className="text-gray-400">{item.a}</p>}
        </div>
      ))}
    </section>
  );
};

const Footer = () => (
  <footer className="py-6 text-center text-gray-500">
    © 2026 Direito Simplificado
  </footer>
);

// --- APP ---

export default function App() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <PainPoints />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}