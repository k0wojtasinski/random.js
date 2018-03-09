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
	random: function() {
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
	},

	randbool: function() {
		if (Math.random() > 0.5) return true;
		else return false;
	},

	randascii: function() {
		let randomCharCode = Math.floor((Math.random() * 127) + 31);
		return String.fromCharCode(randomCharCode);
	},

	randcolor: function(hashSign=true) {
		let randomNumber = Math.floor((Math.random() * 16777215));
		if (hashSign) return "#" + randomNumber;
		else return randomNumber;
	},

	randposition: function() {
		const positions = ["top", "bottom", "left", "right", "center"];
		return positions[Math.floor(Math.random() * 5)];
	},

	randbin: function(min, max) {
		checkIfIntegers("randbin()", min, max);
		if (min > max) [min, max] = [max, min];
		let randomNumber = Math.floor((Math.random() * max) + min);
		return randomNumber.toString(2);
	},

	randoct: function(min, max) {
		checkIfIntegers("randoct()", min, max);
		if (min > max) [min, max] = [max, min];
		let randomNumber = Math.floor((Math.random() * max) + min);
		return randomNumber.toString(8);
	},

	randhex: function(min, max, hashSign=true){
		checkIfIntegers("randhex()", min, max);
		if (min > max) [min, max] = [max, min];
		let randomNumber = Math.floor((Math.random() * max) + min);
		if (hashSign) return "#" + randomNumber.toString(16);
		else return randomNumber.toString(16);
	}
};
