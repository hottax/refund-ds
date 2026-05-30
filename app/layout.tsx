import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "반값환급 Design System",
  description: "반값환급 서비스 UI 컴포넌트 라이브러리 — Tailwind v4 OKLCH + shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
