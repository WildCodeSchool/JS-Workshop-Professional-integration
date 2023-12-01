import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useArticlesModel from "../../data/article/ArticleModel";
import SelectList from "../forms/SelectList";

function FormArticle() {
  const { id } = useParams();
  const { updateArticle, getOneArticle, article, handleArticle } =
    useArticlesModel();

  useEffect(() => {
    getOneArticle(id);
  }, []);

  return (
    <form className="form adminLayout" onSubmit={(e) => updateArticle(e)}>
      {article && (
        <section className="mainForm adminShadow">
          <h3>Infos de l'article</h3>
          <label>
            Title
            <input
              type="text"
              required
              name="title"
              value={article.title}
              onChange={(e) => handleArticle(e)}
            />
          </label>
          <label>
            SubTitle
            <input
              type="text"
              required
              name="subtitle"
              value={article.subtitle}
              onChange={(e) => handleArticle(e)}
            />
          </label>
          <label>
            Content
            <textarea
              required
              name="content"
              value={article.content}
              onChange={(e) => handleArticle(e)}
            />
          </label>
          <div className="selectRow">
            <SelectList
              title="Authors"
              name="authors_id"
              labels={["firstname", "lastname"]}
              value={article.authors_id}
              handleArticle={handleArticle}
            />
            <SelectList
              title="Publishers"
              name="publishers_id"
              labels={["name"]}
              value={article.publishers_id}
              handleArticle={handleArticle}
            />
          </div>
          <button type="submit">Valider</button>
        </section>
      )}
    </form>
  );
}

export default FormArticle;
