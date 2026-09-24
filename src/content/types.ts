export type FAQ = { q: string; a: string };
export type Step = { title: string; text: string };

export type IconName =
  | "message"
  | "calendar"
  | "inbox"
  | "globe"
  | "target"
  | "kanban"
  | "workflow"
  | "refresh"
  | "file"
  | "book"
  | "plug"
  | "cog"
  | "shield"
  | "lock"
  | "scale"
  | "stethoscope"
  | "search"
  | "code"
  | "smartphone"
  | "layout"
  | "chart"
  | "users"
  | "sparkles"
  | "zap"
  | "clock"
  | "check"
  | "database"
  | "key"
  | "eye"
  | "compass"
  | "wrench"
  | "rocket"
  | "headset"
  | "calculator"
  | "gauge"
  | "house"
  | "receipt"
  | "bag"
  | "graduation";

export type VisualName =
  | "whatsapp"
  | "calendar"
  | "inbox"
  | "sitechat"
  | "leadscore"
  | "kanban"
  | "sequence"
  | "document"
  | "knowledge"
  | "flow"
  | "vault";

export type SolutionSlug = "atendimento-inteligente" | "vendas-e-receita" | "operacoes" | "ia-corporativa";

export type PriceTier = { name: string; from: number; suffix?: string; note?: string };

export type Pricing = {
  /** Valor de entrada ("a partir de"). */
  from: number;
  prefix?: string;
  suffix?: string;
  timeline?: string;
  details: string[];
  tiers?: PriceTier[];
};

export type SolutionHub = {
  slug: SolutionSlug;
  name: string;
  shortName: string;
  menuDescription: string;
  icon: IconName;
  title: string;
  metaDescription: string;
  h1: string;
  answer: string;
  problem: { title: string; items: string[] };
  highlight: { eyebrow: string; title: string; text: string; points: { title: string; text: string }[] };
  services: string[];
  integrations: string[];
  note?: string;
  faq: FAQ[];
  cta: { title: string; text: string };
  guide?: string;
};

export type ServicePage = {
  slug: string;
  solution: SolutionSlug;
  name: string;
  cardDescription: string;
  icon: IconName;
  featured?: boolean;
  title: string;
  metaDescription: string;
  h1: string;
  answer: string;
  forWho: string[];
  steps: Step[];
  included: string[];
  integrations: string[];
  paths?: { name: string; text: string; price: string }[];
  pricing: Pricing;
  security: string;
  indicators: string[];
  demoCase?: string;
  faq: FAQ[];
  cta: { title: string; text?: string };
  related: string[];
  guide?: string;
  visual: VisualName;
  updatedAt: string;
};
