export class PasswordChecker {
	isType(password) {
		return typeof password === 'string' && password.trim().length > 0;
	}

	hasLength(password) {
		return password.trim().length >= 8;
	}

	hasSpecialChars(password) {
		return /[!@#$%^&*(),.?":{}|<>]/.test(password);
	}

	hasNumbers(password) {
		return /\d/.test(password);
	}

	hasIPL(password) {
		return /ipl/i.test(password);
	}

	isValid(password) {
		return this.isType(password) && this.hasLength(password) && this.hasSpecialChars(password) && this.hasNumbers(password) && !this.hasIPL(password);
	}
}
