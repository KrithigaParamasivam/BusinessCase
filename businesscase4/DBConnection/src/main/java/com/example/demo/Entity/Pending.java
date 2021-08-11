package com.example.demo.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;
@Entity
public class Pending {
    @Id
	private int productId;
    
    
    @NotBlank(message="Product Name is mandatory")    
	private String productName;
    
   
	private String supplierName;
    
   
	private int quantity;
    
	@Size(min=5,message="Description must be 5 characters")
	private String description;
	
	private int customerId;
	
	
	private String customerName;
	
	@Size(max=30,message="Customer Address must be 30 characters")
	@NotBlank(message="customerAddress is mandatory")
	private String customerAddress;
	
	@NotBlank(message="Customer PhoneNumber is mandatory")
	private String customerPhoneno;
	
	
	private String arrivedDate;
	
	private int customerOrderid;
	
	@NotBlank(message="Delivery Date is mandatory")
	private String deliveryDate;
	
	@NotBlank(message="status is mandatory")
	private String status;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date EntryDateTime=new Date(System.currentTimeMillis());

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	
	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	

	public String getCustomerPhoneno() {
		return customerPhoneno;
	}

	public void setCustomerPhoneno(String customerPhoneno) {
		this.customerPhoneno = customerPhoneno;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

    

	public String getArrivedDate() {
		return arrivedDate;
	}

	public void setArrivedDate(String arrivedDate) {
		this.arrivedDate = arrivedDate;
	}

	public int getCustomerOrderid() {
		return customerOrderid;
	}

	public void setCustomerOrderid(int customerOrderid) {
		this.customerOrderid = customerOrderid;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getEntryDateTime() {
		return EntryDateTime;
	}

	public void setEntryDateTime(Date entryDateTime) {
		EntryDateTime = entryDateTime;
	}

}
