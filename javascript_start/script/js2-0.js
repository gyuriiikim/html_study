// answer_btn, error, text_check, text_type
// 변수
const answer_btn = document.querySelector('#answer_btn')
const text_check = document.querySelector('#result2')
const text_type = document.querySelector('#result1')

// 출력
console.log(answer_btn)
console.log(text_check, text_type)

// 1.answer_rtn 클릭했을 때
answer_btn.addEventListener('click', function(){
    // 2. prompt 값 입력
    let error = window.prompt('인증문자를 입력하세요')
    // 3. 2번 값을 테이터타입이 result1 출력
    text_type.value = typeof(error)
    // 3. 3번 값을 테이터타입이 result2 출력
    text_check.value = error
})
