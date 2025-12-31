import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lahari Karrotu - Connect',
  description: 'AI / Full-Stack Engineer',
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      zIndex: 9999
    }}>
      {children}
    </div>
  );
}

