import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '@/libs/microcms';

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

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{time}</h2>
      <div>{parse(data.content)}</div>
      <a href="/">トップに戻る</a>
    </div>
  );
}
