// ここを追加しておく
'use client';
import React from 'react';
// インポート(クリックによって移動できるようにする)
import Link from 'next/link';

const page = () => {
  return (
    <div>
      page
      <Link href="/products">商品一覧</Link>
      <Link href="/order">注文一覧</Link>
      <Link href="/news">お知らせ一覧</Link>
    </div>
  );
};

export default page;
