import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const clash = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-clash'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: "S.ai",
  description: "Built with 💙 by Sai Wai Maung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col',
          geistSans.variable,
          geistMono.variable,
          clash.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
