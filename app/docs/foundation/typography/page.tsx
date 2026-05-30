import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

const TYPE_SCALE = [
  { name: "Display", class: "text-4xl font-bold", size: "36px / 2.25rem", weight: "700", usage: "랜딩 히어로 제목" },
  { name: "Heading 1", class: "text-2xl font-bold", size: "24px / 1.5rem", weight: "700", usage: "페이지 제목" },
  { name: "Heading 2", class: "text-xl font-semibold", size: "20px / 1.25rem", weight: "600", usage: "섹션 제목" },
  { name: "Heading 3", class: "text-base font-semibold", size: "16px / 1rem", weight: "600", usage: "카드 제목, 리스트 헤더" },
  { name: "Body", class: "text-sm", size: "14px / 0.875rem", weight: "400", usage: "본문 텍스트" },
  { name: "Body Strong", class: "text-sm font-semibold", size: "14px / 0.875rem", weight: "600", usage: "강조 본문" },
  { name: "Caption", class: "text-xs", size: "12px / 0.75rem", weight: "400", usage: "보조 설명, 라벨" },
  { name: "Caption Strong", class: "text-xs font-semibold", size: "12px / 0.75rem", weight: "600", usage: "배지, 태그" },
];

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Typography"
        description="Pretendard Variable 기반 타이포그래피 스케일. 한국어 최적화 서체로 가독성과 신뢰감을 동시에 확보합니다."
      />

      <Section title="타입 스케일">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {TYPE_SCALE.map((t, i) => (
            <div key={t.name} className="flex items-center gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
              <div className="w-28 shrink-0">
                <p className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>{t.name}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--border)" }}>{t.size} · {t.weight}w</p>
              </div>
              <div className="flex-1">
                <p className={t.class}>반값환급</p>
              </div>
              <div className="w-36 shrink-0 text-right">
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{t.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="금액 타이포그래피">
        <PreviewBox>
          <div className="space-y-3 w-full">
            <div>
              <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>환급액 — Amount Display</p>
              <p className="text-3xl font-bold tabular-nums" style={{ color: "var(--amount-refund)" }}>
                +₩345,600
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>납부액</p>
              <p className="text-3xl font-bold tabular-nums" style={{ color: "var(--amount-tax)" }}>
                -₩89,000
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>수수료</p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: "var(--muted-foreground)" }}>
                ₩17,280
              </p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`{/* 금액은 tabular-nums로 자릿수 정렬 */}
<p className="text-3xl font-bold tabular-nums"
   style={{ color: "var(--amount-refund)" }}>
  +₩345,600
</p>`} />
      </Section>

      <Section title="Font Stack">
        <CodeBlock code={`/* globals.css */
--font-sans: 'Pretendard Variable', Pretendard,
  -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

/* Next.js layout.tsx */
body { font-family: var(--font-sans); }

/* CDN 로드 */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");`} />
      </Section>
    </div>
  );
}
