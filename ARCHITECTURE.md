# Arquitetura da Aplicação — Troca Aí

## Visão Geral

**Troca Aí** é uma plataforma online de trocas entre usuários — uma economia alternativa onde pessoas trocam habilidades e serviços sem usar dinheiro. Esta documentação registra as decisões técnicas, a arquitetura e a tech stack da aplicação frontend.

---

## Tech Stack

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework UI | **React 19** | Ecosistema maduro, componentização, estado declarativo |
| Build Tool | **Vite** | Build extremamente rápido, HMR nativo, zero configuração para React |
| Roteamento | **React Router v7** | Padrão de facto para SPA React; suporte a `basename` para GitHub Pages |
| Estilização | **CSS por componente (plain CSS)** | Sem dependências extras, estilos co-localizados com componentes, fácil de entender |
| CI/CD | **GitHub Actions + GitHub Pages** | Integração nativa ao repositório, sem custo adicional |
| Dados | **Mock data (JS estático)** | Adequado para fase inicial; fácil substituição por API real |

---

## Estrutura de Diretórios

```
lemonite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD para GitHub Pages
├── public/                     # Assets estáticos
├── src/
│   ├── components/
│   │   ├── layout/             # Componentes estruturais (Navbar, Footer)
│   │   └── ui/                 # Componentes reutilizáveis (Button, Card)
│   ├── data/
│   │   └── mock.js             # Dados mockados centralizados
│   ├── pages/
│   │   ├── Home/               # Página principal (homepage)
│   │   ├── Discover/           # Página de descoberta de habilidades
│   │   ├── HowItWorks/         # Página explicativa do funcionamento
│   │   └── Community/          # Página da comunidade
│   ├── App.jsx                 # Roteamento principal
│   ├── index.css               # Reset e variáveis globais CSS
│   └── main.jsx                # Ponto de entrada React
├── index.html
├── vite.config.js
├── package.json
└── ARCHITECTURE.md
```

---

## Princípios de Arquitetura

### Clean Architecture
A aplicação segue separação de responsabilidades por camadas:

- **UI Layer** (`components/ui/`): Componentes atômicos, reutilizáveis, sem lógica de negócio
- **Layout Layer** (`components/layout/`): Componentes estruturais (Navbar, Footer)
- **Pages Layer** (`pages/`): Composição de componentes; cada página é independente
- **Data Layer** (`data/`): Fonte única de dados mockados; isolada e substituível por API

### Clean Code
- Componentes pequenos e focados (Single Responsibility)
- Nomes descritivos em inglês para código, português para UI (reflete o público-alvo)
- CSS co-localizado por componente — sem estilos globais além do reset
- Dados centralizados em `mock.js` — fácil de trocar por chamadas à API

---

## Fluxo de Dados

```
mock.js ──► pages/*.jsx ──► components/ui/*.jsx
                │
                └──► components/layout/*.jsx
```

Quando a API estiver pronta, basta criar uma camada `services/` e hooks customizados
(`useSkills`, `useTrades`, etc.) sem alterar os componentes de UI.

---

## Pipeline CI/CD

```
git push (main)
    │
    ▼
GitHub Actions: build job
    │  npm ci
    │  npm run build  (vite build → /dist)
    │
    ▼
GitHub Actions: deploy job
    │  upload-pages-artifact
    │  deploy-pages
    │
    ▼
GitHub Pages → https://luishansen.github.io/lemonite/
```

A URL base `/lemonite/` está configurada no `vite.config.js` (propriedade `base`) e
consumida pelo React Router via `import.meta.env.BASE_URL`.

---

## Decisões Técnicas

### Por que Vite e não Create React App?
CRA está depreciado. Vite é mais rápido, mantido ativamente, e tem configuração mais simples.

### Por que CSS plain e não Tailwind/Styled-Components?
- Sem dependência adicional de build
- CSS variables (custom properties) oferecem theming sem overhead
- Mais legível para revisão e manutenção
- Co-localização por componente elimina conflitos globais

### Por que GitHub Actions nativo e não gh-pages npm?
O deploy via `actions/deploy-pages` é mais seguro (sem token pessoal), mais rápido
e integrado ao ambiente GitHub Pages moderno.

---

## Próximos Passos

- [ ] Adicionar autenticação (ex: Supabase Auth ou Auth0)
- [ ] Criar camada `services/` com chamadas à API REST
- [ ] Adicionar hooks customizados (`useSkills`, `useTrades`, etc.)
- [ ] Implementar sistema de notificações em tempo real (WebSocket)
- [ ] Migrar para TypeScript
- [ ] Adicionar testes unitários (Vitest) e de integração (Testing Library)
