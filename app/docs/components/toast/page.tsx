"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function Toast({
  variant = "default",
  title,
  description,
  onClose,
}: {
  variant?: "default" | "success" | "warning" | "destructive";
  title: string;
  description?: string;
  onClose?: () => void;
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: "var(--foreground)", color: "var(--background)" },
    success: { background: "var(--success)", color: "white" },
    warning: { background: "var(--warning)", color: "var(--warning-foreground)" },
    destructive: { background: "var(--destructive)", color: "white" },
  };

  const icons: Record<string, string> = {
    default: "ℹ️",
    success: "✅",
    warning: "⚠️",
    destructive: "❌",
  };

  return (
    <div
      className="flex items-start gap-3 px-4 py-3 rounded-xl w-full max-w-sm"
      style={{ ...styles[variant], boxShadow: "var(--shadow-lg)" }}
    >
      <span className="text-base shrink-0 mt-0.5">{icons[variant]}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        {description && <p className="text-xs mt-0.5 opacity-80">{description}</p>}
      </div>
      {onClose && (
        <button className="shrink-0 opacity-70 hover:opacity-100" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M2 2L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default function ToastPage() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <PageHeader
        badge="Feedback"
        title="Toast"
        description="짧고 즉각적인 피드백을 제공하는 알림 컴포넌트. 화면 하단에 3~5초간 표시됩니다."
      />

      <Section title="Variants">
        <PreviewBox>
          <div className="w-full space-y-3">
            <Toast variant="default" title="알림" description="이 메시지는 잠시 후 사라집니다" />
            <Toast variant="success" title="환급 신청 완료" description="30일 이내 계좌로 입금됩니다" />
            <Toast variant="warning" title="추가 서류 필요" description="신분증 사진을 업로드해주세요" />
            <Toast variant="destructive" title="신청 실패" description="잠시 후 다시 시도해주세요" />
          </div>
        </PreviewBox>
        <CodeBlock code={`// 성공
<Toast variant="success" title="환급 신청 완료" description="30일 이내 계좌로 입금됩니다" />
// 경고
<Toast variant="warning" title="추가 서류 필요" description="신분증 사진을 업로드해주세요" />
// 에러
<Toast variant="destructive" title="신청 실패" description="잠시 후 다시 시도해주세요" />`} />
      </Section>

      <Section title="화면 하단 고정 위치">
        <PreviewBox>
          <div className="relative h-48 w-full rounded-xl border overflow-hidden bg-muted" style={{ borderColor: "var(--border)" }}>
            <p className="absolute inset-0 flex items-center justify-center text-xs" style={{ color: "var(--muted-foreground)" }}>
              페이지 콘텐츠 영역
            </p>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <Toast variant="success" title="환급 신청이 완료되었습니다" />
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 화면 하단 고정 위치 */}
<div className="fixed bottom-4 left-4 right-4 flex justify-center z-50">
  <div className="flex items-start gap-3 px-4 py-3 rounded-xl max-w-sm w-full"
       style={{ background: "var(--success)", color: "white", boxShadow: "var(--shadow-lg)" }}>
    <span>✅</span>
    <p className="text-sm font-semibold">환급 신청이 완료되었습니다</p>
  </div>
</div>`} />
      </Section>
    </div>
  );
}
