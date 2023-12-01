import React, { useEffect } from "react";

import useArticlesModel from "../../data/article/ArticleModel";

import tableModel from "../../tableSchema/article.json";
import AdminTable from "../../components/admin/AdminTable";

function AdminArticle() {
  const { getArticles, articles, removeArticle } = useArticlesModel();

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
