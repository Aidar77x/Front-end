import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No articles yet.</p>;
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {articles.map((a) => (
        <ArticleItem key={a.id} article={a} />
      ))}
    </div>
  );
}