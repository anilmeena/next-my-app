"use client";
import { useState } from "react";

export default function LikeButton() {
  console.log("client component");
  const [likes, setLikes] = useState(0);
  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="border px-3 py-1 mt-4"
    >
      Like ({likes})
    </button>
  );
}