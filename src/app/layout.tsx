import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lahari Karrotu — Software Engineer · Backend & Healthcare Tech',
  description:
    'Lahari Karrotu — software engineer working on backend, FHIR, and AWS in healthcare, with side projects in multimodal AI. Writing, code, and systems that care about the messy middle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        />
      </head>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}