import { Banknote } from "lucide-react";
import { PageHeader } from "@/components/docs/page-header";
import { Section, PreviewBox, CodeBlock } from "@/components/docs/section";

export default function HeaderPage() {
  return (
    <div>
      <PageHeader
        badge="Layout"
        title="Header"
        description="페이지 또는 섹션의 제목 영역. title-only, title+description, icon+title+description 3가지 variation을 지원합니다."
      />

      <Section title="Title Only">
        <PreviewBox>
          <div className="w-full">
            <h1 className="text-2xl font-bold tracking-tight">소득 조회 결과</h1>
          </div>
        </PreviewBox>
        <CodeBlock code={`<h1 className="text-2xl font-bold tracking-tight">소득 조회 결과</h1>`} />
      </Section>

      <Section title="Title + Description">
        <PreviewBox>
          <div className="w-full">
            <h1 className="text-2xl font-bold tracking-tight mb-1.5">환급 신청</h1>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              아래 내용을 확인하고 환급을 신청해주세요. 신청 후 30일 이내 입금됩니다.
            </p>
          </div>
        </PreviewBox>
        <CodeBlock code={`<div>
  <h1 className="text-2xl font-bold tracking-tight mb-1.5">환급 신청</h1>
  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
    아래 내용을 확인하고 환급을 신청해주세요.
  </p>
</div>`} />
      </Section>

      <Section title="Image + Title + Description">
        <PreviewBox>
          <div className="w-full flex flex-col gap-3">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center"
                 style={{ background: "var(--primary-subtle)" }}>
              <Banknote size={24} style={{ color: "var(--primary)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight mb-1">₩345,600 환급 확정</h1>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                2023년 귀속 종합소득세 환급이 확정되었습니다.
              </p>
            </div>
          </div>
        </PreviewBox>
        <CodeBlock code={`import { Banknote } from "lucide-react";

<div className="flex flex-col gap-3">
  <div className="h-12 w-12 rounded-xl flex items-center justify-center"
       style={{ background: "var(--primary-subtle)" }}>
    <Banknote size={24} style={{ color: "var(--primary)" }} />
  </div>
  <div>
    <h1 className="text-xl font-bold tracking-tight mb-1">₩345,600 환급 확정</h1>
    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
      2023년 귀속 종합소득세 환급이 확정되었습니다.
    </p>
  </div>
</div>`} />
      </Section>

      <Section title="섹션 헤더 (소형)">
        <PreviewBox>
          <div className="w-full space-y-4">
            <div>
              <p className="text-base font-semibold mb-3">소득 내역</p>
              <div className="rounded-lg border p-4" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>콘텐츠 영역</p>
              </div>
            </div>
            <div>
              <p className="text-base font-semibold mb-3">수수료 안내</p>
              <div className="rounded-lg border p-4" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>콘텐츠 영역</p>
              </div>
            </div>
          </div>
        </PreviewBox>
      </Section>
    </div>
  );
}
