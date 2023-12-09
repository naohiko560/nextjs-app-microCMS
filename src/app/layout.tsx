import type { Metadata } from 'next';
import './styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Burger from '../components/Burger';
import GoogleAnalytics from '../components/GoogleAnalytics';

/*=====================================================================
# 各設定ここから
==================================================================== */
// head
const siteName = 'Nhackblog';
const description =
  'プログラミングの学習方法や経験の中で得た知見、便利ツールなどを中心に発信するテックブログです。';
const siteUrl = 'https://nhackblog.com/';

// ナビゲーションバー
export const navSet = {
  menu1: 'トップ',
  menu2: 'プロフィール',
  menu3: 'お問い合わせ',
  menu4: 'X',
  menu5: 'gitHub',
}

// SNS
export const snsSet = {
  x: 'https://twitter.com/naohiko_blog',
  gitHub: 'https://github.com/naohiko560',
};
/*=====================================================================
# 各設定ここまで
==================================================================== */

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: siteUrl,
    siteName: siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    site: snsSet.x,
    creator: snsSet.x,
  },
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header className="header bg-white mb-5 md:mb-10">
      <div className="flex justify-center md:justify-normal items-center space-x-5 py-5 mx-auto max-w-6xl box-content pr-10 pl-10">
        <Link href={'/'} className="md:transition-opacity md:ease-linear md:hover:opacity-60">
          <h1 className="text-3xl font-bold">
            <Image alt={siteName} src="/images/common/logo.png" width={180} height={48} />
          </h1>
        </Link>
      </div>
      <div className="bg-blue-400">
        <nav className="header-nav mx-auto max-w-6xl text-white box-content px-10 py-4">
          <div className="hidden md:block">
            <ul className="flex space-x-5 items-center">
              <li className="">
                <Link
                  href="/"
                  className="transition-colors ease-linear hover:bg-blue-300 rounded-md px-3 py-5 font-medium"
                >
                  {navSet.menu1}
                </Link>
              </li>
              <li className="">
                <Link
                  href="/profile"
                  className="transition-colors ease-linear hover:bg-blue-300 rounded-md px-3 py-5 font-medium"
                >
                  {navSet.menu2}
                </Link>
              </li>
              <li className="">
                <Link
                  href="/contact"
                  className="transition-colors ease-linear hover:bg-blue-300 rounded-md px-3 py-5 font-medium"
                >
                  {navSet.menu3}
                </Link>
              </li>
              <li className="">
                <Link
                  href={snsSet.x}
                  target="_blank"
                  rel="noopener nofollow"
                  className="md:transition-opacity md:ease-linear md:hover:opacity-60"
                >
                  <Image alt={navSet.menu4} src="/images/common/X.png" width={20} height={20} />
                </Link>
              </li>
              <li className="">
                <Link
                  href={snsSet.gitHub}
                  target="_blank"
                  rel="noopener nofollow"
                  className="md:transition-opacity md:ease-linear md:hover:opacity-60"
                >
                  <Image
                    alt={navSet.menu5}
                    src="/images/common/github.png"
                    width={25}
                    height={25}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-5 md:mt-10 mb-3 py-5 text-center text-slate-400">
        <h3>Developed by Naohiko</h3>
      </div>
    </footer>
  );

  return (
    <html lang="ja">
      <GoogleAnalytics />
      <body className="bg-gray-50">
        <Burger />
        <div className="box-content">
          {header}
          <main className="main md:px-6 px-4 box-content">
            <div className="main-inner mx-auto max-w-5xl bg-white md:py-10 md:px-10 px-0 box-content">
              {children}
            </div>
          </main>
          {footer}
        </div>
      </body>
    </html>
  );
}
