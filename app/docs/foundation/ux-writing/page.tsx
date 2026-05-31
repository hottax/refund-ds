import { PageHeader } from "@/components/docs/page-header";
import { Section, CodeBlock } from "@/components/docs/section";

const TONE_RULES = [
  { rule: "해요체 통일", bad: "저장되었습니다", good: "저장됐어요" },
  { rule: "능동형 사용", bad: "처리가 됐어요", good: "처리했어요" },
  { rule: "긍정형 사용", bad: "이용할 수 없어요", good: "다른 방법으로 이용할 수 있어요" },
  { rule: "명사 나열 금지", bad: "잔액 부족으로 실패", good: "잔액이 부족해서 실패했어요" },
  { rule: "잡초 제거", bad: "바로 즉시 해당 총 처리", good: "처리" },
  { rule: "전문 용어 → 일상어", bad: "상환 완료", good: "다 갚았어요" },
];

const ERROR_PRINCIPLES = [
  {
    num: "1",
    title: "최고의 에러는 발생하지 않는 것",
    desc: "문구를 쓰기 전, 에러 자체가 발생하지 않도록 플로우를 바꿀 수 없는지 먼저 확인한다.",
    example: null,
  },
  {
    num: "2",
    title: "컴포넌트 적절하게 쓰기",
    desc: null,
    example: [
      { component: "Toast", use: "짧은 단순 정보 (3~5초 자동 소멸) — 긴 설명 금지" },
      { component: "Dialog", use: "충분한 설명 + 사용자 결정이 필요한 상황" },
      { component: "Inline Error", use: "입력 필드 옆 즉각 피드백" },
    ],
  },
  {
    num: "3",
    title: "스스로 해결할 수 있는 방법 알려주기",
    desc: "사용자가 가장 원하는 것은 다음 화면으로 넘어가는 것이다. 해결 행동을 버튼으로 직접 연결한다.",
    example: null,
  },
  {
    num: "4",
    title: "유저가 이해할 수 있는 언어로",
    desc: "에러 코드, IT 용어를 제거하고 사용자 관점의 언어로 번역한다.",
    example: [
      { component: "Before", use: "알 수 없는 신분증이에요 (공급자 관점)" },
      { component: "After", use: "만료된 신분증이에요. 유효한 신분증으로 다시 시도해주세요" },
    ],
  },
  {
    num: "5",
    title: "쉽게 해결할 수 있게 도와주기",
    desc: "고객센터 문의는 텍스트가 아닌 버튼으로, 설정 변경은 설정 화면으로 바로 이동하는 CTA로 제공한다.",
    example: null,
  },
  {
    num: "6",
    title: "부정적인 감정 최소화",
    desc: null,
    example: [
      { component: "처리할 수 없어요", use: "다른 방법으로 진행할 수 있어요" },
      { component: "당일 신청은 불가해요", use: "내일부터 신청할 수 있어요" },
      { component: "~해야 해요", use: "~할 수 있어요" },
    ],
  },
];

const BUTTON_EXAMPLES = [
  { bad: "확인", good: "환급 신청하기" },
  { bad: "제출", good: "계좌 등록하기" },
  { bad: "OK", good: "무료로 시작하기" },
  { bad: "클릭하세요", good: "계좌번호 복사" },
];

const ERROR_EXAMPLES = [
  { bad: "오류가 발생했습니다", good: "잠깐, 연결이 끊어졌어요\n인터넷 연결을 확인하고 다시 시도해주세요." },
  { bad: "인증 실패", good: "이메일 또는 비밀번호가 달라요\n다시 확인해주세요." },
  { bad: "네트워크 에러", good: "일시적인 오류가 생겼어요\n잠시 후 다시 시도해주세요." },
];

