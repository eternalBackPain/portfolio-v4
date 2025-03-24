import "./globals.css";
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "John Naoom",
  description: "Personal website for John Naoom",
  keywords: "John Naoom, johnnaoom, personal website, naoom"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-sans text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      {/* This styling deals with width and spacing */}
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          {/* <PreloadResources /> */}
        </main>
      </body>
    </html>
  );
}
