import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Focus Mode Bot — Block Distracting Channels During Work Hours",
  description: "Discord bot that temporarily hides specified channels during configured focus hours, with emergency override and productivity tracking. $9/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="00b8c422-00a8-4aa8-bdac-8aa8ae56a151"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
