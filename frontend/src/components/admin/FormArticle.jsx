import React from "react";
import PropTypes from "prop-types";

function FormArticle({ article }) {
  return <form>{article && <p>{article.title}</p>}</form>;
}

FormArticle.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default FormArticle;
