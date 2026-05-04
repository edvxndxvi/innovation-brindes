# Innovation Brindes — Teste Front-end

Mini-aplicação com autenticação e listagem de produtos, desenvolvida com Next.js, TypeScript, Zustand, React Query e Tailwind CSS.

---

## Como rodar com Docker 
### Passos

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd <nome-do-projeto>

# Suba o container
BASE_URL=https://apihomolog.innovationbrindes.com.br docker compose up
```

Acesse: [http://localhost:3000](http://localhost:3000)

**Credenciais de acesso:**
- Usuário: `dinamica`
- Senha: `123`

---

## Decisões Técnicas

### App Router
Optei pelo App Router por ser o roteador mais recente do Next.js, oferecendo recursos modernos como Server Components e Server Actions nativamente.

### Server Actions para chamadas de API
Centralizei as chamadas de API em Server Actions. Cada função tem responsabilidade única: saber como chamar o endpoint e normalizar o retorno. O tratamento de erros é feito nas camadas superiores (React Query / componentes).

### Zustand para estado global
Além de ser um requisito obrigatório, o Zustand é uma solução leve, simples e sem boilerplate excessivo comparado a Redux ou Context API.

### Infinite Scroll em vez de paginação tradicional
Mais adequado para páginas de produtos e mais simples de implementar com dados já carregados em memória.

### Token apenas em cookie
Inicialmente o token era salvo em `localStorage`/`sessionStorage` (para a funcionalidade "Manter Logado") e também em cookie (para o middleware). Isso gerou problemas no tratamento de sessão expirada, pois o cookie persistia mesmo após o "logout". A solução foi centralizar o token exclusivamente no cookie, controlando a persistência via `maxAge`.

---

## ⏳ O que ficou pendente

- Testes unitários (Vitest + React Testing Library)
- Teste E2E com Playwright
- Placeholder de imagem com fallback
- Retry/backoff nas requisições

O foco foi entregar todos os requisitos obrigatórios com qualidade, performance e acessibilidade.

---

## 📊 Lighthouse (Desktop)

<img width="1919" height="936" alt="image" src="https://github.com/user-attachments/assets/9a3f5890-f3bc-4b7d-9e03-2c6762e72cb0" />

---

## 🎥 Demonstração

https://github.com/user-attachments/assets/1edaf234-3bf3-482e-8fa6-b3f603d6af7d


