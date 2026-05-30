import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function Spinner({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      style={{ color: "var(--primary)" }}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SkeletonLine({ width = "100%", height = "1rem" }: { width?: string; height?: string }) {
  return (
    <div
      className="rounded animate-pulse"
      style={{ width, height, background: "var(--muted)" }}
    />
  );
}

export default function LoadingPage() {
  return (
    <div>
      <PageHeader
        badge="Feedback"
        title="Loading"
        description="데이터 로딩 중 상태를 표시하는 컴포넌트. Spinner · Skeleton · Overlay 세 가지 패턴을 지원합니다."
      />

      <Section title="Spinner">
        <PreviewBox>
          <Spinner size={20} />
          <Spinner size={24} />
          <Spinner size={32} />
          <Spinner size={40} />
        </PreviewBox>
        <CodeBlock code={`<svg className="animate-spin" style={{ color: "var(--primary)" }}>
  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" />
</svg>`} />
      </Section>

      <Section title="페이지 로딩 오버레이">
        <PreviewBox>
          <div className="relative h-40 w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: "rgba(255,255,255,0.9)" }}>
              <Spinner size={32} />
              <p className="text-sm font-semibold">소득 정보 조회 중...</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>국세청 데이터를 불러오고 있습니다</p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div className="relative">
  {/* 콘텐츠 */}
  {isLoading && (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
         style={{ background: "rgba(255,255,255,0.9)" }}>
      <Spinner size={32} />
      <p className="text-sm font-semibold">소득 정보 조회 중...</p>
    </div>
  )}
</div>`} />
      </Section>

      <Section title="Skeleton — 카드">
        <PreviewBox>
          <div className="w-full p-4 rounded-xl border space-y-3" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3">
              <SkeletonLine width="2.5rem" height="2.5rem" />
              <div className="flex-1 space-y-2">
                <SkeletonLine width="60%" height="0.875rem" />
                <SkeletonLine width="40%" height="0.75rem" />
              </div>
            </div>
            <SkeletonLine height="0.875rem" />
            <SkeletonLine width="75%" height="0.875rem" />
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* Skeleton 아이템 */}
<div className="rounded animate-pulse"
     style={{ width: "60%", height: "0.875rem", background: "var(--muted)" }} />`} />
      </Section>

      <Section title="Skeleton — 리스트">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <div className="flex-1 space-y-2">
                  <SkeletonLine width="50%" height="0.875rem" />
                  <SkeletonLine width="30%" height="0.75rem" />
                </div>
                <SkeletonLine width="4rem" height="0.875rem" />
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
