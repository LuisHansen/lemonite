import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { featuredSkills } from '../../data/mock';
import './Discover.css';

const CATEGORIES = ['Todos', 'Design', 'Tecnologia', 'Marketing', 'Fotografia', 'Consultoria', 'Educação'];

export default function Discover() {
  return (
    <main className="discover">
      <div className="discover__header">
        <h1>Descubra Habilidades</h1>
        <p>Encontre profissionais prontos para trocar seus talentos com você.</p>
      </div>

      <div className="discover__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`discover__filter-btn${cat === 'Todos' ? ' discover__filter-btn--active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="discover__grid">
        {featuredSkills.map((skill) => (
          <Card key={skill.id} className="skill-card">
            <div className="skill-card__header">
              <img src={skill.avatar} alt={skill.user} className="skill-card__avatar" />
              <div>
                <strong>{skill.user}</strong>
                <p className="skill-card__seeks">Busca: {skill.seeks}</p>
              </div>
            </div>
            <h3 className="skill-card__title">{skill.title}</h3>
            <Button variant="outline" size="sm">Propor Troca</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
