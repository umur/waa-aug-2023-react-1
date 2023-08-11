package com.example.Lab3.repository;

import com.example.Lab3.entity.Product;
import com.example.Lab3.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface ProductRepo  extends JpaRepository<Product, Integer> {

    List<Product> findByPriceGreaterThan(double minPrice);
    //List<Product> findByCategoryNameAndPriceLessThan(String categoryName, double maxPrice);
    List<Product> findByNameContaining(String keyword);
//    List<Review> findByProductId(int id);
}
