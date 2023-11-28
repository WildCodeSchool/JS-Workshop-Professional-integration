import React, { useEffect, useState } from "react";

import connexion from "../../services/connexion";

import tableModel from "../../tableSchema/publisher.json";
import AdminTable from "../../components/AdminTable";

function AdminPublisher() {
  const [publishers, setPublishers] = useState([]);

  const getPublishers = async () => {
    try {
      const myPublishers = await connexion.get("/publishers");
      setPublishers(myPublishers.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removePublisher = async (id) => {
    try {
      await connexion.delete(`/publishers/${id}`);
      setPublishers((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPublishers();
  }, []);

  return (
    <main>
      <h2>Liste des publishers en cours</h2>
      <AdminTable
        data={publishers}
        model={tableModel}
        removeElement={removePublisher}
      />
    </main>
  );
}

export default AdminPublisher;
