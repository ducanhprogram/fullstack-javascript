/*
Vòng lặp reduce

Nguyên tắc reduce
- Output của lần lặp trước sẽ là Input của lần lặp sau
---> Giống bài toán tính tổng (Mỗi lần lặp giá trị tổng thay đổi)

Cú pháp: 
reduce (callback, initalValue)

callback sẽ có 3 tham số
- prevValue

TH1: Không có initialValue
+ prevValue mặc định sẽ là phần tử mảng đầu tiên
+ prevValue của lần lặp sau sẽ là return của lần lặp trước
+ Số lần lặp sẽ giảm đi 1

TH2: Có initialValue

+ prevValue mặc định sẽ lấy initialValue
+ prevValue của lần lặp sau sẽ là return của lần lặp trước


- currentValue   ---> Duyệt qua từng phần tử của mảng

- index   --> Index từng phần tử

initalValue: Giá trị khởi tạo

Giá trị của hàm reduce sẽ là return lần cuối cùng
*/

// var numbers = [5, 10, 15, 20, 25, 30];

// var result = numbers.reduce(function (prevValue, currentValue) {
//     console.log(prevValue, currentValue);
//     return prevValue + currentValue;
// }, 0);

// console.log(result);

// var result = numbers.reduce(function (total, number) {
//     console.log(total, number);
//     return total + number;
// }, 0);

// console.log(result);

//Tìm giá trị lớn nhất

// var numbers = [5, 2, 9, 1, 8];

// var result = numbers.reduce(function (max, currentValue) {
//     console.log(max, currentValue);

//     if (max > currentValue) {
//         return max;
//     }

//     console.log(currentValue);
//     return currentValue;
// });

// var resultMin = numbers.reduce(function (min, currentValue) {
//     if (min < currentValue) {
//         return min;
//     }
//     return currentValue;
// });

// console.log(result);
// console.log(resultMin);

//Bài 2:
// Tất cả học viện
// var students = ["An", "Tâm", "Tùng", "Quý", "Hải"];

// //Học viên đi học
// var studentsActive = ["An", "Quý"];

// //Tìm học viện nghỉ học (Reduce)

// var arr = [];
// var result = students.reduce(function (prevValue, currentValue) {
//     console.log(prevValue, currentValue);
//     if (!studentsActive.includes(currentValue)) {
//         prevValue.push(currentValue);
//     }

//     console.log(prevValue, currentValue);
//     return prevValue;
// }, []);

// console.log(result);

//Đếm số lần xuất hiện của một từ trong một chuỗ

// function countOccurrences(text, word) {
//     // Implement the function

//     var arr = text.split(" ");
//     var count = 0;
//     arr.forEach(function (arr) {
//         if (arr.includes(word)) {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countOccurrences("hello world, hello universe", "hello")); // Output: 2

// function findMin(arr) {
//     // Implement the function
//     var result = arr.reduce(function (prevValue, currentValue) {
//         if (prevValue > currentValue) {
//             return currentValue;
//         }
//         return prevValue;
//     });
//     return result;
// }

// console.log(findMin([5, 2, 9, 1, 8])); // Output: 1

// var result = [];
// function countElements(arr) {
//     var result = arr.reduce(function (prevValue, currentValue) {
//         console.log(prevValue, currentValue);
//         prevValue[currentValue] = prevValue[currentValue] + 1;
//         return prevValue;
//     }, {});
//     return result;
// }

// console.log(
//     countElements(["apple", "banana", "apple", "orange", "banana", "apple"])
// );
// // Output: { apple: 3, banana: 2, orange: 1 }

// var numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//     if (number > 3) {
//         return;
//     }
//     console.log(number);
// });

//Bài 3:
var students = ["An", "Tâm", "Tùng", "Tâm", "Quý", "Hải", "Tùng"];

// var arr = [];
// var result = students.filter(function (student) {
//     if (!arr.includes(student)) {
//         arr.push(student);

//         return arr;
//     }
// });

// console.log(result);
// var arr = [];
// var result = students.reduce(function (prev, current) {
//     if (!prev.includes(current)) {
//         console.log(prev, current);
//         arr.push(current);
//         return arr;
//     }
//     return prev;
// }, []);

// console.log(result);

// var result = students.reduce(function (prev, current) {
//     if (!prev.includes(current)) {
//         prev.push(current);
//     }
//     return prev;
// }, []);

// console.log(result);

//Bài 4: Làm phẳng mảng

var numbers = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// function flatArr(arr) {
//     var result = arr.reduce(function (prev, current) {
//         if (Array.isArray(current)) {
//             return prev.concat(flatArr(current));
//         }
//         return prev.concat(current);
//     }, []);
//     return result;
// }

// console.log(flatArr(numbers));
// console.log(numbers);

var flatArr = numbers.flat(3);
console.log(flatArr);
