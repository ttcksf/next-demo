import React from 'react';

const page = ({ params }: { params: { slug: string[] } }) => {
  // [id]などとするとスラッグを動的に変更できるが入れ子構造には対応できない
  // [[...id]]とすることで入れ子構造の動的なファイルを作成できる　news/2024/0001などidxid分のファイル作成は不要になる
  // 一度定義すればスラッグの構成に合わせて自動でレンダリングできる
  if (params.slug?.length === 2) {
    return (
      <h1>
        {params.slug[0]}年{params.slug[1]}月のお知らせ一覧です。
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>{params.slug[0]}年のお知らせ一覧です。</h1>;
  } else {
    return <h1>お知らせ一覧です。</h1>;
  }
};

export default page;
