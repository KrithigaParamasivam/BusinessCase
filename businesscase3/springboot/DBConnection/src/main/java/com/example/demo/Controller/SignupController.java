package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.Signup;
import com.example.demo.Service.ProductManagerImpl;
import com.example.demo.Service.SignupManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SignupController  {
	
	@Autowired
    private SignupManager service;
	
//	@PostMapping(value="/add")
//    public void saveUser(@RequestBody Product product)
//    {    
//        service.getdetails(product);  
//        System.out.println(HttpStatus.OK);
//    }
	
	@PostMapping(value="/adduser")
	public ResponseEntity<String> addDetails(@RequestBody Signup signup) {
		service.saveDetails(signup);
		String successMessage="Record added successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.CREATED);
		return response;
	}
    
//	 @GetMapping(value="/user")
//		public ResponseEntity<List<Product>> findAllProducts() throws Exception{
//			List<Signup> productList=service.getSignup();
//			ResponseEntity<List<Product>> response= new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
//			return response;
//		}

}
