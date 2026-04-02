import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { communityPosts } from '../../data/mock';
import './Community.css';

const TOPICS = ['#design', '#fotografia', '#marketing', '#troca', '#networking'];

export default function Community() {
  return (
    <main className="community">
      <div className="community__header">
        <h1>Comunidade</h1>
        <p>Conecte-se, compartilhe experiências e cresça junto com outros trocadores.</p>
      </div>

      <div className="community__layout">
        <div className="community__feed">
          <h2>Feed</h2>
          {communityPosts.map((post) => (
            <Card key={post.id} className="community__post">
              <div className="community__post-header">
                <img src={post.avatar} alt={post.author} className="community__post-avatar" />
                <strong>{post.author}</strong>
              </div>
              <p className="community__post-content">{post.content}</p>
              <div className="community__post-actions">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </Card>
          ))}
        </div>

        <aside className="community__sidebar">
          <Card className="community__sidebar-card">
            <h3>Tópicos em Alta</h3>
            <ul className="community__topics">
              {TOPICS.map((t) => (
                <li key={t}><a href="#">{t}</a></li>
              ))}
            </ul>
          </Card>
          <Card className="community__sidebar-card">
            <h3>Convidar Amigo</h3>
            <p>Compartilhe a Troca Aí e ganhe destaque no perfil.</p>
            <Button variant="primary" size="sm">Convidar</Button>
          </Card>
        </aside>
      </div>
    </main>
  );
}
