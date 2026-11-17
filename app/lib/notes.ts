export type Note = { id: string; title: string; body: string };

export const notes: Note[] = [
  { id: "1", title: "Learn Next.js", body: "Routing, server components, actions." },
  { id: "2", title: "Build real project", body: "Start after day 6." },
  { id: "3", title: "Deploy to Vercel", body: "Set env vars." },
];

export async function getNotes() {
  await new Promise((r) => setTimeout(r, 1000)); // fake delay so you can see the loading UI
  return notes;
}

export async function getNote(id: string) {
  await new Promise((r) => setTimeout(r, 500));
  return notes.find((n) => n.id === id) ?? null;
}