import React from 'react';

const page = () => {
  // Next.jsのappフォルダ内のページはpage.tsxのみが公開されるようになっている
  // 逆に違う名前にしてpage.tsxを作らないフォルダを用意すれば非公開のページとして利用できる（運用ミスには注意）
  return <div>管理者</div>;
};

export default page;
