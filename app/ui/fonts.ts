import { Inter, Roboto, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lusitana',
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});
