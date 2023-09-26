import SomeDummyService from "../services/SomeDummyService";

describe("Some test suite", () => {
	/* Write a fizzBuzzIter1 method that take an integer as an input and return:

    If the input is divisible by 3, return Fizz
    If the input is divisible by 5, return Buzz
    If the input is divisible by 3 and 5, return FizzBuzz
    Else return the input
 */

	test("If the input is 6 then return Fizz", () => {
		// ARRANGE
		const target = new SomeDummyService();

		// ACT
		const actual = target.fizzBuzzIter1(6);

		// ASSERT
		expect(actual).toBe("Fizz");
	});

	test("If the input is 5 then return Buzz", () => {
		// ARRANGE
		const target = new SomeDummyService();

		// ACT
		const actual = target.fizzBuzzIter1(5);

		// ASSERT
		expect(actual).toBe("Buzz");
	});

	test("If input is 10 then return Buzz", () => {
		// ARRANGE
		const target = new SomeDummyService();

		// ACT
		const actual = target.fizzBuzzIter1(10);

		// ASSERT
		expect(actual).toBe("Buzz");
	});

	test("If input is 25 then return Buzz", () => {
		// ARRANGE
		const target = new SomeDummyService();

		// ACT
		const actual = target.fizzBuzzIter1(25);

		// ASSERT
		expect(actual).toBe("Buzz");
	});
});
