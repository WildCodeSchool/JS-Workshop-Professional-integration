import React, { useEffect, useState } from "react";

import connexion from "../../services/connexion";

import AdminTable from "../../components/AdminTable";
import tableModel from "../../tableSchema/author.json";

function AdminAuthor() {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    try {
      const myAuthors = await connexion.get("/authors");
      setAuthors(myAuthors.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeAuthors = async (id) => {
    try {
      await connexion.delete(`/authors/${id}`);
      setAuthors((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <main>
      <h2>Liste des auteurs</h2>
      <AdminTable
        data={authors}
        model={tableModel}
        removeElement={removeAuthors}
      />
    </main>
  );
}

export default AdminAuthor;
