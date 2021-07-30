package com.example.demo.Controller;

import java.util.List;

//import javax.validation.Valid;

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

import com.example.demo.Entity.Product;
import com.example.demo.Service.ProductManagerImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/products")
public class MyController extends BaseController
{
    @Autowired
    private ProductManagerImpl service;

    @PostMapping(value="/add")
    public void saveUser(@RequestBody Product product)
    {    
        service.getdetails(product);  
        System.out.println(HttpStatus.OK);
    }
    
    @GetMapping(value="/products")
	public ResponseEntity<List<Product>> findAllProducts() throws Exception{
		List<Product> productList=service.getProducts();
		ResponseEntity<List<Product>> response= new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
		return response;
	}

	@GetMapping(value="/product/{productId}")
	public ResponseEntity<Product> findProductById(@PathVariable Integer productId) throws Exception{
		Product productList=service.getProductById(productId);
		ResponseEntity<Product> response= new ResponseEntity<Product>(productList, HttpStatus.OK);
		return response;
	}
	
//	@GetMapping(value="/product/{productName}")
//	public ResponseEntity<Product> findProductByName(@PathVariable String productName) throws Exception{
//		Product productList=service.getProductByName(productName);
//		ResponseEntity<Product> response= new ResponseEntity<Product>(productList, HttpStatus.OK);
//		return response;
//	}

	@PostMapping(value="/addproduct")
	public ResponseEntity<String> addProduct(@RequestBody Product product) {
		service.saveProduct(product);
		String successMessage="Product added successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.CREATED);
		return response;
	}
    
	
	 @PutMapping("/update")
      public ResponseEntity<String> updateProduct(@RequestBody Product product) {
      service.updateProduct(product);
      String successMessage="Product updated successfully.";
      ResponseEntity<String> response= new ResponseEntity<String>(successMessage,HttpStatus.OK);	
      return response;
   }

	

	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) throws Exception{
		service.deleteProduct(id);
		String successMessage="Product deleted successfully.";
		ResponseEntity<String> response= new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}
}
