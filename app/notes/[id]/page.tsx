import { notFound } from "next/navigation";
import { getNote } from "../../lib/notes";
import LikeButton from "../../components/LikeButton";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNote(id);
  if (!note) notFound();

  return (
    <article>
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <p className="mt-2">{note.body}</p>
      <LikeButton />
    </article>
  );
}