// F12 -> console 항상 실행하기
// javascript == 객체지향프로그래밍언어
// 변수 = 데이터 저장소
// var, let, const
// var vs let ==> 중복변수명 에러 구분
// const 상수
// a.length 매소드는 함수라고도 한다
// console.log('a') -> 문자데이터a를 결과창에 나온다
// window.alert(10) -> 숫자10을 alert(팝업창) 윈도우에 입력 -> 윈도우 팝업창에 ~~
// console.log('안녕하세요'.lenght) -> 안녕하세요문자데이터길이를 결과값에 나타낸다
//위 순서 -> 객체. 메소드(객체.속성)
let a = 10
let b = 'hello'
let c = a
console.log(a.length) //10의 숫자길이데이터를 결과 값으로 나타낸다 / X(문자가 아니라 정의 할 수 없다)
console.log(a+b) // 10과 hello의 데이터를 결과 값으로 나타낸다 / 10hello(더하기or연결하기)
console.log(typeof b) // 결과 값에 문자라는 데이터결과 값이 나타난다. / string
window.alert(c) // 결과 팝업창에 10이라는 숫자를 나타낸다 / 10
window.alert(a+c) // 결과 팝업창에 20이라는 숫자를 나타낸다 / 20