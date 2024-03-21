import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Brian PWA',
    default: 'Brian PWA',
  },
  description: 'Personalized PWA todo application',
  generator: 'Next.js',
  manifest: '/manifest.webmanifest',
  icons: [{ rel: 'icon', url: 'icons/icon-192x192.png' }],
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
