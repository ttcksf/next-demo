import React from 'react';
// インポート(クリックによって移動できるようにする)
import Link from 'next/link';

const page = () => {
  return (
    <div>
      page
      <Link href="/products">商品一覧</Link>
    </div>
  );
};

export default page;
