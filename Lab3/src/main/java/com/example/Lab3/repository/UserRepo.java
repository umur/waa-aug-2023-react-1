package com.example.Lab3.repository;

import com.example.Lab3.entity.User;
import org.springframework.data.repository.ListCrudRepository;

public interface UserRepo extends ListCrudRepository<User, Integer> {
}