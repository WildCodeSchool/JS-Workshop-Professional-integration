import { useState } from "react";
import connexion from "../../services/connexion";

export default function ArticleModel() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await connexion.get("/articles");
    setArticles(res.data);
  };

  const removeArticle = async (id) => {
    try {
      await connexion.delete(`/articles/${id}`);
      setArticles((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getArticles,
    removeArticle,
    articles,
  };
}
