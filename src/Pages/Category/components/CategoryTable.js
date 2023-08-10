import React from "react";

const styles = {
  table: {
    display: "flex",
    justifyContent: "center",
  },
};
const CategoryTable = ({ data, handleEdit, handleDelete }) => {
  return (
    <div style={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button onClick={() => handleEdit(category.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(category.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
