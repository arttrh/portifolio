import type { Achievement, Book, Certificate, ParallelProject, Project, SetupItem, Technology, TimelineEntry } from "@/types";

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
    "Sou desenvolvedor backend e uso Java e Spring Boot nos meus projetos. Estou buscando minha primeira oportunidade na área e reuni aqui o código e as decisões de cada trabalho.",
};

export const projects: Project[] = [
  {
    slug: "ocorrencia-escolar",
    name: "Sistema de Ocorrência Escolar",
    period: "Jun 2026",
    tagline: "Registro de ocorrências de alunos, com validação de turma e acesso por perfil.",
    description:
      "Uma ocorrência precisa estar ligada ao aluno e à turma certos. Neste projeto, a API confere o vínculo e a situação dos cadastros antes de registrar a ocorrência. Também separei as permissões por perfil e mantive um histórico que pode ser consultado por aluno.",
    architecture:
      "Separei as regras de negócio do código de HTTP, banco de dados e autenticação. Os testes com ArchUnit verificam essa separação para impedir, por exemplo, que o domínio passe a depender do Spring.",
    challenges: [
      "Antes de registrar uma ocorrência, os validadores conferem se o aluno está ativo, se a turma está ativa e se o aluno pertence a ela.",
      "Na matrícula, cada regra tem seu próprio validador. O vínculo só é salvo depois das verificações de aluno, turma e disponibilidade de vaga.",
      "Cancelar uma ocorrência muda seu status sem apagar o registro, para manter o histórico do aluno.",
      "As mudanças no banco ficam em migrations do Flyway. Os testes de arquitetura também acompanham o código no repositório.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway", "ArchUnit", "Bucket4j", "Docker"],
    githubUrl: "https://github.com/arttrh/Ocorrencia-escolar",
    demoUrl: "https://ocorrencia-escolar-arttrh.vercel.app",
  },
  {
    slug: "auto-escola",
    name: "Auto Escola",
    period: "Abr 2026",
    tagline: "Agendamento de aulas com validações de horário e confirmação por e-mail.",
    description:
      "Para marcar uma aula, preciso conferir o horário, a disponibilidade do instrutor e a situação do aluno. Separei essas verificações em validadores de agendamento. A confirmação por e-mail vai para uma fila no RabbitMQ e é enviada por um consumidor separado.",
    architecture:
      "Cada regra implementa a interface ValidadorAgendamento, e o serviço executa a lista antes de salvar a aula. O envio de e-mail fica em um consumidor RabbitMQ, separado da requisição de agendamento.",
    challenges: [
      "As validações conferem se aluno e instrutor estão ativos, se o horário é permitido, a antecedência da aula e o limite diário do aluno.",
      "A disponibilidade do instrutor é consultada antes de salvar, para recusar um horário que já está ocupado.",
      "Quando o instrutor não é informado, a aplicação busca um profissional disponível pela especialidade solicitada.",
      "A API publica a notificação na fila. O consumidor faz o envio por SMTP, sem deixar essa comunicação dentro da requisição HTTP.",
    ],
    stack: ["Java", "Spring Boot", "JWT", "MySQL", "Flyway", "RabbitMQ", "Caffeine", "Thymeleaf", "OpenAPI", "Docker"],
    githubUrl: "https://github.com/arttrh/AUTOESCOLAN116",
    demoUrl: "https://autoescola-n116-arttrh.vercel.app",
  },
  {
    slug: "cantina-senai",
    name: "Cantina SENAI",
    period: "Mai 2026",
    tagline: "Pedidos de cantina com reserva de estoque e acompanhamento do preparo.",
    description:
      "Aceitar um pedido sem conferir o saldo pode vender um produto que já acabou. No projeto, o estoque é reservado ao criar o pedido e devolvido no cancelamento. As telas do cliente e do funcionário usam as mesmas regras de negócio da API.",
    architecture:
      "Usei Spring MVC, com controllers separados para as telas Thymeleaf e para a API REST. Os serviços concentram as regras de pedidos e estoque, e o JPA faz a persistência no MySQL.",
    challenges: [
      "Dois pedidos podem disputar o último item. A consulta bloqueia o registro de estoque durante a transação para conferir o saldo e dar baixa.",
      "Se algum item não tiver saldo, a transação é desfeita. Assim, o sistema não grava só uma parte do pedido.",
      "Cancelar um pedido devolve as quantidades reservadas, sem apagar o histórico da compra.",
      "O cliente só consulta os próprios pedidos. O funcionário acompanha a fila de preparo e as mudanças de status.",
    ],
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Thymeleaf", "MySQL", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/arttrh/project-senai",
  },
];

