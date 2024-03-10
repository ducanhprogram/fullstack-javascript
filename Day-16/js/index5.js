
var a = 98;
var b = 167;

var c = 127;

if((a > b && a > c && b > c)) {
    console.log(`Giá trị tăng dần a, b, c là: ${a}, ${b}, ${c}`);
}else if (a > b && a > c && b < c) {
    console.log(`Giá trị tăng dần a, c, b là: ${a}, ${c}, ${b}`);
}else if( b > a && b > c && a > c) {
    console.log(`Giá trị tăng dần b, a, c là: ${b}, ${a}, ${c}`);
}else if( c > b && c > a && b > a) {
    console.log(`Giá trị tăng dần c, b, a là: ${c}, ${b}, ${a}`);
}else if ( b > a && b > c && c > a ) {
    console.log(`Giá trị tăng dần b, c, a là: ${b}, ${c}, ${a}`);
}else if ( c > b && c > a && a > b) {
    console.log(`Giá trị tăng dần c, a, b là: ${b}, ${c}, ${a}`);
}