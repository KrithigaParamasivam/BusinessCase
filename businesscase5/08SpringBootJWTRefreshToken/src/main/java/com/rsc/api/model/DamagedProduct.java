package com.rsc.api.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class DamagedProduct {
	@Id
	private int productId;

	@NotBlank(message = "Product Name is mandatory")
	private String productName;

	@NotBlank(message = "Supplier Name is mandatory")
	private String supplierName;

	@NotBlank(message = "Arrived Date is mandatory")
	private String arrivedDate;

	@Size(min = 5, message = "Description min must be 5 characters")
	@NotBlank(message = "Description is mandatory")
	private String description;

	public int getProductId() {
		return productId;
	}

	@Temporal(TemporalType.TIMESTAMP)
	private Date EntryDateTime = new Date(System.currentTimeMillis());

	public void setProductId(int productId) {
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

	public String getArrivedDate() {
		return arrivedDate;
	}

	public void setArrivedDate(String arrivedDate) {
		this.arrivedDate = arrivedDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
