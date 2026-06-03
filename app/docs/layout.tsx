"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  {
    group: "Foundation",
    items: [
      { href: "/docs/foundation/logo", label: "Logo" },
      { href: "/docs/foundation/colors", label: "Colors" },
      { href: "/docs/foundation/typography", label: "Typography" },
      { href: "/docs/foundation/spacing", label: "Spacing" },
      { href: "/docs/foundation/shadows", label: "Shadows" },
      { href: "/docs/foundation/icons", label: "Icons" },
      { href: "/docs/foundation/ux-writing", label: "UX Writing" },
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

function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <>
      {/* Logo */}
      <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <div
            className="h-6 w-6 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            반
          </div>
          <span className="text-sm font-semibold">Design System</span>
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden h-8 w-8 rounded-lg flex items-center justify-center"
            style={{ color: "var(--muted-foreground)" }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
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
                      onClick={onClose}
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
    </>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className="w-56 shrink-0 border-r flex-col fixed top-0 bottom-0 hidden md:flex"
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 flex flex-col border-r md:hidden transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        <SidebarContent pathname={pathname} onClose={() => setMobileOpen(false)} />
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-56 min-w-0">
        {/* Mobile top bar */}
        <div
          className="sticky top-0 z-30 flex items-center h-14 px-4 border-b md:hidden"
          style={{ borderColor: "var(--border)", background: "var(--background)" }}
        >
          <button
            onClick={() => setMobileOpen(true)}
            className="h-9 w-9 rounded-lg flex items-center justify-center -ml-1"
            style={{ color: "var(--foreground)" }}
          >
            <Menu size={20} />
          </button>
          <span className="ml-3 text-sm font-semibold">Design System</span>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
