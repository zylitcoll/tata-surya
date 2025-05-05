import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Nunito } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import StarBackground from '@/components/star-background';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Solar System Explorer | Interactive Magazine for Kids',
  description: 'An interactive 3D solar system magazine for elementary school children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${nunito.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <StarBackground />
          <Header />
          <main className="flex flex-col items-center">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}