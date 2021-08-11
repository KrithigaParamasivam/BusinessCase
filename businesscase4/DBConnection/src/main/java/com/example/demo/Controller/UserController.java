//package com.example.demo.Controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import com.example.demo.Entity.User;
//import com.example.demo.Service.UserManager;
//
//public class UserController {
//	@Autowired
//	private UserManager service;
//	
//	@GetMapping(value = "/userdetails")
//	public ResponseEntity<List<User>> findAllUser() {
//		return new ResponseEntity<List<User>>(service.getUser(), HttpStatus.OK);
//
//	}
//
//	@PostMapping(value = "/user")
//	public ResponseEntity<String> addUser(@RequestBody User user) {
//		service.saveUser(user);
//		return new ResponseEntity<String>("record saved successfully", HttpStatus.OK);
//	}
//
//}
