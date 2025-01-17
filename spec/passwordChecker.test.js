import { PasswordChecker } from "../src/passwordChecker.js";

describe("Password validation - Initialize", () => {
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

describe("Password validation - Length", () => {
	const main = new PasswordChecker();

	it("should return false for passwords shorter than 8 characters", () => {
		const result = main.isValid("abcdefgh");

		expect(result).toBe(false);
	});

	it("should return true for passwords bigger or equals than 8 characters", () => {
		const result = main.isValid("ab*c1def");

		expect(result).toBe(true);
	});
});

describe("Password validation - Special characters", () => {
	const main = new PasswordChecker();

	it("should return false for passwords without special characters", () => {
		const result = main.isValid("abcdefgh");

		expect(result).toBe(false);
	});

	it("should return true for passwords with one special character", () => {
		const result = main.isValid("ab*c1def");

		expect(result).toBe(true);
	});
});

describe("Password validation - Numbers", () => {
	const main = new PasswordChecker();

	it("should return false for passwords without numbers", () => {
		const result = main.isValid("abcdefgh");

		expect(result).toBe(false);
	});

	it("should return true for passwords with one number", () => {
		const result = main.isValid("ab*c1def");

		expect(result).toBe(true);
	});
});

describe("Password validation - Blacklist words", () => {
	const main = new PasswordChecker();

	it("should return false for passwords containing IPL", () => {
		const result = main.isValid("ab*c1deIPLf");

		expect(result).toBe(false);
	});

	it("should return true for passwords not containing IPL", () => {
		const result = main.isValid("ab*c1def");

		expect(result).toBe(true);
	});
});
