import type { Achievement, Project, Technology, TimelineEntry } from "@/types";

export const profile = {
  name: "Arthur Lucas",
  role: "Backend Developer",
  focus: "Java · Spring Boot · Arquitetura Hexagonal",
  location: "São Paulo, SP",
  email: "arthurlucasx696@gmail.com",
  github: "https://github.com/arttrh",
  githubHandle: "github.com/arttrh",
  linkedin: "https://linkedin.com/in/arthurlucaas",
  linkedinHandle: "linkedin.com/in/arthurlucaas",
  summary:
    "Desenvolvo backend em Java e Spring Boot. Gosto da parte que quase ninguém vê: separar regra de negócio de framework, decidir o que pode falhar sem derrubar o resto e deixar o ambiente rodando com um comando. Meus projetos são onde eu treino isso.",
};

export const stats = [
  { label: "APIs que escrevi do zero", value: "3" },
  { label: "Medalhas de ouro em olimpíadas", value: "3" },
  { label: "Anos desde a primeira linha de código", value: "3" },
];

export const projects: Project[] = [
  {
    slug: "ocorrencia-escolar",
    name: "Sistema de Ocorrência Escolar",
    period: "Jun 2026",
    tagline: "API para registrar ocorrências escolares, com acesso separado por perfil.",
    description:
      "Uma escola precisa registrar ocorrência de aluno, e quem registra não é quem analisa nem quem decide. Daí a API tem seis perfis (professor, administrativo, analista, coordenador e admin), cada um enxergando uma fatia diferente. Foi o projeto onde levei arquitetura hexagonal até o fim: o domínio não importa nada de Spring, e trocar Postgres por outra coisa é mexer só no adapter de saída.",
    architecture:
      "Ports & adapters: application/core guarda os casos de uso e as validações, as portas de entrada e saída são interfaces, e os adapters (controller, repository, mapper) ficam plugados nas bordas.",
    challenges: [
      "Escrevi as portas antes dos adapters. Parece frescura, mas é o que impede a regra de negócio de virar refém de anotação de framework.",
      "Vincular aluno a turma tem regra: turma cancelada não aceita, aluno inativo não entra, turma cheia barra. Cada uma virou classe própria, em vez de um monte de if dentro do service.",
      "Nada é apagado de verdade: cada entidade tem enum de status e as listagens são separadas em ativos e inativos.",
      "Oito migrations no Flyway e ddl-auto em validate: quem cria tabela é a migration, não o Hibernate.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway", "Bucket4j", "Docker"],
    githubUrl: "https://github.com/arttrh/Ocorrencia-escolar",
  },
  {
    slug: "auto-escola",
    name: "Auto Escola",
    period: "Abr 2026",
    tagline: "API de agendamento de aulas com fila para os e-mails de confirmação.",
    description:
      "Sistema de autoescola com aluno, instrutor e agenda de instruções. O problema interessante aqui não foi o CRUD, foi o agendamento: quando marcar uma aula é válido? A resposta virou uma cadeia de sete validadores independentes. E o e-mail de confirmação saiu do fluxo principal — vai pra uma fila, porque SMTP lento não pode segurar a resposta da API.",
    architecture:
      "Hexagonal com validação em cadeia: cada regra de agendamento é um ValidadorAgendamento próprio, e o RabbitMQ desacopla o envio de e-mail do caso de uso.",
    challenges: [
      "Sete validadores separados pra marcar uma aula: instrutor disponível, instrutor ativo, aluno ativo, horário inteiro, dentro do funcionamento, antecedência mínima e limite diário do aluno.",
      "Tirar o e-mail do caminho crítico com RabbitMQ — se o Gmail demorar, o agendamento já respondeu há muito tempo.",
      "Um docker compose up sobe API, MySQL e RabbitMQ com healthcheck, e a app só sobe depois que os dois estão de pé.",
      "Perfis de acesso no JWT, e cache Caffeine nas consultas que mais se repetiam.",
    ],
    stack: ["Java", "Spring Boot", "JWT", "MySQL", "Flyway", "RabbitMQ", "Caffeine", "Thymeleaf", "OpenAPI", "Docker"],
    githubUrl: "https://github.com/arttrh/AUTOESCOLAN116",
  },
  {
    slug: "cantina",
    name: "Cantina Escolar",
    period: "Mai 2026",
    tagline: "Pedidos e estoque de cantina, com telas server-side e API REST no mesmo projeto.",
    description:
      "Meu projeto mais antigo dos três, e por isso mesmo o mais didático de olhar: MVC clássico com Spring, telas em Thymeleaf e uma API REST por cima do mesmo service. É onde dá pra ver como eu escrevia antes de me acostumar com ports e adapters — e é por isso que ele fica aqui.",
    architecture:
      "Spring MVC em camadas (controller, service, repository) com DTOs de entrada e saída, handler global de erros e Thymeleaf pras telas.",
    challenges: [
      "Pedido e estoque no mesmo fluxo: finalizar um pedido tem que dar baixa nos produtos sem deixar o estoque negativo.",
      "Ciclo de vida do pedido em enum (criado, em preparação, finalizado, cancelado) em vez de string solta no banco.",
      "Um handler global junta as exceções de domínio num lugar só, e o controller para de ser uma pilha de try/catch.",
      "Build no GitHub Actions a cada push, pra não descobrir que quebrou só na hora de apresentar.",
    ],
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Thymeleaf", "MySQL", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/arttrh/project-senai",
  },
];

