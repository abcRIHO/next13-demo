import Link from 'next/link';
// import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">main</Link> <Link href="/about">about</Link>
        </div>
        <div>TITLE - WELCOME TO NEXT 13</div>
        {children}
      </body>
    </html>
  );
}
