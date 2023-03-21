// 객체지향프로그래밍 언어 자바스크립트 기본순서
// 객체 변수 선언 -> 변수 속성, 매소드 활용 결과 값
// 객체 아이디 변수 선언
// *변수 생성 후 콘솔로 올바른 변수인지 반드시 체크한다!
// 변수
const title = document.getElementById('title')
const contents = document.getElementById('contents')
const link = document.getElementById('link')
// 변수 (클래스 DOM)
const first = document.getElementsByClassName('first')[0]
// 위의 대가로[] 뜻은 첫번째 first의 이름을 가진 것을 데려오겠다.
const last = document.getElementsByClassName('last')[0]
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a')
// 변수에 index를 준다면
// const a1 = document.getElementsByClassName('a')[0]
// const a1 = document.getElementsByClassName('a')[1]
// const a1 = document.getElementsByClassName('a')[2]
// const a1 = document.getElementsByClassName('a')[3]
// console.log(a1, a2, a3, a4)
// 변수(태그 DOM)
const li = document.getElementsByTagName('li')
const dl = document.getElementsByTagName('dl')
// 출력
console.log(dl)
console.log(li)
console.log(a[1], a[2], a[3])
console.log(menu[2])
console.log(first)
console.log(title, contents, link)
console.log(title)