// var hosting test(var hoisting) = 끌어올리기
// 어디에 선언했던지 간에 최상위로 끌어올려서 실행한다.
// 영역도 {}안에서만 사용이 되는데, 블록도 무시한다.

// console.log(testVar); //undefined
// var로 선언되어 있지 않아도 변수명 = 값 이렇게 할당이 되면 var testVar = 2; 로 할당된 것 처럼 동작

// testVar = 2;
// var testVar; // 선언만 된 것


// console.log(testVar); // 2

// 아래에서 선언(var)이 되어있지 않고, 위에서 호출할 경우 오류 발생
// console.log(testVar3);
// testVar3 = 10;


// 아래 선언이 되어있어서 끌어올림  그 변수는 존재하지만 그 값을 알려면 순서대로 내려가야 한다. 
// 선언은 되었으나 값은 출력한 후에 세팅이 되기 때문에 undefined
// console.log(testVar4);
// testVar4 = 10;
// var testVar4;


// local variable
// {} 안에서만 사용이 가능하다
// {
//     let age = 20;
//     console.log("inner: "+ age);
// }
// console.log("outter: "+ age);


// console.log(age2); // undefined
// {
//     age2 = 30;
//     var age2;
// }
// console.log(age2); // 30
