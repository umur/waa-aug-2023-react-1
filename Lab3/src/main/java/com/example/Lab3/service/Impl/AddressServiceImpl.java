package com.example.Lab3.service.Impl;

import com.example.Lab3.entity.Address;
import com.example.Lab3.repository.AddressRepo;
import com.example.Lab3.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepo addressRepository;

    public Address saveAddress(Address address){
        return addressRepository.save(address);
    }

    public Address getAddressById(int id) {
        return addressRepository.findById(id).orElse(null);
    }

    public void deleteAddress(int id) {
        addressRepository.deleteById(id);
    }

}
