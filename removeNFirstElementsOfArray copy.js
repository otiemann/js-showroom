function myFunction(a,n) {
    for(let i = 0; i < n; i++) {
        a.shift();
    }
    console.table(a);
}

myFunction([1,2,3,4,5],2);