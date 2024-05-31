import { Metadata } from 'next';
import React from 'react';
// インポート
import Link from 'next/link';

export const metadata: Metadata = {
  title: '会社概要',
  description: '説明文です',
};

const page = () => {
  return (
    <div>
      About
      <Link href="/">トップページ</Link>
    </div>
  );
};

export default page;
