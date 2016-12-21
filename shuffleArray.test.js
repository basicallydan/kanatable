const assert = require('assert');
const shuffleArray = require('./shuffleArray');

function testShuffleWillReturnDifferentEveryTime() {
	const originalArray = ['a', 'b', 'c'];
	const shuffledArray = shuffleArray(originalArray);
	assert.notEqual(originalArray, shuffledArray);
	assert.deepStrictEqual(originalArray.length, shuffledArray.length);
	assert(originalArray.reduce((acc, item) => shuffledArray.includes(item) && acc));
}

testShuffleWillReturnDifferentEveryTime();
