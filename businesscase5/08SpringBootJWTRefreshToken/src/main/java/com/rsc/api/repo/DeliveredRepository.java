package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.Delivered;

@Repository
public interface DeliveredRepository extends JpaRepository<Delivered, Integer> {

}