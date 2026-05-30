import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function Badge({
  variant = "default",
  children,
}: {
  variant?: "default" | "success" | "warning" | "destructive" | "outline" | "primary";
  children: React.ReactNode;
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: "var(--muted)", color: "var(--muted-foreground)" },
    primary: { background: "var(--primary-subtle)", color: "var(--primary)" },
    success: { background: "var(--success-subtle)", color: "var(--success)" },
    warning: { background: "var(--warning-subtle)", color: "var(--warning)" },
    destructive: { background: "oklch(0.97 0.02 27)", color: "var(--destructive)" },
    outline: { background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)" },
  };

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={styles[variant]}
    >
      {children}
    </span>
  );
}

export default function BadgePage() {
  return (
    <div>
      <PageHeader
        badge="Display"
        title="Badge"
        description="상태, 카테고리, 레이블을 표시하는 소형 컴포넌트. 환급/납부 상태 구분에 핵심적으로 사용됩니다."
      />

      <Section title="Variants">
        <PreviewBox>
          <Badge variant="default">기본</Badge>
          <Badge variant="primary">처리중</Badge>
          <Badge variant="success">환급 완료</Badge>
          <Badge variant="warning">납부 필요</Badge>
          <Badge variant="destructive">오류</Badge>
          <Badge variant="outline">아웃라인</Badge>
        </PreviewBox>
        <CodeBlock code={`<Badge variant="default">기본</Badge>
<Badge variant="primary">처리중</Badge>
<Badge variant="success">환급 완료</Badge>
<Badge variant="warning">납부 필요</Badge>
<Badge variant="destructive">오류</Badge>
<Badge variant="outline">아웃라인</Badge>`} />
      </Section>

      <Section title="환급 서비스 상태 배지">
        <PreviewBox>
          <Badge variant="primary">신청 접수</Badge>
          <Badge variant="primary">서류 검토 중</Badge>
          <Badge variant="success">환급 완료</Badge>
          <Badge variant="warning">추가 서류 필요</Badge>
          <Badge variant="destructive">신청 불가</Badge>
          <Badge variant="default">2023년 귀속</Badge>
          <Badge variant="default">종합소득세</Badge>
        </PreviewBox>
      </Section>

      <Section title="리스트 아이템 내 뱃지">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {[
            { year: "2023년 귀속", status: "환급 완료", amount: "+₩345,600", variant: "success" as const },
            { year: "2022년 귀속", status: "처리중", amount: "+₩128,400", variant: "primary" as const },
            { year: "2021년 귀속", status: "납부 필요", amount: "-₩89,000", variant: "warning" as const },
          ].map((item) => (
            <div key={item.year} className="flex items-center justify-between px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
              <div>
                <p className="text-sm font-semibold">{item.year}</p>
                <Badge variant={item.variant}>{item.status}</Badge>
              </div>
              <p className="text-base font-bold tabular-nums" style={{
                color: item.variant === "success" ? "var(--amount-refund)"
                  : item.variant === "warning" ? "var(--amount-tax)"
                  : "var(--primary)"
              }}>
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
