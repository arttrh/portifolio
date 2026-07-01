# Arthur Lucas — Portfolio

Portfólio pessoal em Next.js 15 + TypeScript + Tailwind, com elemento-assinatura
(diagrama hexagonal animado no hero) inspirado na sua especialidade em
arquitetura hexagonal (ports & adapters).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Editar conteúdo

Quase todo o texto do site (projetos, tecnologias, timeline, conquistas) vem de
um único arquivo tipado:

```
lib/data.ts
```

Edite ali e o site inteiro atualiza — não precisa mexer nos componentes.

## Estrutura

```
app/                  rotas (Home, Sobre, Projetos, Tecnologias, Experiência, Certificados, Contato)
components/ui/        primitivos estilo shadcn (Button, Card, Badge, Input, Textarea, Hexagon)
components/layout/    Navbar, Footer, Lenis smooth scroll
components/sections/  Hero, HexDiagram, ProjectCard, TechCard, TimelineList, etc.
hooks/                useScrollDirection, animações de reveal
lib/                  data.ts (conteúdo) e utils.ts
types/                tipos TypeScript do conteúdo
```

## Pendências para você

- O formulário de contato em `components/sections/contact-form.tsx` está
  funcional na UI mas não envia e-mail de verdade ainda — plugue Resend,
  Formspree, ou uma API route sua no lugar do `handleSubmit`.
- Trocar `metadataBase` em `app/layout.tsx` pra sua URL real quando publicar.
- Adicionar uma foto sua é opcional — o hero atual usa o diagrama hexagonal no
  lugar de uma foto (proposital, pra não depender de placeholder).
