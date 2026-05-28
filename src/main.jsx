import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarCheck, HeartHandshake, MessageCircle, ShieldCheck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const BRAND_NAME = 'Especialidades em Saúde e Bem-Estar';
const WHATSAPP_NUMBER = '553535228035';
const WHATSAPP_DISPLAY = '(35) 3522-8035';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá, vim pelo site, gostaria de agendar uma consulta!');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const ADDRESS = 'Rua Elvira Silveira Coimbra, 430 - Centro - Passos-MG - 37.900-042';
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

const HOURS = [
  { day: 'Segunda-feira', time: '08:00 às 18:00' },
  { day: 'Terça-feira', time: '08:00 às 18:00' },
  { day: 'Quarta-feira', time: '08:00 às 18:00' },
  { day: 'Quinta-feira', time: '08:00 às 18:00' },
  { day: 'Sexta-feira', time: '08:00 às 17:00' },
  { day: 'Sábado', time: 'Fechado' },
  { day: 'Domingo', time: 'Fechado' },
];

const specialties = [
  'Ginecologia',
  'Uroginecologia',
  'Obstetrícia',
  'Fertilidade',
  'Oncologia',
  'Odontologia',
  'Nutrição',
];

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

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

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" aria-label="Ir para o início"><BrandLogo compact /></a>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <div className="nav-dropdown">
            <a href="#especialidades" className="nav-dropdown-trigger">Especialidades</a>
            <div className="nav-dropdown-menu">
              {specialties.map((specialty) => (
                <a key={specialty} href={`#${slugify(specialty)}`}>{specialty}</a>
              ))}
            </div>
          </div>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>

        <Button>Agendar pelo WhatsApp</Button>
      </div>
    </header>
  );
}

