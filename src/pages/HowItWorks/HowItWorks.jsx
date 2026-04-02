import Card from '../../components/ui/Card';
import { steps } from '../../data/mock';
import './HowItWorks.css';

const FAQ = [
  {
    q: 'Como garantir a qualidade da troca?',
    a: 'Todas as trocas são avaliadas por ambas as partes após a conclusão. Mantemos um sistema de reputação transparente.',
  },
  {
    q: 'Existe custo para usar a plataforma?',
    a: 'Não! A Troca Aí é completamente gratuita. Acreditamos que o talento não deve ter barreiras.',
  },
  {
    q: 'O que fazer se algo der errado?',
    a: 'Contamos com uma equipe de suporte e mediação para resolver disputas de forma justa e rápida.',
  },
];

export default function HowItWorks() {
  return (
    <main className="how-page">
      <div className="how-page__header">
        <h1>Como Funciona</h1>
        <p>Transforme suas habilidades em novas oportunidades em quatro passos simples.</p>
      </div>

      <div className="how-page__steps">
        {steps.map((step, index) => (
          <div key={step.id} className="how-page__step">
            <div className="how-page__step-number">{String(index + 1).padStart(2, '0')}</div>
            <Card className="how-page__step-card">
              <div className="how-page__step-icon">{step.icon}</div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="how-page__faq">
        <h2>Dúvidas Frequentes</h2>
        <div className="how-page__faq-list">
          {FAQ.map((item, i) => (
            <Card key={i} className="how-page__faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
