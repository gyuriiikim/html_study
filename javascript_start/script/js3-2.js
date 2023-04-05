// 월-맑음
// 화-맑음
// 수-비
// 목-비
// 금-맑음
// 토-흐림
// 일-눈
let day = ['월', '화', '수', '목', '금', '토', '일']
let weather = ['맑음', '비', '흐림', '눈', '태풍']
const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelectorAll('.result')
console.log(answer_btn, result)

answer_btn.addEventListener('click',function(){
    // console.log(this)
    result[0].innerHTML = `${day[0]}요일 : ${weather[0]}`
    result[1].innerHTML = `${day[1]}요일 : ${weather[0]}`
    result[2].innerHTML = `${day[2]}요일 : ${weather[1]}`
    result[3].innerHTML = `${day[3]}요일 : ${weather[1]}`
    result[4].innerHTML = `${day[4]}요일 : ${weather[0]}`
    result[5].innerHTML = `${day[5]}요일 : ${weather[2]}`
    result[6].innerHTML = `${day[6]}요일 : ${weather[4]}`
})
