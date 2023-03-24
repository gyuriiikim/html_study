const answer_btn = document.querySelector('#answer_btn')
const money2 = document.querySelector('#result2')
const money1 = document.querySelector('#result1')
const total = document.querySelector('#result')

console.log(answer_btn, money1, money2, total)

answer_btn.addEventListener('click',function(){
    console.log(this)
    let num = window.prompt('입금하실 금액을 입력해 주십시오')
    console.log(typeof Number(num)) //-> prompt에는 value가 붙을 수 없다
    console.log(typeof Number(money2.value)) //->input에만 value
    money1.value = Number(num)
    money2.value = 100
    console.log(money2.value)
    money2.value = Number(money2.value)
    total.value = Number(num)+Number(money2.value)
    let st_num = Number(num)+Number(money2.value)
    total.value =st_num.toLocaleString('ko-kr')
})

// ------------------------------------------------------------ 선생님 답!!
    //1. 버튼 클릭시 prompt 입금액 입력받기
    //let num = window.prompt('입금하실 금액을 입력해 주십시오')
    //2. 1번 값입금액(money1) 출력하기
    // money1.value = num.toLocaleString('ko-kr')
    //3. 이자(money2) 100원 출력하기
    //money2.value =100
    //4. 입금액+이자 데이터 확인하기(number인지)
    //console.lig(typeof num)
    //5. 확인한 데이터 더해서 최종 변수 저장하기, 숫자+숫자=숫자
    // let result = num+100
    //6. 6번값 total변수에 3자리 콤마 붙여서 출려하기
    // total.value = result.toLocaleString('ko-kr')