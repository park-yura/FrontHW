/**
 * People
 * this.name 프로퍼티를 갖게 된다.
 * this.age  프로퍼티를 갖게 된다.
 * this 상황에 따라 가리키는 범위 달라진다.
 *      지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
 */

// class People {
//     // 생성자는 값을 초기화 할 때 사용한다.
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // 메소드
//     show() {
//         console.log(`${this.name}은 ${this.age}살 입니다.`);
//     }
// }

// //                 생성자를 호출!
// const people = new People("김병관", 20);
// people.show();


/**
 * Java 클래스 기반 객체지향 언어
 * JavaScript 프로토 타입 기반 객체지향 언어
 */

// const user1 = {};
// const User = {
//     name = "IU",
//     age = 20
// }

// user.singing = true;
// 객체가 존재하는데, 그 객체에 속성을 추가해서 객체를 만드는 방식

// java code - 클래스 기반
// class UserInfo {
//     private String name = "IU";
//    public void SVGAnimateTransformElement(String name) {
//        this.name = name;
//    }
// }
// UserInfo userInfo = new UserInfo();
// userInso.age = 10;

class Coffee{
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }

    get type() { // get method
        return this._type;
    }

    set type(value) { // set method
        this._type = value;
    }
}

const coffee = new Coffee("라떼", 5000);
console.log(coffee.type);



/**
 * 간단한 객체 생성해 보기
 */

// const name = "IU";
// const age = 30;

// // 간단하게 객체를 생성하면 이렇게 값을 설정할 수 있음
// const obj = {
//     name: name,
//     age : age
// }

// function getObj() {
//     const name2 = "잇지";
//     const getName2 = function() { //get
//         return name2;
//     }

//     const setName = function(newName) { // set
//         name2 = newName;
//     }

//     const printName = function() { // 출력
//         console.log(name2);
//     }

//     return {
//         getName2, 
//         setName
//     }
// }

// let obj2 = getObj();
// console.log(obj2);

// console.log(obj2.getName2());

// const obj3 = getObj();
// console.log(obj3);

