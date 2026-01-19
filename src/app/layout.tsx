import type { ReactNode } from "react";

// This root layout is required by Next.js.
// The main layout with <html> and <body> is in `src/app/[locale]/layout.tsx`.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
