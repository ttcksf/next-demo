import React from 'react';
// インポート
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>商品一覧</h1>
      <p>
        <Link href="products/itemA">商品A</Link>
      </p>
      <p>
        <Link href="products/1111" replace>
          商品B
        </Link>
      </p>
      <p>商品C</p>
    </div>
  );
};

export default page;
