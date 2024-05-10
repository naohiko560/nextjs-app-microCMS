// import Link from 'next/link';
// import { getList, getCategories, client, getDetail } from '@/src/libs/microcms';
// import type { Metadata } from 'next';

// export default function CategoryId(blog) {
//   // const { contents } = await getList();

//   // カテゴリーに紐付いたコンテンツがない場合に表示
//   // if (blog.length === 0) {
//   //   return <div>ブログコンテンツがありません</div>;
//   // }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {blog.map((data: any) => {
//         const updatedAt = data.updatedAt;
//         const update = updatedAt.substring(0, 10);

//         return (
//           <Link href={`../../posts/${data.id}/`} key={data.id} className="md:hover:underline">
//             <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
//               <h2 className="font-bold text-violet-600 mt-1">{data.title}</h2>
//               <p className="text-sm text-slate-500 mt-1">{update}</p>
//               <p className="text-sm text-slate-500 mt-1">{data.category.name}</p>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// // 静的生成するパスを指定
// export async function generateStaticParams() {
//   const { contents } = await getCategories();

//   const paths = contents.map((data) => {
//     return {
//       slug: data.id,
//     };
//   });

//   return [...paths];
// }

// // export async function getCategory({
// //   params: { slug },
// // }: {
// //   params: { slug: string };
// // }): Promise<Metadata> {
// //   const data = await getDetail(slug);
// //   const category = data.category;

// //   const categoryBlogs = await client.get({
// //     endpoint: 'blogs',
// //     queries: { filters: `category[equals]${category}` },
// //   });

// //   return categoryBlogs;
// // }

// // データをテンプレートに受け渡す部分の処理を記述します
// export async function Page({ params: { slug } }: { params: { slug: string } }) {
//   const data = await getDetail(slug);
//   const id = data.category.name;
  
//   const categoryId = await client.getList({
//     endpoint: 'blogs',
//     queries: { filters: `category[equals]${id}` },
//   });  

//   return {
//     props: {
//       blog: categoryId.contents,
//     },
//   };
// }
