import { ChevronRight, User, Landmark, ClipboardList, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function ListPage() {
  return (
    <div>
      <PageHeader
        badge="Layout"
        title="List"
        description="정보를 세로로 나열하는 리스트 컴포넌트. 환급 내역, 소득 항목, 설정 메뉴에 사용합니다."
      />

      <Section title="기본 리스트">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {[
              { label: "2023년 귀속 종합소득세", sub: "환급 완료", value: "+₩345,600", valueColor: "var(--amount-refund)" },
              { label: "2022년 귀속 종합소득세", sub: "처리중", value: "+₩128,400", valueColor: "var(--primary)" },
              { label: "2021년 귀속 종합소득세", sub: "납부 필요", value: "-₩89,000", valueColor: "var(--amount-tax)" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3.5 border-b last:border-b-0 cursor-pointer hover:bg-muted transition-colors" style={{ borderColor: "var(--border)" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{item.sub}</p>
                </div>
                <p className="text-sm font-bold tabular-nums shrink-0" style={{ color: item.valueColor }}>{item.value}</p>
                <ChevronRight size={16} style={{ color: "var(--muted-foreground)" }} />
              </div>
            ))}
          </div>
        </PreviewBox>
        <CodeBlock code={`import { ChevronRight } from "lucide-react";

<div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
  {items.map((item) => (
    <div className="flex items-center gap-3 px-4 py-3.5 border-b last:border-b-0 cursor-pointer"
         style={{ borderColor: "var(--border)" }}>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{item.label}</p>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item.sub}</p>
      </div>
      <p className="text-sm font-bold tabular-nums" style={{ color: item.valueColor }}>{item.value}</p>
      <ChevronRight size={16} style={{ color: "var(--muted-foreground)" }} />
    </div>
  ))}
</div>`} />
      </Section>

      <Section title="설정 리스트 (아이콘 + 화살표)">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {(
              [
                { Icon: User, label: "내 정보", sub: "이름, 주민등록번호" },
                { Icon: Landmark, label: "계좌 정보", sub: "환급 수령 계좌" },
                { Icon: ClipboardList, label: "신청 내역", sub: "총 3건" },
                { Icon: Settings, label: "알림 설정", sub: "푸시, 이메일" },
              ] as { Icon: LucideIcon; label: string; sub: string }[]
            ).map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3.5 border-b last:border-b-0 cursor-pointer" style={{ borderColor: "var(--border)" }}>
                <item.Icon size={18} className="shrink-0" style={{ color: "var(--muted-foreground)" }} />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item.sub}</p>
                </div>
                <ChevronRight size={16} style={{ color: "var(--muted-foreground)" }} />
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>

      <Section title="단순 텍스트 리스트 (Key-Value)">
        <PreviewBox className="p-0 overflow-hidden">
          <div className="w-full rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {[
              { label: "과세 연도", value: "2023년" },
              { label: "세목", value: "종합소득세" },
              { label: "귀속 기간", value: "2023.01.01 ~ 2023.12.31" },
              { label: "신고 유형", value: "경정청구" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between px-4 py-3 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
