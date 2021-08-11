package com.rsc.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rsc.api.model.Customer;
import com.rsc.api.service.CustomerManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/customer")
public class CustomerController {

	@Autowired
	private CustomerManager service;

	@GetMapping(value = "/getproduct")
	public ResponseEntity<List<Customer>> findAllProducts() throws Exception {
		List<Customer> productList = service.getProducts();
		ResponseEntity<List<Customer>> response = new ResponseEntity<List<Customer>>(productList, HttpStatus.OK);
		return response;
	}

	@GetMapping(value = "/product/{productId}")
	public ResponseEntity<Customer> findProductById(@PathVariable Integer productId) throws Exception {
		Customer productList = service.getProductById(productId);
		ResponseEntity<Customer> response = new ResponseEntity<Customer>(productList, HttpStatus.OK);
		return response;
	}

	@PostMapping(value = "/addproduct")
	public ResponseEntity<String> addProduct(@Valid @RequestBody Customer product) {
		service.saveProduct(product);
		String successMessage = "Product added successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
		return response;
	}

}
