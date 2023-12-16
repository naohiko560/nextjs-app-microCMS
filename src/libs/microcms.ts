import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  category: any;
  content: string;
  thumbnail: MicroCMSImage;
  description: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN は必須です');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY は必須です');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// カテゴリ一覧を取得
export const getCategories = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'categories',
    queries,
  });

  return listData;
};

// 記事のカテゴリを取得
// export const getCategory = async (queries?: MicroCMSQueries) => {

//   const categoryId = await client.getList<Blog>({
//     endpoint: 'blogs',
//     queries: { filters: `category[equals]content_id` },
//   });

//   return categoryId;
// };

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });

  return listData;
};

// ブログ詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });

  return detailData;
};
