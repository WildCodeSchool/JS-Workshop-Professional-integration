import React, { useRef } from "react";
import PropTypes from "prop-types";

import SelectList from "../forms/SelectList";

import "./FormArticle.css";

function FormArticle({ article }) {
  const form = useRef();

  const updateArticle = (e) => {
    e.preventDefault();
    const submitForm = new FormData(e.currentTarget);
    const data = {
      title: submitForm.get("title"),
      subtitle: submitForm.get("subtitle"),
      author_id: submitForm.get("authors"),
    };
    console.info(data);
  };

  return (
    <form
      className="formArticle adminLayout"
      ref={form}
      onSubmit={updateArticle}
    >
      {article && (
        <>
          <section className="mainForm adminShadow">
            <h3>Infos de l'article</h3>
            <label>
              Title
              <input type="text" required name="title" />
            </label>
            <label>
              SubTitle
              <input type="text" required name="subtitle" />
            </label>
            <label>
              Content
              <textarea required />
            </label>
            <div className="selectRow">
              <SelectList title="authors" labels={["firstname", "lastname"]} />
              <SelectList title="publishers" labels={["name"]} />
            </div>
            <button type="submit">Valider</button>
          </section>
          <section className="visualPart adminShadow">
            <div>
              <h3>Infos about the author</h3>
              <h5>
                <span>Firstname : </span>
              </h5>
              <h5>
                <span>LastName : </span>
              </h5>
              <h5>
                <span>Job Title : </span>
              </h5>
              <img src="" alt="avatar" />
            </div>
            <div>
              <h3>Infos about the publisher</h3>
              <h5>
                <span>Firstname : </span>
              </h5>
              <h5>
                <span>LastName : </span>
              </h5>
              <h5>
                <span>Job Title : </span>
              </h5>
              <img src="" alt="avatar" />
            </div>
          </section>
        </>
      )}
    </form>
  );
}

FormArticle.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default FormArticle;
