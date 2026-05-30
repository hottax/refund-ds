import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionVariant = "primary",
}: {
  icon: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionVariant?: "primary" | "outline";
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div
        className="h-16 w-16 rounded-full flex items-center justify-center text-3xl mb-4"
        style={{ background: "var(--muted)" }}
      >
        {icon}
      </div>
      <p className="text-base font-semibold mb-1.5">{title}</p>
      {description && (
        <p className="text-sm max-w-xs" style={{ color: "var(--muted-foreground)" }}>{description}</p>
      )}
      {actionLabel && (
        <button
          className="mt-5 h-10 px-5 rounded-full text-sm font-semibold"
          style={actionVariant === "primary"
            ? { background: "var(--primary)", color: "white" }
            : { background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)" }
          }
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default function EmptyStatePage() {
  return (
    <div>
      <PageHeader
        badge="Feedback"
        title="Empty State"
        description="데이터가 없거나 첫 방문 시 표시되는 빈 상태 컴포넌트. 아이콘+제목+설명+CTA 구성이 기본입니다."
      />

      <Section title="신청 내역 없음">
        <PreviewBox>
          <EmptyState
            icon="📋"
            title="신청 내역이 없어요"
            description="아직 환급 신청을 하지 않으셨네요. 지금 바로 환급받을 수 있는지 확인해보세요."
            actionLabel="환급 조회하기"
          />
        </PreviewBox>
      </Section>

      <Section title="검색 결과 없음">
        <PreviewBox>
          <EmptyState
            icon="🔍"
            title="검색 결과가 없어요"
            description="다른 키워드로 검색해보세요."
            actionLabel="검색 초기화"
            actionVariant="outline"
          />
        </PreviewBox>
      </Section>

      <Section title="환급 대상 아님">
        <PreviewBox>
          <EmptyState
            icon="💡"
            title="환급 대상이 아닙니다"
            description="2023년 귀속 소득에 대한 환급액이 없습니다. 다른 연도를 확인해보세요."
            actionLabel="다른 연도 확인"
          />
        </PreviewBox>
      </Section>

      <Section title="에러 상태">
        <PreviewBox>
          <EmptyState
            icon="⚠️"
            title="데이터를 불러오지 못했어요"
            description="잠시 후 다시 시도해주세요. 문제가 계속되면 고객센터로 문의해주세요."
            actionLabel="다시 시도"
          />
        </PreviewBox>
        <CodeBlock code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-16 w-16 rounded-full flex items-center justify-center text-3xl mb-4"
       style={{ background: "var(--muted)" }}>
    ⚠️
  </div>
  <p className="text-base font-semibold mb-1.5">데이터를 불러오지 못했어요</p>
  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>잠시 후 다시 시도해주세요</p>
  <button className="mt-5 h-10 px-5 rounded-full text-sm font-semibold"
          style={{ background: "var(--primary)", color: "white" }}>
    다시 시도
  </button>
</div>`} />
      </Section>
    </div>
  );
}
