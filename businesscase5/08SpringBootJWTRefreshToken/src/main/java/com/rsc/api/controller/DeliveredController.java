package com.rsc.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rsc.api.model.Delivered;
import com.rsc.api.service.DeliveredManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "deliver")

public class DeliveredController extends BaseController {
	@Autowired
	private DeliveredManager service;

	@GetMapping(value = "/getdeliver")
	public ResponseEntity<List<Delivered>> findAllProducts() throws Exception {
		List<Delivered> productList = service.getProducts();
		ResponseEntity<List<Delivered>> response = new ResponseEntity<List<Delivered>>(productList, HttpStatus.OK);
		return response;
	}

	@GetMapping(value = "/product/{productId}")
	public ResponseEntity<Delivered> findProductById(@PathVariable Integer productId) throws Exception {
		Delivered productList = service.getProductById(productId);
		ResponseEntity<Delivered> response = new ResponseEntity<Delivered>(productList, HttpStatus.OK);
		return response;
	}

	@PostMapping(value = "/adddeliver")
	public ResponseEntity<String> addProduct(@Valid @RequestBody Delivered product) {
		service.saveProduct(product);
		String successMessage = "Delivered Product added successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
		return response;
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateProduct(@Valid @RequestBody Delivered product) {
		service.updateProduct(product);
		String successMessage = "Delivered Product updated successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable Integer id) throws Exception {
		service.deleteProduct(id);
		String successMessage = "Delivered Product deleted successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}

}
