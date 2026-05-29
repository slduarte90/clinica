import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarCheck, HeartHandshake, MessageCircle, ShieldCheck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';
import './specialty-modern.css';

const BRAND_NAME = 'Especialidades em Saúde e Bem-Estar';
const WHATSAPP_NUMBER = '553535228035';
const WHATSAPP_DISPLAY = '(35) 3522-8035';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá, vim pelo site, gostaria de agendar uma consulta!');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const ADDRESS = 'Rua Elvira Silveira Coimbra, 430 - Centro - Passos-MG - 37.900-042';
const BASE_URL = import.meta.env.BASE_URL;
const LOGO_SRC = `${BASE_URL}logo.png`;

const HOURS = [
  { day: 'Segunda-feira', time: '08:00 às 18:00' },
  { day: 'Terça-feira', time: '08:00 às 18:00' },
  { day: 'Quarta-feira', time: '08:00 às 18:00' },
  { day: 'Quinta-feira', time: '08:00 às 18:00' },
  { day: 'Sexta-feira', time: '08:00 às 17:00' },
  { day: 'Sábado', time: 'Fechado' },
  { day: 'Domingo', time: 'Fechado' },
];

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function localPath(path = '') {
  const cleanPath = path.replace(/^\/+/,'');
  return `${BASE_URL}${cleanPath}`;
}

function setPageMeta({ title, description, path = '' }) {
  document.title = title;

  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', description);

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', `${window.location.origin}${localPath(path)}`);
}

