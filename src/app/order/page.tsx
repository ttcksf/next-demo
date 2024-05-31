// インポート(クライアントでしか使えないフックのため)
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

// フック系は大文字にしないとReactコンポーネントとして認識されずワーニングが出る。今後の作業にも要対応。
const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('注文送信');
    router.push('/');
  };
  return (
    <div>
      <h1>ご注文内容</h1>
      <button onClick={handleClick}>注文</button>
    </div>
  );
};

export default Page;
