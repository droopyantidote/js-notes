console.log("a" == "a");
VM102:1 true
undefined
362.js:2 VueBackbone: Adding new Model attributes after binding is not supported, provide defaults for all properties
t.onchange @ 362.js:2
d @ lib.min.js:193
h @ lib.min.js:193
o @ lib.min.js:193
e.trigger @ lib.min.js:193
set @ lib.min.js:193
(anonymous) @ app.min.js:8
console.log("a" > "b")
VM207:1 false
undefined
console.log("abb" > "abc")
VM284:1 false
undefined
let str = "AbZ$%m";
console.log(str.charCodeAt(3);
VM500:2 Uncaught SyntaxError: missing ) after argument list
let str = "AbZ$%m";
console.log(str.charCodeAt(6));
VM726:2 NaN
undefined
let str = "AbZ$%m";
console.log(str.charCodeAt(3));
VM735:2 36
undefined
let str = "AbZ$%m";
console.log(str.charCodeAt(4));
VM744:2 37
undefined
console.log(String.fromCharCode(100));
VM907:1 d
undefined
console.log(String.fromCharCode(57));
VM1073:1 9
undefined
console.log(String.fromCharCode(67));
VM1245:1 C
undefined
let str = "sanket";
let str2 = "shikhar";
console.log(str.concat(str2));
VM1480:3 sanketshikhar
undefined
console.log(str.concat("A", "B", "C", "D"));
VM1696:1 sanketABCD
undefined
let str = "sanket";
console.log(str.concat("a", "b", "c", "d"));
    
VM1886:2 sanketabcd
undefined
let str = "abc$mno$ukg";
console.log(str.split("$"));
VM2059:2 (3) ['abc', 'mno', 'ukg']
undefined
let arr = ["abc", "mno", "ukg"]
let str1 = arr.join("$")
console.log(str1);
VM2288:3 abc$mno$ukg
undefined
// sort method
let arr = ["a", "c", "b"]
arr.sort();
console.log(arr);
VM2541:4 (3) ['a', 'b', 'c']
undefined
let arr = ["abbc", "ab", "aba"]
arr.sort();
console.log(arr);
VM2729:3 (3) ['ab', 'aba', 'abbc']
undefined
let arr= [13, 110, 9, 111]
arr.sort()
console.log(arr)
VM2867:3 (4) [110, 111, 13, 9]
undefined
let arr = [13, 110, 9, 111]
arr.sort(function(a, b) {
    return a - b;
}
VM3086:4 Uncaught SyntaxError: missing ) after argument list
let arr = [13, 110, 9, 111]
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);


VM3126:5 (4) [9, 13, 110, 111]
undefined
let arr = [13, 110, 9, 111]
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);
VM3143:5 (4) [111, 110, 13, 9]
undefined
let names = ["ara", "arb", "arz", "arx"]
names.sort();
console.log(names);
VM3395:3 (4) ['ara', 'arb', 'arx', 'arz']
undefined
let names = ["ara", "arb", "arz", "arx"]
names.sort(function(a,b) {
    if(a>b) {
        return -12; // a before b so return negative value
    }
    if(a<b) {
        return 10; // b before a so return  positive value
    }
    if(a === b) {
        return 0; // a and b are equal so return 0
    }
});
console.log(names);
VM3801:13 (4) ['arz', 'arx', 'arb', 'ara']
undefined
let products = [
    { 
        name : "Comb",
        price : 100
    },
    {
        name: "Mirror",
        price: 120
    },
    {
        name: "egg",
        price: 6
    },
    {
        name: "Mic",
        price: 1000
    },
    {
        name: "Pen",
        price: 10
    }
    ]
products.sort( function(a, b) {
if(a.price>b.price) {
    return 3; // product 'b' has to be before 'a' in the final result so return +ve value.
}
    if(a.price<b.price) { 
        return -10; // product 'a' has to be before 'b' in the final result so return -ve value. 
    }
    if(a.price === b.price) {
        return 0; // product 'a' has to be equal to 'b' so return 0.
    }
});
console.log(products);
VM4770:34 (5) [{…}, {…}, {…}, {…}, {…}]0: {name: 'egg', price: 6}1: {name: 'Pen', price: 10}2: {name: 'Comb', price: 100}3: {name: 'Mirror', price: 120}4: {name: 'Mic', price: 1000}length: 5[[Prototype]]: Array(0)
undefined