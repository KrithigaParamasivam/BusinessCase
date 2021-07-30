package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.Signup;
import com.example.demo.Repo.ProductRepository;
import com.example.demo.Repo.SignupRepository;

@Service
public class SignupManager {
	

	
	@Autowired
	private SignupRepository repository;
    
//	@Override
//	public void getDetails(Signup signup) {
//		
//		repository.save(signup);
//	}
	public Signup saveDetails(Signup signup) {
        return repository.save(signup);
    }

    public List<Signup> save(List<Signup> signup) {
        return repository.saveAll(signup);
    }

//    public List<Product> getProducts() throws Exception {
//        return repository.findAll();
//    }
//
//    public Product getProductById(int id) {
//    	
//        return repository.findById(id).orElse(null);
//       
//    }

}
