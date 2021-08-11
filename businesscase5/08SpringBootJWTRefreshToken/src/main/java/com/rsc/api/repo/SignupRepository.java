package com.rsc.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rsc.api.model.Signup;

public interface SignupRepository extends JpaRepository<Signup, Integer> {

}
