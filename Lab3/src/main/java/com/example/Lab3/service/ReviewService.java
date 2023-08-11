package com.example.Lab3.service;

import com.example.Lab3.entity.Review;

public interface ReviewService {

    public Review saveReview(Review review);
    public Review getReviewById(int id);
    public void deleteReview(int id);
}
