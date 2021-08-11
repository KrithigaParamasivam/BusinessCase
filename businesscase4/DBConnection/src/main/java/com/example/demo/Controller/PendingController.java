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


import com.example.demo.Entity.Pending;

import com.example.demo.Service.PendingManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="")


public class PendingController  extends BaseController {
 
	  @Autowired
	    private PendingManager service;
	  
	  @GetMapping(value="/getpending")
		public ResponseEntity<List<Pending>> findAllProducts() throws Exception{
			List<Pending> productList=service.getProducts();
			ResponseEntity<List<Pending>> response= new ResponseEntity<List<Pending>>(productList, HttpStatus.OK);
			return response;
		}
	  

		@GetMapping(value="/product/{productId}")
		public ResponseEntity<Pending> findProductById(@PathVariable Integer productId) throws Exception{
			Pending productList=service.getProductById(productId);
			ResponseEntity<Pending> response= new ResponseEntity<Pending>(productList, HttpStatus.OK);
			return response;
		}
	  
	  
	  @PostMapping(value="/addpending")
		public ResponseEntity<String> addProduct(@Valid @RequestBody Pending product) {
			service.saveProduct(product);
			String successMessage="Pending Product added successfully.";
			ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.CREATED);
			return response;
		}
//	  
//	  @PutMapping("/products")
//      public ResponseEntity<String> updateProduct(@RequestBody Pending product) {
//      service.updateProduct(product);
//      String successMessage="Product updated successfully.";
//      ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.OK);	
//      return response;
//   }

		 @PutMapping("/update")
	      public ResponseEntity<String> updateProduct(@Valid @RequestBody Pending product) {
	      service.updateProduct(product);
	      String successMessage="Pending Product updated successfully.";
	      ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.OK);	
	      return response;
	   }
		
		@DeleteMapping(value="/delete/{id}")
		public ResponseEntity<String> deleteProduct(@PathVariable Integer id) throws Exception{
			service.deleteProduct(id);
			String successMessage="Pending Product deleted successfully.";
			ResponseEntity<String> response= new ResponseEntity<String>(successMessage, HttpStatus.OK);
			return response;
		}

}
