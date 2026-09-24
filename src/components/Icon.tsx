import {
  BookOpen,
  Calculator,
  CalendarCheck,
  ChartLine,
  Check,
  Clock,
  CodeXml,
  Cog,
  Compass,
  Database,
  Eye,
  FileText,
  GraduationCap,
  Gauge,
  Globe,
  Headset,
  House,
  Inbox,
  KeyRound,
  LayoutTemplate,
  Lock,
  MessageSquareText,
  Plug,
  Receipt,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  ShoppingBag,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SquareKanban,
  Stethoscope,
  Target,
  Users,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";
import type { IconName } from "@/content/types";

const icons: Record<IconName, LucideIcon> = {
  message: MessageSquareText,
  calendar: CalendarCheck,
  inbox: Inbox,
  globe: Globe,
  target: Target,
  kanban: SquareKanban,
  workflow: Workflow,
  refresh: RefreshCw,
  file: FileText,
  book: BookOpen,
  plug: Plug,
  cog: Cog,
  shield: ShieldCheck,
  lock: Lock,
  scale: Scale,
  stethoscope: Stethoscope,
  search: Search,
  code: CodeXml,
  smartphone: Smartphone,
  layout: LayoutTemplate,
  chart: ChartLine,
  users: Users,
  sparkles: Sparkles,
  zap: Zap,
  clock: Clock,
  check: Check,
  database: Database,
  key: KeyRound,
  eye: Eye,
  compass: Compass,
  wrench: Wrench,
  rocket: Rocket,
  headset: Headset,
  calculator: Calculator,
  gauge: Gauge,
  house: House,
  receipt: Receipt,
  bag: ShoppingBag,
  graduation: GraduationCap,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp aria-hidden className={className ?? "size-5"} strokeWidth={1.75} />;
}

export function IconTile({ name, dark }: { name: IconName; dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15"
          : "inline-flex size-11 items-center justify-center rounded-xl bg-signal-50 text-signal ring-1 ring-signal-100"
      }
    >
      <Icon name={name} className="size-5" />
    </span>
  );
}

export function WhatsAppGlyph({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" aria-hidden className={className ?? "size-5"} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.89.9-2.99-.2-.31a8.2 8.2 0 1 1 6.85 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.85 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.7c1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function LinkedInGlyph({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" aria-hidden className={className ?? "size-5"} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function InstagramGlyph({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" aria-hidden className={className ?? "size-5"} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
