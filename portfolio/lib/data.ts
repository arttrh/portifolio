import type { Achievement, Book, Certificate, Project, SetupItem, Technology, TimelineEntry } from "@/types";

export const profile = {
  name: "Arthur Lucas",
  role: "Backend Developer",
  focus: "Java · Spring Boot · APIs REST",
  location: "São Paulo, SP",
  email: "arthurlucasx696@gmail.com",
  github: "https://github.com/arttrh",
  githubHandle: "github.com/arttrh",
  linkedin: "https://linkedin.com/in/arthurlucaas",
  linkedinHandle: "linkedin.com/in/arthurlucaas",
  photo: "/arthur.jpg",
  summary:
    "Desenvolvo backend em Java e Spring Boot. Gosto da parte que quase ninguém vê: modelar a regra de negócio direito, decidir o que pode falhar sem derrubar o resto e deixar o ambiente subindo com um comando só. Meus projetos são onde eu treino isso.",
};

export const stats = [
  { label: "APIs que escrevi do zero", value: "3" },
  { label: "Medalhas em olimpíadas", value: "3" },
  { label: "Certificados concluídos", value: "5" },
];

export const projects: Project[] = [
  {
    slug: "ocorrencia-escolar",
    name: "Sistema de Ocorrência Escolar",
    period: "Jun 2026",
    tagline: "API para registrar ocorrências escolares, com acesso separado por perfil.",
    description:
      "Uma escola precisa registrar ocorrência de aluno, e quem registra não é quem analisa nem quem decide. Por isso a API tem seis perfis — professor, administrativo, analista, coordenador e admin — cada um enxergando uma fatia diferente. É o projeto mais completo dos três, e o único onde a estrutura do código é verificada por teste automatizado.",
    architecture:
      "Domínio isolado no centro, contratos como interfaces e implementações concretas nas bordas. Quatorze testes de ArchUnit rodam no mvn test e quebram o build se algum import atravessar uma fronteira que não devia.",
    challenges: [
      "Escrevi um teste que fiscaliza a arquitetura: se alguém importar Spring dentro do domínio, ou fizer um adapter conversar com outro, o build cai antes de virar dívida técnica. Tem também um scanner de linha de comando em tools/arch_scan.py para uma varredura mais larga.",
      "Vincular aluno a turma tem regra: turma cancelada não aceita, aluno inativo não entra, turma cheia barra. Cada uma virou classe própria, em vez de um monte de if dentro do service.",
      "Nada é apagado de verdade: cada entidade tem enum de status e as listagens são separadas em ativos e inativos.",
      "Oito migrations no Flyway e ddl-auto em validate: quem cria tabela é a migration, não o Hibernate.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway", "ArchUnit", "Bucket4j", "Docker"],
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
      "Validação em cadeia: cada regra de agendamento é um ValidadorAgendamento próprio, injetado como lista, e o RabbitMQ desacopla o envio de e-mail do caso de uso.",
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
    slug: "cantina-senai",
    name: "Cantina SENAI",
    period: "Mai 2026",
    tagline: "Pedidos e estoque de cantina, com telas server-side e API REST no mesmo projeto.",
    description:
      "A cantina vende produto que acaba — esse é o problema inteiro. Quando alguém fecha um pedido, o estoque cai junto, na mesma transação, e se zerar o produto sai do cardápio sozinho. Tem duas caras sobre o mesmo service: telas em Thymeleaf pra quem usa no dia a dia, e uma API REST pra quem quiser consumir de fora.",
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
  { name: "TypeScript", category: "Backend", level: "Confortável", description: "Linguagem deste portfólio, e o que uso fora do ecossistema Java." },
  { name: "NestJS", category: "Backend", level: "Intermediário", description: "Framework Node quando o projeto pede TypeScript no backend." },
  { name: "SQL", category: "Banco de Dados", level: "Confortável", description: "Modelagem e queries no dia a dia dos projetos." },
  { name: "PostgreSQL", category: "Banco de Dados", level: "Intermediário", description: "Banco do Sistema de Ocorrência Escolar." },
  { name: "MySQL", category: "Banco de Dados", level: "Intermediário", description: "Banco da Auto Escola e da Cantina." },
  { name: "MongoDB", category: "Banco de Dados", level: "Intermediário", description: "Documento em vez de tabela, quando o modelo pede isso." },
  { name: "Flyway", category: "Banco de Dados", level: "Intermediário", description: "Migrations versionadas — o schema vive no repositório." },
  { name: "RabbitMQ", category: "Mensageria", level: "Intermediário", description: "Tirei o envio de e-mail do caminho crítico da API com ele." },
  { name: "SMTP", category: "Mensageria", level: "Intermediário", description: "E-mails de confirmação, com template Thymeleaf, disparados por um consumidor." },
  { name: "Kafka", category: "Mensageria", level: "Aprendendo", description: "Vi no curso de mensageria da Alura; ainda não levei pra projeto." },
  { name: "Docker", category: "DevOps", level: "Confortável", description: "Todo projeto sobe com compose, banco e broker junto." },
  { name: "GitHub Actions", category: "DevOps", level: "Aprendendo", description: "Build e testes a cada push." },
  { name: "Git", category: "DevOps", level: "Confortável", description: "Branch, PR e histórico limpo." },
  { name: "Linux", category: "DevOps", level: "Confortável", description: "Meu ambiente de trabalho — mais sobre isso na aba Setup." },
  { name: "Kubernetes", category: "DevOps", level: "Aprendendo", description: "Estudando orquestração — próximo passo depois do Docker." },
  { name: "REST", category: "Arquitetura", level: "Confortável", description: "Design dos endpoints, status codes e contratos de request/response." },
  { name: "JWT", category: "Arquitetura", level: "Intermediário", description: "Autenticação sem sessão, com perfil dentro do token." },
  { name: "OpenAPI / Swagger", category: "Arquitetura", level: "Intermediário", description: "Documentação dos endpoints gerada junto com o código." },
  { name: "ArchUnit", category: "Arquitetura", level: "Intermediário", description: "Testes que fiscalizam a estrutura do projeto e quebram o build se ela for furada." },
  { name: "Ports & Adapters", category: "Arquitetura", level: "Confortável", description: "Padrão que uso quando o projeto pede isolamento do domínio." },
  { name: "Microsserviços", category: "Arquitetura", level: "Aprendendo", description: "Estudando decomposição e comunicação entre serviços." },
  { name: "Neovim", category: "Ferramentas", level: "Confortável", description: "Onde passo o dia." },
  { name: "IntelliJ IDEA", category: "Ferramentas", level: "Confortável", description: "Quando o projeto Java pede refactor pesado." },
  { name: "Postman", category: "Ferramentas", level: "Confortável", description: "Testar endpoint na mão antes de confiar nele." },
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
    title: "Desenvolvedor Back-end",
    institution: "SENAI Frederico Jacob",
    period: "Jan 2026 – Mai 2026",
    description:
      "160 horas de orientação a objetos levada a sério, persistência e as boas práticas que eu vinha usando de ouvido até então.",
    kind: "curso",
  },
  {
    title: "Cantina SENAI",
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
      "120 horas construindo API REST com Spring Boot — a base direta dos dois projetos que vieram depois.",
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
      "O mais completo até aqui: seis perfis de acesso, schema versionado com Flyway e testes que fiscalizam a própria estrutura do código.",
    kind: "projeto",
  },
];

