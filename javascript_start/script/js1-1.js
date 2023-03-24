// answer_btn
// answer_input
// day1
// day1
// day3
// total
// 변수
let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

//출력
console.log(day1, day2, day3)
console.log(total)
console.log(answer_btn)
console.log(answer_input)

// 속성을 읽는다
//객체.속성

// 속성을 변경한다
// 객체.속성 = 변경값

// 속성
// length, innerHTML, style, value
// answer_input.value = `결과는 ${total}장입니다`

// 요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행 결과
    //console.log(this)
    answer_input.value = `정답은 ${total}장입니다`
})