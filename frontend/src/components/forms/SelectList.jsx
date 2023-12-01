import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import connexion from "../../services/connexion";

import "./SelectList.css";

function SelectList({ title, labels }) {
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
      <select name={title} id="">
        <option value="">{title}</option>
        {list.map((l) => (
          <option value={list.id} key={list.id}>
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
};

export default SelectList;
