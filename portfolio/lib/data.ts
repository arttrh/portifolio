import type { Achievement, Certificate, Project, Technology, TimelineEntry } from "@/types";

export const profile = {
  name: "Arthur Lucas",
  role: "Backend Developer",
  focus: "Java · Spring Boot · Arquitetura Hexagonal",
  location: "São Paulo, SP",
  email: "arthurlucasx696@gmail.com",
  github: "https://github.com/rthurlucas",
  githubHandle: "github.com/rthurlucas",
  linkedin: "https://linkedin.com/in/arthurlucaas",
  linkedinHandle: "linkedin.com/in/arthurlucaas",
  summary:
    "Estudante de Análise e Desenvolvimento de Sistemas construindo APIs backend com o mesmo rigor que se cobra de um time sênior: arquitetura hexagonal, autenticação stateless, mensageria assíncrona e infraestrutura containerizada — em projetos próprios, do zero.",
};

export const stats = [
  { label: "Projetos com arquitetura hexagonal", value: "2" },
  { label: "Medalhas de ouro em olimpíadas", value: "3" },
  { label: "Anos de formação técnica em ADS", value: "3" },
];

export const projects: Project[] = [
  {
    slug: "ocorrencia-escolar",
    name: "Sistema de Ocorrência Escolar",
    period: "Jun 2026",
    tagline: "API REST para gestão de ocorrências escolares com controle de acesso por perfil.",
    description:
      "API para registrar e acompanhar ocorrências escolares, com permissões distintas para Administrador, Administrativo, Professor, Analista e Coordenador. O foco do projeto foi separar completamente as regras de negócio da infraestrutura, para que trocar um adapter — banco, autenticação, transporte — nunca exija tocar no domínio.",
    architecture:
      "Arquitetura hexagonal (ports & adapters): domínio isolado de frameworks, casos de uso explícitos e adapters de entrada/saída plugáveis.",
    challenges: [
      "Modelar as portas do domínio antes de qualquer detalhe de infraestrutura, para garantir que a regra de negócio não dependesse do Spring.",
      "Proteger o endpoint de login contra força bruta com rate limiting por IP, sem acoplar essa lógica ao caso de uso de autenticação.",
      "Versionar o schema do PostgreSQL com Flyway mantendo deleção lógica consistente em todas as entidades via enums de status.",
    ],
    stack: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Flyway", "Rate Limiting", "Docker"],
    githubUrl: "https://github.com/rthurlucas",
  },
  {
    slug: "auto-escola",
    name: "Auto Escola",
    period: "Abr 2026",
    tagline: "API REST para gestão de autoescola com mensageria assíncrona para confirmações por e-mail.",
    description:
      "Sistema de cadastro e agendamento para autoescolas, com perfis distintos para alunos e instrutores. O ponto central foi desacoplar o envio de e-mails de confirmação do fluxo principal de agendamento usando uma fila, para que uma falha no SMTP nunca derrubasse o cadastro de uma aula.",
    architecture:
      "API REST em camadas com autenticação JWT por perfil e comunicação assíncrona via mensageria para efeitos colaterais (envio de e-mail).",
    challenges: [
      "Desacoplar o disparo de e-mails do fluxo síncrono de agendamento usando RabbitMQ, evitando que lentidão no SMTP afetasse a resposta da API.",
      "Definir contratos de mensagem claros entre o serviço de agendamento e o worker de notificação.",
      "Containerizar o stack completo (API, banco, broker) para que o ambiente de desenvolvimento fosse reproduzível com um único comando.",
    ],
    stack: ["Java", "Spring Boot", "JWT", "MySQL", "RabbitMQ", "SMTP", "Docker"],
    githubUrl: "https://github.com/rthurlucas",
  },
];

