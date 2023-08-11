package com.example.Lab3.service.Impl;

import com.example.Lab3.entity.Review;
import com.example.Lab3.repository.ReviewRepo;
import com.example.Lab3.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepo reviewRepository;

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review getReviewById(int id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }
}
