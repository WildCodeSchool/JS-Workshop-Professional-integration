import React from "react";
import PropTypes from "prop-types";

import "./FormArticle.css";

function FormArticle({ article }) {
  return (
    <form className="formArticle adminLayout">
      {article && (
        <>
          <section className="mainForm adminShadow">
            <h3>Infos de l'article</h3>
            <label>
              Title
              <input type="text" required />
            </label>
            <label>
              SubTitle
              <input type="text" required />
            </label>
            <label>
              Content
              <textarea required />
            </label>
            <div>
              <label>
                Author
                <select name="" id="">
                  <option value="">Author</option>
                </select>
              </label>
              <label>
                Publisher
                <select name="" id="">
                  <option value="">Publisher</option>
                </select>
              </label>
            </div>
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
