// var a = 10;

// var getA = function () {
//     console.log("getA");
// };

// console.log(a);
// getA();

// console.log(window.a);

//Hàm con

var a = 10;

// function display(c) {
//     function showUser() {
//         console.log("Hoàng An F8");
//         console.log(` a = ${a}`);
//         console.log(` c = ${c}`);
//     }
//     showUser();
// }

// display("F8");

/*
 Định nghĩa hàm bên trong 1 hàm khác, có thể:
 - Chỉ được gọi hàm đó bên trong hàm khác (Closure)
 - Được phép sử dụng:
 + Biến toàn cục
 + Tham số của hàm cha
 + Biến cục bộ của hàm cha
 + Tham số của chính nó

*/

// function display() {
//     function showUser() {
//         console.log("Hoàng An F8");
//     }
//     return showUser;
// }

// //==> Chủ động gọi hàm con ở bên ngoài phạm vi
// var showUser = display();
// showUser();

// var sum = function (a) {
//     return function (b) {
//         return a + b;
//     };
// };

// var add = sum(10);

// console.log(add(10));
// console.log(add(20));
// console.log(add(30));

function taskA(callback) {
    setTimeout(function () {
        console.log("Task A completed");
        if (typeof callback === "function") {
            callback();
        }
    }, 2000);
}

function taskB(callback) {
    setTimeout(function () {
        console.log("Task B completed");
        if (typeof callback === "function") {
            callback();
        }
    }, 1000);
}

function taskC(callback) {
    setTimeout(function () {
        console.log("Task C completed");
        if (typeof callback === "function") {
            callback();
        }
    }, 3000);
}

taskA(function () {
    taskB(function () {
        taskC(function () {
            console.log("All tasks completed");
        });
    });
});
