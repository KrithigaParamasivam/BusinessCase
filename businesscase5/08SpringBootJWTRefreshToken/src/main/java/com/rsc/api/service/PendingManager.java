package com.rsc.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rsc.api.model.Pending;
import com.rsc.api.repo.PendingRepository;

@Service
public class PendingManager {
	@Autowired
	private PendingRepository repository;

	public void getProducts(Pending product) {

		repository.save(product);
	}

	public Pending saveProduct(Pending product) {
		return repository.save(product);
	}

	public List<Pending> saveProducts(List<Pending> products) {
		return repository.saveAll(products);
	}

	public List<Pending> getProducts() throws Exception {
		return repository.findAll();
	}

	public Pending getProductById(int id) {

		return repository.findById(id).orElse(null);

	}

	public String deleteProduct(int id) {
		repository.deleteById(id);
		return "product removed !! " + id;
	}

	public Pending updateProduct(Pending product) {
		Pending existingProduct = repository.findById(product.getProductId()).orElse(null);
		existingProduct.setProductName(product.getProductName());
		existingProduct.setQuantity(product.getQuantity());
		existingProduct.setProductId(product.getProductId());
		return repository.save(existingProduct);
	}

//    public Product getProductByName(String name) throws ProductException {
//        return repository.findByName(name);
//
//    }

//    public String deleteProduct(int id) {
//        repository.deleteById(id);
//        return "product removed !! " + id;
//    }

//    public DamagedProduct updateProduct(Product product) {
//        DamagedProduct existingProduct = repository.findById(product.getId()).orElse(null);
//        existingProduct.setProductId(product.getProductId());
//        existingProduct.setProductName(product.getProductName());
//        existingProduct.setSupplierName(product.getSupplierName());
//        existingProduct.setArrivedDate(product.getArrivedDate());
//        return repository.save(existingProduct);
//    }
//    

}
