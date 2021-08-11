package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.DamagedProduct;
import com.example.demo.Entity.Pending;


	
	@Repository
	public interface PendingRepository extends JpaRepository<Pending,Integer> {
			
	}


