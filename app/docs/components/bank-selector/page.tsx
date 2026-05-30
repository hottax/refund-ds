"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

const BANKS = [
  { id: "kb", name: "국민은행" },
  { id: "shinhan", name: "신한은행" },
  { id: "woori", name: "우리은행" },
  { id: "hana", name: "하나은행" },
  { id: "kakao", name: "카카오뱅크" },
  { id: "toss", name: "토스뱅크" },
  { id: "nh", name: "농협은행" },
  { id: "ibk", name: "기업은행" },
];

function BankLogo({ id, size = 36 }: { id: string; size?: number }) {
  return (
    <Image
      src={`/banks/icon-bank-${id}.svg`}
      alt={id}
      width={size}
      height={size}
      className="rounded-full object-contain"
    />
  );
}

function BankGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      {BANKS.map((bank) => (
        <button
          key={bank.id}
          onClick={() => setSelected(bank.id)}
          className="flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all cursor-pointer"
          style={{
            borderColor: selected === bank.id ? "var(--primary)" : "var(--border)",
            background: selected === bank.id ? "var(--primary-subtle)" : "var(--background)",
          }}
        >
          <BankLogo id={bank.id} size={36} />
          <span className="text-[11px] font-semibold text-center leading-tight">{bank.name}</span>
        </button>
      ))}
    </div>
  );
}

export default function BankSelectorPage() {
  return (
    <div>
      <PageHeader
        badge="Input"
        title="Bank Selector"
        description="계좌 입금 은행 선택 컴포넌트. 그리드 형태로 주요 은행을 표시하며 선택 시 primary 테두리로 강조됩니다."
      />

      <Section title="그리드 선택 (4열)">
        <PreviewBox>
          <BankGrid />
        </PreviewBox>
        <CodeBlock code={`const BANKS = [
  { id: "kb", name: "국민은행" },
  { id: "shinhan", name: "신한은행" },
  // ...
];

<div className="grid grid-cols-4 gap-2">
  {BANKS.map((bank) => (
    <button
      className="flex flex-col items-center gap-1.5 p-3 rounded-xl border"
      style={{
        borderColor: selected === bank.id ? "var(--primary)" : "var(--border)",
        background: selected === bank.id ? "var(--primary-subtle)" : "var(--background)",
      }}
    >
      <Image src={\`/banks/icon-bank-\${bank.id}.svg\`} width={36} height={36} className="rounded-full" />
      <span className="text-[11px] font-semibold">{bank.name}</span>
    </button>
  ))}
</div>`} />
      </Section>

      <Section title="선택 후 계좌번호 입력 패턴">
        <PreviewBox>
          <div className="w-full space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-xl border" style={{
              borderColor: "var(--primary)",
              background: "var(--primary-subtle)"
            }}>
              <BankLogo id="shinhan" size={40} />
              <div>
                <p className="text-sm font-semibold">신한은행</p>
                <p className="text-xs" style={{ color: "var(--primary)" }}>선택됨</p>
              </div>
              <button className="ml-auto text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>변경</button>
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1.5">계좌번호</label>
              <input
                type="text"
                placeholder="계좌번호 입력 (- 없이)"
                className="w-full h-11 px-4 rounded-lg border text-sm outline-none"
                style={{ borderColor: "var(--border)" }}
              />
            </div>
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
