/**
 * arrow function을 확인해 본다.
 * arrow function으로 사용할 API가 setTimeout이라 
 * web browser 띄우고 javascript를 실행한다.
 */

// setTimeout(function() {
//     console.log("gkdl..");
// }, 1000)

// // arrow function 나타내면
// setTimeout(() => {
//     console.log("gkdl..11");
// }, 2000)

// this context of arrow function 
// const myObj = {
//     runTimeout() {
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window 
//             console.log(this === window);
//         });
//     }
// }

// myObj.runTimeout();


// const myObj = {
//     runTimeout() {
//         setTimeout(function(){
//             // 지금 이 영역에서의 this는 window 
//             console.log(this === window);
//         });
//     }, 

//     printDate() {
//         console.log("print data 출력");
//     }
// }

// myObj.runTimeout();

// bind() 함수 말고 arrow function을 적용해보자
// bind()를 생략한 상태에서도 this가 context를 유지하고 있다고 생각하면 된다.
// 그래서 'print data 출력'이 나옴
// arrow function은 context를 유지해 주기 때문
const myObj = {
    runTimeout() {
        // arrow function 적용해보자
        setTimeout(() => {
            console.log(this === window);
            this.printData();
        }, 1000);
    }, 

    printData() {
        console.log("print data 출력");
    }
}

myObj.runTimeout();

