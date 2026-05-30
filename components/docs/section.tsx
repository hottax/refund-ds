interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-base font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

interface PreviewBoxProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function PreviewBox({ children, className = "", dark }: PreviewBoxProps) {
  return (
    <div
      className={`rounded-xl border p-6 flex flex-wrap gap-3 items-center ${dark ? "dark" : ""} ${className}`}
      style={{
        borderColor: "var(--border)",
        background: dark ? "oklch(0.145 0 0)" : "var(--background)",
      }}
    >
      {children}
    </div>
  );
}

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre
      className="rounded-xl p-4 text-xs leading-relaxed overflow-x-auto mt-3"
      style={{ background: "var(--muted)", color: "var(--foreground)" }}
    >
      <code>{code}</code>
    </pre>
  );
}

interface PropTableProps {
  rows: { prop: string; type: string; default?: string; description: string }[];
}

export function PropTable({ rows }: PropTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "var(--muted)" }}>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left font-semibold text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.prop}
              className="border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <td className="px-4 py-2.5">
                <code className="text-xs font-mono" style={{ color: "var(--primary)" }}>
                  {row.prop}
                </code>
              </td>
              <td className="px-4 py-2.5">
                <code className="text-xs font-mono" style={{ color: "var(--muted-foreground)" }}>
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-2.5 text-xs" style={{ color: "var(--muted-foreground)" }}>
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 text-xs" style={{ color: "var(--foreground)" }}>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
