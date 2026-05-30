import { PageHeader } from "@/components/docs/page-header";
import { Section, CodeBlock } from "@/components/docs/section";

const COLOR_TOKENS = [
  { token: "--primary", value: "oklch(0.5414 0.2456 293)", desc: "브랜드 바이올렛 — CTA, 링크, 포커스", preview: "oklch(0.5414 0.2456 293)" },
  { token: "--primary-hover", value: "oklch(0.4814 0.2456 293)", desc: "Primary 호버 상태", preview: "oklch(0.4814 0.2456 293)" },
  { token: "--primary-subtle", value: "oklch(0.96 0.04 293)", desc: "Primary 배경 틴트", preview: "oklch(0.96 0.04 293)" },
  { token: "--background", value: "oklch(1 0 0)", desc: "페이지 기본 배경", preview: "oklch(1 0 0)" },
  { token: "--foreground", value: "oklch(0.145 0 0)", desc: "기본 텍스트", preview: "oklch(0.145 0 0)" },
  { token: "--muted", value: "oklch(0.97 0 0)", desc: "보조 배경", preview: "oklch(0.97 0 0)" },
  { token: "--muted-foreground", value: "oklch(0.556 0 0)", desc: "보조 텍스트", preview: "oklch(0.556 0 0)" },
  { token: "--border", value: "oklch(0.922 0 0)", desc: "선/구분선", preview: "oklch(0.922 0 0)" },
  { token: "--destructive", value: "oklch(0.577 0.245 27.325)", desc: "에러/삭제", preview: "oklch(0.577 0.245 27.325)" },
];

const SEMANTIC_TOKENS = [
  { token: "--success", value: "oklch(0.527 0.154 150.069)", desc: "환급 성공 (초록)", preview: "oklch(0.527 0.154 150.069)" },
  { token: "--success-subtle", value: "oklch(0.95 0.05 150)", desc: "환급 성공 배경", preview: "oklch(0.95 0.05 150)" },
  { token: "--warning", value: "oklch(0.65 0.15 55)", desc: "납부 필요 (앰버)", preview: "oklch(0.65 0.15 55)" },
  { token: "--warning-subtle", value: "oklch(0.97 0.04 75)", desc: "납부 필요 배경", preview: "oklch(0.97 0.04 75)" },
  { token: "--amount-refund", value: "oklch(0.527 0.154 150.069)", desc: "환급액 금액 텍스트", preview: "oklch(0.527 0.154 150.069)" },
  { token: "--amount-tax", value: "oklch(0.65 0.15 55)", desc: "납부액 금액 텍스트", preview: "oklch(0.65 0.15 55)" },
  { token: "--kakao", value: "oklch(0.887 0.156 96.85)", desc: "카카오 로그인 버튼", preview: "oklch(0.887 0.156 96.85)" },
];

function ColorChip({ token, value, desc, preview }: { token: string; value: string; desc: string; preview: string }) {
  const isDark = token === "--foreground" || token === "--primary" || token === "--destructive" || token === "--success" || token === "--amount-refund" || token === "--amount-tax";
  return (
    <div className="flex items-center gap-3 py-2.5 border-b" style={{ borderColor: "var(--border)" }}>
      <div
        className="h-8 w-8 rounded-lg shrink-0 border"
        style={{ background: preview, borderColor: "var(--border)" }}
      />
      <div className="flex-1 min-w-0">
        <code className="text-xs font-mono font-semibold" style={{ color: "var(--primary)" }}>{token}</code>
        <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{desc}</p>
      </div>
      <code className="text-xs font-mono shrink-0" style={{ color: "var(--muted-foreground)" }}>{value}</code>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Colors"
        description="OKLCH 색 공간 기반 디자인 토큰. Tailwind v4 @theme inline 구조로 CSS 변수와 유틸리티 클래스가 자동 연결됩니다."
      />

      <Section title="Brand & Neutral">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {COLOR_TOKENS.map((c) => <ColorChip key={c.token} {...c} />)}
        </div>
      </Section>

      <Section title="Semantic — 반값환급 확장">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {SEMANTIC_TOKENS.map((c) => <ColorChip key={c.token} {...c} />)}
        </div>
      </Section>

      <Section title="사용법">
        <CodeBlock code={`/* CSS 변수로 직접 사용 */
.my-element {
  background: var(--primary);
  color: var(--primary-foreground);
}

/* Tailwind 유틸리티 (자동 매핑) */
<div className="bg-primary text-primary-foreground" />
<div className="text-muted-foreground" />

/* 반값환급 시맨틱 토큰 */
<p style={{ color: "var(--amount-refund)" }}>₩345,600 환급</p>
<p style={{ color: "var(--amount-tax)" }}>₩89,000 납부</p>`} />
      </Section>
    </div>
  );
}
