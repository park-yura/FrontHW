// arrow fuction(화살표 함수)
// 브라우저에서 테스트 할 수 있는 API이다.
// setTimeout : ms 지연 후에 실행되는 함수 , 콜백 함수
// setTimeout(function() {
// console.log("화살표 함수입니다.");
// },2000) // 1000ms = 1초

// 이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 작성해보자
// setTimeout(()=> {
//     console.log("화살표");
// }, 1000);

// 일반적인 함수
// const simpleFunc = function() {
//     console.log('simple function');
// }
// simpleFunc();

// 화살표 함수는 anonymous 함수이다.
// argument가 없는 화살표 함수
// const simpleFunc2 = () => console.log("simple2");
// simpleFunc2();

// argument가 있는 화살표 함수
// const add = (a,b) => a+b;
// console.log(add(1,2));

// const add1 = function(a,b) {
//     return a+b;
// }

// default parameter(디폴트 파라미터: 기본값이 제공된 함수 매개 변수)
// es6 추가
// function showMessage(message, from="IU") {
//     console.log(`${message} by ${from}`);    
// }
// console.log(showMessage('안녕~~', '정우성'));

// ex6 이전 코드
// 디폴트 값이면 IU, IU가 없으면 손예진
// function showMessage2(message, from) {
//     if(from === undefined) {
//         from ='IU';
//     }
//     console.log(`${message} by ${from}`);    
// }
// showMessage2('안녕~', '손예진');

// if 문
/**
 * if(조건식) {
 *      조건식이 참일 경우 실행되는 부분
 * }
 * 조건식이 거짓일 경우 실행되는 부분
 * 
 * if(조건식) {
 *      조건식이 참일 경우 실행되는 부분
 * } else {
 *      조건식이 거짓일 경우 실행되는 부분
 * }
 * 
 * if(조건식A) {
 *      조건식A가 참일 경우 실행되는 부분
 * } else if(조건식B) {
 *      조건식B가 참일 경우 실행되는 부분
 * } else {
 *      조건식A, 조건식B도 다 아닐경우 실행
 * }
 * 
 */

/**
 * 반복문 for문
 * 기준값이 존재하고, 일정한 증감값이 있을 경우 사용한다.
 * 
 * for(let j = length; j>0; j--){} // 감소
 * for(let i=0; i<length; i++) { // 증가
 * i=0부터 length보다 하나 작을 때까지 반복
 * }
 * 
 */

/**
 * 반복문 while()
 * 
 * while(조건식) {
 *      조건식이 참일 경우에만 이 문장을 반복한다.     
 * }
 */

/**
 * 반복문 do ~ while()
 * do {
 *   최소한 한번은 이 부분은 실행된다.
 *   그리고 조건식을 만족하게 되면 계속 반복실행
 * } while(조건식);
 * 
 */

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest 파라미터는 배열형태로 값을 전달한다.
 */

// function printArr(...args) {
//     for (let i = 0; i < args.length; i++) {
//          console.log(args[i]);
//      }
// };
// printArr('javascript', 'java', 'spring');

// for ... of 값이 없으면 쭉~ 값을 뽑아냄(of 연산자)
// function printArr(...args) {
//     for (const arg of args) {  // args있을 때까지
//          console.log(arg);
//      }
// };
// printArr('javascript', 'java', 'spring');

