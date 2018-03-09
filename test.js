const random = require("./index");
let passed = 0;
let failed = 0;
function test(label, body) {
	if (!body()) {
		console.log("\x1b[31m",`${label} - failed!`);
		failed++;
	} 
	else {
		console.log("\x1b[32m", `${label} - passed`);
		passed++;
	}
}
function testFinish() {
	console.log("\x1b[0m", "Result of tests:");
	console.log(` all tests: ${passed + failed},`);
	console.log(` passed: ${passed},`);
	console.log("\x1b[31m", `failed: ${failed}` );
}

test("checkIfIntegers() throws error", () => {
	try {
		random.randint();
	}
	catch(err) {
		if (err) return true;
		else return false;
	}
});

test("checkIfArray() throws error", () => {
	try {
		random.choice();
	}
	catch(err) {
		if (err) return true;
		else return false;
	}
});

test("random() returns value between 0 and 1", () => {
	let randomValue = random.random();
	return randomValue >= 0 && randomValue <= 1;
});

test("randint(1,100) returns value between 1 and 100", () => {
	let randomNumber = random.randint(1,100);
	return randomNumber >= 0 && randomNumber <= 100;
});

test("randrange(1,100, 3) returns value between 1 and 99 with a step 3", () => {
	let randomNumber = random.randrange(1,100,3);
	return randomNumber >= 1 && randomNumber < 100 && randomNumber % 3 != 0;
});

test("randrange(1,10,11) throws error", () => {
	try {
		random.randrange(1,10,11);
	}
	catch(err) {
		if (err) return true;
		else return false;
	}
});

test("randbin(1,100) returns binary value between 1 and 100", () => {
	let randBinary = random.randbin(1,100);
	return parseInt(randBinary, 2) >= 1 && parseInt(randBinary, 2) <= 100;
});

test("choice() returns randomly selected item of an array", () => {
	let array = [];
	for (let i = 0; i <= 10; i++) {
		array.push(i);
	}
	let randomSelect = random.choice(array);
	if (array.indexOf(randomSelect) != undefined) return true;
	else return false;
});
test("randbool() returns true or false", () => {
	let randBoolean = random.randbool();
	return randBoolean === true || randBoolean === false; 
});
testFinish();