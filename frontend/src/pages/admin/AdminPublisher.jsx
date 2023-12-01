import React, { useEffect } from "react";

import usePublishersModel from "../../data/publisher/PublisherModel";

import tableModel from "../../tableSchema/publisher.json";
import AdminTable from "../../components/admin/AdminTable";

function AdminPublisher() {
  const { getPublishers, publishers, removePublisher } = usePublishersModel();

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
