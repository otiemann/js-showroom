function myFunction(a, n) {
    let arr = a.slice(-n);
    return arr;
}

console.table(myFunction([1,2,3,4,5],3));
console.table(myFunction([10,9,8,7,6],5));
