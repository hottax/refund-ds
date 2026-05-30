import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function FormPage() {
  return (
    <div>
      <PageHeader
        badge="Input"
        title="Form / Input"
        description="데이터 입력을 위한 폼 컴포넌트. 레이블·플레이스홀더·에러·도움말 상태를 지원합니다."
      />

      <Section title="기본 텍스트 입력">
        <PreviewBox>
          <div className="w-full space-y-4">
            <div>
              <label className="text-sm font-semibold block mb-1.5">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                className="w-full h-11 px-4 rounded-lg border text-sm outline-none transition-colors focus:ring-2"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                  "--tw-ring-color": "var(--ring)",
                } as React.CSSProperties}
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1.5">계좌번호</label>
              <input
                type="text"
                placeholder="000-0000-0000-00"
                className="w-full h-11 px-4 rounded-lg border text-sm outline-none transition-colors"
                style={{ borderColor: "var(--border)", background: "var(--background)" }}
              />
              <p className="text-xs mt-1.5" style={{ color: "var(--muted-foreground)" }}>환급금이 입금될 계좌번호를 입력해주세요</p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div>
  <label className="text-sm font-semibold block mb-1.5">계좌번호</label>
  <input
    type="text"
    placeholder="000-0000-0000-00"
    className="w-full h-11 px-4 rounded-lg border text-sm outline-none"
    style={{ borderColor: "var(--border)" }}
  />
  <p className="text-xs mt-1.5" style={{ color: "var(--muted-foreground)" }}>
    도움말 텍스트
  </p>
</div>`} />
      </Section>

      <Section title="에러 상태">
        <PreviewBox>
          <div className="w-full">
            <label className="text-sm font-semibold block mb-1.5">주민등록번호</label>
            <input
              type="text"
              value="900101-1"
              className="w-full h-11 px-4 rounded-lg border text-sm outline-none"
              style={{ borderColor: "var(--destructive)", background: "oklch(1 0 0)" }}
              readOnly
            />
            <p className="text-xs mt-1.5" style={{ color: "var(--destructive)" }}>
              주민등록번호 형식이 올바르지 않습니다 (13자리 입력)
            </p>
          </div>
        </PreviewBox>
        <CodeBlock code={`<input
  className="w-full h-11 px-4 rounded-lg border text-sm"
  style={{ borderColor: "var(--destructive)" }}
/>
<p className="text-xs mt-1.5" style={{ color: "var(--destructive)" }}>
  에러 메시지
</p>`} />
      </Section>

      <Section title="성공 상태">
        <PreviewBox>
          <div className="w-full">
            <label className="text-sm font-semibold block mb-1.5">계좌번호</label>
            <div className="relative">
              <input
                type="text"
                value="110-123-456789"
                className="w-full h-11 px-4 pr-10 rounded-lg border text-sm outline-none"
                style={{ borderColor: "var(--success)" }}
                readOnly
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "var(--success)" }}>✓</span>
            </div>
            <p className="text-xs mt-1.5" style={{ color: "var(--success)" }}>계좌 확인 완료</p>
          </div>
        </PreviewBox>
      </Section>

      <Section title="전화번호 인증 패턴">
        <PreviewBox>
          <div className="w-full space-y-3">
            <div>
              <label className="text-sm font-semibold block mb-1.5">휴대폰 번호</label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  className="flex-1 h-11 px-4 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "var(--border)" }}
                />
                <button
                  className="h-11 px-4 rounded-lg text-sm font-semibold shrink-0 transition-colors"
                  style={{ background: "var(--primary-subtle)", color: "var(--primary)" }}
                >
                  인증번호 발송
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1.5">인증번호</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="6자리 입력"
                  className="flex-1 h-11 px-4 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "var(--border)" }}
                />
                <button
                  className="h-11 px-4 rounded-lg text-sm font-semibold shrink-0"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  확인
                </button>
              </div>
              <p className="text-xs mt-1.5 tabular-nums" style={{ color: "var(--primary)" }}>02:45 남음</p>
            </div>
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
