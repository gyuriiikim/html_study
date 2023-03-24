const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
const total = document.querySelector('#result')

console.log(money1, money2,total, answer_btn)
console.log(money1.value)

answer_btn.addEventListener('click',function(){
    // console.log(this) -> 버튼 동작 확인 콘솔
    //월급&보너스
    console.log(money1.value)
    console.log(typeof Number(money1.value)) //숫자로 나오는지 타입을 확인
    console.log(money2.value)
    console.log(typeof Number(money2.value))
    //결과
    total.value = Number(money1.value)+Number(money2.value)
    console.log(total)
    //변수 (콤마)
    let m1_num =  Number(money1.value)
    let m2_num =  Number(money2.value)
    let str_total = m1_num +m2_num
    total.value = str_total.toLocaleString('ko-kr')
})

//방법 2
//월급
// console.log(money1.value)
// console.log(typeof money1.value)
// let number_type = Number(money1.value)
// console.log(typeof number_type)
// //보너스
// console.log(money2.value)
// console.log(typeof money2.value)
// let number_type2 = Number(money2.value)
// console.log(typeof number_type2)
// //결과
// total.value = number_type+number_type2
// console.log(total)