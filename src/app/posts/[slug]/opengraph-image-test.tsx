import { ImageResponse } from 'next/og';
// import { getDetail, getList } from '@/src/libs/microcms';

// ImageResponse対応
export const runtime = 'edge';

// 有効期間
export const revalidate = 10;

export const alt = 'OGP画像';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ height: 40, backgroundColor: '#5AC8D8', width: '100%' }} />
        <h1
          style={{
            flex: 1,
            maxWidth: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          これはOGP画像です。
        </h1>
        <div style={{ height: 40, backgroundColor: '#5AC8D8', width: '100%' }} />
      </div>
    ),
    {
      ...size,
    }
  );
}