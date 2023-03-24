// 변수
// const h1 = document.getElementsByTagName('h1')
// const sub_title = document.getElementsByClassName('sub_title')
// const h3 = document.getElementsByTagName('h3')
// const p = document.getElementsByTagName('p')
// const main = document.getElementById('main')
// const btn = document.getElementById('btn')
// const link = document.getElementById('link')

// // 출력
// console.log(h1)
// console.log(sub_title)
// console.log(h3)
// console.log(p)
// console.log(main)
// console.log(btn)
// console.log(link)

// var vs let const
// document.getElementById, sByTagName, sByClassName == ES5 이전 버전 DOM


// puerySelector ES6 DOM
const box_h4 = document.querySelector('.box > h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelector('p')
const p_main = document.querySelector('#main')
const button = document.querySelector('#btn')
const a_link = document.querySelector('#link')

// 출력
console.log(h1_after, box_h4)
// 객체.style.css속성 = '속성값'
// h1_after.style.content ='ABC'
h1_tag.style.backgroundColor = '#ff0'
console.log(h1_tag) //변수 값 확인
console.log(h2_cls[0])
console.log(h2_cls[1])
console.log(h3_tag)
console.log(p_tag)
console.log(p_main)
console.log(button)
console.log(a_link)