import { Metadata } from 'next';
import React from 'react';

// layout.tsxのオブジェクト形式のタイトルを受け取るのにも型指定とimportが必要
export const metadata: Metadata = {
  // title: 'アバウトページです',
  title: '会社概要',
  description: '説明文です',
};

const page = () => {
  return <div>About</div>;
};

export default page;
