interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
      {badge && (
        <span
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3"
          style={{ background: "var(--primary-subtle)", color: "var(--primary)" }}
        >
          {badge}
        </span>
      )}
      <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
        {description}
      </p>
    </div>
  );
}
