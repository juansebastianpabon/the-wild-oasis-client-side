import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
const josefinn = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s The Wild Oasis',
    default: 'The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel,located in the heart of the Italian Dolomites, surrounded by breathtaking mountain views and pristine nature.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefinn.className}`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
