package com.example.demo.Entity;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
@Entity
public class Customer {
	@Id
	private int id;
	private String customerName;
	private int customerOrderid;
	private String customerEmailid;
	
	
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="cust_id",referencedColumnName="id")
	private List<Product> products;
	
	
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public int getCustomerOrderid() {
		return customerOrderid;
	}
	public void setCustomerOrderid(int customerOrderid) {
		this.customerOrderid = customerOrderid;
	}
	public String getCustomerEmailid() {
		return customerEmailid;
	}
	public void setCustomerEmailid(String customerEmailid) {
		this.customerEmailid = customerEmailid;
	}
	
	
	

}
