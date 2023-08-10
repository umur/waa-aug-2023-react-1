import React, {useState} from "react";

const CategoryForm = ({
                          onSubmit, name, setName,

                          editing,
                      }) => {
    return (<div>
        <h2>{editing ? "Edit Category" : "Add Category"}</h2>
        <div>
            <label>Category Name: </label>
            <input
                type="text"
                placeholder="Category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>

        <button onClick={onSubmit}>
            {editing ? "Save Changes" : "Add Category"}
        </button>
    </div>);
};

export default CategoryForm;
