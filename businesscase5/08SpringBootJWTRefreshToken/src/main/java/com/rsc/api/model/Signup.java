
package com.rsc.api.model;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Signup {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@NotBlank(message = "First Name is mandatory")
	@Size(min = 5, message = "Name must be 5 characters")
	private String firstname;

	@NotBlank(message = "Last Name is mandatory")
	private String lastname;

	@NotBlank(message = "Email Id is mandatory")
	@Size(min = 10, message = "Name must be 10 characters")
	private String emailid;

	@Transient
	@NotBlank(message = "password Id is mandatory")
	@Size(min = 5, message = "Password must be 5 characters")
	private String password;

	@Transient
	@NotBlank(message = "confirmpassword Id is mandatory")
	@Size(min = 5, message = "confirm password be 5 characters")
	private String confirmpassword;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "id")

	private UserInfo userinfo;

	public UserInfo getUserinfo() {
		return userinfo;
	}

	public void setUserinfo(UserInfo userinfo) {
		this.userinfo = userinfo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	public Signup(int id, String firstname, String lastname, String emailid, String password, String confirmpassword) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}

	public Signup() {
		super();
		// TODO Auto-generated constructor stub
	}

}
