const Benchmark = require('benchmark');
const { selection } = require('../selection/index');
const { sleep } = require('../sleep/index');
const { bubble1, bubble2, bubble3, bubble4 } = require('../bubble/index');
const { quick1, quick2, quick3, quick4, quick5 } = require('../quick/index');
const { insertion1, insertion2 } = require('../insertion/index');
const { shell1, shell2 } = require('../shell/index');
const { merge1, merge2 } = require('../merge/index');
const { heap } = require('../heap/index');
const { count3 } = require('../count/index');
const { bucket } = require('../bucket/index');
const { radix } = require('../radix/index');

const suite = new Benchmark.Suite;
const testArr = [];
for (let i = 0; i < 50; i++) {
    testArr.push(Array.from({ length: Math.floor((Math.random() * 2333) + 1) }, (_, index) => index + 1));
    testArr[i].reverse();
}

const sortFunc = (a, b) => a - b;

suite.add('sleep', function() {
    for (let i = 0; i < testArr.length; i++) sleep(testArr[i].slice(), () => 0);
}).add('selection', function() {
    for (let i = 0; i < testArr.length; i++) selection(testArr[i].slice());
}).add('bubble1-easiest', function() {
    for (let i = 0; i < testArr.length; i++) bubble1(testArr[i].slice());
}).add('bubble2-sorted-optimised', function() {
    for (let i = 0; i < testArr.length; i++) bubble2(testArr[i].slice());
}).add('bubble3-border-optimised', function() {
    for (let i = 0; i < testArr.length; i++) bubble3(testArr[i].slice());
}).add('bubble4-cocktail', function() {
    for (let i = 0; i < testArr.length; i++) bubble4(testArr[i].slice());
}).add('insertion1', function() {
    for (let i = 0; i < testArr.length; i++) insertion1(testArr[i].slice());
}).add('insertion2-binary-search', function() {
    for (let i = 0; i < testArr.length; i++) insertion2(testArr[i].slice());
}).add('shell1', function() {
    for (let i = 0; i < testArr.length; i++) shell1(testArr[i].slice());
}).add('shell2-sedgewick', function() {
    for (let i = 0; i < testArr.length; i++) shell2(testArr[i].slice());
}).add('quick1-singly', function() {
    for (let i = 0; i < testArr.length; i++) quick1(testArr[i].slice());
}).add('quick2-doubly', function() {
    for (let i = 0; i < testArr.length; i++) quick2(testArr[i].slice());
}).add('quick3-threely', function() {
    for (let i = 0; i < testArr.length; i++) quick3(testArr[i].slice());
}).add('quick4-threely-stack', function() {
    for (let i = 0; i < testArr.length; i++) quick4(testArr[i].slice());
}).add('quick5-es6', function() {
    for (let i = 0; i < testArr.length; i++) quick5(testArr[i].slice());
}).add('merge1-arr', function() {
    for (let i = 0; i < testArr.length; i++) merge1(testArr[i].slice());
}).add('merge2-linked-list', function() {
    for (let i = 0; i < testArr.length; i++) merge2(testArr[i].slice());
}).add('heap', function() {
    for (let i = 0; i < testArr.length; i++) heap(testArr[i].slice());
}).add('count', function() {
    for (let i = 0; i < testArr.length; i++) count3(testArr[i].slice());
}).add('bucket', function() {
    for (let i = 0; i < testArr.length; i++) bucket(testArr[i].slice());
}).add('radix', function() {
    for (let i = 0; i < testArr.length; i++) radix(testArr[i].slice());
}).add('array_sort', function() {
    for (let i = 0; i < testArr.length; i++) testArr[i].slice().sort(sortFunc);
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('With reversed no repeat data arr, fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
