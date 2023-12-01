import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAuthorsModel from "../../data/author/AuthorModel";

function FormAuthor() {
  const { id } = useParams();
  const { updateAuthor, getOneAuthor, author, handleAuthor } =
    useAuthorsModel();

  useEffect(() => {
    getOneAuthor(id);
  }, []);

  return (
    <form className="form adminLayout" onSubmit={(e) => updateAuthor(e)}>
      {author && (
        <section className="mainForm adminShadow">
          <h3>Infos de l'auteur</h3>
          <label>
            Firstname
            <input
              type="text"
              required
              name="firstname"
              value={author.firstname}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            LastName
            <input
              type="text"
              required
              name="lastname"
              value={author.lastname}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            Job Title
            <input
              type="text"
              required
              name="job_title"
              value={author.job_title}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            Webiste
            <input
              type="text"
              name="website"
              value={author.website}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            Facebook
            <input
              type="text"
              name="facebook"
              value={author.facebook}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            LinkedIn
            <textarea
              name="linkedIn"
              value={author.linkedIn}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            Description
            <textarea
              required
              name="description"
              value={author.description}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <label>
            Birthday
            <input
              type="date"
              name="birthday"
              value={author.birthday}
              onChange={(e) => handleAuthor(e)}
            />
          </label>
          <button type="submit">Valider</button>
        </section>
      )}
    </form>
  );
}

export default FormAuthor;
