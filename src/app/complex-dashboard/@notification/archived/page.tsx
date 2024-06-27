import React from 'react';
import Card from '@/components/card';
import Link from 'next/link';
const page = () => {
  return (
    // サブナビゲーション(/complex-dashboard/archived)の状態でページリロードをかけると、userスロットからすると対象外のURLでレンダリングすることになり画面はNotFoundになる
    <Card>
      <div>通知一覧</div>
      <Link href="/complex-dashboard">最新の通知</Link>
    </Card>
  );
};

export default page;
