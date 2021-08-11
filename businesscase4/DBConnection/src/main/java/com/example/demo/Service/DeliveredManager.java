package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.Delivered;
import com.example.demo.Repo.DeliveredRepository;

@Service
public class DeliveredManager {
	
	@Autowired
	private DeliveredRepository repository;

	public void getProducts(Delivered product) {
		
		repository.save(product);
	}
	public Delivered saveProduct(Delivered product) {
        return repository.save(product);
    }

    public List<Delivered> saveProducts(List<Delivered> products) {
        return repository.saveAll(products);
    }

    public List<Delivered> getProducts() throws Exception {
        return repository.findAll();
    }

    public Delivered getProductById(int id) {
    	
        return repository.findById(id).orElse(null);
       
    }

    public String deleteProduct(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public Delivered updateProduct(Delivered product) {
        Delivered existingProduct = repository.findById(product.getProductId()).orElse(null);
        existingProduct.setProductId(product.getProductId());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setSupplierName(product.getSupplierName());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setCustomerId(product.getCustomerId());
        existingProduct.setCustomerName(product.getCustomerName());
        existingProduct.setCustomerAddress(product.getCustomerAddress());
        existingProduct.setCustomerPhoneno(product.getCustomerPhoneno());
        existingProduct.setArrivedDate(product.getArrivedDate());
        existingProduct.setCustomerOrderid(product.getCustomerOrderid());
        existingProduct.setDeliveryDate(product.getDeliveryDate());
        existingProduct.setDeliveredDate(product.getDeliveredDate());
        existingProduct.setStatus(product.getStatus());
        return repository.save(existingProduct);
    }
    

}
