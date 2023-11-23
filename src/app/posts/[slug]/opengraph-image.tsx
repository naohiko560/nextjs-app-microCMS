import { ImageResponse } from 'next/og';
import { getDetail, getList } from '@/src/libs/microcms';

// ImageResponse対応
export const runtime = 'edge';

// 有効期間
export const revalidate = 10;

// 画像の設定
export const alt = '記事のアイキャッチ画像';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((data) => {
    return {
      slug: data.id,
    };
  });

  return [...paths];
}

export async function og({ params: { slug } }: { params: { slug: string } }) {
  const post = await getDetail(slug);

  if (post) {
    return new ImageResponse(
      (
        // <div
        //   style={{
        //     backgroundImage: 'url(/images/common/og-frame.jpg)',
        //     backgroundColor: '#fff',
        //     backgroundSize: '100% 100%',
        //     height: '100%',
        //     width: '100%',
        //     display: 'flex',
        //     textAlign: 'left',
        //     alignItems: 'flex-start',
        //     justifyContent: 'center',
        //     flexDirection: 'column',
        //     flexWrap: 'nowrap',
        //   }}
        // >
        //   <div
        //     style={{
        //       width: '100%',
        //       fontSize: 60,
        //       fontStyle: 'normal',
        //       fontWeight: 'bold',
        //       color: '#000',
        //       padding: '0 120px',
        //       lineHeight: 1.3,
        //       marginBottom: '30px',
        //       wordWrap: 'break-word',
        //     }}
        //   >
        //     {post.title}
        //   </div>
        //   <div
        //     style={{
        //       width: '100%',
        //       fontSize: 40,
        //       fontStyle: 'normal',
        //       fontWeight: 'bold',
        //       color: '#000',
        //       padding: '0 120px',
        //       lineHeight: 1.3,
        //     }}
        //   >
        //     ✏️ OG Image Examples
        //   </div>
        // </div>
        <div>{post.title}</div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