export const parallelProjects: ParallelProject[] = [
  {
    slug: "via-cep",
    name: "Consulta de CEP",
    description: "Um programa de terminal que recebe um CEP e busca o endereço no serviço ViaCEP.",
    details: "A consulta é feita por HTTP, e o Gson converte o JSON em um objeto Java. O código trata o retorno de CEP não encontrado e define limites de espera para a conexão e a resposta.",
    stack: ["Java", "Apache HttpClient", "Gson", "Maven"],
    githubUrl: "https://github.com/arttrh/ViaCep",
    status: "Estudo",
  },
  {
    slug: "conversor-numero",
    name: "Conversor de números",
    description: "Programa de terminal que consulta um serviço SOAP para escrever um número inteiro por extenso.",
    details: "Usei JAX-WS e as classes geradas a partir do contrato WSDL para chamar a operação NumberToWords e mostrar a resposta no terminal.",
    stack: ["Java", "SOAP", "JAX-WS", "Maven"],
    githubUrl: "https://github.com/arttrh/ConversorNumero",
    status: "Estudo",
  },
  {
    slug: "webflux",
    name: "Playlists com WebFlux",
    description: "Estudo de programação reativa com cadastro e consulta de playlists no MongoDB.",
    details: "Estudei Mono e Flux e o acesso reativo ao MongoDB. Experimentei controllers e rotas com handlers, usando Docker para subir o banco localmente.",
    stack: ["Java", "Spring WebFlux", "MongoDB", "Reactor", "Docker"],
    githubUrl: "https://github.com/arttrh/Webflux",
    status: "Estudo",
  },
  {
    slug: "pagamentos",
    name: "Pagamentos",
    description: "Projeto de simulação de pagamentos com persistência e troca de eventos pelo RabbitMQ. Ainda está incompleto.",
    details: "O código separa o gateway, o repositório e a publicação de eventos. O gateway atual é simulado; não há integração com um provedor de pagamentos real.",
    stack: ["Java", "Spring Boot", "RabbitMQ", "MySQL", "Flyway", "Docker"],
    githubUrl: "https://github.com/arttrh/Pagamentos",
    status: "Em desenvolvimento",
    pending: "Concluir o fluxo de estorno, que ainda não está implementado.",
  },
];

