import { propagateServerField } from 'next/dist/server/lib/render-server';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};
// 名前を変える
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ネストするときに子供のlayout.tsxはbodyの中から書き始めることに注意
    <>
      <header>商品ページ専用のヘッダーです</header>
      {children}
    </>
  );
}
