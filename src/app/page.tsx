import React from 'react';
// インポート(クリックによって移動できるようにする)
import Link from 'next/link';

const page = () => {
  return (
    <div>
      page
      <Link href="/about">会社概要</Link>
    </div>
  );
};

export default page;
