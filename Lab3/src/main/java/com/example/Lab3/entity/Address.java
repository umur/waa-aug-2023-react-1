package com.example.Lab3.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Address {

    @Id
    private int id;

    private String street, zip, city;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
