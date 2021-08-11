package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Undamaged;
import com.example.demo.Repo.UndamagedRepository;


@Service
public class UndamagedManager {
	
	@Autowired
	private UndamagedRepository repository;
	
    public void getProducts(Undamaged product) {
		
		repository.save(product);
	}
	public Undamaged saveProduct(Undamaged product) {
        return repository.save(product);
    }

    public List<Undamaged> saveProducts(List<Undamaged> products) {
        return repository.saveAll(products);
    }

    public List<Undamaged> getProducts() throws Exception {
        return repository.findAll();
    }
    
    
    public String deleteProduct(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public Undamaged updateProduct(Undamaged product) {
        Undamaged existingProduct = repository.findById(product.getProductId()).orElse(null);
        existingProduct.setProductId(product.getProductId());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setSupplierName(product.getSupplierName());
        existingProduct.setExpiryDate(product.getExpiryDate());
        existingProduct.setArrivedDate(product.getArrivedDate());
        existingProduct.setQuantity(product.getQuantity());
        return repository.save(existingProduct);
    }
    

    public Undamaged getProductById(int id) {    	
        return repository.findById(id).orElse(null);
          }

}


