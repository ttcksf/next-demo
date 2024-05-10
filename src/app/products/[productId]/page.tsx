import React from 'react';

const page = ({ params }: { params: { productId: string } }) => {
  return <div>ブログ記事:{params.productId}</div>;
};

export default page;
