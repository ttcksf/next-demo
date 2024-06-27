import React from 'react';
import Card from '@/components/card';
import Link from 'next/link';
const page = () => {
  return (
    <Card>
      <div>通知情報</div>
      <Link href="/complex-dashboard/archived">全ての通知はこちら</Link>
    </Card>
  );
};

export default page;