export const technologies: Technology[] = [
  { name: "Java", category: "Backend", level: "Confortável", since: "2023", description: "Linguagem principal, usada em todos os projetos backend." },
  { name: "Spring Boot", category: "Backend", level: "Confortável", description: "APIs REST, injeção de dependência, camadas de serviço." },
  { name: "Spring Security", category: "Backend", level: "Intermediário", description: "Autenticação e autorização stateless com JWT." },
  { name: "Spring Data JPA", category: "Backend", level: "Intermediário", description: "Persistência e mapeamento objeto-relacional." },
  { name: "SQL", category: "Banco de Dados", level: "Confortável", description: "Modelagem relacional e escrita de queries." },
  { name: "PostgreSQL", category: "Banco de Dados", level: "Intermediário", description: "Banco principal dos projetos mais recentes." },
  { name: "MySQL", category: "Banco de Dados", level: "Intermediário", description: "Usado no projeto Auto Escola." },
  { name: "Flyway", category: "Banco de Dados", level: "Intermediário", description: "Versionamento de schema de banco de dados." },
  { name: "RabbitMQ", category: "Mensageria", level: "Intermediário", description: "Mensageria assíncrona para desacoplar efeitos colaterais." },
  { name: "Kafka", category: "Mensageria", level: "Aprendendo", description: "Estudo de streaming de eventos e arquiteturas orientadas a eventos." },
  { name: "SMTP", category: "Mensageria", level: "Intermediário", description: "Envio de e-mails transacionais via fila." },
  { name: "Docker", category: "DevOps", level: "Confortável", description: "Containerização de todos os projetos para ambientes reproduzíveis." },
  { name: "Kubernetes", category: "DevOps", level: "Aprendendo", description: "Estudo de orquestração de containers e escalabilidade." },
  { name: "GitHub Actions", category: "DevOps", level: "Aprendendo", description: "Automação de CI/CD." },
  { name: "Git", category: "DevOps", level: "Confortável", description: "Controle de versão no dia a dia." },
  { name: "Arquitetura Hexagonal", category: "Arquitetura", level: "Confortável", description: "Ports & adapters como padrão principal de organização de domínio." },
  { name: "Microsserviços", category: "Arquitetura", level: "Aprendendo", description: "Estudo de decomposição de sistemas e comunicação entre serviços." },
  { name: "REST", category: "Arquitetura", level: "Confortável", description: "Design de APIs HTTP para os projetos backend." },
  { name: "SOAP", category: "Arquitetura", level: "Aprendendo", description: "Contato inicial durante a formação técnica." },
  { name: "JWT / OAuth2", category: "Arquitetura", level: "Intermediário", description: "Autenticação stateless e fluxos de autorização delegada." },
  { name: "IntelliJ IDEA", category: "Ferramentas", level: "Confortável", description: "IDE principal para desenvolvimento Java." },
  { name: "Postman / Insomnia", category: "Ferramentas", level: "Confortável", description: "Testes e documentação manual de endpoints." },
  { name: "Linear", category: "Ferramentas", level: "Intermediário", description: "Organização de tarefas e acompanhamento de projetos." },
];

export const timeline: TimelineEntry[] = [
  {
    title: "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
    institution: "Escola Yervant Kissajikian",
    period: "Fev 2023 – Dez 2025",
    description:
      "Formação técnica que uniu o ensino médio regular à base de desenvolvimento de sistemas — onde comecei a programar de forma estruturada.",
    kind: "formacao",
  },
  {
    title: "Desenvolvedor Back-end Java",
    institution: "SENAI Frederico Jacob",
    period: "Fev 2026 – Mai 2026",
    description:
      "Curso focado em backend Java, aprofundando orientação a objetos, persistência de dados e boas práticas de desenvolvimento.",
    kind: "curso",
  },
  {
    title: "Desenvolvimento de API REST com Spring Boot",
    institution: "SENAI Orlando Laviero Ferraiuolo",
    period: "Mar 2026 – Jun 2026",
    description:
      "Curso dedicado à construção de APIs REST com Spring Boot — base direta para os projetos com arquitetura hexagonal.",
    kind: "curso",
  },
  {
    title: "Auto Escola — projeto próprio",
    institution: "Projeto pessoal",
    period: "Abr 2026",
    description:
      "Primeira API com mensageria assíncrona real, usando RabbitMQ para desacoplar envio de e-mails do fluxo principal.",
    kind: "projeto",
  },
  {
    title: "Sistema de Ocorrência Escolar — projeto próprio",
    institution: "Projeto pessoal",
    period: "Jun 2026",
    description:
      "Projeto mais maduro até aqui: arquitetura hexagonal completa, rate limiting e versionamento de banco com Flyway.",
    kind: "projeto",
  },
];

export const achievements: Achievement[] = [
  { title: "Medalha de Ouro — Redação", issuer: "Olimpíada de Redação SP", year: "2024" },
  { title: "Medalha de Ouro — Redação", issuer: "Olimpíada de Redação SP", year: "2024" },
  { title: "Medalha de Ouro — Matemática", issuer: "OMASP", year: "2025" },
];

export const certificates: Certificate[] = [];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário (leitura/escrita) · Básico (conversação) — em desenvolvimento ativo" },
];
