// money, snack, ice, total, answer_btn, answer_input
let money = 10000
let snack = 2000
let ice = 1000
let total = money-snack-ice
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
//출력
console.log(money, snack, ice, total, total_replace)
console.log(answer_btn, answer_input)
answer_btn.addEventListener('click', function(){
    answer_input.value = `정답은 ${total_replace}원 입니다.`
})
