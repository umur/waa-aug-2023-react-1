import React, { useEffect } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryTable from "./components/CategoryTable";
import { useCategoryLogic } from "./logic";

const Category = () => {
  const {
    fetchCategories,
    loading,
    handleSave,
    name,
    setName,
    editing,
    data,
    handleEdit,
    handleDelete,
  } = useCategoryLogic();
  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>Categories CRUD</h1>
      <div>
        <CategoryForm
          onSubmit={handleSave}
          name={name}
          setName={setName}
          editing={editing}
        />
        <CategoryTable
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Category;
