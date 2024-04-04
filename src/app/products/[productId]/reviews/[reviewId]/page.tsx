import { notFound } from 'next/navigation';
import React from 'react';
// フォルダ名に動的セグメントを持たせることで、ネストされた動的ルートを作成できる
const page = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  console.log(params);
  // レビューidが1000までしかないので1001以上はページがない想定
  if (parseInt(params.reviewId) > 1000) {
    // インポート文も書く
    notFound();
  }
  return (
    <div>
      商品ID：{params.productId}のレビューID：{params.reviewId}
    </div>
  );
};

export default page;
