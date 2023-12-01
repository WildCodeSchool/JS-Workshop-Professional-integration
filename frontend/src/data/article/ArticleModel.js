import { useState } from "react";
import connexion from "../../services/connexion";

export default function ArticleModel() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState();

  const getArticles = async () => {
    const res = await connexion.get("/articles");
    setArticles(res.data);
  };

  const getOneArticle = async (id) => {
    const res = await connexion.get(`/articles/${id}`);
    setArticle(res.data);
  };

  const removeArticle = async (id) => {
    try {
      await connexion.delete(`/articles/${id}`);
      setArticles((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/articles/${article.id}`, article);
    } catch (error) {
      console.error(error);
    }
  };

  const handleArticle = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    getArticles,
    removeArticle,
    updateArticle,
    getOneArticle,
    handleArticle,
    article,
    articles,
  };
}
