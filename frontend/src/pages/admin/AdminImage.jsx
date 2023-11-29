import React, { useEffect, useState } from "react";

import connexion from "../../services/connexion";

import AdminTable from "../../components/admin/AdminTable";
import tableModel from "../../tableSchema/image.json";

function AdminImage() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const myImages = await connexion.get("/images");
      setImages(myImages.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeImages = async (id) => {
    try {
      await connexion.delete(`/images/${id}`);
      setImages((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <main>
      <h2>Liste des images</h2>
      <AdminTable
        data={images}
        model={tableModel}
        removeElement={removeImages}
      />
    </main>
  );
}

export default AdminImage;
