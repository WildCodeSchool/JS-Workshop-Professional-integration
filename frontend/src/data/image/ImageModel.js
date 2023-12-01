import { useState } from "react";
import connexion from "../../services/connexion";

export default function ImageModel() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const res = await connexion.get("/images");
    setImages(res);
  };

  const removeImage = async (id) => {
    try {
      await connexion.delete(`/images/${id}`);
      setImages((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getImages,
    removeImage,
    images,
  };
}
