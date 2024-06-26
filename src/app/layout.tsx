import type {Metadata} from 'next';
import './globals.css';
import {PropsWithChildren} from 'react';
import Navigation from '@/components/Navigation';
import {GoogleAnalytics} from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Milk717 Blog',
  description: 'Milk717 블로그 입니다.',
};

const RootLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <html lang="ko">
      <body className="relative bg-default p-4 max-w-4xl mx-auto">
        <Navigation />
        {children}
      </body>
      <GoogleAnalytics gaId="G-K4QSH24CR7" />
    </html>
  );
};

export default RootLayout;
