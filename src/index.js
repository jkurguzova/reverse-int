module.exports = function reverse (n) {
let x=Math.abs(n);
let result=0;
while (x) {
result = result * 10 + x % 10;
x = Math.floor(x / 10);
}
return(result);
}
