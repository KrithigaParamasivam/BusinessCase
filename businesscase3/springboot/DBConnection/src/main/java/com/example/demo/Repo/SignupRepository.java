package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Signup;

public interface SignupRepository extends JpaRepository<Signup,Integer> {

}
