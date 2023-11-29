import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import connexion from "../../services/connexion";
import FormArticle from "../../components/admin/FormArticle";
import FormAuthor from "../../components/admin/FormAuthor";
import FormImage from "../../components/admin/FormImage";
import FormPublisher from "../../components/admin/FormPublisher";

function AdminOne() {
  const [data, setData] = useState();
  const { id } = useParams();
  const type = useLocation().pathname.split("/")[2];

  const getData = async () => {
    try {
      const myData = await connexion.get(`/${type}/${id}`);
      setData(myData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getForm = () => {
    const adminForm = {
      articles: <FormArticle article={data} />,
      authors: <FormAuthor author={data} />,
      publisher: <FormPublisher publisher={data} />,
      images: <FormImage image={data} />,
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
