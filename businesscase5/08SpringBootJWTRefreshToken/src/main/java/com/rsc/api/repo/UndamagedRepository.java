package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsc.api.model.Undamaged;

public interface UndamagedRepository extends JpaRepository<Undamaged, Integer> {

}
