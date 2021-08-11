package com.rsc.api.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Delivered {
	@Id
	private int productId;

	@NotBlank(message = "Product Name is mandatory")
	private String productName;

	@NotBlank(message = "suppiler Name is mandatory")
	private String supplierName;

	private int quantity;

	@Size(min = 5, message = "Name must be 5 characters")
	@NotBlank(message = "Description is mandatory")
	private String description;

	@NotBlank(message = "Customer Id is mandatory")
	private String customerId;

	@NotBlank(message = "Customer Name is mandatory")
	private String customerName;

	@NotBlank(message = "Customer Address is mandatory")
	private String customerAddress;

	@NotBlank(message = "Customer PhoneNumber is mandatory")
	private String customerPhoneno;

	@NotBlank(message = "Quantity Name is mandatory")
	private String arrivedDate;

	@NotBlank(message = "Customer OrderId is mandatory")
	private String customerOrderid;

	private String deliveryDate;

	@NotBlank(message = "Delivered Date is mandatory")
	private String deliveredDate;

	@NotBlank(message = "status is mandatory")
	private String status;

	@Temporal(TemporalType.TIMESTAMP)
	private Date EntryDateTime = new Date(System.currentTimeMillis());

	public Integer getProductId() {
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

	public Date getEntryDateTime() {
		return EntryDateTime;
	}

	public void setEntryDateTime(Date entryDateTime) {
		EntryDateTime = entryDateTime;
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

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
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

	public String getCustomerPhoneno() {
		return customerPhoneno;
	}

	public void setCustomerPhoneno(String customerPhoneno) {
		this.customerPhoneno = customerPhoneno;
	}

	public String getArrivedDate() {
		return arrivedDate;
	}

	public void setArrivedDate(String arrivedDate) {
		this.arrivedDate = arrivedDate;
	}

	public String getCustomerOrderid() {
		return customerOrderid;
	}

	public void setCustomerOrderid(String customerOrderid) {
		this.customerOrderid = customerOrderid;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(String deliveredDate) {
		this.deliveredDate = deliveredDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
