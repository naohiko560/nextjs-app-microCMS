import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '@/src/libs/microcms';
import Image from 'next/image';
import styles from '../../styles/posts.module.scss'

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((data) => {
    return {
      slug: data.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getDetail(slug);
  const updatedAt = data.updatedAt;
  const update = updatedAt.substring(0, 10);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.updatedAt}>更新日：{update}</p>
      <Image alt={data.title} src={data.thumbnail.url} width={1200} height={700} />
      {data.title}
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
        className={styles.post}
      />
      <a href="/">トップに戻る</a>
    </div>
  );
}
