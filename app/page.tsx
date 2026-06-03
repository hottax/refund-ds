import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="mb-3">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "var(--primary-subtle)", color: "var(--primary)" }}
        >
          v1.2
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-3">
        반값환급
        <span className="ml-2" style={{ color: "var(--primary)" }}>
          Design System
        </span>
      </h1>
      <p className="text-base mb-8 max-w-md" style={{ color: "var(--muted-foreground)" }}>
        종합소득세 환급 서비스를 위한 UI 컴포넌트 라이브러리.
        <br />
        Tailwind v4 OKLCH · shadcn/ui · Pretendard
      </p>
      <div className="flex gap-3">
        <Link
          href="/docs/foundation/colors"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold transition-colors hover:opacity-90"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          시작하기
        </Link>
        <Link
          href="/docs/components/button"
          className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold border transition-colors hover:bg-muted"
          style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
        >
          컴포넌트
        </Link>
      </div>

      <div className="mt-16 flex gap-10">
        {[
          { label: "Foundation", value: "6" },
          { label: "Components", value: "18" },
          { label: "Screens", value: "17" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
              {stat.value}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
