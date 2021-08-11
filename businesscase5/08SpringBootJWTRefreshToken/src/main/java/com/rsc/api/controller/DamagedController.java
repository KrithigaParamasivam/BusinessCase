package com.rsc.api.controller;

import java.util.List;

import javax.validation.Valid;

//import javax.validation.Valid;

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

import com.rsc.api.model.DamagedProduct;
import com.rsc.api.service.DamagedManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/damage")
public class DamagedController extends BaseController {
	@Autowired
	private DamagedManager service;

//    @PostMapping(value="/add")
//    public void saveProduct(@RequestBody Product product)
//    {    
//        service.getProducts(product);  
//        System.out.println(HttpStatus.OK);
//    }
//    
	@GetMapping(value = "/getdamage")
	public ResponseEntity<List<DamagedProduct>> findAllProducts() throws Exception {
		List<DamagedProduct> productList = service.getProducts();
		ResponseEntity<List<DamagedProduct>> response = new ResponseEntity<List<DamagedProduct>>(productList,
				HttpStatus.OK);
		return response;
	}

	@GetMapping(value = "/product/{productId}")
	public ResponseEntity<DamagedProduct> findProductById(@PathVariable Integer productId) throws Exception {
		DamagedProduct productList = service.getProductById(productId);
		ResponseEntity<DamagedProduct> response = new ResponseEntity<DamagedProduct>(productList, HttpStatus.OK);
		return response;
	}

	@PostMapping(value = "/adddamage")
	public ResponseEntity<String> addProduct(@Valid @RequestBody DamagedProduct product) {
		service.saveProduct(product);
		String successMessage = "Product added successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
		return response;
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateProduct(@Valid @RequestBody DamagedProduct product) {
		service.updateProduct(product);
		String successMessage = "Product updated successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id) throws Exception {
		service.deleteProduct(id);
		String successMessage = "Product deleted successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}
}
