package com.example.Lab3.service.Impl;

import com.example.Lab3.entity.Product;
import com.example.Lab3.entity.Review;
import com.example.Lab3.repository.ProductRepo;
import com.example.Lab3.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepo productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }


    public List<Product> getProductsByPriceGreaterThan(double minPrice) {
        return productRepository.findByPriceGreaterThan(minPrice);
    }

//    public List<Product> getProductsByCategoryAndPriceLessThan(String categoryName, double maxPrice) {
//        return productRepository.findByCategoryNameAndPriceLessThan(categoryName, maxPrice);
//    }

    public List<Product> getProductsByNameContaining(String keyword) {
        return productRepository.findByNameContaining(keyword);
    }

//    public List<Review> getReviewsForProduct(int id) {
//        return productRepository.findByProductId(id);
//    }
}
