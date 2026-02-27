import { useState } from "react";

export default function ArticleItem({ article }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <h3 style={{ margin: 0 }}>{article.title}</h3>

        <button onClick={() => setIsOpened((prev) => !prev)}>
          {isOpened ? "Hide" : "Read"}
        </button>
      </div>

      {isOpened && <p style={{ marginTop: 10 }}>{article.content}</p>}
    </div>
  );
}