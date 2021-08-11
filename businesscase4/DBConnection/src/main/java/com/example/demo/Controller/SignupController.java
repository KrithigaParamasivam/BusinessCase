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

import com.example.demo.Entity.Signup;
import com.example.demo.Service.SignupManager;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="user")
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
	public ResponseEntity<String> addDetails(@Valid @RequestBody Signup signup) {
		service.saveDetails(signup);
		String successMessage="User added successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.CREATED);
		return response;
	}
    
	 @GetMapping(value="/getuser")
		public ResponseEntity<List<Signup>> findAllUsers() throws Exception{
			List<Signup> productList=service.getUser();
			ResponseEntity<List<Signup>> response= new ResponseEntity<List<Signup>>(productList, HttpStatus.OK);
			return response;
		}
	 
	  @GetMapping(value="/user/{userId}")
			public ResponseEntity<Signup> findUserById(@PathVariable int userId) throws Exception{
				Signup productList=service.getUserById(userId);
				ResponseEntity<Signup> response= new ResponseEntity<Signup>(productList, HttpStatus.OK);
				return response;
			}
			
	 
	  @PutMapping("/update")
      public ResponseEntity<String> updateUser(@Valid @RequestBody Signup user) {
      service.updateUser(user);
      String successMessage="User updated successfully.";
      ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.OK);	
      return response;
   }

	

	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id) throws Exception{
		service.deleteUser(id);
		String successMessage="User deleted successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}

}
