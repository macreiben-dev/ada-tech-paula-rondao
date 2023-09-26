class SomeDummyService {
	doSomething(left, right) {
		return left + right;
	}

	someUntestedMethod() {
		return "som_data";
	}

	fizzBuzzIter1(input) {
		if (input % 5 == 0) {
			return "Buzz";
		}

		return "Fizz";
	}
}

export default SomeDummyService;
