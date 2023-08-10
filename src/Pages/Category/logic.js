import { useState } from "react";
import { create, readAll, remove, update } from "../../Api/api";

export function useCategoryLogic() {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await readAll("categories");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const CategoryData = { name };
    try {
      let response;
      if (editing) {
        response = await update("categories", currentId, CategoryData);
      } else {
        response = await create("categories", CategoryData);
      }
      setData(response.data);
      setLoading(true);
      fetchCategories();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }

    setName("");
    setCurrentId(null);
    setEditing(false);
  };

  const handleEdit = (id) => {
    const CategoryToEdit = data.find((Category) => Category.id === id);
    if (CategoryToEdit) {
      setName(CategoryToEdit.name);
      setCurrentId(id);
      setEditing(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await remove("categories", id);
      setData(response.data);
      setLoading(true);
      fetchCategories();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return {
    data,
    setData,
    name,
    setName,
    currentId,
    setCurrentId,
    editing,
    setEditing,
    loading,
    setLoading,
    error,
    setError,
    fetchCategories,
    handleSave,
    handleEdit,
    handleDelete,
  };
}
