import { useState } from "react";
import connexion from "../../services/connexion";

export default function AuthorModel() {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const res = await connexion.get("/authors");
    setAuthors(res.data);
  };

  const removeAuthor = async (id) => {
    try {
      await connexion.delete(`/authors/${id}`);
      setAuthors((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAuthors,
    removeAuthor,
    authors,
  };
}
