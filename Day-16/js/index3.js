
let a = 10;
let b = 20;
let c = 151;


// Cách 1
if( a > b && a > c ) {
    console.log(`Số lớn nhất là a: ${a}`);
}else if( b > a && b > c) {
    console.log(`Số lớn nhất là b: ${b}`);

}else {
    console.log(`Số lớn nhất là c: ${c}`);
}


//Cách 2

let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log("Số lớn nhất là: " + max);