export const technologies: Technology[] = [
  { name: "Java", category: "Backend", level: "Confortável", since: "2023", description: "Minha principal linguagem nos projetos de backend." },
  { name: "Spring Boot", category: "Backend", level: "Confortável", description: "Uso para criar as APIs e configurar as aplicações Java." },
  { name: "Spring Security", category: "Backend", level: "Intermediário", description: "Login e controle de acesso conforme o perfil do usuário." },
  { name: "Spring Data JPA", category: "Backend", level: "Intermediário", description: "Mapeamento das entidades e consultas ao banco nas aplicações Java." },
  { name: "TypeScript", category: "Backend", level: "Confortável", description: "Uso neste portfólio e em aplicações fora do ecossistema Java." },
  { name: "NestJS", category: "Backend", level: "Intermediário", description: "Desenvolvimento de backend com Node.js e TypeScript." },
  { name: "SQL", category: "Banco de Dados", level: "Confortável", description: "Criação de tabelas, relacionamentos e consultas nos projetos." },
  { name: "PostgreSQL", category: "Banco de Dados", level: "Intermediário", description: "Banco do Sistema de Ocorrência Escolar." },
  { name: "MySQL", category: "Banco de Dados", level: "Intermediário", description: "Banco da Auto Escola e da Cantina." },
  { name: "MongoDB", category: "Banco de Dados", level: "Intermediário", description: "Armazenamento e consultas com dados em documentos." },
  { name: "Flyway", category: "Banco de Dados", level: "Intermediário", description: "Versionamento das mudanças do banco com migrations no repositório." },
  { name: "RabbitMQ", category: "Mensageria", level: "Intermediário", description: "Fila usada para separar o envio de e-mail do agendamento de aulas." },
  { name: "SMTP", category: "Mensageria", level: "Intermediário", description: "Envio das confirmações por e-mail no projeto de autoescola." },
  { name: "Kafka", category: "Mensageria", level: "Aprendendo", description: "Estudei no curso de mensageria da Alura. Ainda não usei em um projeto próprio." },
  { name: "Docker", category: "DevOps", level: "Confortável", description: "Ambientes com a aplicação, o banco e os serviços necessários para rodar o projeto." },
  { name: "GitHub Actions", category: "DevOps", level: "Aprendendo", description: "Automação de build e testes nos repositórios." },
  { name: "Git", category: "DevOps", level: "Confortável", description: "Versionamento do código e trabalho com branches e pull requests." },
  { name: "Linux", category: "DevOps", level: "Confortável", description: "Sistema que uso no meu ambiente de desenvolvimento." },
  { name: "Kubernetes", category: "DevOps", level: "Aprendendo", description: "Estudei a configuração de aplicações, bancos e serviços no curso de Kubernetes com microsserviços da Alura." },
  { name: "REST", category: "Arquitetura", level: "Confortável", description: "Definição de endpoints, métodos HTTP e dados de entrada e saída." },
  { name: "JWT", category: "Arquitetura", level: "Intermediário", description: "Tokens usados na autenticação e na identificação do perfil de acesso." },
  { name: "OpenAPI / Swagger", category: "Arquitetura", level: "Intermediário", description: "Documentação das rotas e dos formatos aceitos e retornados pela API." },
  { name: "ArchUnit", category: "Arquitetura", level: "Intermediário", description: "Testes que verificam as dependências entre as partes da aplicação." },
  { name: "Ports & Adapters", category: "Arquitetura", level: "Confortável", description: "Separação das regras de negócio dos detalhes de HTTP, banco e outros serviços." },
  { name: "Microsserviços", category: "Arquitetura", level: "Aprendendo", description: "Estou estudando a separação de uma aplicação em serviços e a comunicação entre eles." },
  { name: "Neovim", category: "Ferramentas", level: "Confortável", description: "Editor que uso no meu ambiente Linux." },
  { name: "IntelliJ IDEA", category: "Ferramentas", level: "Confortável", description: "Desenvolvimento e refatoração de projetos Java." },
  { name: "Postman", category: "Ferramentas", level: "Confortável", description: "Requisições para conferir os retornos e as validações das APIs." },
  { name: "Linear", category: "Ferramentas", level: "Intermediário", description: "Organização das tarefas dos projetos." },
];

