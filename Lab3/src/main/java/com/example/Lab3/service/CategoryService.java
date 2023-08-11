package com.example.Lab3.service;

import com.example.Lab3.entity.Category;

import java.util.List;

public interface CategoryService {

    public Category saveCategory(Category category);
    public List<Category> getAllCategories();
    public Category getCategoryById(int id);
    public void deleteCategory(int id);

}
