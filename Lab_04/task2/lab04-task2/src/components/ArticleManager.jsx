import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

export default function ArticleManager() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "React Basics",
      content: "Props, state, and rendering basics.",
    },
    {
      id: 2,
      title: "Components",
      content: "Split UI into reusable parts.",
    },
  ]);

  const handleAddArticle = (newArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16, maxWidth: 700 }}>
      <h2>Article Manager</h2>

      <AddArticle onAdd={handleAddArticle} />

      <hr style={{ margin: "16px 0" }} />

      <ArticleList articles={articles} />
    </div>
  );
}