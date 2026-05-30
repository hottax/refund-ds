"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="absolute bottom-0 left-0 right-0 rounded-t-2xl pt-3 pb-8"
        style={{ background: "var(--background)", boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex justify-center mb-4">
          <div className="h-1 w-10 rounded-full" style={{ background: "var(--border)" }} />
        </div>
        <div className="flex items-center justify-between px-5 mb-4">
          <p className="text-base font-semibold">{title}</p>
          <button onClick={onClose} className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--muted)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M2 2L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="px-5">{children}</div>
      </div>
    </div>
  );
}

function SheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="h-10 px-5 rounded-full text-sm font-semibold"
        style={{ background: "var(--primary)", color: "white" }}
      >
        시트 열기
      </button>
      {open && (
        <BottomSheet isOpen={open} onClose={() => setOpen(false)} title="수수료 안내">
          <div className="space-y-3">
            {[
              { label: "예상 환급액", value: "+₩345,600", color: "var(--amount-refund)" },
              { label: "수수료 (5%)", value: "-₩17,280", color: "var(--amount-tax)" },
              { label: "실수령액", value: "₩328,320", color: "var(--foreground)", bold: true },
            ].map((row) => (
              <div key={row.label} className="flex justify-between py-2.5 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{row.label}</p>
                <p className={`text-sm tabular-nums ${row.bold ? "font-bold" : "font-semibold"}`} style={{ color: row.color }}>{row.value}</p>
              </div>
            ))}
            <button
              className="w-full h-12 rounded-full text-sm font-semibold mt-2"
              style={{ background: "var(--primary)", color: "white" }}
              onClick={() => setOpen(false)}
            >
              확인했습니다
            </button>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}

export default function SheetPage() {
  return (
    <div>
      <PageHeader
        badge="Overlay"
        title="Sheet"
        description="화면 하단에서 올라오는 바텀시트. 추가 정보, 옵션 선택, 확인 액션에 사용합니다."
      />

      <Section title="인터랙티브 데모">
        <PreviewBox>
          <SheetDemo />
        </PreviewBox>
      </Section>

      <Section title="구조">
        <CodeBlock code={`<div className="fixed inset-0 z-50">
  {/* 오버레이 */}
  <div className="absolute inset-0 bg-black/40" onClick={onClose} />

  {/* 시트 */}
  <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl pt-3 pb-8"
       style={{ background: "var(--background)", boxShadow: "var(--shadow-lg)" }}>
    {/* 핸들 */}
    <div className="flex justify-center mb-4">
      <div className="h-1 w-10 rounded-full" style={{ background: "var(--border)" }} />
    </div>

    {/* 헤더 */}
    <div className="flex items-center justify-between px-5 mb-4">
      <p className="text-base font-semibold">{title}</p>
      <button onClick={onClose}>✕</button>
    </div>

    {/* 콘텐츠 */}
    <div className="px-5">{children}</div>
  </div>
</div>`} />
      </Section>

      <Section title="사용 케이스">
        <div className="space-y-2">
          {[
            "수수료 안내 — 신청 전 확인",
            "은행 선택 — 계좌 입금 은행 선택",
            "연도 선택 — 과세 연도 필터",
            "공지사항 — 서비스 업데이트 안내",
            "동의서 — 개인정보 처리 동의",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 py-2 border-b last:border-b-0 text-sm" style={{ borderColor: "var(--border)" }}>
              <span style={{ color: "var(--primary)" }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
