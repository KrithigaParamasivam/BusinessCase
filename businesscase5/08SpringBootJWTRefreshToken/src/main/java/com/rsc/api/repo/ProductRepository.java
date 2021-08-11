package com.rsc.api.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
//	@Query("SELECT u FROM Product u WHERE u.productId = 101")
//	List<Product> findAll();

}
