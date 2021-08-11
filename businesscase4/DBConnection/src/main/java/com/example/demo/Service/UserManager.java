package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Signup;
import com.example.demo.Entity.User;
import com.example.demo.Repo.SignupRepository;
import com.example.demo.Repo.UserRepository;

public class UserManager {
	
private UserRepository repository;
    

	public User addUser(User user) {
        return repository.save(user);
    }

    public List<User> save(List<User> user) {
        return repository.saveAll(user);
    }

    
 public void getUser(User user) {
		
		repository.save(user);
	}
 

 public User getUserById(int id) {    	
     return repository.findById(id).orElse(null);
       }

    public List<User> getUser() throws Exception {
        return repository.findAll();
    }
    

}
