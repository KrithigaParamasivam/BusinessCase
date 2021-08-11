package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {

}
