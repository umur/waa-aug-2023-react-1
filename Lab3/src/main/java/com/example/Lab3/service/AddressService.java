package com.example.Lab3.service;

import com.example.Lab3.entity.Address;

public interface AddressService {
    public Address saveAddress(Address address);
    public Address getAddressById(int id);
    public void deleteAddress(int id);
}
