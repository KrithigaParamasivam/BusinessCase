package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Signup;
import com.example.demo.Repo.SignupRepository;

@Service
public class SignupManager {
	

	
	@Autowired
	private SignupRepository repository;
    


	public Signup saveDetails(Signup signup) {
        return repository.save(signup);
    }

    public List<Signup> save(List<Signup> signup) {
        return repository.saveAll(signup);
    }


 public void getUser(Signup user) {
		
		repository.save(user);
	}
 

 public Signup getUserById(int id) {    	
     return repository.findById(id).orElse(null);
       }

    public List<Signup> getUser() throws Exception {
        return repository.findAll();
    }
    
    
    public String deleteUser(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public Signup updateUser(Signup user) {
    	Signup existingProduct = repository.findById(user.getId()).orElse(null);
    	existingProduct.setId(user.getId());
        existingProduct.setLastname(user.getFirstname());
        existingProduct.setLastname(user.getLastname());
        existingProduct.setEmailid(user.getEmailid());
        existingProduct.setPassword(user.getPassword());
        existingProduct.setConfirmpassword(user.getConfirmpassword());
       return repository.save(existingProduct);
    }
    

}
