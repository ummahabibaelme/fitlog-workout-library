import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { FitlogProvider } from '@/components/fitlog-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'FitLog — Workout Library',
  description: 'A dark, no-nonsense workout library and daily training log.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <FitlogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FitlogProvider>
      </body>
    </html>
  );
}
