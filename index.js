#! /usr/bin/env node
const fs = require('fs');

var program = require('commander');
const kana = require('japanese-kana');
const japanese = require('japanese');

const shuffleArray = require('./shuffleArray');
const packageInfo = require('./package.json');

program
	.version(packageInfo.version)
	.option('-k --kana [kana]', 'Specify which kana to use', 'hiragana')
	.parse(process.argv);

let kanaToShuffle;

if (program.kana === 'both') {
	kanaToShuffle = kana.data(true);
} else {
	kanaToShuffle = kana.data()[program.kana];
}

const shuffledKana = shuffleArray(kanaToShuffle.reduce((acc, h) => acc.concat(h.split('')), []));

const withRomanisation = shuffledKana.map(h => `${h},,,,,,,${japanese.romanize(h)}`);

let output = 'Kana,,,,,,,Romanji\n';
output += withRomanisation.join('\n');

fs.writeFile('kana.csv', output, function (err) {
	if (err) return console.log(err);
});
