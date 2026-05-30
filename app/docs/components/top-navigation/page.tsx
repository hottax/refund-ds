import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function TopNav({
  title,
  showBack = true,
  showClose = false,
  showAction = false,
  actionLabel = "완료",
}: {
  title?: string;
  showBack?: boolean;
  showClose?: boolean;
  showAction?: boolean;
  actionLabel?: string;
}) {
  return (
    <div
      className="flex items-center h-14 px-4 border-b w-full"
      style={{ borderColor: "var(--border)", background: "var(--background)" }}
    >
      <div className="w-10">
        {showBack && (
          <button className="h-9 w-9 rounded-lg flex items-center justify-center -ml-2 transition-colors hover:bg-muted">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {showClose && (
          <button className="h-9 w-9 rounded-lg flex items-center justify-center -ml-2 transition-colors hover:bg-muted">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
      <p className="flex-1 text-center text-base font-semibold">{title}</p>
      <div className="w-10 flex justify-end">
        {showAction && (
          <button className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{actionLabel}</button>
        )}
      </div>
    </div>
  );
}

export default function TopNavigationPage() {
  return (
    <div>
      <PageHeader
        badge="Navigation"
        title="Top Navigation"
        description="모바일 앱 스타일 상단 네비게이션 바. h-14(56px) 고정 높이, 뒤로가기/닫기/액션 버튼 조합을 지원합니다."
      />

      <Section title="기본 — 뒤로가기 + 제목">
        <PreviewBox className="p-0 overflow-hidden">
          <TopNav title="소득 조회" />
        </PreviewBox>
        <CodeBlock code={`<nav className="flex items-center h-14 px-4 border-b"
     style={{ borderColor: "var(--border)" }}>
  {/* 뒤로가기 버튼 */}
  <button className="h-9 w-9 rounded-lg flex items-center justify-center">
    <ChevronLeft size={20} />
  </button>
  <p className="flex-1 text-center text-base font-semibold">소득 조회</p>
  <div className="w-9" /> {/* 오른쪽 밸런스 */}
</nav>`} />
      </Section>

      <Section title="닫기 버튼">
        <PreviewBox className="p-0 overflow-hidden">
          <TopNav title="계좌 등록" showBack={false} showClose={true} />
        </PreviewBox>
      </Section>

      <Section title="뒤로가기 + 액션">
        <PreviewBox className="p-0 overflow-hidden">
          <TopNav title="은행 선택" showBack={true} showAction={true} actionLabel="완료" />
        </PreviewBox>
      </Section>

      <Section title="제목 없음 (로고)">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="flex items-center h-14 px-4 border-b w-full" style={{ borderColor: "var(--border)" }}>
            <div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-bold mr-2"
                 style={{ background: "var(--primary)", color: "white" }}>반</div>
            <span className="text-sm font-semibold">반값환급</span>
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 로고 네비게이션 */}
<nav className="flex items-center h-14 px-4 border-b"
     style={{ borderColor: "var(--border)" }}>
  <div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-bold"
       style={{ background: "var(--primary)", color: "white" }}>반</div>
  <span className="ml-2 text-sm font-semibold">반값환급</span>
</nav>`} />
      </Section>
    </div>
  );
}
