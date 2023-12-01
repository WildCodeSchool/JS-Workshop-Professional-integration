import React, { useEffect } from "react";

import useAuthorsModel from "../../data/author/AuthorModel";

import AdminTable from "../../components/admin/AdminTable";
import tableModel from "../../tableSchema/author.json";

function AdminAuthor() {
  const { getAuthors, authors, removeAuthor } = useAuthorsModel();

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <main>
      <h2>Liste des auteurs</h2>
      <AdminTable
        data={authors}
        model={tableModel}
        removeElement={removeAuthor}
      />
    </main>
  );
}

export default AdminAuthor;