function HoursList() {
  return (
    <div className="hours-list">
      {HOURS.map((item) => (
        <span key={item.day}>{item.day}: {item.time}</span>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandLogo compact />
          <p className="footer-tagline">“Cuidado, acolhimento e especialidades em saúde para você e sua família.”</p>
        </div>
        <div>
          <strong>Links</strong>
          <a href="#especialidades">Especialidades</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#politica-de-privacidade">Política de Privacidade</a>
        </div>
        <div>
          <strong>Contato</strong>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp: {WHATSAPP_DISPLAY}</a>
          <span>{ADDRESS}</span>
          <HoursList />
        </div>
      </div>
    </footer>
  );
}

function PrivacyPolicy() {
  return (
    <div className="site-shell">
      <Header />
      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="container narrow">
            <p className="section-kicker">LGPD</p>
            <h1>Política de Privacidade</h1>
            <p>
              Esta Política de Privacidade explica como {BRAND_NAME} coleta, utiliza, armazena e protege dados pessoais fornecidos por visitantes, pacientes e interessados em atendimento, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
            </p>
            <p className="privacy-updated">Última atualização: 28 de maio de 2026.</p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="container narrow privacy-card">
            <h2>1. Quem somos</h2>
            <p>{BRAND_NAME} é um centro de especialidades em saúde e bem-estar localizado em {ADDRESS}. Para assuntos relacionados a privacidade e proteção de dados, o contato pode ser feito pelo WhatsApp {WHATSAPP_DISPLAY}.</p>

            <h2>2. Quais dados podemos coletar</h2>
            <p>Podemos coletar dados fornecidos voluntariamente pelo usuário ao entrar em contato, solicitar informações ou agendar atendimento, tais como:</p>
            <ul>
              <li>nome;</li>
              <li>telefone e/ou WhatsApp;</li>
              <li>mensagem enviada pelo formulário, botão de contato ou WhatsApp;</li>
              <li>informações relacionadas ao atendimento solicitado;</li>
              <li>dados técnicos de navegação, como endereço IP, dispositivo, navegador, páginas acessadas e cookies, quando aplicável.</li>
            </ul>
            <p>Em determinados contatos, informações relacionadas à saúde podem ser mencionadas pelo próprio usuário. Esses dados são considerados sensíveis pela LGPD e devem ser tratados com maior cuidado e finalidade específica.</p>

            <h2>3. Para quais finalidades usamos os dados</h2>
            <p>Os dados pessoais podem ser utilizados para:</p>
            <ul>
              <li>responder dúvidas e solicitações de contato;</li>
              <li>realizar pré-atendimento e agendamento;</li>
              <li>confirmar horários, endereço e informações sobre serviços;</li>
              <li>melhorar a experiência de navegação no site;</li>
              <li>mensurar resultados de campanhas, quando houver ferramentas de análise ou mídia;</li>
              <li>cumprir obrigações legais, regulatórias ou administrativas aplicáveis.</li>
            </ul>

            <h2>4. Base legal para tratamento</h2>
            <p>O tratamento de dados poderá ocorrer com base no consentimento do titular, na execução de procedimentos preliminares relacionados a atendimento solicitado, no cumprimento de obrigação legal ou regulatória, na proteção da saúde e no legítimo interesse, sempre observando os princípios da finalidade, necessidade, transparência e segurança previstos na LGPD.</p>

            <h2>5. Compartilhamento de dados</h2>
            <p>Os dados poderão ser compartilhados apenas quando necessário para viabilizar contato, atendimento, ferramentas tecnológicas, hospedagem do site, análise de métricas, cumprimento de obrigações legais ou proteção de direitos. Não vendemos dados pessoais.</p>

            <h2>6. Cookies e tecnologias de navegação</h2>
            <p>O site poderá utilizar cookies e tecnologias semelhantes para funcionamento, análise de navegação, melhoria de experiência e mensuração de campanhas. O usuário pode ajustar as permissões de cookies diretamente nas configurações do navegador.</p>

            <h2>7. Armazenamento e segurança</h2>
            <p>Mantemos os dados pessoais pelo tempo necessário para cumprir as finalidades desta Política, obrigações legais e defesa de direitos. Adotamos medidas razoáveis de segurança para reduzir riscos de acesso não autorizado, perda, alteração, divulgação indevida ou uso inadequado dos dados.</p>

            <h2>8. Direitos do titular dos dados</h2>
            <p>Nos termos da LGPD, o titular pode solicitar, quando aplicável:</p>
            <ul>
              <li>confirmação da existência de tratamento;</li>
              <li>acesso aos dados pessoais;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;</li>
              <li>informações sobre compartilhamento;</li>
              <li>revogação do consentimento;</li>
              <li>eliminação dos dados tratados com consentimento, quando cabível.</li>
            </ul>
            <p>Para exercer seus direitos, entre em contato pelo WhatsApp {WHATSAPP_DISPLAY}.</p>

            <h2>9. Links para terceiros</h2>
            <p>O site pode conter links para WhatsApp, mapas, redes sociais ou outras plataformas externas. Essas plataformas possuem políticas próprias de privacidade e segurança, pelas quais são responsáveis.</p>

            <h2>10. Alterações nesta Política</h2>
            <p>Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir mudanças legais, operacionais ou tecnológicas. A versão mais recente estará sempre disponível nesta página.</p>

            <h2>11. Contato</h2>
            <p>Para dúvidas sobre privacidade, proteção de dados ou solicitações relacionadas à LGPD, fale conosco pelo WhatsApp {WHATSAPP_DISPLAY} ou pelo endereço {ADDRESS}.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <div className="site-shell">
      <Header />

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
                <Button variant="outline" href="#especialidades">Conhecer especialidades</Button>
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
                    <p>Espaço reservado para uma foto profissional humanizada ou composição visual da clínica.</p>
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

        <section id="especialidades" className="section soft-gray">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">Especialidades</p>
              <h2>Atendimento integrado em diferentes áreas da saúde</h2>
              <p>Conheça as especialidades disponíveis e fale com a equipe para receber orientação sobre o melhor atendimento para o seu caso.</p>
            </div>

            <div className="specialty-grid">
              {specialties.map((specialty) => (
                <article id={slugify(specialty)} key={specialty} className="service-card specialty-card">
                  <h3>{specialty}</h3>
                  <p>Atendimento especializado com orientação clara, acolhimento e agendamento facilitado pelo WhatsApp.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar {specialty} <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="section blush">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="section-kicker">Serviços</p>
                <h2>Escolha o serviço ideal para você</h2>
                <p>Conheça as principais opções de atendimento e fale com nossa equipe para receber orientação personalizada.</p>
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

      <Footer />
    </div>
  );
}

function App() {
  const [hash, setHash] = useState(window.location.hash || '#inicio');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#inicio');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (hash === '#politica-de-privacidade') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [hash]);

  if (hash === '#politica-de-privacidade') {
    return <PrivacyPolicy />;
  }

  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
