export type TechLevel = "Aprendendo" | "Intermediário" | "Confortável";

export interface Technology {
  name: string;
  category: "Backend" | "Banco de Dados" | "Mensageria" | "DevOps" | "Arquitetura" | "Ferramentas";
  level: TechLevel;
  since?: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  period: string;
  tagline: string;
  description: string;
  architecture: string;
  challenges: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface TimelineEntry {
  title: string;
  institution: string;
  period: string;
  description: string;
  kind: "formacao" | "curso" | "projeto";
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  hours: string;
  period: string;
  /** Link público de verificação, quando o emissor oferece um. */
  verifyUrl?: string;
}

export interface Book {
  title: string;
  author: string;
  cover: string;
  status: "lendo" | "quero-ler";
  /** Por que este livro, na minha voz. */
  note: string;
}

export interface SetupItem {
  category: "Sistema" | "Editor" | "Terminal" | "Desenvolvimento";
  name: string;
  description: string;
}
