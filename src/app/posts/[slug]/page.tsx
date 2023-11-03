import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '@/src/libs/microcms';
import Image from 'next/image';

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
    <div>
      <p>更新日：{update}</p>
      <h2>{data.title}</h2>
      <Image alt={data.title} src={data.thumbnail.url} width={1200} height={700} />
      {data.title}
      <div>{parse(data.content)}</div>
      <a href="/">トップに戻る</a>
    </div>
  );
}
