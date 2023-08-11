package com.example.Lab3.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class User {

    @Id
    private int id;
    private String email,password, firstName, lastName;

    @OneToMany(mappedBy = "user")
    private List<Review> reviews;

    @OneToOne(mappedBy = "user")
    private Address address;
}
