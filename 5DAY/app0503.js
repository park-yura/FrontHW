/**
 * 명명법
 * - 관습적으로 이렇게 사용하기로 약속을 했기 때문에 
 * - 회사마다 다를 수 있음, 프로젝트마다 다를 수 있음
 * 
 * 카멜(camel) : 소 - 대 - 소 ex) let coffeeType, 
 *                                makeCoffee(){}
 *               함수, 변수, 메소드
 * 파스칼(pascal) : 대 - 대 - 소 ex) class User{}, function Person(){}
 *                  생성자, 클래스
 * lower(전체 소문자) : 전체 소문자 ex) let, const 예약어, 키워드
 * upper(전체 대문자) : 전체 대문자 ex) const PI = 3.14; 
 *                                      const PI = Math.PI;
 */

/**
 * 데이터 타입의 분류
 * 1) 기본타입(primitive type) : int, String, boolean, undefined, null, Symbol
 * 2) 참조타입(reference type) : Object, primitive type이 아닌 것
 *             object type
 * 
 * 기본타입을 제외한 모든 타입은 참조(객체) 타입이다.
 * 
 * pass by value
 * assign by value
 * immutable
 * 
 * pass by reference
 * assign by reference
 * mutable
 * 
 */

// 기본타입
// let a = 10;
// let b = a;
// b = 20;
// console.log(a,b);

// 참조타입 pass by reference
// let list = [1,2,3,4,5];
// let list2 = list;
// console.log("list=", list," list2=", list2 );
// list2[2]=100;
// console.log("list=", list, " list2=", list2);

/**
 * undefined 값이 나오는 경우
 * 
 * - 값을 아직 할당받지 못한 변수의 값
 * - 없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값
 * - 없는 배열의 요소를 읽으려고 시도했을 때의 값
 * - 아무것도 반환하지 않는 함수가 반환하는 값
 * - 함수를 호출했을 때 전달받지 못한 인수의 값
 */

// console.log("하이"); //브라우저 콘솔에서 실행하면 리턴값이 없기 때문에 undefined 나옴

/**
 * 리터럴 객체의 프로퍼티 값 확인 하기
 */

// const coffee = {
//     type: "Americano",
//     price: 4000
// };

// console.log(coffee.price);
// console.log(coffee.sirup); // 없는 속성값 undefined
// coffee.sirup="설탕많이"; // 프로퍼티 추가
// console.log(coffee);
// console.log(coffee.sirup);

// delete coffee.price; // 프로퍼티 삭제
// console.log(coffee); 

// 해당 객체에 프로퍼티가 있는지 확인하는 연산자
// true, true, true가 나옴
// console.log("price" in coffee);
// console.log("type" in coffee);
// coffee 객체에는 없는 속성이나 js 최상의 객체인 object에 있는 속성도 사용할 수 있기 때문에 true가 나옴
// js 모든 객체는 object를 상속 받는다. 
// console.log("toString" in coffee);

// 템플릿 리터럴
// ``(역따옴표)로 묶은 문자열을 말한다.
// let strTemplate = `오늘도 벌써 3시간 밖에 안남았네..`;
// console.log(strTemplate);

// 줄바꿈 표시 해보기
// let strTemplate2 = `오늘도 벌써 3시간\n밖에 안남았네..`;
// console.log(strTemplate2);

// 보간 표현식
/**
 * 템플릿 리터럴 안에 플레이스 홀더를 넣을 수 있다.
 * 플레이스 홀더는 ${...}로 표시가 된다.
 * 플레이스 홀더: 실제 값을 나중에 넣기 위해 확보한 장소
 * ${}를 활용하여 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있다.
 */
// let a=2, b=3; //한줄에 두개를 선언할 수도 있다.
// console.log(`${a}+${b}=${a+b}`);
// console.log(a+"+"+b+"="+(a+b));
// let now = new Date();
// console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`);


// 문자열 리터럴
// let str = String.raw `오늘은 과제가 별로 없었으면 좋겠어요`;
// let str1 = String.raw `오늘은 과제가 별로\n 없었으면 좋겠어요`;
// console.log(str1);

// const 사용하는 방법
// 상수 값을 할당한다.
// const people = {
//     userName: "손흥민",
//     age: 30
// }

// people.userName="IU";
// const로 선언했는데 값이 바뀌는 이유는
// 다시 할당만 안되고, 안에 내용을 수정하는것은 된다.

// console.log(people);
// people = {
//     userName2: "블랙핑크",
//     age2:22
// }
// console.log(people);

// const 예제 하나 더 확인
const list = [1,2,3,4,5];
console.log(list);
list[2]=100;
console.log(list);
