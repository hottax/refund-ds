import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock, PropTable } from "@/components/docs/section";

function AmountDisplay({
  label,
  amount,
  type = "neutral",
  size = "md",
  subtext,
}: {
  label?: string;
  amount: string;
  type?: "refund" | "tax" | "neutral";
  size?: "sm" | "md" | "lg";
  subtext?: string;
}) {
  const colorMap = {
    refund: "var(--amount-refund)",
    tax: "var(--amount-tax)",
    neutral: "var(--foreground)",
  };

  const sizeMap = {
    sm: "text-xl font-bold",
    md: "text-3xl font-bold",
    lg: "text-4xl font-bold",
  };

  return (
    <div className="text-center">
      {label && <p className="text-xs mb-1.5" style={{ color: "var(--muted-foreground)" }}>{label}</p>}
      <p className={`tabular-nums ${sizeMap[size]}`} style={{ color: colorMap[type] }}>
        {amount}
      </p>
      {subtext && <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{subtext}</p>}
    </div>
  );
}

export default function AmountDisplayPage() {
  return (
    <div>
      <PageHeader
        badge="Display"
        title="Amount Display"
        description="환급액/납부액 금액을 강조 표시하는 컴포넌트. 숫자가 UI의 영웅이 되도록 설계합니다."
      />

      <Section title="Types">
        <PreviewBox>
          <AmountDisplay label="예상 환급액" amount="+₩345,600" type="refund" />
          <AmountDisplay label="납부 필요" amount="-₩89,000" type="tax" />
          <AmountDisplay label="처리 금액" amount="₩0" type="neutral" />
        </PreviewBox>
        <CodeBlock code={`<AmountDisplay label="예상 환급액" amount="+₩345,600" type="refund" />
<AmountDisplay label="납부 필요" amount="-₩89,000" type="tax" />
<AmountDisplay label="처리 금액" amount="₩0" type="neutral" />`} />
      </Section>

      <Section title="Sizes">
        <PreviewBox>
          <div className="space-y-4 w-full">
            <AmountDisplay label="sm (리스트 아이템)" amount="+₩345,600" type="refund" size="sm" />
            <AmountDisplay label="md (카드 내)" amount="+₩345,600" type="refund" size="md" />
            <AmountDisplay label="lg (히어로 결과)" amount="+₩345,600" type="refund" size="lg" />
          </div>
        </PreviewBox>
      </Section>

      <Section title="결과 화면 패턴">
        <PreviewBox>
          <div className="w-full text-center py-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full mb-4" style={{ background: "var(--success-subtle)" }}>
              <span className="text-2xl">🎉</span>
            </div>
            <p className="text-sm font-semibold mb-1">환급 신청 완료</p>
            <p className="text-xs mb-6" style={{ color: "var(--muted-foreground)" }}>30일 이내 계좌로 입금됩니다</p>
            <AmountDisplay label="예상 환급액" amount="+₩345,600" type="refund" size="lg" subtext="수수료 5% 제외 후 실수령액: ₩328,320" />
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 결과 화면 히어로 금액 */}
<div className="text-center py-4">
  <p className="text-4xl font-bold tabular-nums"
     style={{ color: "var(--amount-refund)" }}>
    +₩345,600
  </p>
  <p className="text-sm mt-2" style={{ color: "var(--muted-foreground)" }}>
    수수료 5% 제외 후 실수령액: ₩328,320
  </p>
</div>`} />
      </Section>

      <PropTable rows={[
        { prop: "amount", type: "string", description: "표시할 금액 문자열 (예: '+₩345,600')" },
        { prop: "type", type: "'refund' | 'tax' | 'neutral'", default: "'neutral'", description: "금액 유형에 따른 색상" },
        { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "금액 폰트 크기" },
        { prop: "label", type: "string", description: "금액 위 레이블" },
        { prop: "subtext", type: "string", description: "금액 아래 보조 텍스트" },
      ]} />
    </div>
  );
}
