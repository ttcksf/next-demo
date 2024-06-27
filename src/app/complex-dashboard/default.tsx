import React from 'react';

const defaultPage = () => {
  // サブルートに対応できないスロット（親も含む）はdefault.tsxを用意しておくことでNotFoundを避けられる
  return <div>default</div>;
};

export default defaultPage;
