import type { Metadata } from 'next';
import './globals.css';

const siteName = 'University';
const siteDescription =
  'A modern, student-first university website with admissions, academics, faculty, news and campus updates.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
