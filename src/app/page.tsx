import Link from 'next/link';
import { getList } from '../libs/microcms';
import Image from 'next/image';

export default async function Home() {
  const { contents } = await getList();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
        {contents.map((data) => {
          const updatedAt = data.updatedAt;
          const update = updatedAt.substring(0, 10);

          return (
            <div key={data.id}>
              <Link href={`posts/${data.id}`}>
                <div className="md:hover:underline">
                  <Image alt={data.title} src={data.thumbnail.url} width={1200} height={700} />
                  <h2 className="font-bold text-violet-600 mt-1">{data.title}</h2>
                </div>
              </Link>
              <p className="text-sm text-slate-400 mt-1">{update}</p>
              <p className="text-slate-700 mt-1">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