export default function UXWritingPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="UX Writing"
        description="반값환급 서비스의 텍스트 가이드. 모든 문구는 사용자가 다음 행동을 알 수 있도록 명확하고 간결하게 작성한다."
      />

      {/* 핵심 원칙 */}
      <Section title="핵심 원칙">
        <div className="grid grid-cols-2 gap-3">
          {[
            { title: "명확성", desc: "이해하는 데 노력이 필요 없어야 함" },
            { title: "간결함", desc: "꼭 필요한 단어만 사용" },
            { title: "유용함", desc: "사용자가 다음 행동을 알 수 있어야 함" },
            { title: "일관성", desc: "같은 개념은 항상 같은 단어로" },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-4 border"
              style={{ borderColor: "var(--border)", background: "var(--muted)" }}
            >
              <p className="text-sm font-semibold mb-1">{p.title}</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 톤앤매너 규칙 */}
      <Section title="톤앤매너 규칙">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div
            className="grid grid-cols-3 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider border-b"
            style={{ background: "var(--muted)", borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <span>규칙</span>
            <span className="flex items-center gap-1"><span style={{ color: "var(--destructive)" }}>✗</span> 나쁜 예</span>
            <span className="flex items-center gap-1"><span style={{ color: "var(--success)" }}>✓</span> 좋은 예</span>
          </div>
          {TONE_RULES.map((r, i) => (
            <div
              key={r.rule}
              className="grid grid-cols-3 px-4 py-3 text-sm border-b last:border-b-0"
              style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
            >
              <span className="font-medium text-xs">{r.rule}</span>
              <span className="text-xs line-through" style={{ color: "var(--muted-foreground)" }}>{r.bad}</span>
              <span className="text-xs font-semibold" style={{ color: "var(--success)" }}>{r.good}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 버튼 & CTA */}
      <Section title="버튼 & CTA 텍스트">
        <div className="space-y-2">
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            행동 동사 + 목적어 형태로 맥락이 담긴 텍스트를 사용한다.
          </p>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <div
              className="grid grid-cols-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider border-b"
              style={{ background: "var(--muted)", borderColor: "var(--border)", color: "var(--muted-foreground)" }}
            >
              <span className="flex items-center gap-1"><span style={{ color: "var(--destructive)" }}>✗</span> 금지</span>
              <span className="flex items-center gap-1"><span style={{ color: "var(--success)" }}>✓</span> 권장</span>
            </div>
            {BUTTON_EXAMPLES.map((e, i) => (
              <div
                key={e.bad}
                className="grid grid-cols-2 px-4 py-3 text-sm border-b last:border-b-0"
                style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
              >
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-md w-fit"
                  style={{ background: "oklch(0.97 0.01 27)", color: "var(--destructive)" }}
                >
                  {e.bad}
                </span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-md w-fit"
                  style={{ background: "var(--success-subtle)", color: "var(--success)" }}
                >
                  {e.good}
                </span>
              </div>
            ))}
          </div>
        </div>
        <CodeBlock code={`// ❌ 금지
<Button>확인</Button>
<Button>제출</Button>

// ✅ 권장
<Button>환급 신청하기</Button>
<Button>계좌 등록하기</Button>`} />
      </Section>

      {/* 에러 메시지 6원칙 */}
      <Section title="에러 메시지 6원칙">
        <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
          에러 메시지의 핵심 역할: 사용자가 다음 단계에 무엇을 할지 안내하기
        </p>
        <div className="space-y-3">
          {ERROR_PRINCIPLES.map((p) => (
            <div key={p.num} className="rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-start gap-3">
                <div
                  className="h-6 w-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  {p.num}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold mb-1">{p.title}</p>
                  {p.desc && <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.desc}</p>}
                  {p.example && (
                    <div className="mt-2 space-y-1">
                      {p.example.map((ex) => (
                        <div key={ex.component} className="flex gap-2 text-xs">
                          <span
                            className="shrink-0 font-semibold px-1.5 py-0.5 rounded text-[10px]"
                            style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
                          >
                            {ex.component}
                          </span>
                          <span style={{ color: "var(--foreground)" }}>{ex.use}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 에러 메시지 구조 & 예시 */}
      <Section title="에러 메시지 작성 패턴">
        <div className="rounded-xl border p-4 mb-4" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted-foreground)" }}>구조</p>
          <div className="space-y-1">
            {[
              { label: "타이틀", desc: "무슨 일이 생겼는지 (부정형 금지, 마침표 없음)" },
              { label: "바디", desc: "왜 이렇게 됐는지 + 어떻게 하면 되는지 (사용자 언어)" },
              { label: "CTA", desc: "해결 행동 직접 연결 버튼" },
            ].map((s) => (
              <div key={s.label} className="flex gap-2 text-xs">
                <span
                  className="shrink-0 w-14 font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  [{s.label}]
                </span>
                <span style={{ color: "var(--foreground)" }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {ERROR_EXAMPLES.map((e, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <div
                className="rounded-xl border p-3 text-xs"
                style={{ borderColor: "var(--destructive)", background: "oklch(0.97 0.01 27)", color: "var(--destructive)" }}
              >
                <p className="font-semibold mb-1 text-[10px] uppercase tracking-wider opacity-60">금지</p>
                <p className="font-medium">{e.bad}</p>
              </div>
              <div
                className="rounded-xl border p-3 text-xs"
                style={{ borderColor: "oklch(0.85 0.06 150)", background: "var(--success-subtle)", color: "var(--success)" }}
              >
                <p className="font-semibold mb-1 text-[10px] uppercase tracking-wider opacity-60">권장</p>
                <p className="font-medium whitespace-pre-line">{e.good}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 빈 상태 */}
      <Section title="빈 상태 (Empty State) 패턴">
        <div className="rounded-xl border p-4 mb-4" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <p className="text-xs font-semibold mb-3" style={{ color: "var(--muted-foreground)" }}>구조</p>
          <div className="flex flex-col items-center gap-1 text-center py-2">
            {["[아이콘/일러스트]", "[제목: 현재 상태 설명]", "[설명: 왜 비어있는지 + 무엇을 할 수 있는지]", "[CTA 버튼]"].map((s) => (
              <p key={s} className="text-xs" style={{ color: "var(--foreground)" }}>{s}</p>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[
            {
              case: "첫 방문",
              title: "아직 프로젝트가 없어요",
              desc: "첫 번째 프로젝트를 만들고 팀과 함께 시작해보세요.",
              cta: "프로젝트 만들기",
            },
            {
              case: "검색 결과 없음",
              title: "'홍길동'에 대한 결과가 없어요",
              desc: "다른 키워드로 검색하거나 필터를 조정해보세요.",
              cta: "필터 초기화",
            },
            {
              case: "권한 없음",
              title: "접근 권한이 없어요",
              desc: "이 페이지를 보려면 관리자에게 권한을 요청하세요.",
              cta: "관리자에게 요청",
            },
          ].map((ex) => (
            <div key={ex.case} className="rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
              <p
                className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--muted-foreground)" }}
              >
                {ex.case}
              </p>
              <p className="text-sm font-semibold mb-1">{ex.title}</p>
              <p className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>{ex.desc}</p>
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-lg inline-block"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                {ex.cta}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 성공 메시지 */}
      <Section title="성공 메시지">
        <div className="space-y-2">
          {[
            { bad: "저장되었습니다", good: "변경 사항이 저장됐어요" },
            { bad: "완료", good: "팀원이 초대됐어요" },
            { bad: "삭제됨", good: "파일이 삭제됐어요 [실행 취소]" },
            { bad: "결제 완료", good: "결제가 완료됐어요. 영수증을 이메일로 보내드렸어요." },
          ].map((e, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl border text-xs"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="line-through shrink-0 w-32" style={{ color: "var(--muted-foreground)" }}>{e.bad}</span>
              <span style={{ color: "var(--muted-foreground)" }}>→</span>
              <span className="font-semibold" style={{ color: "var(--success)" }}>{e.good}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 로딩 */}
      <Section title="로딩 상태 텍스트">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {[
            { duration: "< 1초", text: "버튼에 스피너만 (텍스트 없음)" },
            { duration: "1~5초", text: '"처리 중..." 또는 구체적 동사' },
            { duration: "5초 이상", text: '"대용량 파일 처리 중이에요. 잠시 기다려주세요."' },
            { duration: "백그라운드", text: '"백그라운드에서 처리 중이에요. 완료되면 알려드릴게요."' },
          ].map((r, i) => (
            <div
              key={r.duration}
              className="flex gap-4 px-4 py-3 text-sm border-b last:border-b-0"
              style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
            >
              <span
                className="text-xs font-semibold shrink-0 w-20"
                style={{ color: "var(--primary)" }}
              >
                {r.duration}
              </span>
              <span className="text-xs" style={{ color: "var(--foreground)" }}>{r.text}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
