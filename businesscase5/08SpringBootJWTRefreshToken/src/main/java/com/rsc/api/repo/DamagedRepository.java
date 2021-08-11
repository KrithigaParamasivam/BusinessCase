package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.DamagedProduct;

@Repository
public interface DamagedRepository extends JpaRepository<DamagedProduct, Integer> {

}
