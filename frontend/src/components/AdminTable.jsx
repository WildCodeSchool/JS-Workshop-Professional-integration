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
        <th aria-label="Modifier" />
        <th aria-label="Supprimer" />
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              {model.map((row, i) => (
                <td key={row.id} className={i === 0 ? "idcenter" : ""}>
                  {getHTMLFromKey(el, row)}
                </td>
              ))}

              <td colSpan="2">
                <div className="adminAction">
                  <Link to={`${el.id}`}>
                    <GrEdit />
                  </Link>
                  <GrTrash
                    aria-label="delete"
                    onClick={() => removeElement(el.id)}
                  />
                </div>
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
