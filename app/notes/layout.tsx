export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <p className="text-sm text-gray-500 mb-4">📒 My notes</p>
      {children}
    </section>
  );
}