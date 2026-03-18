import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { Kaisei_Decol, Oxygen, Bellota } from "next/font/google";
import { useEffect } from "react";

const kaisei = Kaisei_Decol({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-kaisei',
});

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen',
});

const bellota = Bellota({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-bellota',
});

const fontVariables = `${kaisei.variable} ${oxygen.variable} ${bellota.variable}`;

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const classes = fontVariables.split(' ');
    document.documentElement.classList.add(...classes);
  }, []);

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(App);
