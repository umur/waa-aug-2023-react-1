package com.example.Lab3.repository;
import com.example.Lab3.entity.Address;
import org.springframework.data.repository.ListCrudRepository;

public interface AddressRepo extends ListCrudRepository<Address, Integer> {
}
