export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>アバウトページのサブタイトル</p>
      {children}
    </>
  );
}
