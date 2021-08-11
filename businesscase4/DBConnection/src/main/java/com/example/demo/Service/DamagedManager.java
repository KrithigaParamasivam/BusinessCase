package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.DamagedProduct;

import com.example.demo.Repo.DamagedRepository;

@Service
public class DamagedManager {
	@Autowired
	private DamagedRepository repository;

	public void getProducts(DamagedProduct product) {
		
		repository.save(product);
	}
	public DamagedProduct saveProduct(DamagedProduct product) {
        return repository.save(product);
    }

    public List<DamagedProduct> saveProducts(List<DamagedProduct> products) {
        return repository.saveAll(products);
    }

    public List<DamagedProduct> getProducts() throws Exception {
        return repository.findAll();
    }

    public DamagedProduct getProductById(int id) {
    	
        return repository.findById(id).orElse(null);
       
    }
    
//    public Product getProductByName(String name) throws ProductException {
//        return repository.findByName(name);
//
//    }

    public String deleteProduct(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public DamagedProduct updateProduct(DamagedProduct product) {
        DamagedProduct existingProduct = repository.findById(product.getProductId()).orElse(null);
        existingProduct.setProductId(product.getProductId());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setSupplierName(product.getSupplierName());
        existingProduct.setArrivedDate(product.getArrivedDate());
        existingProduct.setDescription(product.getDescription());
        return repository.save(existingProduct);
    }
}



