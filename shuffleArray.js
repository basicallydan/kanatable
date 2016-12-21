function shuffleArray(a) {
	let b = a.slice();
	let counter = a.length;
	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = b[counter];
		b[counter] = b[index];
		b[index] = temp;
	}
	return b;
}

module.exports = shuffleArray;
