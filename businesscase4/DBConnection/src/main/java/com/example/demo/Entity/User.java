package com.example.demo.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
public class User {
@Id
private int id;
private String username;
private String emailid;
private String deliverycount;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getDeliverycount() {
	return deliverycount;
}
public void setDeliverycount(String deliverycount) {
	this.deliverycount = deliverycount;
}



}

