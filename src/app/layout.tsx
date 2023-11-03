import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

// headの設定
const siteName = 'Nhackblog';
const description =
  'プログラミングの学習方法や経験の中で得た知見、便利ツールなどを中心に発信するテックブログです。';
const siteUrl = 'https://www.nhackblog.com/';
const ogImageUrl = 'https://www.nhackblog.com/images/common/home_page.jpg';

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
    images: [
      {
        url: ogImageUrl,
        width: 1800,
        height: 1600,
        alt: '当サイトのOG画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    site: twitter,
    creator: twitter,
    images: ogImageUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="flex items-center space-x-5 my-5">
        <Link href={'/'} className="md:hover:text-gray-600">
          <h1 className="text-3xl font-bold">{siteName}</h1>
        </Link>
      </div>
      <nav>
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
                <Image alt="twitter" src="/twitter.png" width={25} height={25} />
              </Link>
            </li>
            <li className="">
              <Link href={gitHub} target="_blank" rel="noopener nofollow" className="">
                <Image alt="GitHub" src="/github.png" width={25} height={25} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
      {/* <GoogleAnalytics /> */}
      <body>
        {/* <Burger /> */}
        <div className="mx-auto max-w-3xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
