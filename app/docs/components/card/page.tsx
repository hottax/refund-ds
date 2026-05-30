import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function CardPage() {
  return (
    <div>
      <PageHeader
        badge="Display"
        title="Card"
        description="정보를 그룹핑하는 기본 레이아웃 단위. 반값환급 서비스에서는 환급 정보, 세금 내역, 연도별 결과를 담는 데 사용합니다."
      />

      <Section title="기본 카드">
        <PreviewBox>
          <div className="w-full rounded-xl border p-5" style={{ borderColor: "var(--border)", boxShadow: "var(--shadow-sm)" }}>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--muted-foreground)" }}>2023년 귀속 종합소득세</p>
            <p className="text-2xl font-bold tabular-nums mb-1" style={{ color: "var(--amount-refund)" }}>+₩345,600</p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>예상 환급액 · 수수료 5% 제외 후</p>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="rounded-xl border p-5"
     style={{ borderColor: "var(--border)", boxShadow: "var(--shadow-sm)" }}>
  <p className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>
    2023년 귀속 종합소득세
  </p>
  <p className="text-2xl font-bold tabular-nums"
     style={{ color: "var(--amount-refund)" }}>+₩345,600</p>
  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>예상 환급액</p>
</div>`} />
      </Section>

      <Section title="선택 가능한 카드 (Bank Selector 등)">
        <PreviewBox>
          <div className="grid grid-cols-2 gap-3 w-full">
            {["신한은행", "카카오뱅크", "국민은행", "토스뱅크"].map((bank, i) => (
              <div
                key={bank}
                className="rounded-xl border p-4 cursor-pointer transition-all"
                style={{
                  borderColor: i === 1 ? "var(--primary)" : "var(--border)",
                  background: i === 1 ? "var(--primary-subtle)" : "var(--background)",
                  boxShadow: i === 1 ? "var(--shadow-sm)" : "none",
                }}
              >
                <p className="text-sm font-semibold">{bank}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>계좌번호 입력</p>
              </div>
            ))}
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="rounded-xl border p-4 cursor-pointer"
     style={{
       borderColor: selected ? "var(--primary)" : "var(--border)",
       background: selected ? "var(--primary-subtle)" : "var(--background)",
     }}>
  <p className="text-sm font-semibold">{bankName}</p>
</div>`} />
      </Section>

      <Section title="요약 카드 (수수료 안내)">
        <PreviewBox>
          <div className="w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <p className="text-sm font-semibold">수수료 안내</p>
            </div>
            {[
              { label: "예상 환급액", value: "+₩345,600", color: "var(--amount-refund)" },
              { label: "수수료 (5%)", value: "-₩17,280", color: "var(--amount-tax)" },
              { label: "실수령액", value: "₩328,320", color: "var(--foreground)", bold: true },
            ].map((row) => (
              <div key={row.label} className="flex justify-between px-5 py-3.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{row.label}</p>
                <p className={`text-sm tabular-nums ${row.bold ? "font-bold" : "font-semibold"}`} style={{ color: row.color }}>{row.value}</p>
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