export const timeline: TimelineEntry[] = [
  {
    title: "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
    institution: "Escola Yervant Kissajikian",
    period: "Fev 2023 – Dez 2025",
    description:
      "Formação técnica cursada junto com o ensino médio, com estudos de programação e banco de dados.",
    kind: "formacao",
  },
  {
    title: "Desenvolvedor Back-end",
    institution: "SENAI Frederico Jacob",
    period: "Jan 2026 – Mai 2026",
    description:
      "Curso de 160 horas com orientação a objetos, persistência e desenvolvimento de aplicações backend.",
    kind: "curso",
  },
  {
    title: "Cantina SENAI",
    institution: "Projeto de curso",
    period: "Mai 2026",
    description:
      "Projeto de curso com cadastro de produtos, pedidos e controle de estoque, usando Spring MVC e Thymeleaf.",
    kind: "projeto",
  },
  {
    title: "Desenvolvimento de API REST com Spring Boot",
    institution: "SENAI Orlando Laviero Ferraiuolo",
    period: "Mar 2026 – Jun 2026",
    description:
      "Curso de 120 horas voltado à construção de APIs REST com Spring Boot.",
    kind: "curso",
  },
  {
    title: "Auto Escola",
    institution: "Projeto próprio",
    period: "Abr 2026",
    description:
      "Agendamento de aulas com regras de disponibilidade e envio de confirmação por uma fila RabbitMQ.",
    kind: "projeto",
  },
  {
    title: "Sistema de Ocorrência Escolar",
    institution: "Projeto próprio",
    period: "Jun 2026",
    description:
      "Registro de ocorrências por aluno, permissões por perfil e testes para verificar a separação das regras de negócio.",
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
    verifyUrl: "https://github.com/arttrh/certificados/blob/main/certificado-desenvolvedor-back-end.pdf",
  },
  {
    name: "Desenvolvimento de API REST com Spring Boot",
    issuer: "SENAI Orlando Laviero Ferraiuolo",
    hours: "120 horas",
    period: "Mar – Jun 2026",
    verifyUrl: "https://github.com/arttrh/certificados/blob/main/certificado-api-rest-spring-boot.pdf",
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
  {
    name: "Java: aplicando a Orientação a Objetos",
    issuer: "Alura",
    hours: "10 horas",
    period: "Nov 2025",
    verifyUrl: "https://cursos.alura.com.br/certificate/3cd224d2-fefd-4365-b091-f729a37a17d1",
  },
  {
    name: "DevOps: trabalhando com repositórios no GitHub",
    issuer: "Alura",
    hours: "8 horas",
    period: "Mai 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/76b8fd35-86bc-462c-acaa-b534a829997f",
  },
  {
    name: "Spring Boot 3: documente, teste e prepare uma API para o deploy",
    issuer: "Alura",
    hours: "10 horas",
    period: "Jun 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/2ea52351-0755-456a-8e88-8ae2c989561a",
  },
  {
    name: "Kubernetes com microsserviços: subindo e gerenciando uma aplicação",
    issuer: "Alura",
    hours: "8 horas",
    period: "Nov 2026",
    verifyUrl: "https://cursos.alura.com.br/certificate/c27b1f99-a084-4cd4-ab3a-840314503fe6",
  },
];

export const stats = [
  { label: "APIs em destaque", value: String(projects.length) },
  { label: "Medalhas em olimpíadas", value: String(achievements.length) },
  { label: "Certificados concluídos", value: String(certificates.length) },
];

export const books: Book[] = [
  {
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    cover: "/livros/arquitetura-limpa.jpg",
    status: "lendo",
    note:
      "Estou lendo para entender melhor as dependências entre as partes da aplicação e comparar com as escolhas dos meus projetos.",
  },
  {
    title: "Implementando Domain-Driven Design",
    author: "Vaughn Vernon",
    cover: "/livros/implementando-ddd.jpg",
    status: "quero-ler",
    note:
      "Quero estudar como organizar o código a partir das regras e dos termos do negócio. É a próxima leitura da lista.",
  },
];

export const setup: SetupItem[] = [
  {
    category: "Sistema",
    name: "CachyOS + Niri",
    description: "Desktop Linux com Wayland. Uso o Niri para organizar as janelas e os atalhos entre os espaços de trabalho.",
  },
  {
    category: "Sistema",
    name: "Serpantinum",
    description: "Barra, dock e launcher do desktop, com tema escuro e acesso aos controles da sessão.",
  },
  {
    category: "Terminal",
    name: "Kitty",
    description: "Terminal do ambiente, com cores e fontes ajustadas junto do restante do desktop.",
  },
  {
    category: "Terminal",
    name: "Zsh + Starship",
    description: "Shell e prompt com aliases e atalhos para os comandos que uso no desenvolvimento.",
  },
  {
    category: "Editor",
    name: "Neovim",
    description: "Configuração em Lua com ferramentas Java e controle das versões dos plugins.",
  },
  {
    category: "Desenvolvimento",
    name: "Ferramentas do desktop",
    description: "Scripts e atalhos locais para capturas de tela, menus e troca de wallpapers.",
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Leio documentação sem dificuldade; conversação ainda em construção" },
];
