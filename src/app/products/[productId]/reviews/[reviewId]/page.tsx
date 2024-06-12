import { notFound } from 'next/navigation';
import React from 'react';

// ランダム関数
const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const page = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  // １、２のどちらかを出す
  const random = getRandomInt(2);
  // 何回かやるとエラー画面になる想定
  if (random === 1) {
    throw new Error('エラー');
  }
  // ここは消しておく
  // if (parseInt(params.reviewId) > 1000) {
  //   notFound();
  // }
  return (
    <div>
      商品ID：{params.productId}のレビューID：{params.reviewId}
    </div>
  );
};

export default page;
