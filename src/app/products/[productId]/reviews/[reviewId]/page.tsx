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

  return (
    <div>
      商品ID：{params.productId}のレビューID：{params.reviewId}
    </div>
  );
};

export default page;
