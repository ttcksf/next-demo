import Link from 'next/link';
import React from 'react';

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      商品ID:{params.productId}{' '}
      <Link href={`${params.productId}/reviews/1111`}>レビュー一覧</Link>
    </div>
  );
};

export default page;
