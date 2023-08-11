package com.example.Lab3.service;

import com.example.Lab3.entity.Product;
import com.example.Lab3.entity.Review;

import java.util.List;

public interface ProductService {

    public Product saveProduct(Product product);
    public List<Product> getAllProducts();
    public Product getProductById(int id);
    public void deleteProduct(int id);

    public List<Product> getProductsByPriceGreaterThan(double minPrice);
    //public List<Product> getProductsByCategoryAndPriceLessThan(String categoryName, double maxPrice);
    public List<Product> getProductsByNameContaining(String keyword);
    //public List<Review> getReviewsForProduct(int id);
}
