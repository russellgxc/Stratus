export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh min-h-dvh overflow-hidden bg-white">{children}</div>
  );
}
