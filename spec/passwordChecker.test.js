import { PasswordChecker } from "../passwordChecker.js";

describe("Password validation", () => {
	const fonction = new PasswordChecker();

	it("should return false for passwords shorter than 8 characters", () => {
		const result = fonction.isValid("1234567");
	  	expect(result).toBe(false);
	});

	it("should return false for passwords without special characters", () => {
		const result = fonction.isValid("abcdefgh");
	  	expect(result).toBe(false);
	});

	it("should return false for passwords without numbers", () => {
		const result = fonction.isValid("abcdefgh");
	  	expect(result).toBe(false);
	});

	it("should return false for passwords containing 'ipl'", () => {
		const result = fonction.isValid("123ipl45");
	  	expect(result).toBe(false);
	});
});
