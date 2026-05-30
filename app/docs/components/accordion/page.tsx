"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold pr-4">{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "var(--muted-foreground)" }}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

const FAQ_ITEMS = [
  {
    title: "환급 수수료는 얼마인가요?",
    content: "환급 시 환급액의 5% (최대 ₩99,000), 납부 도움 시 ₩5,000입니다. 삼쩜삼 대비 약 50% 저렴합니다.",
  },
  {
    title: "환급금은 언제 입금되나요?",
    content: "국세청 처리 기간에 따라 신청 후 30~60일 이내 입금됩니다. 경정청구 후 처리 현황은 신청 내역에서 확인하실 수 있습니다.",
    defaultOpen: true,
  },
  {
    title: "어떤 소득자가 환급받을 수 있나요?",
    content: "프리랜서, 유튜버, 배달기사, 플랫폼 종사자 등 사업소득이 있는 경우 환급 가능성이 높습니다. 근로소득만 있는 경우에도 공제 항목에 따라 환급받을 수 있습니다.",
  },
  {
    title: "개인정보는 안전한가요?",
    content: "국세청 홈택스를 통한 공식 경로로만 데이터를 조회합니다. 모든 개인정보는 암호화되어 저장되며, 제3자에게 제공되지 않습니다.",
  },
];

export default function AccordionPage() {
  return (
    <div>
      <PageHeader
        badge="Input"
        title="Accordion"
        description="접고 펼칠 수 있는 콘텐츠 영역. FAQ, 상세 정보, 공제 항목 안내에 사용합니다."
      />

      <Section title="FAQ 패턴">
        <PreviewBox className="p-0">
          <div className="w-full px-4 rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.title} title={item.title} defaultOpen={item.defaultOpen}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </PreviewBox>
      </Section>

      <Section title="공제 항목 안내">
        <PreviewBox className="p-0">
          <div className="w-full px-4 rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {[
              { title: "기본공제 (₩1,500,000)", content: "본인 기본공제 150만원이 적용됩니다." },
              { title: "필요경비 공제", content: "소득의 60~80%를 필요경비로 인정받습니다. 실제 비용이 더 크다면 증빙 서류 제출 시 추가 공제 가능합니다." },
              { title: "국민연금 공제", content: "납부한 국민연금 보험료 전액이 공제됩니다." },
            ].map((item) => (
              <AccordionItem key={item.title} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </PreviewBox>
        <CodeBlock code={`function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold">{title}</span>
        <ChevronDown className={\`transition-transform \${open ? "rotate-180" : ""}\`} />
      </button>
      {open && (
        <div className="pb-4 text-sm" style={{ color: "var(--muted-foreground)" }}>
          {children}
        </div>
      )}
    </div>
  );
}`} />
      </Section>
    </div>
  );
}
