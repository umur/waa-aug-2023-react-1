package com.example.Lab3.service;

import com.example.Lab3.entity.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUserById(int id);
    public void deleteUser(int id);

}
