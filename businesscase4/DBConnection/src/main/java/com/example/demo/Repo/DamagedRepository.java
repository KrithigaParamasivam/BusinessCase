package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.DamagedProduct;
import com.example.demo.Entity.Product;


@Repository
public interface DamagedRepository extends JpaRepository<DamagedProduct,Integer> {
		
}
