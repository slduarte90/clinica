import React from 'react';
import { ArrowRight } from 'lucide-react';

export function GeneticHomeCallout({ imageSrc, href, Button }) {
  return (
    <section className="section white compact genetic-home-section">
      <div className="container">
        <article className="genetic-home-card">
          <a className="genetic-home-image-link" href={href} aria-label="Conhecer teste genético nutricional">
            <img
              className="genetic-home-image"
              src={imageSrc}
              alt="Ilustração de DNA para teste genético nutricional"
              loading="lazy"
            />
          </a>
          <div className="genetic-home-content">
            <p className="campaign-kicker">Teste genético nutricional</p>
            <h2>Seu DNA pode ajudar a personalizar seu cuidado</h2>
            <p>Entenda como o teste genético pode orientar estratégias nutricionais, metabólicas e preventivas com mais clareza.</p>
            <Button href={href}>Conhecer teste genético <ArrowRight size={18} /></Button>
          </div>
        </article>
      </div>
    </section>
  );
}
