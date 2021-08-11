package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.DamagedProduct;
import com.example.demo.Entity.Product;
import com.example.demo.Repo.ProductRepository;
//import com.example.exception.ProductException;

@Service
public class ProductManagerImpl implements ProductManager {
	@Autowired
	private ProductRepository repository;

	@Override
	public void getdetails(Product product) {
		
		repository.save(product);
	}
	public Product saveProduct(Product product) {
        return repository.save(product);
    }

    public List<Product> saveProducts(List<Product> products) {
        return repository.saveAll(products);
    }

    public List<Product> getProducts() throws Exception {
        return repository.findAll();
    }

    public Product getProductById(int id) {
    	
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

    public Product updateProduct(Product product) {
        Product existingProduct = repository.findById(product.getId()).orElse(null);
        existingProduct.setProductId(product.getProductId());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setSupplierName(product.getSupplierName());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setExpiryDate(product.getExpiryDate());
        existingProduct.setArrivalDate(product.getArrivalDate());
        return repository.save(existingProduct);
    }
    


}
