import React, { useEffect, useState } from "react";

import connexion from "../../services/connexion";

import tableModel from "../../tableSchema/article.json";
import AdminTable from "../../components/admin/AdminTable";

function AdminArticle() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const myArticles = await connexion.get("/articles");
      setArticles(myArticles.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeArticle = async (id) => {
    try {
      await connexion.delete(`/articles/${id}`);
      setArticles((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <h2>Liste des articles en cours</h2>
      <AdminTable
        data={articles}
        model={tableModel}
        removeElement={removeArticle}
      />
    </main>
  );
}

export default AdminArticle;
