package com.example.Lab3.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private int price,rating;

//    @ManyToOne
//    private Category category;
//
//    @OneToMany(mappedBy = "product")
//    private List<Review> reviews;
}
