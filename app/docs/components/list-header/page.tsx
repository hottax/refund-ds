import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function ListHeaderPage() {
  return (
    <div>
      <PageHeader
        badge="Layout"
        title="List Header"
        description="리스트 그룹의 상단 제목 영역. 연도, 카테고리, 섹션 구분에 사용합니다."
      />

      <Section title="기본">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full">
            <div className="px-4 py-2.5 border-b" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
                2023년
              </p>
            </div>
            {["종합소득세", "근로소득세"].map((item) => (
              <div key={item} className="flex items-center justify-between px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm">{item}</p>
                <p className="text-sm font-semibold tabular-nums" style={{ color: "var(--amount-refund)" }}>+₩120,000</p>
              </div>
            ))}
            <div className="px-4 py-2.5 border-b" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
                2022년
              </p>
            </div>
            {["종합소득세"].map((item) => (
              <div key={item} className="flex items-center justify-between px-4 py-3.5" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm">{item}</p>
                <p className="text-sm font-semibold tabular-nums" style={{ color: "var(--amount-refund)" }}>+₩89,000</p>
              </div>
            ))}
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 연도별 그룹 헤더 */}
<div className="px-4 py-2.5 border-b"
     style={{ background: "var(--muted)", borderColor: "var(--border)" }}>
  <p className="text-xs font-semibold uppercase tracking-wider"
     style={{ color: "var(--muted-foreground)" }}>
    2023년
  </p>
</div>`} />
      </Section>

      <Section title="타이틀 + 부가 정보">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full">
            <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>소득 내역</p>
              <p className="text-xs" style={{ color: "var(--primary)" }}>총 3건</p>
            </div>
            {["프리랜서 소득", "금융 소득", "기타 소득"].map((item) => (
              <div key={item} className="flex items-center justify-between px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm">{item}</p>
                <p className="text-sm font-semibold tabular-nums">₩2,400,000</p>
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
