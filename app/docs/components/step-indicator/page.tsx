import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function StepIndicator({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
                style={{
                  background: done ? "var(--success)" : active ? "var(--primary)" : "var(--muted)",
                  color: done || active ? "white" : "var(--muted-foreground)",
                }}
              >
                {done ? "✓" : i + 1}
              </div>
              <p className="text-[10px] mt-1 text-center whitespace-nowrap" style={{
                color: active ? "var(--primary)" : done ? "var(--success)" : "var(--muted-foreground)",
                fontWeight: active ? 600 : 400,
              }}>
                {step}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-1.5 mb-4" style={{
                background: done ? "var(--success)" : "var(--border)",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

const STEPS = ["본인 인증", "소득 조회", "신청서 확인", "계좌 등록", "신청 완료"];

export default function StepIndicatorPage() {
  return (
    <div>
      <PageHeader
        badge="Display"
        title="Step Indicator"
        description="환급 신청 플로우의 진행 상태를 시각화. 완료(초록) · 현재(바이올렛) · 미진행(회색) 세 상태를 구분합니다."
      />

      <Section title="기본 — 2단계 진행 중">
        <PreviewBox>
          <StepIndicator steps={STEPS} current={1} />
        </PreviewBox>
      </Section>

      <Section title="3단계 진행 중">
        <PreviewBox>
          <StepIndicator steps={STEPS} current={3} />
        </PreviewBox>
      </Section>

      <Section title="완료">
        <PreviewBox>
          <StepIndicator steps={STEPS} current={5} />
        </PreviewBox>
      </Section>

      <Section title="축약형 (숫자 없이)">
        <PreviewBox>
          <div className="flex items-center gap-2 w-full">
            {STEPS.map((step, i) => (
              <div key={step} className="flex items-center flex-1 last:flex-none">
                <div
                  className="h-1.5 flex-1 rounded-full"
                  style={{ background: i <= 2 ? "var(--primary)" : "var(--muted)" }}
                />
              </div>
            ))}
          </div>
          <p className="text-xs mt-2 w-full text-center" style={{ color: "var(--muted-foreground)" }}>3 / 5 단계</p>
        </PreviewBox>
        <CodeBlock code={`{/* 프로그레스 바 스타일 */}
<div className="flex items-center gap-1 w-full">
  {steps.map((_, i) => (
    <div key={i} className="h-1.5 flex-1 rounded-full"
         style={{ background: i <= current ? "var(--primary)" : "var(--muted)" }} />
  ))}
</div>`} />
      </Section>

      <Section title="구현 코드">
        <CodeBlock code={`function StepIndicator({ steps, current }) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: done ? "var(--success)"
                    : active ? "var(--primary)" : "var(--muted)",
                  color: done || active ? "white" : "var(--muted-foreground)",
                }}
              >
                {done ? "✓" : i + 1}
              </div>
              <p className="text-[10px] mt-1">{step}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-1.5 mb-4"
                   style={{ background: done ? "var(--success)" : "var(--border)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}`} />
      </Section>
    </div>
  );
}
