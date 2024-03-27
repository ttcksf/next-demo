import React from 'react';

const page = ({ params }: { params: { productId: string } }) => {
  // paramsはNext.jsが用意しているパラメーター。ターミナルのログでキーと値のオブジェクト形式になって格納されている
  console.log(params);
  // 動的なページになる
  // IDからAPIを実行してデータ取得することも可能になる

  return <div>ブログ記事:{params.productId}</div>;
};

export default page;
