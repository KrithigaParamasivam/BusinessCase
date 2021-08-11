package com.rsc.api.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity

public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	// @Id
	@Column(name = "productid")
	private Integer productId;

	@NotBlank(message = "Product Name is mandatory")
	@Column(name = "productname")
	private String productName;

	@NotBlank(message = "Supplier Name is mandatory")
	@Column(name = "suppliername")
	private String supplierName;

	private Integer quantity;

	@NotBlank(message = "Expiry Date is mandatory")
	@Column(name = "expirydate")
	private String expiryDate;

	@NotBlank(message = "Arrival Date is mandatory")
	@Column(name = "arrivaldate")
	private String arrivalDate;

	@Temporal(TemporalType.TIMESTAMP)
	private Date EntryDateTime = new Date(System.currentTimeMillis());

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

}
