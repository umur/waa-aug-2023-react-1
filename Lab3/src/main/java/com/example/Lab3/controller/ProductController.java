package com.example.Lab3.controller;

import com.example.Lab3.entity.Product;
import com.example.Lab3.entity.Review;
import com.example.Lab3.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }

    ///////////

    @GetMapping("/by-price/{minPrice}")
    public List<Product> getProductsByPriceGreaterThan(@PathVariable double minPrice) {
        return productService.getProductsByPriceGreaterThan(minPrice);
    }

//    @GetMapping("/by-category-price/{categoryName}/{maxPrice}")
//    public List<Product> getProductsByCategoryAndPriceLessThan(
//            @PathVariable String categoryName, @PathVariable double maxPrice) {
//        return productService.getProductsByCategoryAndPriceLessThan(categoryName, maxPrice);
//    }

    @GetMapping("/by-keyword/{keyword}")
    public List<Product> getProductsByNameContaining(@PathVariable String keyword) {
        return productService.getProductsByNameContaining(keyword);
    }

//    @GetMapping("/{id}/reviews")
//    public List<Review> getReviewsForProduct(@PathVariable int id) {
//        return productService.getReviewsForProduct(id);
//    }

}
