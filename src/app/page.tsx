import Link from 'next/link';
import { getList } from '../libs/microcms';
import Image from 'next/image';

export default async function Home() {
  const { contents } = await getList();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contents.map((data) => {
        const updatedAt = data.updatedAt;
        const update = updatedAt.substring(0, 10);

        return (
          <Link href={`posts/${data.id}`} key={data.id} className="md:hover:underline">
            <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
              <h2 className="font-bold text-violet-600 mt-1">{data.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{update}</p>
              <p className="text-slate-700 mt-1">{data.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
