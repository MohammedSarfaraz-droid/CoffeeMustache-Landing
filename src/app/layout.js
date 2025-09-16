import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PremiumStarsBackground } from "@/components/ui/premium-stars";
import { ThemeProvider } from "@/components/ThemeProvider";
import BlurryBlobTwo from "@/components/BlurryBlobTwo";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coffee Mustache Café Growth",
  description: "AI-powered growth platform for cafés."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased relative`}
      >
        <ThemeProvider>
          <BlurryBlobTwo
            className="rounded-xl opacity-45"
            firstBlobColor="bg-blue-400"
            secondBlobColor="bg-purple-400"
          />
          {/* Top gradient overlay (reduced) */}
          {/* <div className="fixed top-0 left-0 w-screen h-[40vh] z-10 pointer-events-none">
            <div
              className="block dark:hidden w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.32) 55%, rgba(255,255,255,0.0) 100%)",
              }}
            />
            <div
              className="hidden dark:block w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(12,17,23,0.92) 0%, rgba(12,17,23,0.32) 55%, rgba(12,17,23,0.0) 100%)",
              }}
            />
          </div> */}
          <BackgroundRippleEffect rows={8} cols={27} cellSize={90} />
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 max-w-full w-full left-0 right-0">
            <PremiumStarsBackground />
          </div>
          <div className="relative z-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
