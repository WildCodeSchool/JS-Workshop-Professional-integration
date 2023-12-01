import { useState } from "react";
import connexion from "../../services/connexion";

export default function AuthorModel() {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState();

  const getAuthors = async () => {
    const res = await connexion.get("/authors");
    setAuthors(res.data);
  };

  const getOneAuthor = async (id) => {
    const res = await connexion.get(`/authors/${id}`);
    setAuthor(res.data);
  };

  const removeAuthor = async (id) => {
    try {
      await connexion.delete(`/authors/${id}`);
      setAuthors((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateAuthor = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/authors/${author.id}`, author);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthor = (e) => {
    setAuthor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    getAuthors,
    removeAuthor,
    updateAuthor,
    handleAuthor,
    getOneAuthor,
    author,
    authors,
  };
}
