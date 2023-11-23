import { notFound } from 'next/navigation';
import { getDetail, getList } from '@/src/libs/microcms';
import Image from 'next/image';
import styles from '../../styles/posts.module.scss';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((data) => {
    return {
      slug: data.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const data = await getDetail(slug);
  const updatedAt = data.updatedAt;
  const update = updatedAt.substring(0, 10);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.posts_inner}>
      <p className={styles.updatedAt}>更新日：{update}</p>
      <h1 className={styles.title}>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
        className="mt-5 mb-5 content-body"
      />
      <a href="/">トップに戻る</a>
    </div>
  );
}
