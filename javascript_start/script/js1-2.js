// money1, money2, total, answer_btn, answer_input
//변수
let money1 = 100000000
let money2 = 1000000
let total = money1+money2
// 객체,메서드()
// 객체.toLocaleString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
//출력
console.log(money1, money2, total)
console.log(answer_btn, answer_input)
console.log(total_replace)
answer_btn.addEventListener('click',function(){
    // console.log(this)
    answer_input.value = `정답은 ${total_replace}원 입니다`
})