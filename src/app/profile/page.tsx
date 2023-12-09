import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { snsSet } from '../layout';

const ProfilePage = () => {
  return (
    <div className="px-2 py-5">
      <div className="flex items-center space-x-5">
        <div className="image">
          <Image
            alt="プロフィール"
            src="/images/common/profile.jpg"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">なおひこ@ITエンジニア</h2>
        </div>
      </div>
      <div className="">
        <dl className="mt-8">
          <div className="px-2 py-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
            <dt className="font-bold">経歴</dt>
            <dd className="md:col-span-2 sm:mt-1 md:mt-0">
              <p>新卒から製造業勤務で品質保証・品質管理など経験（14年）</p>
              <p className="ml-1">↓</p>
              <p>プログラミング学習後、未経験からWeb制作フリーランスへ（37歳）</p>
              <p className="ml-1">↓</p>
              <p>会社員に転向後、アプリ開発など経験（38歳）</p>
              <p className="ml-1">↓</p>
              <p>フリーランスに転向、Webサイトの新規制作や改修（40歳）</p>
            </dd>
          </div>
          <div className="px-2 py-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
            <dt className="font-bold">アカウント</dt>
            <dd className="md:col-span-2 sm:mt-1 md:mt-0">
              <ul className="text-lg">
                <li className="mt-5">
                  <Link
                    href={snsSet.x}
                    className="no-underline md:hover:underline md:hover:text-blue-400 text-blue-500 font-bold"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    X
                  </Link>
                </li>
                <li className="mt-8">
                  <Link
                    href={snsSet.gitHub}
                    className="no-underline md:hover:underline md:hover:text-blue-400 text-blue-500 font-bold"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </dd>
          </div>
          {/* <div className="py-4 grid-cols-1 grid md:grid-cols-3 md:gap-4 md:py-5 border-t border-gray-700">
              <dt className="font-bold">過去の制作物</dt>
              <dd className="md:col-span-2 sm:mt-1 md:mt-0">
                <ul>
                  <li>
                    <p>WordPressで制作したポートフォリオサイト</p>
                  </li>
                  <li>Next.jsで制作した当ブログ</li>
                </ul>
              </dd>
            </div> */}
          <div className="px-2 pt-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
            <dt className="font-bold">当サイトのコンセプト</dt>
            <dd className="md:col-span-2 sm:mt-1 md:mt-0">
              プログラミングの学習方法や経験の中で得た知見、便利ツールなどを中心に発信するテックブログです。
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProfilePage;
