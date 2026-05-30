import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function DividerPage() {
  return (
    <div>
      <PageHeader
        badge="Layout"
        title="Divider"
        description="섹션 또는 요소를 시각적으로 구분하는 구분선. 굵기와 여백 조합으로 강도를 조절합니다."
      />

      <Section title="기본 수평 구분선">
        <PreviewBox>
          <div className="w-full space-y-4">
            <p className="text-sm">위 섹션 콘텐츠</p>
            <div className="h-px w-full" style={{ background: "var(--border)" }} />
            <p className="text-sm">아래 섹션 콘텐츠</p>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="h-px w-full" style={{ background: "var(--border)" }} />`} />
      </Section>

      <Section title="강조 구분선 (섹션 구분)">
        <PreviewBox>
          <div className="w-full space-y-0">
            <div className="py-4">
              <p className="text-sm font-semibold">소득 정보</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>프리랜서 소득 ₩24,000,000</p>
            </div>
            <div className="h-2 -mx-6" style={{ background: "var(--muted)" }} />
            <div className="py-4">
              <p className="text-sm font-semibold">공제 항목</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>기본공제 ₩1,500,000</p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 굵은 섹션 구분 — 배경색 변경 방식 */}
<div className="h-2 -mx-4" style={{ background: "var(--muted)" }} />`} />
      </Section>

      <Section title="텍스트 포함 구분선">
        <PreviewBox>
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-xs shrink-0" style={{ color: "var(--muted-foreground)" }}>또는</span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="flex items-center gap-3">
  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>또는</span>
  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
</div>`} />
      </Section>

      <Section title="수직 구분선">
        <PreviewBox>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-xl font-bold tabular-nums" style={{ color: "var(--amount-refund)" }}>₩345,600</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>예상 환급액</p>
            </div>
            <div className="h-10 w-px" style={{ background: "var(--border)" }} />
            <div className="text-center">
              <p className="text-xl font-bold tabular-nums" style={{ color: "var(--muted-foreground)" }}>₩17,280</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>수수료 5%</p>
            </div>
            <div className="h-10 w-px" style={{ background: "var(--border)" }} />
            <div className="text-center">
              <p className="text-xl font-bold tabular-nums">₩328,320</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>실수령액</p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="h-10 w-px" style={{ background: "var(--border)" }} />`} />
      </Section>
    </div>
  );
}
