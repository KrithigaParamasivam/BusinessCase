package com.rsc.api.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserInfo {
	@Id
	private int id;
	private String username;
	private String emailid;

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

}
