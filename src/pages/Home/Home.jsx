import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { steps, testimonial, stats } from '../../data/mock';
import './Home.css';

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__tag">THE CURATED COMMONS</span>
          <h1 className="hero__title">
            Sua habilidade é<br />
            a <span className="hero__title--accent">sua moeda</span>.
          </h1>
          <p className="hero__description">
            Conecte-se com uma comunidade de criativos e profissionais.
            Troque design por fotografia, limpeza por consultoria.
            Sem dinheiro, apenas valor real.
          </p>
          <div className="hero__cta">
            <Link to="/discover">
              <Button variant="primary" size="lg">Começar a Trocar</Button>
            </Link>
            <Link to="/discover">
              <Button variant="outline" size="lg">Ver Galeria</Button>
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__cards-collage">
            <div className="hero__card-dark">
              <span className="hero__card-dark-label">CREATIVE COL·LECTION</span>
              <span className="hero__card-dark-sub">Safe work</span>
            </div>
            <div className="hero__card-photo">
              <img src="https://i.pravatar.cc/300?img=49" alt="Professional" />
            </div>
            <div className="hero__card-avatar">
              <div className="hero__avatar-circle">🧑‍💼</div>
            </div>
          </div>
          <Card className="hero__stat-card">
            <span className="hero__stat-number">{stats.count}</span>
            <span className="hero__stat-label">{stats.label}</span>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">Como o Troca Aí funciona</h2>
          <p className="section-subtitle">
            Quatro passos simples para transformar o seu talento em novas possibilidades.
          </p>
          <div className="how-it-works__steps">
            {steps.map((step) => (
              <Card key={step.id} className="step-card">
                <div className="step-card__icon">{step.icon}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="section-container testimonial__inner">
          <div className="testimonial__image-col">
            <div className="testimonial__image-bg">
              <img
                src="https://i.pravatar.cc/300?img=12"
                alt="Community member"
                className="testimonial__img"
              />
              <div className="testimonial__brand-badge">COEATOR<br /><small>SAFE OR BAR WORK</small></div>
            </div>
            <div className="testimonial__pulse-badge">
              <span className="testimonial__pulse-dot" />
              <div>
                <strong>Exchange Pulse</strong>
                <p>Troca finalizada com sucesso!</p>
              </div>
            </div>
          </div>

          <div className="testimonial__content">
            <span className="testimonial__quote-mark">"</span>
            <blockquote className="testimonial__quote">{testimonial.quote}</blockquote>
            <div className="testimonial__author">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="testimonial__author-avatar"
              />
              <div>
                <strong>{testimonial.author}</strong>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-container cta-banner__inner">
          <h2 className="cta-banner__title">Pronto para valorizar o seu talento?</h2>
          <p className="cta-banner__sub">
            Junte-se a milhares de profissionais que já estão trocando habilidades
            e crescendo juntos no Troca Aí.
          </p>
          <div className="cta-banner__actions">
            <Link to="/discover">
              <Button variant="white" size="lg">Criar Conta Grátis</Button>
            </Link>
            <Link to="/community">
              <Button variant="ghost" size="lg">Falar com Suporte</Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
