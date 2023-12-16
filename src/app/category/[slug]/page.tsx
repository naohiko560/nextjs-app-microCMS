import Link from 'next/link';
import { getList, getCategories, getDetail } from '@/src/libs/microcms';
import type { Metadata } from 'next';

export default async function CategoryId() {
  const { contents } = await getList();

  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (contents.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contents.map((data) => {
        const updatedAt = data.updatedAt;
        const update = updatedAt.substring(0, 10);

        return (
          <Link href={`posts/${data.id}/`} key={data.id} className="md:hover:underline">
            <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
              <h2 className="font-bold text-violet-600 mt-1">{data.title}</h2>
              <p className="text-sm text-slate-500 mt-1">{update}</p>
              <p className="text-sm text-slate-500 mt-1">{data.category.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// 静的生成するパスを指定
export async function generateStaticParams() {
  const { contents } = await getCategories();

  const paths = contents.map((data) => {
    return {
      slug: data.id,
    };
  });

  return [...paths];
}


// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const id = await getDetail(slug);
//   const data = await getList({
//     queries: { filters: `category[equals]${id}` },
//   });

//   return {
//     data: {
//       blog: data.contents,
//     },
//   };
// }