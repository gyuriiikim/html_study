// 변수
const more = document.getElementById('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
// 출력
console.log(more)
console.log(img)
console.log(plus[0], plus[1])
console.log(join_btn)
console.log(li[0], li[1], li[2], li[3], li[4])

// ------------------------------style속성
// 객체, 속성
// style ==css
// 속성종류 => font-size, color, font-weight, background ....
// 객체.style.속성 = 값
more.style.color = 'red'
img[0].style.backgroundColor = 'pink'
plus[0].style.backgroundColor = 'lime'
plus[1].style.backgroundColor = 'yellow'
join_btn.style.backgroundColor = 'lightgreen'
li[0].style.backgroundColor = 'lightblue'
li[1].style.backgroundColor = 'rgba(0,0,0,0.5)'
li[2].style.backgroundColor = 'rgba(225,225,0,0.5)'
li[3].style.backgroundColor = 'rgba(225,225,225,0.8)'
li[4].style.fontSize = '3rem'

// 변경 값
// more.innerHTML = '더보기'
// plus[0].innerHTML = '더하기'
// plus[1].innerHTML = '더하기1'
// join_btn.innerHTML = '여기보세요'
// li[0].innerHTML = '변수'
// li[1].innerHTML = '출력'
// li[2].innerHTML = '변경'
// li[3].innerHTML = 'js'
// li[4].innerHTML = 'css'