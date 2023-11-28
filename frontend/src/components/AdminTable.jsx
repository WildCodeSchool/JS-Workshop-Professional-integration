import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GrEdit, GrTrash } from "react-icons/gr";

import "./AdminTable.css";

function AdminTable({ data, model, removeElement }) {
  const getHTMLFromKey = (field, schema) => {
    if (schema.html === "img") {
      return <img src={field[schema.key]} alt={field.title} />;
    }
    return field[schema.key];
  };

  return (
    <table>
      <thead>
        {model.map((row) => (
          <th key={row.id}>{row.label}</th>
        ))}
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              {model.map((row) => (
                <td key={row.id}>{getHTMLFromKey(el, row)}</td>
              ))}
              <td>
                <Link to={`${el.id}`}>
                  <GrEdit />
                </Link>
              </td>
              <td aria-label="delete" onClick={() => removeElement(el.id)}>
                <GrTrash />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

AdminTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  model: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeElement: PropTypes.func.isRequired,
};

export default AdminTable;
