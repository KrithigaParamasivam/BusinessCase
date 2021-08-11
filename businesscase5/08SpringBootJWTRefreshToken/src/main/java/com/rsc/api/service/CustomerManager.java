package com.rsc.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rsc.api.model.Customer;
import com.rsc.api.repo.CustomerRepository;

@Service
public class CustomerManager {

	@Autowired
	private CustomerRepository repository;

	public void getProducts(Customer product) {

		repository.save(product);
	}

	public Customer saveProduct(Customer product) {
		return repository.save(product);
	}

	public List<Customer> saveProducts(List<Customer> products) {
		return repository.saveAll(products);
	}

	public List<Customer> getProducts() throws Exception {
		return repository.findAll();
	}

	public Customer getProductById(int id) {

		return repository.findById(id).orElse(null);

	}

}
