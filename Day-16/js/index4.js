
var a = 4; 
var b = 6;

if((a > 0 && a != 0) && (b > 0 && b != 0)) {
    console.log(`Hai số cùng dấu dương`);
}else if( (a< 0 && a != 0 ) && (b < 0 && b != 0))  {
    console.log(`Hai số cùng dấu âm`);

}else if((a > 0 && a!= 0) && (b < 0 && b != 0) || (a < 0 && a!= 0) && (b > 0 && b != 0)) {
    console.log(`Hai số trái dấu nhau!`);
}else {
    console.log(`Số 0 không phải số nguyên`);
}