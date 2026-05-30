"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    group: "Foundation",
    items: [
      { href: "/docs/foundation/colors", label: "Colors" },
      { href: "/docs/foundation/typography", label: "Typography" },
      { href: "/docs/foundation/spacing", label: "Spacing" },
      { href: "/docs/foundation/shadows", label: "Shadows" },
    ],
  },
  {
    group: "Navigation",
    items: [
      { href: "/docs/components/top-navigation", label: "Top Navigation" },
      { href: "/docs/components/tabs", label: "Tabs" },
    ],
  },
  {
    group: "Layout",
    items: [
      { href: "/docs/components/header", label: "Header" },
      { href: "/docs/components/list-header", label: "List Header" },
      { href: "/docs/components/list", label: "List" },
      { href: "/docs/components/divider", label: "Divider" },
    ],
  },
  {
    group: "Display",
    items: [
      { href: "/docs/components/card", label: "Card" },
      { href: "/docs/components/badge", label: "Badge" },
      { href: "/docs/components/amount-display", label: "Amount Display" },
      { href: "/docs/components/step-indicator", label: "Step Indicator" },
    ],
  },
  {
    group: "Input",
    items: [
      { href: "/docs/components/button", label: "Button" },
      { href: "/docs/components/form", label: "Form / Input" },
      { href: "/docs/components/bank-selector", label: "Bank Selector" },
      { href: "/docs/components/accordion", label: "Accordion" },
    ],
  },
  {
    group: "Feedback",
    items: [
      { href: "/docs/components/loading", label: "Loading" },
      { href: "/docs/components/empty-state", label: "Empty State" },
      { href: "/docs/components/toast", label: "Toast" },
    ],
  },
  {
    group: "Overlay",
    items: [
      { href: "/docs/components/sheet", label: "Sheet" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className="w-56 shrink-0 border-r flex flex-col fixed top-0 bottom-0 overflow-y-auto"
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
          <Link href="/" className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              반
            </div>
            <span className="text-sm font-semibold">Design System</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-5">
          {NAV.map((section) => (
            <div key={section.group}>
              <p
                className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted-foreground)" }}
              >
                {section.group}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center h-8 px-2 rounded-md text-sm transition-colors"
                        style={{
                          background: active ? "var(--primary-subtle)" : "transparent",
                          color: active ? "var(--primary)" : "var(--muted-foreground)",
                          fontWeight: active ? 600 : 400,
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-3 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>반값환급 DS v1.2</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-56 min-w-0">
        <div className="max-w-3xl mx-auto px-8 py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
