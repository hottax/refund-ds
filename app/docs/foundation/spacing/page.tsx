import { PageHeader } from "@/components/docs/page-header";
import { Section, CodeBlock } from "@/components/docs/section";

const SPACING = [
  { token: "0.5", px: "2px", usage: "최소 간격, 아이콘 내부" },
  { token: "1", px: "4px", usage: "인라인 요소 간격" },
  { token: "2", px: "8px", usage: "라벨-입력 간격, 배지 패딩" },
  { token: "3", px: "12px", usage: "버튼 세로 패딩, 리스트 아이템" },
  { token: "4", px: "16px", usage: "카드 패딩, 섹션 내부 기본 간격" },
  { token: "5", px: "20px", usage: "카드 가로 패딩" },
  { token: "6", px: "24px", usage: "섹션 세로 패딩, 페이지 상하" },
  { token: "8", px: "32px", usage: "섹션 간 간격" },
  { token: "10", px: "40px", usage: "큰 섹션 구분" },
  { token: "12", px: "48px", usage: "페이지 상단 여백" },
  { token: "16", px: "64px", usage: "히어로 섹션 여백" },
];

const RADIUS = [
  { token: "radius-sm", value: "calc(0.5rem × 0.6) = 4.8px", usage: "배지, 태그" },
  { token: "radius-md", value: "calc(0.5rem × 0.8) = 6.4px", usage: "입력 필드, 버튼 기본" },
  { token: "radius-lg", value: "0.5rem = 8px", usage: "카드, 모달" },
  { token: "radius-xl", value: "calc(0.5rem × 1.4) = 11.2px", usage: "시트, 바텀시트" },
  { token: "radius-2xl", value: "calc(0.5rem × 1.8) = 14.4px", usage: "큰 카드" },
  { token: "radius-full", value: "9999px", usage: "pill 버튼, 아바타" },
];

export default function SpacingPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Spacing"
        description="Tailwind 4pt 기반 스페이싱 시스템. 모바일 우선 레이아웃에 맞는 간격 가이드입니다."
      />

      <Section title="스페이싱 스케일">
        <div className="space-y-2">
          {SPACING.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <div className="w-12 shrink-0 text-right">
                <code className="text-xs font-mono font-semibold" style={{ color: "var(--primary)" }}>{s.token}</code>
              </div>
              <div className="w-12 shrink-0">
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.px}</p>
              </div>
              <div
                className="h-4 rounded shrink-0"
                style={{ width: `${parseInt(s.px) * 2}px`, background: "var(--primary)", opacity: 0.6 }}
              />
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.usage}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {RADIUS.map((r) => (
            <div key={r.token} className="flex items-center gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
              <div className="w-36 shrink-0">
                <code className="text-xs font-mono font-semibold" style={{ color: "var(--primary)" }}>--{r.token}</code>
              </div>
              <div className="w-48 shrink-0">
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{r.value}</p>
              </div>
              <div
                className="h-8 w-16 border-2"
                style={{
                  borderColor: "var(--primary)",
                  borderRadius: `var(--${r.token})`,
                }}
              />
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{r.usage}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="모바일 레이아웃 기준">
        <CodeBlock code={`/* 모바일 페이지 기본 구조 */
<div className="min-h-screen flex flex-col">
  {/* Top Nav: h-14 (56px) */}
  <nav className="h-14 px-4 flex items-center border-b" />

  {/* Content: 화면 너비 가득, 좌우 px-4 (16px) */}
  <main className="flex-1 px-4 py-6 space-y-4">
    {/* 카드: p-5 (20px) */}
    <div className="rounded-lg border p-5" />

    {/* 리스트 아이템: py-3 px-4 */}
    <div className="py-3 px-4 border-b" />
  </main>

  {/* CTA 버튼: px-4 pb-8 */}
  <div className="px-4 pb-8">
    <button className="w-full h-14 rounded-full" />
  </div>
</div>`} />
      </Section>
    </div>
  );
}
