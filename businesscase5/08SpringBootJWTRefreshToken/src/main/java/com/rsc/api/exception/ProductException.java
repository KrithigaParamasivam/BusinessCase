package com.rsc.api.exception;

public class ProductException extends Exception {

	private static final long serialVersionUID = 1L;

	String errorMessage;

	public ProductException(String errorMessage) {
		super();
		this.errorMessage = errorMessage;
	}

}
