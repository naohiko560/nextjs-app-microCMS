import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Burger from '../components/Burger';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// headの設定
const siteName = 'Nhackblog';
const description =
  'プログラミングの学習方法や経験の中で得た知見、便利ツールなどを中心に発信するテックブログです。';
const siteUrl = 'https://nhackblog.com/';

// ナビゲーションバーの設定
const menu1 = 'トップ';
const menu2 = 'プロフィール';
const menu3 = 'お問い合わせ';

// SNS設定
const twitter = '#';
const gitHub = 'https://github.com/naohiko560';

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
    site: twitter,
    creator: twitter,
  },
  // metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header className="header bg-white">
      <div className="flex items-center space-x-5 py-5 mx-auto max-w-6xl box-content pr-10 pl-10">
        <Link href={'/'} className="md:hover:text-gray-600">
          <h1 className="text-3xl font-bold">{siteName}</h1>
        </Link>
      </div>
      <div className="bg-blue-400 pt-1 pb-1">
        <nav className="header-nav mx-auto max-w-6xl text-white box-content pr-10 pl-10">
          <div className="my-5 hidden md:block">
            <ul className="flex space-x-5">
              <li className="">
                <Link
                  href="/"
                  className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
                >
                  {menu1}
                </Link>
              </li>
              <li className="">
                <Link
                  href="/profile"
                  className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
                >
                  {menu2}
                </Link>
              </li>
              <li className="">
                <Link
                  href="/contact"
                  className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
                >
                  {menu3}
                </Link>
              </li>
              <li className="">
                <Link href={twitter} target="_blank" rel="noopener nofollow" className="">
                  <Image alt="twitter" src="/images/common/twitter.png" width={25} height={25} />
                </Link>
              </li>
              <li className="">
                <Link href={gitHub} target="_blank" rel="noopener nofollow" className="">
                  <Image alt="GitHub" src="/images/common/github.png" width={25} height={25} />
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
      <div className="border-t border-slate-500 mt-9 mb-3 py-5 text-center text-slate-400">
        <h3>Developed by Naohiko</h3>
      </div>
    </footer>
  );

  return (
    <html lang="ja">
      <GoogleAnalytics />
      <body className="body">
        <Burger />
        <div className="box-content">
          {header}
          <main className="main px-6 box-content">
            <div className="main-inner mx-auto max-w-5xl bg-white pt-10 pb-10 pr-10 pl-10 box-content">
              {children}
            </div>
          </main>
          {footer}
        </div>
      </body>
    </html>
  );
}
