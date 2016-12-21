#! /usr/bin/env node

const smallHiraganaCodes = [];

let currentCode = 0x30A2;
let endCode = 0x30FA;

// console.log(String.fromCharCode(currentCode), 'to', String.fromCharCode(endCode));

const allHiragana = [];

while (currentCode < endCode) {
	allHiragana.push(String.fromCharCode(currentCode++));
}

console.log(`['${allHiragana.join('\',\n\t\'')}']`);
