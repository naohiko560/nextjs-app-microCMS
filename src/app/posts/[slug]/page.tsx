import { notFound } from 'next/navigation';
import { getDetail, getList } from '@/src/libs/microcms';
import styles from '../../styles/posts.module.scss';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import type { Metadata } from 'next';

// ビルド時、静的にルートを生成
export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((data) => {
    return {
      slug: data.id,
    };
  });

  return [...paths];
}

// 記事ごとにタイトル・ディスクリプションを設定
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getDetail(slug);
  const title = data.title;

  return {
    title: title,
    description: title,
  };
}

export default async function StaticDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const data = await getDetail(slug);
  const updatedAt = data.updatedAt;
  const update = updatedAt.substring(0, 10);

  // シンタックスハイライト
  const $ = load(data.content);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  data.content = $.html();

  if (!data) {
    notFound();
  }

  return (
    <div>
      <p className={styles.updatedAt}>更新日：{update}</p>
      <p className={styles.category}>{data.category.name}</p>
      <h1 className={styles.title}>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
        className={styles.posts_inner}
      />
      <a href="/">トップに戻る</a>
    </div>
  );
}
