package com.example.Lab3.service.Impl;

import com.example.Lab3.entity.Category;
import com.example.Lab3.repository.CategoryRepo;
import com.example.Lab3.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepository;

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(int id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public void deleteCategory(int id) {
        categoryRepository.deleteById(id);
    }

}
