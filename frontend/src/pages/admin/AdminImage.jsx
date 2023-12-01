import React, { useEffect } from "react";

import useImagesModel from "../../data/image/ImageModel";

import AdminTable from "../../components/admin/AdminTable";
import tableModel from "../../tableSchema/image.json";

function AdminImage() {
  const { getImages, images, removeImage } = useImagesModel();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <main>
      <h2>Liste des images</h2>
      <AdminTable
        data={images}
        model={tableModel}
        removeElement={removeImage}
      />
    </main>
  );
}

export default AdminImage;
