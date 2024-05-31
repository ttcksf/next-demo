import React from 'react';
// インポート
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>商品一覧</h1>
      <p>
        {/* フォルダ名でルーティングを構成しているとき */}
        <Link href="products/itemA">商品A</Link>
      </p>
      {/* []でルーティングを構成しているとき(APIなどidが動的に変わる想定) */}
      <p>
        {/* replaceを設定するとブラウザバックで商品一覧を飛ばしてトップページにまで飛ぶことが可能 */}
        <Link href="products/1111" replace>
          商品B
        </Link>
      </p>
      <p>商品C</p>
    </div>
  );
};

export default page;
