function checkIfIntegers(name, ...args) {
	if (args.length == 1) {
		if (args[0] === undefined) throw Error(`Argument is missing in ${name}`);
		if (!Number.isInteger(args[0])) throw Error(`Argument must be an integer in ${name}`);
	}
	for (let arg of args) {
		if (arg === undefined) throw Error(`Arguments are missing in ${name}`);
		if (!Number.isInteger(arg)) throw Error(`Arguments must be integers in ${name}`);
	}
}

function checkIfArray(name, arg) {
	if (!(arg instanceof Array)) throw Error(`Argument must be an array in ${name}`);
	if (arg.length === 0) throw Error(`Array cannot be empty in ${name}`);
}

module.exports = {
	random: function random() {
		return Math.random();
	},

	randrange: function(start, stop, step=1) {
		checkIfIntegers("randrange()", start, stop, step);
		if (start > stop) [start, stop] = [stop, start];
		if (step > stop - start) throw Error("Step is too big");
		if (step != 1) {
			let array = [];
			for (let i = start; i < stop; i += step) {
				array.push(i);
			}
			let arrayLength = array.length;
			return array[Math.floor(Math.random() * arrayLength)];

		} else {
			return Math.floor(Math.random() * stop-1) + start;
		}
	},

	randint: function(min, max) {
		checkIfIntegers("randint()", min, max);
		if (min > max) [min, max] = [max, min];
		return Math.floor(Math.random() * max) + min;
	},

	choice: function(array) {
		checkIfArray("choice()", array);
		if (array.length === 0) throw Error("Given array is empty");
		let arrayLength = array.length;
		return array[Math.floor(Math.random() * arrayLength)];
	},

	shuffle: function(array) {
		checkIfArray("shuffle()", array);
		let arrayLength = array.length;
		for (let i = arrayLength - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i+1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	},

	permutation: function(last, first=1) {
		checkIfIntegers("permutation()",last, first);
		let array = [];
		for (let i = first; i <= last; i++ ) {
			array.push(i);
		}
		let arrayLength = array.length;
		for (let i = arrayLength - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i+1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
};