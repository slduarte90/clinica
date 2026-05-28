import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarCheck, HeartHandshake, MessageCircle, ShieldCheck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const BRAND_NAME = 'Especialidades em Saúde e Bem-Estar';
const WHATSAPP_NUMBER = '553535228035';
const WHATSAPP_DISPLAY = '(35) 3522-8035';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const ADDRESS = 'Rua Elvira Silveira Coimbra, 430 - Centro - Passos-MG - 37.900-042';
const HOURS = 'Segunda a quinta-feira das 08:00 às 18:00. Sextas-feiras das 08:00 às 17:00.';
const LOGO_SRC = '/logo.png';

const services = [
  'Avaliação inicial',
  'Consulta especializada',
  'Atendimento preventivo',
  'Procedimentos personalizados',
  'Acompanhamento contínuo',
  'Orientação pelo WhatsApp',
];

const benefits = [
  {
    icon: MessageCircle,
    title: 'Agendamento facilitado',
    text: 'Fale com a equipe pelo WhatsApp e receba orientação sobre o melhor horário e serviço.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento acolhedor',
    text: 'Comunicação clara, humana e cuidadosa em todas as etapas do contato.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviços organizados',
    text: 'Encontre rapidamente a solução que você procura, sem complicação.',
  },
  {
    icon: CalendarCheck,
    title: 'Foco em praticidade',
    text: 'Uma experiência direta, leve e pensada para conversão em poucos cliques.',
  },
];

const faqs = [
  'Como faço para agendar?',
  'Posso tirar dúvidas antes de marcar?',
  'O atendimento é com horário marcado?',
  'Quais serviços estão disponíveis?',
  'Vocês atendem por WhatsApp?',
  'Quais formas de pagamento são aceitas?',
];

function Button({ children, variant = 'primary', href = WHATSAPP_URL, className = '' }) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className={`btn btn-${variant} ${className}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

function BrandLogo({ compact = false }) {
  return (
    <div className={compact ? 'brand brand-compact' : 'brand'}>
      <img className={compact ? 'brand-logo brand-logo-compact' : 'brand-logo'} src={LOGO_SRC} alt={`Logomarca ${BRAND_NAME}`} />
      <div>
        <p className={compact ? 'brand-name brand-name-compact' : 'brand-name'}>{BRAND_NAME}</p>
        <p className={compact ? 'brand-subtitle brand-subtitle-compact' : 'brand-subtitle'}>
          Atendimento humanizado
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo compact />

          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <Button>Agendar pelo WhatsApp</Button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section-blush">
          <div className="blob blob-one" />
          <div className="blob blob-two" />

          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <a className="eyebrow" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Atendimento pelo WhatsApp</a>

              <h1>Atendimento rápido, humanizado e pensado para facilitar sua escolha</h1>

              <p className="hero-text">
                Agende seu atendimento de forma simples, tire suas dúvidas pelo WhatsApp e conte com uma equipe preparada para orientar você desde o primeiro contato.
              </p>

              <div className="hero-actions">
                <Button>Quero agendar agora <ArrowRight size={18} /></Button>
                <Button variant="outline" href="#servicos">Conhecer serviços</Button>
              </div>

              <div className="trust-list">
                <span><CheckCircle2 size={16} /> Resposta rápida</span>
                <span><CheckCircle2 size={16} /> Atendimento com horário</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="visual-card-outer">
                <div className="visual-card-inner">
                  <div className="visual-card-content">
                    <BrandLogo />
                    <p className="section-kicker">Prévia visual</p>
                    <h2>Imagem principal do atendimento</h2>
                    <p>
                      Espaço reservado para uma foto profissional humanizada ou composição visual da clínica.
                    </p>
                    <div className="mini-card-grid">
                      <div className="mini-card"><Clock /> <strong>Agendamento rápido</strong></div>
                      <div className="mini-card"><MapPin /> <strong>Passos-MG</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">Benefícios</p>
              <h2>Uma experiência mais simples do primeiro contato ao atendimento</h2>
            </div>

            <div className="benefit-grid">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="card">
                    <div className="card-icon"><Icon size={26} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="section blush">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="section-kicker">Serviços</p>
                <h2>Escolha o serviço ideal para você</h2>
                <p>
                  Conheça as principais opções de atendimento e fale com nossa equipe para receber orientação personalizada.
                </p>
              </div>
              <div className="note-card">
                <strong>Observação</strong>
                <p>Os nomes abaixo são provisórios e devem ser substituídos pelos serviços reais da clínica antes da publicação.</p>
              </div>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article key={service} className="service-card">
                  <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{service}</h3>
                  <p>Descrição curta do serviço, com foco em clareza, benefício e chamada para agendamento.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Quero saber mais <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white compact">
          <div className="container">
            <div className="campaign-card">
              <div>
                <p className="campaign-kicker">Chamada de campanha</p>
                <h2>Precisa de atendimento com praticidade?</h2>
                <p>Nossa equipe pode orientar você agora mesmo pelo WhatsApp. Envie uma mensagem, tire suas dúvidas e veja a melhor opção de agendamento.</p>
              </div>
              <Button>Falar no WhatsApp</Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="section soft-gray">
          <div className="container about-grid">
            <div className="about-card">
              <div>
                <p className="section-kicker">Sobre a marca</p>
                <h2>Cuidado, clareza e praticidade em cada etapa</h2>
                <p>Nosso atendimento foi pensado para tornar sua experiência mais simples, desde o primeiro contato até o acompanhamento final. Valorizamos uma comunicação clara, acolhedora e objetiva.</p>
              </div>
            </div>

            <div className="check-list">
              {['Atendimento humanizado', 'Orientação clara antes do agendamento', 'Comunicação rápida pelo WhatsApp', 'Ambiente profissional e acolhedor'].map((item) => (
                <div key={item}><CheckCircle2 /> <strong>{item}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section id="duvidas" className="section white">
          <div className="container narrow">
            <div className="section-heading center">
              <p className="section-kicker">FAQ</p>
              <h2>Dúvidas frequentes</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq}>
                  <summary>{faq}</summary>
                  <p>Resposta objetiva, escrita com foco em clareza, confiança e redução de objeções antes do contato.</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section blush center">
          <div className="container narrow">
            <h2>Vamos facilitar seu atendimento?</h2>
            <p>Clique no botão abaixo e fale com a equipe pelo WhatsApp para receber orientação e agendar seu atendimento.</p>
            <Button>Agendar agora <MessageCircle size={20} /></Button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <BrandLogo compact />
            <p>Cuidado, acolhimento e especialidades em saúde para você e sua família.</p>
          </div>
          <div>
            <strong>Links</strong>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <span>Política de Privacidade</span>
          </div>
          <div>
            <strong>Contato</strong>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp: {WHATSAPP_DISPLAY}</a>
            <span>{ADDRESS}</span>
            <span>{HOURS}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
