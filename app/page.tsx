import { getList } from '../libs/microcms';
import Image from 'next/image';

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>コンテンツがありません！</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((data) => {
          const updatedAt = data.updatedAt;
          const update = updatedAt.substring(0, 10);

          return (
            <li key={data.id}>
              <a href={`/posts/${data.id}`}>
                <div>
                  <Image alt={data.title} src={data.thumbnail.url} width={1200} height={700} />
                  {data.title}
                  <p>更新日：{update}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
