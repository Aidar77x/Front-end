import { useState } from "react";

export default function AddArticle({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const t = title.trim();
    const c = content.trim();

    if (!t || !c) return;

    onAdd({
      id: Date.now(),
      title: t,
      content: c,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
      <h3>Add Article</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}