import { PasswordChecker } from "../src/passwordChecker.js";

describe("Password validation - initialize", () => {
	const main = new PasswordChecker();

	it("should return false for passwords is empty", () => {
		const result = main.isValid("");

	  	expect(result).toBe(false);
	});

	it("should return false for passwords is null", () => {
		const result = main.isValid(null);

		expect(result).toBe(false);
	});

	it("should return false for passwords is not string", () => {
		const result = main.isValid(false);

		expect(result).toBe(false);
	});
});

/*
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
 */