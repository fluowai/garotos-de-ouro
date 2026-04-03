import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Calendar, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  History, 
  Award, 
  Users,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'História', href: '#history' },
    { name: 'Agenda', href: '#tour' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-gaucho-dark/90 backdrop-blur-lg py-4 shadow-2xl" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gaucho-gold rounded-full flex items-center justify-center shadow-lg">
            <Music className="text-gaucho-dark w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tighter text-gaucho-gold">
            GAROTOS DE OURO
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-gaucho-gold transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5555991091780" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gaucho-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            CONTRATE AGORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gaucho-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-gaucho-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5555991091780"
                className="bg-gaucho-red text-center text-white py-3 rounded-lg font-bold"
              >
                CONTRATE AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#1a1a1a]">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-gaucho-red/20 border border-gaucho-red/30 rounded-full text-gaucho-red text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Original Família Machado • Desde 1973
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              <span className="text-white">ETERNAMENTE</span> <br />
              <span className="text-gaucho-red">GAROTOS DE OURO</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-400 mb-10 font-light leading-relaxed">
              A maior tradição da música gaúcha. Levando a alegria, o balanço e a alma do Rio Grande para os palcos de todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gaucho-red hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2">
                OUVIR AGORA <ChevronRight className="w-4 h-4" />
              </button>
              <button className="glass-morphism hover:bg-white/20 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest transition-all flex items-center justify-center gap-2">
                VER AGENDA <Calendar className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Principal Image Container - Optimized for the vertical poster provided */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,140,0,0.3)] border border-white/10 group max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop" // Placeholder for the vertical band poster
                alt="Garotos de Ouro - Banda"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-left">
                <p className="text-gaucho-red font-black text-3xl tracking-tighter mb-1">GAROTOS DE OURO</p>
                <p className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold">Original Família Machado</p>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-gaucho-red/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HistorySection = () => {
  const stats = [
    { icon: <History />, label: 'Anos de Estrada', value: '50+' },
    { icon: <Award />, label: 'Discos de Ouro', value: '15+' },
    { icon: <Users />, label: 'Shows Realizados', value: '5000+' },
  ];

  return (
    <section id="history" className="py-24 bg-gaucho-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" 
                alt="Band History"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-morphism p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="font-serif text-4xl font-bold text-gaucho-gold">1973</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">O início de tudo</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Uma história escrita com <br />
              <span className="text-gaucho-gold">Sangue e Tradição</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Fundado pelos irmãos Machado, o Garotos de Ouro tornou-se um ícone da música regional gaúcha. Com um estilo inconfundível que mistura o tradicionalismo com o balanço moderno, o grupo conquistou gerações.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Hoje, sob a liderança da Família Machado, mantemos vivo o legado de Andrew e todos que fizeram parte desta jornada épica.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-gaucho-gold mb-2 flex justify-center">{stat.icon}</div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TourSection = () => {
  const dates = [
    { date: '15 ABR', city: 'Porto Alegre, RS', venue: 'Galpão Crioulo' },
    { date: '22 ABR', city: 'Caxias do Sul, RS', venue: 'Festa da Uva' },
    { date: '01 MAI', city: 'Curitiba, PR', venue: 'CTG Vinte de Setembro' },
    { date: '12 MAI', city: 'Florianópolis, SC', venue: 'Arena Petry' },
    { date: '20 MAI', city: 'Santa Maria, RS', venue: 'Clube Recreativo' },
  ];

  return (
    <section id="tour" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Agenda de Shows</h2>
          <p className="text-gray-500 tracking-widest uppercase text-sm">Confira onde estaremos nos próximos dias</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {dates.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-gaucho-dark border border-white/5 hover:border-gaucho-gold/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <div className="text-center">
                  <p className="text-gaucho-gold font-black text-xl leading-none">{item.date.split(' ')[0]}</p>
                  <p className="text-xs text-gray-500 font-bold">{item.date.split(' ')[1]}</p>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
                <div>
                  <h3 className="text-xl font-bold group-hover:text-gaucho-gold transition-colors">{item.city}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.venue}
                  </p>
                </div>
              </div>
              <button className="w-full md:w-auto px-8 py-3 rounded-full border border-white/10 group-hover:bg-gaucho-gold group-hover:text-gaucho-dark transition-all font-bold text-xs tracking-widest">
                INGRESSOS
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gaucho-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gaucho-red/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gaucho-gold/10 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[2rem] p-8 md:p-16 shadow-3xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contrate o Show</h2>
              <p className="text-gray-400 text-lg mb-10">
                Leve a energia dos Garotos de Ouro para o seu evento. Entre em contato diretamente com nossa produção.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gaucho-gold/10 flex items-center justify-center text-gaucho-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Telefone / WhatsApp</p>
                    <p className="text-xl font-bold">(55) 99109-1780</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gaucho-gold/10 flex items-center justify-center text-gaucho-gold">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Produção</p>
                    <p className="text-xl font-bold">Andrew Machado</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gaucho-gold hover:text-gaucho-dark transition-all">
                  <Instagram />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gaucho-gold hover:text-gaucho-dark transition-all">
                  <Facebook />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gaucho-gold hover:text-gaucho-dark transition-all">
                  <Youtube />
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">Envie uma mensagem</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Nome Completo</label>
                  <input type="text" className="w-full bg-gaucho-dark border border-white/10 rounded-lg p-4 focus:border-gaucho-gold outline-none transition-all" placeholder="Seu nome..." />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">E-mail</label>
                  <input type="email" className="w-full bg-gaucho-dark border border-white/10 rounded-lg p-4 focus:border-gaucho-gold outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Mensagem</label>
                  <textarea className="w-full bg-gaucho-dark border border-white/10 rounded-lg p-4 focus:border-gaucho-gold outline-none transition-all h-32" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-gaucho-gold text-gaucho-dark font-black py-4 rounded-lg tracking-widest uppercase hover:bg-yellow-600 transition-all">
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Music className="text-gaucho-gold w-5 h-5" />
          <span className="font-serif text-lg font-bold tracking-tighter text-gaucho-gold">
            GAROTOS DE OURO
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-8">
          © 2026 Garotos de Ouro - Família Machado. Todos os direitos reservados. <br />
          Marca Registrada ® INPI 821681400
        </p>
        <div className="flex justify-center gap-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Imprensa</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5555991091780"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-green-600 transition-all"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HistorySection />
      <TourSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
