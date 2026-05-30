"use client";

import { useState } from "react";
import { X, Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
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
  const accentColor: Record<string, string> = {
    default: "var(--foreground)",
    success: "var(--success)",
    warning: "var(--warning)",
    destructive: "var(--destructive)",
  };

  const IconMap = {
    default: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    destructive: XCircle,
  };

  const Icon = IconMap[variant];
  const color = accentColor[variant];

  return (
    <div
      className="flex items-start gap-3 px-4 py-3 rounded-xl w-full max-w-sm"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <Icon size={16} className="shrink-0 mt-0.5" style={{ color }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold" style={{ color }}>{title}</p>
        {description && (
          <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{description}</p>
        )}
      </div>
      {onClose && (
        <button className="shrink-0 hover:opacity-70" style={{ color: "var(--muted-foreground)" }} onClick={onClose}>
          <X size={14} />
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
        <CodeBlock code={`// bg는 항상 white, icon·title 컬러만 variant별로 변경
// default: var(--foreground) / success: var(--success) / warning: var(--warning) / destructive: var(--destructive)

<Toast variant="success" title="환급 신청 완료" description="30일 이내 계좌로 입금됩니다" />
<Toast variant="warning" title="추가 서류 필요" description="신분증 사진을 업로드해주세요" />
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
       style={{ background: "var(--background)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}>
    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--success)" }} />
    <p className="text-sm font-semibold" style={{ color: "var(--success)" }}>환급 신청이 완료되었습니다</p>
  </div>
</div>`} />
      </Section>
    </div>
  );
}
