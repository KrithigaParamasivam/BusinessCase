package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.Pending;

@Repository
public interface PendingRepository extends JpaRepository<Pending, Integer> {

}