const specialtyPages = [
  {
    title: 'Ginecologia',
    slug: 'ginecologia',
    seoTitle: 'Ginecologia em Passos-MG | Especialidades em Saúde e Bem-Estar',
    metaDescription: 'Agende atendimento em ginecologia em Passos-MG. Cuidado acolhedor, orientação clara e suporte pelo WhatsApp.',
    headline: 'Ginecologia com cuidado, orientação e acolhimento em todas as fases da vida',
    intro: 'Página destinada a apresentar o atendimento em ginecologia, com foco em prevenção, acompanhamento de rotina, queixas ginecológicas, saúde íntima e orientação individualizada. O texto final deve explicar como a paciente é acolhida desde o primeiro contato até o agendamento.',
    indications: ['Consulta ginecológica de rotina', 'Prevenção e acompanhamento da saúde íntima', 'Orientação sobre ciclos, sintomas e desconfortos', 'Avaliação individualizada conforme histórico da paciente'],
    differentials: ['Atendimento humanizado e reservado', 'Comunicação clara antes do agendamento', 'Possibilidade de tirar dúvidas iniciais pelo WhatsApp', 'Orientação sobre o melhor caminho de atendimento'],
    faqs: ['Quando devo agendar uma consulta ginecológica?', 'Posso tirar dúvidas antes de marcar?', 'O atendimento é feito com horário agendado?'],
  },
  {
    title: 'Uroginecologia',
    slug: 'uroginecologia',
    seoTitle: 'Uroginecologia em Passos-MG | Cuidado Feminino Especializado',
    metaDescription: 'Atendimento em uroginecologia em Passos-MG para orientação sobre saúde pélvica, sintomas urinários e cuidado feminino especializado.',
    headline: 'Uroginecologia para saúde pélvica feminina com orientação especializada',
    intro: 'Página voltada para explicar, de forma acessível, o atendimento em uroginecologia. O conteúdo final pode abordar saúde pélvica, queixas urinárias, desconfortos, prevenção e a importância da avaliação profissional individualizada.',
    indications: ['Sintomas urinários recorrentes', 'Desconfortos relacionados à saúde pélvica', 'Orientação sobre prevenção e acompanhamento', 'Encaminhamento para avaliação adequada quando necessário'],
    differentials: ['Escuta cuidadosa e sem constrangimento', 'Linguagem simples para explicar próximos passos', 'Agendamento facilitado pelo WhatsApp', 'Ambiente profissional e acolhedor'],
    faqs: ['O que a uroginecologia acompanha?', 'Quando procurar esse tipo de atendimento?', 'É possível receber orientação antes da consulta?'],
  },
  {
    title: 'Obstetrícia',
    slug: 'obstetricia',
    seoTitle: 'Obstetrícia em Passos-MG | Acompanhamento e Orientação Gestacional',
    metaDescription: 'Atendimento em obstetrícia em Passos-MG com orientação para gestantes, acompanhamento e cuidado humanizado.',
    headline: 'Obstetrícia com acolhimento e orientação durante a gestação',
    intro: 'Página pensada para apresentar o atendimento em obstetrícia, com linguagem acolhedora para gestantes e famílias. O texto final deve destacar acompanhamento, orientação, segurança, dúvidas frequentes e direcionamento para agendamento.',
    indications: ['Acompanhamento durante a gestação', 'Dúvidas sobre sintomas e cuidados gestacionais', 'Orientação para consultas e exames', 'Acolhimento da gestante e da família'],
    differentials: ['Cuidado humanizado', 'Orientação clara desde o primeiro contato', 'Agendamento prático', 'Comunicação acolhedora para reduzir inseguranças'],
    faqs: ['Quando iniciar o acompanhamento obstétrico?', 'Posso agendar pelo WhatsApp?', 'A clínica orienta sobre preparo para a consulta?'],
  },
  {
    title: 'Fertilidade',
    slug: 'fertilidade',
    seoTitle: 'Fertilidade em Passos-MG | Orientação e Acompanhamento Especializado',
    metaDescription: 'Orientação em fertilidade em Passos-MG com acolhimento, avaliação individualizada e agendamento facilitado.',
    headline: 'Fertilidade com orientação individualizada e acolhimento',
    intro: 'Página para campanhas e SEO sobre fertilidade. O conteúdo final pode explicar quando buscar orientação, importância da avaliação profissional, planejamento, investigação inicial e acolhimento emocional durante o processo.',
    indications: ['Dúvidas sobre tentativa de gestação', 'Planejamento reprodutivo', 'Orientação inicial para investigação', 'Acompanhamento conforme histórico do casal ou paciente'],
    differentials: ['Abordagem cuidadosa e individualizada', 'Primeiro contato simples pelo WhatsApp', 'Explicação clara dos próximos passos', 'Acolhimento durante uma etapa sensível da vida'],
    faqs: ['Quando procurar orientação sobre fertilidade?', 'A consulta ajuda a definir próximos passos?', 'Posso agendar uma avaliação inicial?'],
  },
  {
    title: 'Oncologia',
    slug: 'oncologia',
    seoTitle: 'Oncologia em Passos-MG | Atendimento Humanizado e Orientação',
    metaDescription: 'Atendimento em oncologia em Passos-MG com orientação, acolhimento e suporte para agendamento pelo WhatsApp.',
    headline: 'Oncologia com cuidado humanizado, escuta e orientação',
    intro: 'Página voltada à apresentação do atendimento em oncologia de forma responsável, sem promessas e com foco em orientação, acolhimento, acompanhamento e direcionamento para avaliação profissional.',
    indications: ['Orientação após suspeitas ou diagnósticos', 'Acompanhamento especializado', 'Dúvidas sobre encaminhamentos e consultas', 'Suporte para organizar o primeiro atendimento'],
    differentials: ['Comunicação cuidadosa e responsável', 'Acolhimento em uma fase delicada', 'Agendamento facilitado', 'Orientação sobre documentos e informações para a consulta'],
    faqs: ['Quando procurar um oncologista?', 'Posso agendar uma primeira avaliação?', 'Quais informações devo levar para a consulta?'],
  },
  {
    title: 'Odontologia',
    slug: 'odontologia',
    seoTitle: 'Odontologia em Passos-MG | Atendimento e Saúde Bucal',
    metaDescription: 'Atendimento em odontologia em Passos-MG com agendamento facilitado, cuidado humanizado e orientação sobre saúde bucal.',
    headline: 'Odontologia para cuidado, prevenção e saúde bucal',
    intro: 'Página destinada a campanhas e busca local sobre odontologia. O texto final pode detalhar atendimentos disponíveis, prevenção, avaliação inicial, cuidado com dor, estética ou acompanhamento, conforme os serviços reais da clínica.',
    indications: ['Avaliação odontológica inicial', 'Prevenção e acompanhamento de saúde bucal', 'Orientação sobre tratamentos disponíveis', 'Agendamento para atendimento com horário marcado'],
    differentials: ['Atendimento organizado e acolhedor', 'Facilidade para tirar dúvidas pelo WhatsApp', 'Comunicação clara sobre o próximo passo', 'Experiência mais prática para o paciente'],
    faqs: ['Como agendar uma avaliação odontológica?', 'Posso tirar dúvidas antes de marcar?', 'Quais tratamentos estarão disponíveis?'],
  },
  {
    title: 'Nutrição',
    slug: 'nutricao',
    seoTitle: 'Nutrição em Passos-MG | Atendimento Nutricional Personalizado',
    metaDescription: 'Atendimento de nutrição em Passos-MG com orientação personalizada, acolhimento e agendamento pelo WhatsApp.',
    headline: 'Nutrição personalizada para saúde, rotina e bem-estar',
    intro: 'Página pensada para apresentar o atendimento nutricional. O texto final pode abordar objetivos, avaliação de rotina alimentar, acompanhamento individual, saúde preventiva, emagrecimento, performance ou condições específicas, conforme o posicionamento da clínica.',
    indications: ['Reeducação alimentar e organização da rotina', 'Acompanhamento nutricional individualizado', 'Orientação para saúde e bem-estar', 'Planejamento conforme objetivos e necessidades'],
    differentials: ['Plano orientado para a realidade do paciente', 'Acompanhamento acolhedor', 'Agendamento simples pelo WhatsApp', 'Foco em orientação clara e sustentável'],
    faqs: ['Como funciona a primeira consulta nutricional?', 'O atendimento é personalizado?', 'Posso agendar pelo WhatsApp?'],
  },
];

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
    <a className={`btn btn-${variant} ${className}`} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
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
        <p className={compact ? 'brand-subtitle brand-subtitle-compact' : 'brand-subtitle'}>Atendimento humanizado</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={localPath('#inicio')} aria-label="Ir para o início"><BrandLogo compact /></a>

        <nav className="nav">
          <a href={localPath('#inicio')}>Início</a>
          <details className="nav-dropdown">
            <summary className="nav-dropdown-trigger">Especialidades</summary>
            <div className="nav-dropdown-menu">
              <a href={localPath('#especialidades')}>Ver todas</a>
              {specialtyPages.map((specialty) => (
                <a key={specialty.slug} href={localPath(`especialidades/${specialty.slug}`)}>{specialty.title}</a>
              ))}
            </div>
          </details>
          <a href={localPath('#servicos')}>Serviços</a>
          <a href={localPath('#sobre')}>Sobre</a>
          <a href={localPath('#duvidas')}>Dúvidas</a>
          <a href={localPath('#contato')}>Contato</a>
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
          <a href={localPath('#especialidades')}>Especialidades</a>
          <a href={localPath('#servicos')}>Serviços</a>
          <a href={localPath('#sobre')}>Sobre</a>
          <a href={localPath('#contato')}>Contato</a>
          <a href={localPath('politica-de-privacidade')}>Política de Privacidade</a>
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
            <p>Esta Política de Privacidade explica como {BRAND_NAME} coleta, utiliza, armazena e protege dados pessoais fornecidos por visitantes, pacientes e interessados em atendimento, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).</p>
            <p className="privacy-updated">Última atualização: 28 de maio de 2026.</p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="container narrow privacy-card">
            <h2>1. Quem somos</h2>
            <p>{BRAND_NAME} é um centro de especialidades em saúde e bem-estar localizado em {ADDRESS}. Para assuntos relacionados a privacidade e proteção de dados, o contato pode ser feito pelo WhatsApp {WHATSAPP_DISPLAY}.</p>
            <h2>2. Quais dados podemos coletar</h2>
            <p>Podemos coletar dados fornecidos voluntariamente pelo usuário ao entrar em contato, solicitar informações ou agendar atendimento, como nome, telefone, WhatsApp, mensagens enviadas, informações relacionadas ao atendimento solicitado e dados técnicos de navegação.</p>
            <p>Informações relacionadas à saúde, quando mencionadas pelo próprio usuário, são consideradas dados sensíveis pela LGPD e devem ser tratadas com maior cuidado e finalidade específica.</p>
            <h2>3. Para quais finalidades usamos os dados</h2>
            <p>Os dados pessoais podem ser utilizados para responder dúvidas, realizar pré-atendimento, agendar consultas, confirmar horários, informar sobre serviços, melhorar a experiência no site, mensurar campanhas e cumprir obrigações legais.</p>
            <h2>4. Base legal para tratamento</h2>
            <p>O tratamento poderá ocorrer com base no consentimento, execução de procedimentos preliminares relacionados a atendimento solicitado, cumprimento de obrigação legal, proteção da saúde e legítimo interesse.</p>
            <h2>5. Compartilhamento de dados</h2>
            <p>Os dados poderão ser compartilhados apenas quando necessário para viabilizar contato, atendimento, ferramentas tecnológicas, hospedagem do site, análise de métricas, cumprimento de obrigações legais ou proteção de direitos. Não vendemos dados pessoais.</p>
            <h2>6. Cookies e tecnologias de navegação</h2>
            <p>O site poderá utilizar cookies e tecnologias semelhantes para funcionamento, análise de navegação, melhoria de experiência e mensuração de campanhas.</p>
            <h2>7. Direitos do titular dos dados</h2>
            <p>Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, informações sobre compartilhamento e revogação do consentimento, quando aplicável.</p>
            <h2>8. Contato</h2>
            <p>Para dúvidas sobre privacidade, proteção de dados ou solicitações relacionadas à LGPD, fale conosco pelo WhatsApp {WHATSAPP_DISPLAY} ou pelo endereço {ADDRESS}.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SpecialtyPage({ specialty }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="specialty-page">
        <section className="specialty-hero section-blush">
          <div className="container specialty-hero-grid">
            <div>
              <p className="section-kicker">Especialidade</p>
              <h1>{specialty.headline}</h1>
              <p className="hero-text">{specialty.intro}</p>
              <div className="hero-actions">
                <Button>Agendar {specialty.title} pelo WhatsApp <ArrowRight size={18} /></Button>
                <Button variant="outline" href={localPath('#especialidades')}>Ver outras especialidades</Button>
              </div>
            </div>
            <aside className="landing-card">
              <BrandLogo />
              <strong>Atendimento em {specialty.title}</strong>
              <span>{ADDRESS}</span>
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              <p>As informações desta página são educativas e não substituem avaliação profissional individualizada.</p>
            </aside>
          </div>
        </section>

        <section className="section white">
          <div className="container specialty-layout">
            <article className="content-block">
              <p className="section-kicker">Quando procurar</p>
              <h2>Principais motivos para buscar atendimento em {specialty.title}</h2>
              <p>Este bloco deve ser ajustado com os detalhes reais da especialidade, usando linguagem simples e foco nas dúvidas mais comuns dos pacientes.</p>
              <ul className="info-list">
                {specialty.indications.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}
              </ul>
            </article>

            <article className="content-block">
              <p className="section-kicker">Diferenciais</p>
              <h2>Como o atendimento pode ser apresentado</h2>
              <p>Área reservada para explicar diferenciais da clínica, equipe, fluxo de agendamento, acolhimento, localização e facilidades de contato.</p>
              <ul className="info-list">
                {specialty.differentials.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section soft-gray">
          <div className="container specialty-layout">
            <article className="content-block">
              <p className="section-kicker">Estrutura recomendada de SEO</p>
              <h2>O que inserir no texto final desta página</h2>
              <ul className="seo-outline">
                <li><strong>H1:</strong> termo principal + localização, sem exagero.</li>
                <li><strong>Introdução:</strong> explicar para quem é o atendimento.</li>
                <li><strong>Quando procurar:</strong> sintomas, dúvidas ou necessidades comuns.</li>
                <li><strong>Como funciona:</strong> fluxo de contato, agendamento e orientação.</li>
                <li><strong>Diferenciais:</strong> acolhimento, clareza, estrutura e localização.</li>
                <li><strong>CTA:</strong> botão para WhatsApp com mensagem pronta.</li>
                <li><strong>FAQ:</strong> perguntas reais pesquisadas por pacientes.</li>
              </ul>
            </article>

            <article className="content-block">
              <p className="section-kicker">Dúvidas frequentes</p>
              <h2>Perguntas para completar depois</h2>
              <div className="faq-list compact-faq">
                {specialty.faqs.map((faq) => (
                  <details key={faq}>
                    <summary>{faq}</summary>
                    <p>Resposta provisória. Substituir por uma resposta objetiva, responsável e alinhada ao atendimento real da clínica.</p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section blush center">
          <div className="container narrow">
            <h2>Quer agendar atendimento em {specialty.title}?</h2>
            <p>Fale com a equipe pelo WhatsApp para tirar dúvidas, confirmar disponibilidade e receber orientação sobre o melhor horário.</p>
            <Button>Agendar consulta <MessageCircle size={20} /></Button>
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
              <p className="hero-text">Agende seu atendimento de forma simples, tire suas dúvidas pelo WhatsApp e conte com uma equipe preparada para orientar você desde o primeiro contato.</p>
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
                return <article key={item.title} className="card"><div className="card-icon"><Icon size={26} /></div><h3>{item.title}</h3><p>{item.text}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="especialidades" className="section soft-gray">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">Especialidades</p>
              <h2>Páginas específicas para SEO, campanhas e agendamento</h2>
              <p>Cada especialidade agora possui uma landing page própria, com estrutura pronta para receber textos definitivos, perguntas frequentes e chamadas de conversão.</p>
            </div>
            <div className="specialty-grid">
              {specialtyPages.map((specialty) => (
                <article key={specialty.slug} className="service-card specialty-card">
                  <h3>{specialty.title}</h3>
                  <p>{specialty.metaDescription}</p>
                  <a href={localPath(`especialidades/${specialty.slug}`)}>Ver página de {specialty.title} <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="section blush">
          <div className="container">
            <div className="split-heading">
              <div><p className="section-kicker">Serviços</p><h2>Escolha o serviço ideal para você</h2><p>Conheça as principais opções de atendimento e fale com nossa equipe para receber orientação personalizada.</p></div>
              <div className="note-card"><strong>Observação</strong><p>Os nomes abaixo são provisórios e devem ser substituídos pelos serviços reais da clínica antes da publicação.</p></div>
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
          <div className="container"><div className="campaign-card"><div><p className="campaign-kicker">Chamada de campanha</p><h2>Precisa de atendimento com praticidade?</h2><p>Nossa equipe pode orientar você agora mesmo pelo WhatsApp. Envie uma mensagem, tire suas dúvidas e veja a melhor opção de agendamento.</p></div><Button>Falar no WhatsApp</Button></div></div>
        </section>

        <section id="sobre" className="section soft-gray">
          <div className="container about-grid">
            <div className="about-card"><div><p className="section-kicker">Sobre a marca</p><h2>Cuidado, clareza e praticidade em cada etapa</h2><p>Nosso atendimento foi pensado para tornar sua experiência mais simples, desde o primeiro contato até o acompanhamento final. Valorizamos uma comunicação clara, acolhedora e objetiva.</p></div></div>
            <div className="check-list">{['Atendimento humanizado', 'Orientação clara antes do agendamento', 'Comunicação rápida pelo WhatsApp', 'Ambiente profissional e acolhedor'].map((item) => <div key={item}><CheckCircle2 /> <strong>{item}</strong></div>)}</div>
          </div>
        </section>

        <section id="duvidas" className="section white">
          <div className="container narrow"><div className="section-heading center"><p className="section-kicker">FAQ</p><h2>Dúvidas frequentes</h2></div><div className="faq-list">{faqs.map((faq) => <details key={faq}><summary>{faq}</summary><p>Resposta objetiva, escrita com foco em clareza, confiança e redução de objeções antes do contato.</p></details>)}</div></div>
        </section>

        <section id="contato" className="section blush center">
          <div className="container narrow"><h2>Vamos facilitar seu atendimento?</h2><p>Clique no botão abaixo e fale com a equipe pelo WhatsApp para receber orientação e agendar seu atendimento.</p><Button>Agendar agora <MessageCircle size={20} /></Button></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getRoute() {
  const basePath = BASE_URL.replace(/\/$/, '');
  const pathname = window.location.pathname;
  let route = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  route = route.replace(/^\/+/, '').replace(/\/+$/, '');
  return route;
}

function App() {
  const [route, setRoute] = useState(getRoute());
  const [hash, setHash] = useState(window.location.hash || '#inicio');

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('spa-redirect-path');
    if (redirectPath) {
      sessionStorage.removeItem('spa-redirect-path');
      window.history.replaceState(null, '', redirectPath);
      setRoute(getRoute());
      setHash(window.location.hash || '#inicio');
    }
  }, []);

  useEffect(() => {
    const syncLocation = () => {
      setRoute(getRoute());
      setHash(window.location.hash || '#inicio');
    };
    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      setTimeout(syncLocation, 0);
    });
    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  useEffect(() => {
    if (route === 'politica-de-privacidade') {
      setPageMeta({ title: `Política de Privacidade | ${BRAND_NAME}`, description: `Política de Privacidade e LGPD de ${BRAND_NAME}.`, path: 'politica-de-privacidade' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const specialty = specialtyPages.find((item) => route === `especialidades/${item.slug}`);
    if (specialty) {
      setPageMeta({ title: specialty.seoTitle, description: specialty.metaDescription, path: `especialidades/${specialty.slug}` });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setPageMeta({ title: `${BRAND_NAME} | Atendimento Humanizado em Passos-MG`, description: 'Especialidades em saúde e bem-estar em Passos-MG. Atendimento humanizado, agendamento pelo WhatsApp e cuidado para você e sua família.' });

    const timer = window.setTimeout(() => {
      if (hash && hash !== '#inicio') {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [route, hash]);

  if (route === 'politica-de-privacidade') return <PrivacyPolicy />;

  const specialty = specialtyPages.find((item) => route === `especialidades/${item.slug}`);
  if (specialty) return <SpecialtyPage specialty={specialty} />;

  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
