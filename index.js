// let a = null
// console.log(typeof null)    // object
 
// console.log(a)  
// var a = 5;  

// const arr = [0,1,2,3]
// arr[4] = 5
// console.log(arr.length)

// var x = 20;
//  function foo() {
//      console.log(x)
//      var x =  10;
//  }
//   foo()

// console.log('start')
// setTimeout(() => {
//     console.log('Timeout')
// }, 2000)
// console.log('ENd')

// for(var i= 1; i<=3; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// {
//     let a = 1;
//     let b = 2;
//        console.log(a)
//        console.log(b)
// }
// console.log(a)
//        console.log(b)


// const num1 = [1,2,3,4]
// const num2 = [5,6,7,8]

// const jointArray = [...num1 , ...num2]
// console.log(jointArray)


// console.log ([1,2,3] == [1,2,3]);


// console.log("5" + 3) it will concatenate two string output is 53 and it will convert the no into string(in case of Addition) 
// console.log('5' - 3) behind the scene js is a typer convserion it automatically coverts
// the string into a number(in case of Subtraction )


// const numbers = [10,20,30,40,50]
// const dividedByTwo = numbers.map(num => num / 2);

// console.log(dividedByTwo);

// console.log(1<2<3)
// console.log(3>2>1)

// console.log(5 == '5')
// console.log(5 === '5')

// var a = 5;
// console.log(a++); post increment operator increse the value by 1 but give the privious value
// console.log(a);

// let a = null
// console.log(typeof null);  object

// const arr1 = [1,2]
// const arr2 = [1,2]

// console.log(arr1 == arr2);


// const numbers = [0,1,2,3,4,5]
// numbers.push(6)
// console.log(numbers);


// let a = 12 ;
// console.log(a)

// const pi = Math.PI;
// console.log(pi)

// let a = 32;
// a = 50;
// console.log(a);

// console.log(typeof null);

// var a;
// console.log(typeof a)      //undined ka type undefine

// for(var i= 1; i<51; i++){
//     console.log(i);

// }

// const arr = ["sanam teri kasam", "Dilwale", "dhadak", "dhadkan", "Rabta"];
// arr.forEach(function(value) {
//     console.log(value);
// })

setTimeout(function() {
     console.log('timer');
}, 5000);

function x(y){
    console.log('x');
    y();
}
   x(function y() {
    console.log('y');

   });

   

  

