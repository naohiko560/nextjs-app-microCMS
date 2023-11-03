import { getList } from '../libs/microcms';

export default async function Home() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>コンテンツがありません！</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <a href={`/blog/${post.id}`}>{post.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
