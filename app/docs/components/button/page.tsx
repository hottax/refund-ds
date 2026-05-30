import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock, PropTable } from "@/components/docs/section";

function Btn({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "kakao";
  size?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const base = "inline-flex items-center justify-center font-semibold transition-colors rounded-full select-none";

  const sizes: Record<string, string> = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-14 px-6 text-base",
    full: "h-14 w-full text-base",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "var(--primary)", color: "var(--primary-foreground)" },
    secondary: { background: "var(--secondary)", color: "var(--secondary-foreground)" },
    outline: { background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)" },
    ghost: { background: "transparent", color: "var(--foreground)" },
    destructive: { background: "var(--destructive)", color: "var(--destructive-foreground)" },
    kakao: { background: "var(--kakao)", color: "var(--kakao-foreground)" },
  };

  return (
    <button
      className={`${base} ${sizes[size]}`}
      style={{
        ...variants[variant],
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default function ButtonPage() {
  return (
    <div>
      <PageHeader
        badge="Input"
        title="Button"
        description="모든 CTA에 사용되는 버튼 컴포넌트. Pill(rounded-full) 형태를 기본으로 합니다."
      />

      <Section title="Variants">
        <PreviewBox>
          <Btn variant="primary">Primary</Btn>
          <Btn variant="secondary">Secondary</Btn>
          <Btn variant="outline">Outline</Btn>
          <Btn variant="ghost">Ghost</Btn>
          <Btn variant="destructive">Destructive</Btn>
          <Btn variant="kakao">카카오 로그인</Btn>
        </PreviewBox>
        <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">삭제</Button>
<Button variant="kakao">카카오 로그인</Button>`} />
      </Section>

      <Section title="Sizes">
        <PreviewBox>
          <Btn size="sm">Small</Btn>
          <Btn size="md">Medium</Btn>
          <Btn size="lg">Large</Btn>
        </PreviewBox>
        <PreviewBox>
          <Btn size="full">전체 너비 CTA (h-14)</Btn>
        </PreviewBox>
        <CodeBlock code={`<Button size="sm">Small</Button>   {/* h-8, px-4, text-xs */}
<Button size="md">Medium</Button> {/* h-10, px-5, text-sm */}
<Button size="lg">Large</Button>  {/* h-14, px-6, text-base */}
<Button size="full">CTA</Button>  {/* h-14, w-full */}`} />
      </Section>

      <Section title="States">
        <PreviewBox>
          <Btn variant="primary" disabled>비활성화</Btn>
          <Btn variant="outline" disabled>비활성화</Btn>
        </PreviewBox>
      </Section>

      <Section title="모바일 CTA 패턴">
        <CodeBlock code={`{/* 화면 하단 고정 CTA */}
<div className="fixed bottom-0 left-0 right-0 px-4 pb-8 pt-3 bg-white border-t"
     style={{ borderColor: "var(--border)" }}>
  <button
    className="w-full h-14 rounded-full font-semibold text-base"
    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
  >
    환급 신청하기
  </button>
</div>`} />
      </Section>

      <PropTable rows={[
        { prop: "variant", type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'kakao'", default: "'primary'", description: "버튼 스타일" },
        { prop: "size", type: "'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: "버튼 크기" },
        { prop: "disabled", type: "boolean", default: "false", description: "비활성화 상태" },
      ]} />
    </div>
  );
}
