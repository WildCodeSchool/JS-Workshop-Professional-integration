import React from "react";
import { useLocation } from "react-router-dom";

import FormArticle from "../../components/admin/FormArticle";
import FormAuthor from "../../components/admin/FormAuthor";
import FormImage from "../../components/admin/FormImage";
import FormPublisher from "../../components/admin/FormPublisher";

import "./AdminOne.css";

function AdminOne() {
  const type = useLocation().pathname.split("/")[2];

  const getForm = () => {
    const adminForm = {
      articles: <FormArticle />,
      authors: <FormAuthor />,
      publisher: <FormPublisher />,
      images: <FormImage />,
    };
    return adminForm[type];
  };

  return (
    <main>
      <h2>Modification d'un {type.slice(0, -1)}</h2>
      {getForm()}
    </main>
  );
}

export default AdminOne;