export const achievements: Achievement[] = [
  { title: "Medalha — Olimpíada de Matemática", issuer: "OMASP", year: "2025" },
  { title: "Medalha — Olimpíada de Redação", issuer: "Olimpíada de Redação SP", year: "2024" },
  { title: "Medalha — Olimpíada Nacional de Ciências", issuer: "USP", year: "2024" },
];

export const certificates: Certificate[] = [
  {
    name: "Desenvolvedor Back-end",
    issuer: "SENAI Frederico Jacob",
    hours: "160 horas",
    period: "Jan – Mai 2026",
  },
  {
    name: "Desenvolvimento de API REST com Spring Boot",
    issuer: "SENAI Orlando Laviero Ferraiuolo",
    hours: "120 horas",
    period: "Mar – Jun 2026",
  },
  {
    name: "Spring Boot 3: desenvolva uma API Rest em Java",
    issuer: "Alura",
    hours: "10 horas",
    period: "Mai 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/9e023139-5742-4a24-8d00-61cefd818cae",
  },
  {
    name: "Docker: construindo imagens para produção",
    issuer: "Alura",
    hours: "8 horas",
    period: "Jun 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/a0e98fdd-3821-4ace-976b-b100d4969fd8",
  },
  {
    name: "Mensageria com Java: RabbitMQ e Kafka",
    issuer: "Alura",
    hours: "14 horas",
    period: "Jun 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/aaf3fa87-8c5d-4727-ad06-7eae022d292e",
  },
];

export const books: Book[] = [
  {
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    cover: "/livros/arquitetura-limpa.jpg",
    status: "lendo",
    note:
      "Peguei depois de já ter organizado dois projetos por instinto, e o livro foi colocando nome no que eu vinha fazendo sem saber explicar.",
  },
  {
    title: "Implementando Domain-Driven Design",
    author: "Vaughn Vernon",
    cover: "/livros/implementando-ddd.jpg",
    status: "quero-ler",
    note:
      "Próximo da fila. Quero entender como modelar o domínio antes de sair criando classe, que é onde eu ainda erro.",
  },
];

export const setup: SetupItem[] = [
  { category: "Sistema", name: "Linux", description: "Sistema do dia a dia, pra desenvolver e pra tudo o resto." },
  { category: "Sistema", name: "Wayland", description: "Servidor gráfico." },
  { category: "Editor", name: "Neovim", description: "Editor principal, configurado por mim." },
  { category: "Editor", name: "IntelliJ IDEA", description: "Projetos Java e Spring Boot." },
  { category: "Editor", name: "Eclipse", description: "Também entra no fluxo Java, dependendo do projeto." },
  { category: "Editor", name: "VS Code", description: "TypeScript, Node e o que fica fora do ecossistema Java." },
  { category: "Desenvolvimento", name: "Docker", description: "Banco, broker e app subindo por compose em vez de instalados na máquina." },
  { category: "Desenvolvimento", name: "Git", description: "Controle de versão, direto do terminal." },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Leio documentação sem dificuldade; conversação ainda em construção" },
];
