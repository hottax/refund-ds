import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function ShadowsPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Shadows"
        description="세 단계 elevation 시스템. OKLCH 기반 그림자로 다크모드에서도 자연스럽게 작동합니다."
      />

      <Section title="Shadow Scale">
        <div className="grid gap-6">
          {[
            {
              name: "shadow-sm",
              token: "--shadow-sm",
              value: "0 1px 3px oklch(0 0 0 / 0.08)",
              usage: "카드 기본, 입력 필드 포커스",
              desc: "미세한 입체감. 플랫 UI에 레이어 구분",
            },
            {
              name: "shadow-md",
              token: "--shadow-md",
              value: "0 4px 12px oklch(0 0 0 / 0.1)",
              usage: "드롭다운, 팝오버, 선택된 카드",
              desc: "중간 elevation. 인터랙티브 요소",
            },
            {
              name: "shadow-lg",
              token: "--shadow-lg",
              value: "0 8px 24px oklch(0 0 0 / 0.12)",
              usage: "모달, 바텀시트, 토스트",
              desc: "높은 elevation. 오버레이 레이어",
            },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-6 p-5 rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <div
                className="h-16 w-16 rounded-xl shrink-0 bg-white"
                style={{ boxShadow: `var(${s.token})` }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-mono font-semibold" style={{ color: "var(--primary)" }}>{s.name}</code>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}>
                    {s.usage}
                  </span>
                </div>
                <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                <code className="text-xs font-mono" style={{ color: "var(--muted-foreground)" }}>{s.value}</code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="실제 사용 예시">
        <PreviewBox>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="p-4 rounded-xl bg-white" style={{ boxShadow: "var(--shadow-sm)" }}>
              <p className="text-xs font-semibold mb-1">카드</p>
              <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>shadow-sm</p>
            </div>
            <div className="p-4 rounded-xl bg-white" style={{ boxShadow: "var(--shadow-md)" }}>
              <p className="text-xs font-semibold mb-1">드롭다운</p>
              <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>shadow-md</p>
            </div>
            <div className="p-4 rounded-xl bg-white" style={{ boxShadow: "var(--shadow-lg)" }}>
              <p className="text-xs font-semibold mb-1">모달</p>
              <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>shadow-lg</p>
            </div>
          </div>
        </PreviewBox>
      </Section>

      <Section title="사용법">
        <CodeBlock code={`/* CSS 변수로 직접 사용 */
.card { box-shadow: var(--shadow-sm); }
.dropdown { box-shadow: var(--shadow-md); }
.modal { box-shadow: var(--shadow-lg); }

/* Tailwind 인라인 스타일 */
<div style={{ boxShadow: "var(--shadow-md)" }} />`} />
      </Section>
    </div>
  );
}
