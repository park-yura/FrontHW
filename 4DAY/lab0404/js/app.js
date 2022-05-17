/*
    Javascript
    - 웹에서 동적으로 데이터나 DOM을 조작하기 위한 언어
    - 웹에서 사용하는 클라이언트(Web Browser) 및 서버(Node.js)용 언어이다.
    
    Javascript
    - 현재는 javascript library나 framework와 함께 사용 된다.
    - Javascript(VanillaJS)
    - Angular(Google) - React.js(Meta, facebok) - Vue.js(EvanYou) - Typescript - ? Svelte
    - jQuery : Java - SpringFramework같은 거랑 비슷함 
               역할상 Javascript가 해야할 많은 내용을 간단하게 사용할 수 있도록 구현된 library
*/

// javascripte에서 일반적으로 말하는 객체
// javascript에서 중요한 것은 객체를 구성하는 모양
// 아래와 같은 형태의 객체는 가장 일반적이기도 하지만 이를 literal(값) 형태의 객체
// let coffee = {
//     type: "라떼",
//     price: 5500
// }
// console.log(coffee);

// 값을 변수에 대입해서 출력해보는 방법
// let coffeeType = "라떼";
// let coffeePrice = 5500;
// console.log(coffeeType);
// console.log(coffeePrice);

// let coffee = {
//     type: "Americano",
//     price: 4000, 
// }

// 리터럴 객체에서 값을 가져오는 방법
// console.log(coffee.type);
// console.log(coffee.price);
// console.log(coffee["type"]);
// console.log(coffee["price"]);

// 리터럴 객체에 없는 속성을 가져올 경우
// console.log(coffee.name); // undefined 값을 가져온다.

// 그냥 빈 객체를 선언할 경우
// let obj ={};
// console.log(obj);

// 변수나 객체를 선언할 때 사용하는 선언자
// let: 값을 다시 할당해도 되고, {}안에서 값이 유용함
//      local variable
// const : 변하지 않는 상수 값을 정의할 때 사용
//          const로 선언한 변수에 값을 다시 할당하게 되면 오류가 발생한다.
//          const PI = 3.14, const LOCAL_URL = "http://www.daum.net";
// const coffee1 = {
//     type: "capuccino",
//     price: 6000
// }

// javascript를 사용할 때 맨 마지막 문장에는 ';'을 붙여준다,
// javascript에서 ';'를 사용하지 않고 쓰기도 하는데 그럴 경우에는 맨 마지막 문장에서 엔터를 쳐서 작성하면 된다.
// 그러면 다음 문장으로 인식한다.

// 성능때문에 javascript의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에 
// 맨 마지막에는 ';'을 붙이는 것이 좋다.

// console.log("하이~");

// javascript에서는 대소문자를 반드시 구분해야 한다.
// console.log("하이");
// Console.log("하이");

/**
 * API Document 주석
 */
