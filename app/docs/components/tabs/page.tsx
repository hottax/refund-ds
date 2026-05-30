"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function Tabs({
  items,
  variant = "underline",
}: {
  items: { label: string; content: React.ReactNode }[];
  variant?: "underline" | "pill" | "segment";
}) {
  const [active, setActive] = useState(0);

  if (variant === "pill") {
    return (
      <div>
        <div className="flex gap-2 mb-4">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              className="h-8 px-4 rounded-full text-sm font-semibold transition-colors"
              style={{
                background: active === i ? "var(--primary)" : "var(--muted)",
                color: active === i ? "white" : "var(--muted-foreground)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>{items[active].content}</div>
      </div>
    );
  }

  if (variant === "segment") {
    return (
      <div>
        <div className="flex p-1 rounded-lg mb-4" style={{ background: "var(--muted)" }}>
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              className="flex-1 h-8 rounded-md text-sm font-semibold transition-all"
              style={{
                background: active === i ? "white" : "transparent",
                color: active === i ? "var(--foreground)" : "var(--muted-foreground)",
                boxShadow: active === i ? "var(--shadow-sm)" : "none",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>{items[active].content}</div>
      </div>
    );
  }

  // underline
  return (
    <div>
      <div className="flex border-b" style={{ borderColor: "var(--border)" }}>
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className="h-11 px-4 text-sm font-semibold border-b-2 transition-colors -mb-px"
            style={{
              borderColor: active === i ? "var(--primary)" : "transparent",
              color: active === i ? "var(--primary)" : "var(--muted-foreground)",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{items[active].content}</div>
    </div>
  );
}

const TAB_ITEMS = [
  { label: "전체", content: <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>전체 내역 표시</p> },
  { label: "환급", content: <p className="text-sm" style={{ color: "var(--amount-refund)" }}>환급 내역 표시</p> },
  { label: "납부", content: <p className="text-sm" style={{ color: "var(--amount-tax)" }}>납부 내역 표시</p> },
];

export default function TabsPage() {
  return (
    <div>
      <PageHeader
        badge="Navigation"
        title="Tabs"
        description="콘텐츠 전환을 위한 탭 컴포넌트. Underline · Pill · Segment 세 가지 스타일을 지원합니다."
      />

      <Section title="Underline (기본)">
        <PreviewBox>
          <div className="w-full">
            <Tabs items={TAB_ITEMS} variant="underline" />
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 히스토리 / 연도 탭에 주로 사용 */}
<div className="flex border-b" style={{ borderColor: "var(--border)" }}>
  {tabs.map((tab, i) => (
    <button
      className="h-11 px-4 text-sm font-semibold border-b-2 -mb-px"
      style={{
        borderColor: active === i ? "var(--primary)" : "transparent",
        color: active === i ? "var(--primary)" : "var(--muted-foreground)",
      }}
    >
      {tab.label}
    </button>
  ))}
</div>`} />
      </Section>

      <Section title="Pill">
        <PreviewBox>
          <div className="w-full">
            <Tabs items={TAB_ITEMS} variant="pill" />
          </div>
        </PreviewBox>
      </Section>

      <Section title="Segment">
        <PreviewBox>
          <div className="w-full">
            <Tabs items={[
              { label: "환급", content: <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>환급</p> },
              { label: "납부", content: <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>납부</p> },
            ]} variant="segment" />
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
