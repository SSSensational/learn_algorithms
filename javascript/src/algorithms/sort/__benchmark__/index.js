const Benchmark = require('benchmark');
const { bubble1, bubble2, bubble3, bubble4 } = require('../bubble/index');
const { quick1, quick2, quick3, quick4 } = require('../quick/index');
const { shuffleArr } = require('../../../utils');

const suite = new Benchmark.Suite;
const testArr = [];
for (let i = 0; i < 16; i++) {
    testArr.push(Array.from({ length: Math.floor((Math.random() * 6666) + 1) }, () => Math.floor(Math.random() * 20)));
    shuffleArr(testArr[i]);
}
const sortFunc = (a, b) => a - b;

suite.add('bubble1-easiest#test', function() {
    for (let i = 0; i < testArr.length; i++) bubble1(testArr[i].slice());
}).add('bubble2-sorted-optimised', function() {
    for (let i = 0; i < testArr.length; i++) bubble2(testArr[i].slice());
}).add('bubble3-border-optimised', function() {
    for (let i = 0; i < testArr.length; i++) bubble3(testArr[i].slice());
}).add('bubble4-cocktail#test', function() {
    for (let i = 0; i < testArr.length; i++) bubble4(testArr[i].slice());
}).add('quick1-singly#test', function() {
    for (let i = 0; i < testArr.length; i++) quick1(testArr[i].slice());
}).add('quick2-doubly#test', function() {
    for (let i = 0; i < testArr.length; i++) quick2(testArr[i].slice());
}).add('quick3-threely#test', function() {
    for (let i = 0; i < testArr.length; i++) quick3(testArr[i].slice());
}).add('quick4-es6#test', function() {
    for (let i = 0; i < testArr.length; i++) quick4(testArr[i].slice());
})
.add('array_sort#test', function() {
    for (let i = 0; i < testArr.length; i++) testArr[i].slice().sort(sortFunc);
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
