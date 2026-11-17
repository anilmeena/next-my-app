import Link from "next/link";
import "./globals.css";

export const metadata = { title: "Notes App", description: "Learning Next.js" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto p-6">
        <nav className="flex gap-4 mb-8 border-b pb-4">
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}