export const technologies: Technology[] = [
  { name: "Java", category: "Backend", level: "Confortável", since: "2023", description: "Linguagem que uso em tudo que construo." },
  { name: "Spring Boot", category: "Backend", level: "Confortável", description: "APIs REST, injeção de dependência, perfis de ambiente." },
  { name: "Spring Security", category: "Backend", level: "Intermediário", description: "Filtros de autenticação e autorização por perfil, sem sessão." },
  { name: "Spring Data JPA", category: "Backend", level: "Intermediário", description: "Persistência e mapeamento das entidades." },
  { name: "SQL", category: "Banco de Dados", level: "Confortável", description: "Modelagem e queries no dia a dia dos projetos." },
  { name: "PostgreSQL", category: "Banco de Dados", level: "Intermediário", description: "Banco do Sistema de Ocorrência Escolar." },
  { name: "MySQL", category: "Banco de Dados", level: "Intermediário", description: "Banco da Auto Escola e da Cantina." },
  { name: "Flyway", category: "Banco de Dados", level: "Intermediário", description: "Migrations versionadas — o schema vive no repositório." },
  { name: "RabbitMQ", category: "Mensageria", level: "Intermediário", description: "Tirei o envio de e-mail do caminho crítico da API com ele." },
  { name: "SMTP", category: "Mensageria", level: "Intermediário", description: "E-mails de confirmação, com template Thymeleaf, disparados por um consumidor." },
  { name: "Kafka", category: "Mensageria", level: "Aprendendo", description: "Estudando streaming de eventos — ainda não usei em projeto." },
  { name: "Docker", category: "DevOps", level: "Confortável", description: "Todo projeto sobe com compose, banco e broker junto." },
  { name: "GitHub Actions", category: "DevOps", level: "Aprendendo", description: "Build e testes a cada push." },
  { name: "Git", category: "DevOps", level: "Confortável", description: "Branch, PR e histórico limpo." },
  { name: "Kubernetes", category: "DevOps", level: "Aprendendo", description: "Estudando orquestração — próximo passo depois do Docker." },
  { name: "Arquitetura Hexagonal", category: "Arquitetura", level: "Confortável", description: "Ports & adapters em dois projetos, do domínio pra fora." },
  { name: "REST", category: "Arquitetura", level: "Confortável", description: "Design dos endpoints, status codes e contratos de request/response." },
  { name: "JWT", category: "Arquitetura", level: "Intermediário", description: "Autenticação sem sessão, com perfil dentro do token." },
  { name: "OpenAPI / Swagger", category: "Arquitetura", level: "Intermediário", description: "Documentação dos endpoints gerada junto com o código." },
  { name: "Microsserviços", category: "Arquitetura", level: "Aprendendo", description: "Estudando decomposição e comunicação entre serviços." },
  { name: "IntelliJ IDEA", category: "Ferramentas", level: "Confortável", description: "Onde passo o dia." },
  { name: "Postman / Insomnia", category: "Ferramentas", level: "Confortável", description: "Testar endpoint na mão antes de confiar nele." },
  { name: "Linear", category: "Ferramentas", level: "Intermediário", description: "Organização das tarefas dos projetos." },
];

export const timeline: TimelineEntry[] = [
  {
    title: "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
    institution: "Escola Yervant Kissajikian",
    period: "Fev 2023 – Dez 2025",
    description:
      "Técnico junto com o ensino médio. Foi onde escrevi meu primeiro código que não era só pra passar na prova.",
    kind: "formacao",
  },
  {
    title: "Desenvolvedor Back-end Java",
    institution: "SENAI Frederico Jacob",
    period: "Fev 2026 – Mai 2026",
    description:
      "Orientação a objetos levada a sério, persistência e as boas práticas que eu vinha usando de ouvido até então.",
    kind: "curso",
  },
  {
    title: "Cantina Escolar",
    institution: "Projeto de curso",
    period: "Mai 2026",
    description:
      "Spring MVC com Thymeleaf e API REST no mesmo projeto: pedidos, produtos e estoque conversando.",
    kind: "projeto",
  },
  {
    title: "Desenvolvimento de API REST com Spring Boot",
    institution: "SENAI Orlando Laviero Ferraiuolo",
    period: "Mar 2026 – Jun 2026",
    description:
      "Curso de API REST com Spring Boot — foi aqui que caiu a ficha da arquitetura hexagonal.",
    kind: "curso",
  },
  {
    title: "Auto Escola",
    institution: "Projeto próprio",
    period: "Abr 2026",
    description:
      "Primeira vez que usei fila de verdade: RabbitMQ pra tirar o e-mail de confirmação do fluxo do agendamento.",
    kind: "projeto",
  },
  {
    title: "Sistema de Ocorrência Escolar",
    institution: "Projeto próprio",
    period: "Jun 2026",
    description:
      "O mais completo até aqui: hexagonal do começo ao fim, seis perfis de acesso e schema versionado com Flyway.",
    kind: "projeto",
  },
];

export const achievements: Achievement[] = [
  { title: "Medalha de Ouro — Redação", issuer: "Olimpíada de Redação SP", year: "2024" },
  { title: "Medalha de Ouro — Redação", issuer: "Olimpíada de Redação SP", year: "2024" },
  { title: "Medalha de Ouro — Matemática", issuer: "OMASP", year: "2025" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Leio documentação sem dificuldade; conversação ainda em construção" },
];
