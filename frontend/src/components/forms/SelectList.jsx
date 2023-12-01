import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import connexion from "../../services/connexion";

import "./SelectList.css";

function SelectList({ title, labels, value, handleArticle, name }) {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const myList = await connexion.get(`/${title}`);
      setList(myList.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <label>
      {title}
      <select name={name} value={value} onChange={(e) => handleArticle(e)}>
        <option value="">{title}</option>
        {list.map((l) => (
          <option value={l.id} key={l.id}>
            {labels.map((label) => l[label]).join(" ")}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectList.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handleArticle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectList;
