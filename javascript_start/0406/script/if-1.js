console.log('논리데이터 연습 ---------------------')
console.log(true)
console.log(false)
console.log(true+2) //3
console.log(false+10) //10 false가 0이라고 인식하는 것은 숫자라고 인식할때그럼
console.log(typeof true) //boolean
console.log(typeof false) //boolean -> 논리데이터 타입 이라는 뜻
console.log(typeof false+10)  //boolean10(논리데이터)
let bo = true+10
console.log(typeof bo) //number
console.log(true+null) //1
console.log(false+null) //0
console.log('비교연산자 -------------------------------')
// let a =10
// let b = 20
// let c ='20'
// let d = 0
// console.log(a,b,c)
// console.log(a==b) //false
// console.log(b==c) //true 만약 =을 하나 더 쓰면 거짓으로 나옴(데이터로기준)
// console.log(a!=b) //true
// console.log(b!==c) //true
// console.log(a>b) //false 
// console.log(a<=b)//true
// console.log(!d) //!<-값을 반전시킴
// console.log(!b) //false 
console.log('조건식----------------------------------------')
/*
    if(날씨 == '비'){우산챙기기}
    if(날씨 != '맑음'){ '날씨가 맑지 않으면'의 예시우산챙기기}
    if(점수 >= 60){자격증 합격}
    if(점수 < '재시험'){점수가 60점 이하면 재시험이다 / =표시는 안넣어도됨}
*/
/* let weather = window.prompt('오늘 날씨 어때?')
if(weather == '비'){
    window.alert('우산챙기기') //조건이 참이 아니면 실행이 되지 않음
} */
let a = true
let b = false
let c = 10
let d =20
if(a==true){console.log('a는 참이다')} //o
if(c>10) {console.log('c는 10보다 크다')} // x
if(d<c) {console.log('d는 c보다 작다')} // x
if(d<=20){console.log('d는 20보다 작거나 같다')} //o
if(b!=true){console.log('b는 참이 아니다')} //o