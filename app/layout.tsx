
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Stupid Answers - The Ultimate Q&A Entertainment Experience",
  description: "Discover hilarious, thought-provoking questions and answers across Food & Drink, Science, Daily Life, and Logic categories. Perfect for entertainment, conversation starters, and fun with friends!",
  keywords: "funny questions, stupid answers, entertainment, quiz, conversation starter, humor",
  openGraph: {
    title: "Big Stupid Answers - The Ultimate Q&A Entertainment Experience",
    description: "Discover hilarious, thought-provoking questions and answers across multiple categories. Perfect for entertainment and conversation starters!",
    type: "website",
    url: "https://bigstupidanswers.com",
    images: [
      {
        url: "https://readdy.ai/api/search-image?query=colorful%20gradient%20background%20with%20question%20marks%20and%20lightbulbs%2C%20modern%20app%20design%2C%20vibrant%20purple%20pink%20red%20colors%2C%20professional%20web%20banner%2C%20entertainment%20theme%2C%20playful%20typography%2C%20question%20and%20answer%20symbols&width=1200&height=630&seq=og-image&orientation=landscape",
        width: 1200,
        height: 630,
        alt: "Big Stupid Answers - Q&A Entertainment App"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Stupid Answers - The Ultimate Q&A Entertainment Experience",
    description: "Discover hilarious, thought-provoking questions and answers across multiple categories.",
    images: ["https://readdy.ai/api/search-image?query=colorful%20gradient%20background%20with%20question%20marks%20and%20lightbulbs%2C%20modern%20app%20design%2C%20vibrant%20purple%20pink%20red%20colors%2C%20professional%20web%20banner%2C%20entertainment%20theme%2C%20playful%20typography%2C%20question%20and%20answer%20symbols&width=1200&height=630&seq=twitter-image&orientation=landscape"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
