import { PageHeader } from "@/components/docs/page-header";
import { Section, CodeBlock } from "@/components/docs/section";

function LogoHalfRefund({ size = 1 }: { size?: number }) {
  const w = Math.round(49 * size);
  const h = Math.round(24 * size);
  return (
    <svg width={w} height={h} viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_logo)">
        <path
          d="M47.0857 0V4.29206H49.3714V8.45714H47.0857V12.6476H42.2603V0H47.0857ZM39.2635 0.533334V3.83492C39.2635 9.93016 33.8032 12.6476 25.4984 12.7238V8.99048C31.4159 8.86349 34.5651 7.00952 34.5651 4.57143V4.24127H25.9302V0.533334H39.2635ZM44.5968 17.4476C47.4159 18.1333 48.9651 20.2413 48.7873 23.6952H44.5714C44.7238 22.0952 44.3936 21.0032 43.2762 20.5206C41.9556 22.4762 39.873 23.619 37.1302 24V20.3429C39.6698 19.3778 40.7111 17.981 40.7619 13.6381H45.0032C45.0032 15.0603 44.8762 16.3302 44.5968 17.4476ZM29.7905 15.619H32.7873V13.6889H36.5714V23.6952H25.9302V13.6889H29.7905V15.619ZM29.7905 18.4381V20.8254H32.7873V18.4381H29.7905Z"
          fill="currentColor"
        />
        <path
          d="M21.6889 0V6.32381H23.9746V10.4889H21.6889V17.854H16.8635V0H21.6889ZM9.70159 0.380952H14.0952V13.7143H0V0.380952H4.44444V3.2254H9.70159V0.380952ZM4.44444 6.67936V10.0571H9.70159V6.67936H4.44444ZM1.24444 15.2127H6.14603V19.9619H22.2984V23.6952H1.24444V15.2127Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_logo">
          <rect width="49" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const SIZES = [
  { label: "XS", scale: 0.75, px: "37×18px" },
  { label: "SM", scale: 1, px: "49×24px" },
  { label: "MD", scale: 1.5, px: "74×36px" },
  { label: "LG", scale: 2, px: "98×48px" },
  { label: "XL", scale: 2.5, px: "123×60px" },
];

const USAGE_RULES = [
  { ok: true, text: "브랜드 컬러(#7C3AED) 또는 White 단색으로만 사용" },
  { ok: true, text: "최소 크기 37×18px (XS) 이상 사용" },
  { ok: true, text: "여백은 로고 높이의 1/2 이상 확보" },
  { ok: false, text: "로고 색상 임의 변경 금지" },
  { ok: false, text: "배경색과 대비 불충분한 배치 금지" },
  { ok: false, text: "비율 변경·늘리기·회전 금지" },
];

export default function LogoPage() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Logo"
        description="반값환급 브랜드 로고. 픽셀 기반 독자 서체로 제작된 로고타입으로, SVG 인라인 방식으로 제공됩니다."
      />

      {/* On Light */}
      <Section title="On Light">
        <div
          className="rounded-xl border p-8 flex items-center justify-center"
          style={{ borderColor: "var(--border)", background: "#FFFFFF" }}
        >
          <span style={{ color: "#7C3AED" }}>
            <LogoHalfRefund size={2} />
          </span>
        </div>
      </Section>

      {/* On Dark */}
      <Section title="On Dark">
        <div
          className="rounded-xl border p-8 flex items-center justify-center"
          style={{ borderColor: "var(--border)", background: "oklch(0.145 0 0)" }}
        >
          <span style={{ color: "#FFFFFF" }}>
            <LogoHalfRefund size={2} />
          </span>
        </div>
      </Section>

      {/* On Brand */}
      <Section title="On Brand">
        <div
          className="rounded-xl border p-8 flex items-center justify-center"
          style={{ borderColor: "var(--border)", background: "#7C3AED" }}
        >
          <span style={{ color: "#FFFFFF" }}>
            <LogoHalfRefund size={2} />
          </span>
        </div>
      </Section>

      {/* Size Scale */}
      <Section title="크기 스케일">
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          {SIZES.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center gap-6 px-5 py-4 border-b last:border-b-0"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-10 shrink-0">
                <p className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--border)" }}>{s.px}</p>
              </div>
              <div className="flex items-center" style={{ color: "#7C3AED" }}>
                <LogoHalfRefund size={s.scale} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Usage Rules */}
      <Section title="사용 규칙">
        <ul className="space-y-2">
          {USAGE_RULES.map((rule, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span
                className="mt-0.5 shrink-0 text-xs font-bold"
                style={{ color: rule.ok ? "var(--success)" : "var(--destructive)" }}
              >
                {rule.ok ? "✓" : "✗"}
              </span>
              <span style={{ color: "var(--foreground)" }}>{rule.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Code */}
      <Section title="코드 스니펫">
        <CodeBlock
          code={`function LogoHalfRefund({ size = 1 }: { size?: number }) {
  const w = Math.round(49 * size);
  const h = Math.round(24 * size);
  return (
    <svg width={w} height={h} viewBox="0 0 49 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_logo)">
        <path d="M47.0857 0V4.29206H..." fill="currentColor" />
        <path d="M21.6889 0V6.32381H..." fill="currentColor" />
      </g>
    </svg>
  );
}

// On Light (brand color)
<span style={{ color: "#7C3AED" }}>
  <LogoHalfRefund size={2} />
</span>

// On Dark / On Brand (white)
<span style={{ color: "#FFFFFF" }}>
  <LogoHalfRefund size={2} />
</span>`}
        />
      </Section>
    </div>
  );
}
