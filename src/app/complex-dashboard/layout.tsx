// スロットはインポート文なしでpropsとして受け取れる特殊なchildrenコンポーネント
// 個別のコンポーネントを独立してレンダリングできるので早いものから順に表示させることができて画面全体で待機することが少なくなる
export default function DashboardLayout({
  children,
  user,
  notification,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{user}</div>
      <div>{notification}</div>
    </>
  );
}
