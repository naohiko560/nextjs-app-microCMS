import { getList } from '../libs/microcms';

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>コンテンツがありません！</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post) => {
          const updatedAt = post.updatedAt;
          const update = updatedAt.substring(0, 10);

          return (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>
                <div>
                  <img alt={post.title} src={post.eyecatch?.url} width={1200} height={700} />
                  {post.title}
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
