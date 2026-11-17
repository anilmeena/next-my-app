import Link from "next/link";
import { getNotes } from "../lib/notes";

export default async function NotesPage() {
    console.log("server component")
  const notes = await getNotes();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <ul className="space-y-2">
        {notes.map((n) => (
          <li key={n.id}>
            <Link href={`/notes/${n.id}`} className="underline">
              {n.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}