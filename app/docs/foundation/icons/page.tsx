import { PageHeader } from "@/components/docs/page-header";
import { Section, CodeBlock } from "@/components/docs/section";
import {
  // Navigation
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  ArrowLeft, ArrowRight, Menu, X, MoreHorizontal, MoreVertical,
  // Actions
  Check, Plus, Minus, Edit, Trash2, Search, Filter, Download, Upload, Share2, Copy, RefreshCw,
  // Finance
  Wallet, CreditCard, Banknote, Receipt, Calculator, TrendingUp, TrendingDown, PiggyBank, Landmark,
  // Status / Feedback
  Info, AlertTriangle, AlertCircle, CheckCircle2, XCircle, Bell, BellOff, Loader2, Clock,
  // User / Identity
  User, UserCheck, UserPlus, Shield, Lock, Unlock, Eye, EyeOff, Fingerprint,
  // Document
  FileText, File, Folder, ClipboardList, ClipboardCheck, BookOpen,
  // Communication
  MessageCircle, Phone, Mail, HelpCircle,
  // Misc
  Home, Settings, LogOut, Star, Heart, Bookmark, Calendar, MapPin, Building2, QrCode,
} from "lucide-react";

type IconItem = { name: string; icon: React.ElementType };

const ICON_GROUPS: { group: string; icons: IconItem[] }[] = [
  {
    group: "Navigation",
    icons: [
      { name: "ChevronLeft", icon: ChevronLeft },
      { name: "ChevronRight", icon: ChevronRight },
      { name: "ChevronDown", icon: ChevronDown },
      { name: "ChevronUp", icon: ChevronUp },
      { name: "ArrowLeft", icon: ArrowLeft },
      { name: "ArrowRight", icon: ArrowRight },
      { name: "Menu", icon: Menu },
      { name: "X", icon: X },
      { name: "MoreHorizontal", icon: MoreHorizontal },
      { name: "MoreVertical", icon: MoreVertical },
    ],
  },
  {
    group: "Actions",
    icons: [
      { name: "Check", icon: Check },
      { name: "Plus", icon: Plus },
      { name: "Minus", icon: Minus },
      { name: "Edit", icon: Edit },
      { name: "Trash2", icon: Trash2 },
      { name: "Search", icon: Search },
      { name: "Filter", icon: Filter },
      { name: "Download", icon: Download },
      { name: "Upload", icon: Upload },
      { name: "Share2", icon: Share2 },
      { name: "Copy", icon: Copy },
      { name: "RefreshCw", icon: RefreshCw },
    ],
  },
  {
    group: "Finance",
    icons: [
      { name: "Wallet", icon: Wallet },
      { name: "CreditCard", icon: CreditCard },
      { name: "Banknote", icon: Banknote },
      { name: "Receipt", icon: Receipt },
      { name: "Calculator", icon: Calculator },
      { name: "TrendingUp", icon: TrendingUp },
      { name: "TrendingDown", icon: TrendingDown },
      { name: "PiggyBank", icon: PiggyBank },
      { name: "Landmark", icon: Landmark },
    ],
  },
  {
    group: "Status / Feedback",
    icons: [
      { name: "Info", icon: Info },
      { name: "AlertTriangle", icon: AlertTriangle },
      { name: "AlertCircle", icon: AlertCircle },
      { name: "CheckCircle2", icon: CheckCircle2 },
      { name: "XCircle", icon: XCircle },
      { name: "Bell", icon: Bell },
      { name: "BellOff", icon: BellOff },
      { name: "Loader2", icon: Loader2 },
      { name: "Clock", icon: Clock },
    ],
  },
  {
    group: "User / Identity",
    icons: [
      { name: "User", icon: User },
      { name: "UserCheck", icon: UserCheck },
      { name: "UserPlus", icon: UserPlus },
      { name: "Shield", icon: Shield },
      { name: "Lock", icon: Lock },
      { name: "Unlock", icon: Unlock },
      { name: "Eye", icon: Eye },
      { name: "EyeOff", icon: EyeOff },
      { name: "Fingerprint", icon: Fingerprint },
    ],
  },
  {
    group: "Document",
    icons: [
      { name: "FileText", icon: FileText },
      { name: "File", icon: File },
      { name: "Folder", icon: Folder },
      { name: "ClipboardList", icon: ClipboardList },
      { name: "ClipboardCheck", icon: ClipboardCheck },
      { name: "BookOpen", icon: BookOpen },
    ],
  },
  {
    group: "Communication",
    icons: [
      { name: "MessageCircle", icon: MessageCircle },
      { name: "Phone", icon: Phone },
      { name: "Mail", icon: Mail },
      { name: "HelpCircle", icon: HelpCircle },
    ],
  },
  {
    group: "Misc",
    icons: [
      { name: "Home", icon: Home },
      { name: "Settings", icon: Settings },
      { name: "LogOut", icon: LogOut },
      { name: "Star", icon: Star },
      { name: "Heart", icon: Heart },
      { name: "Bookmark", icon: Bookmark },
      { name: "Calendar", icon: Calendar },
      { name: "MapPin", icon: MapPin },
      { name: "Building2", icon: Building2 },
      { name: "QrCode", icon: QrCode },
    ],
  },
];

function IconCard({ name, icon: Icon }: IconItem) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-xl border transition-colors hover:bg-muted cursor-default"
      style={{ borderColor: "var(--border)" }}
    >
      <Icon size={20} style={{ color: "var(--foreground)" }} />
      <span className="text-[10px] text-center leading-tight" style={{ color: "var(--muted-foreground)" }}>
        {name}
      </span>
    </div>
  );
}

export default function IconsPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Icons"
        description="lucide-react 아이콘 라이브러리 기반. 반값환급 서비스에서 사용하는 아이콘 카탈로그입니다."
      />

      <div className="mb-6 p-4 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>패키지:</span>{" "}
          <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--background)", color: "var(--primary)" }}>lucide-react</code>
          {" "}— 모든 아이콘은 size / strokeWidth / color props를 지원합니다.
        </p>
      </div>

      {ICON_GROUPS.map(({ group, icons }) => (
        <Section key={group} title={group}>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {icons.map((item) => (
              <IconCard key={item.name} {...item} />
            ))}
          </div>
        </Section>
      ))}

      <Section title="사용법">
        <CodeBlock code={`import { ChevronLeft, CheckCircle2, Loader2 } from "lucide-react";

// 기본 사용
<ChevronLeft size={20} />

// 색상 지정
<CheckCircle2 size={20} style={{ color: "var(--success)" }} />

// 애니메이션 (로딩)
<Loader2 size={20} className="animate-spin" style={{ color: "var(--primary)" }} />

// strokeWidth 조정
<ChevronLeft size={20} strokeWidth={1.5} />`} />
      </Section>

      <Section title="크기 가이드">
        <div className="flex items-end gap-6 py-4">
          {[
            { size: 14, label: "14 — 인라인" },
            { size: 16, label: "16 — 소형" },
            { size: 20, label: "20 — 기본" },
            { size: 24, label: "24 — 강조" },
            { size: 32, label: "32 — 대형" },
          ].map(({ size, label }) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <ChevronRight size={size} style={{ color: "var(--primary)" }} />
              <span className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>{label}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
