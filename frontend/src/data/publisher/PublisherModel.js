import { useState } from "react";
import connexion from "../../services/connexion";

export default function PublisherModel() {
  const [publishers, setPublisher] = useState([]);

  const getPublisher = async () => {
    const res = await connexion.get("/publishers");
    setPublisher(res.data);
  };

  const removePublisher = async (id) => {
    try {
      await connexion.delete(`/publishers/${id}`);
      setPublisher((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getPublisher,
    removePublisher,
    publishers,
  };
}
