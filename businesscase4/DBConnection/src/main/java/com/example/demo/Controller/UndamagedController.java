package com.example.demo.Controller;

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


import com.example.demo.Entity.Undamaged;
import com.example.demo.Service.DamagedManager;
import com.example.demo.Service.UndamagedManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="damaged")
public class UndamagedController {
	
	@Autowired
    private UndamagedManager service;
	

	
	  @GetMapping(value="/getundamage")
		public ResponseEntity<List<Undamaged>>findAllProducts() throws Exception{
			List<Undamaged> productList=service.getProducts();
			ResponseEntity<List<Undamaged>> response= new ResponseEntity<List<Undamaged>>(productList, HttpStatus.OK);
			return response;
		}
	  
	  @GetMapping(value="/product/{productId}")
		public ResponseEntity<Undamaged> findProductById(@PathVariable Integer productId) throws Exception{
			Undamaged productList=service.getProductById(productId);
			ResponseEntity<Undamaged> response= new ResponseEntity<Undamaged>(productList, HttpStatus.OK);
			return response;
		}
		
	  
	  @PostMapping(value="/addundamage")
		public ResponseEntity<String> addProduct(@Valid @RequestBody Undamaged product) {
			service.saveProduct(product);
			String successMessage="Pending Product added successfully.";
			ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.CREATED);
			return response;
		}
	  
	  @PutMapping("/update")
      public ResponseEntity<String> updateProduct(@Valid @RequestBody Undamaged product) {
      service.updateProduct(product);
      String successMessage="Product updated successfully.";
      ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.OK);	
      return response;
   }

	

	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id) throws Exception{
		service.deleteProduct(id);
		String successMessage="Product deleted successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}
	}
	
	


