// 로또 만들어 보기
const SETTING = {
    name: "lotto",
    count: 6,
    maxNum:45
}

function playLotto(){
    const lottoset = new Set(); // set은 들어갔을 때 중복되면 삭제됨
    const {count, maxNum} = SETTING;
    while (lottoset.size < count) {
        const randomNumber  =parseInt(Math.random()*maxNum, 10)+1;
        lottoset.add(randomNumber)
    }

    return Array.from(lottoset);
}

console.log(playLotto());
console.log(playLotto().sort((a,b) => a-b));
console.log(playLotto().sort((a,b) => b-a));