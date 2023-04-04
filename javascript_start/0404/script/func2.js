// 출금하기 버튼 클릭
// 얼마 출금하시겟습니까?
// 3자리 간격 콤마 ?00,000원 출력되었습니다.
// (선택) 남은 잔액은 ????원 남았습니다.
const order = document.querySelector('.order')
const result = document.querySelector('#result')
let total = 10000000000000000000
console.log(order, result)

order.addEventListener('click',minus)


function minus() {
    let money = Number.(window.prompt('얼마 출금하시겟습니까?'))
    let cash = total-money
    result.innerHTML = `${money.toLocaleString('ko-kr')}원 출력되었습니다.<br>남은 잔액은 ${cash.toLocaleString('ko-kr')}원 남았습니다`
}
// 선생님추천 < 변수를 새롭게 작성 해주는 것이 좋다 >
function atm() {
    let money = Number(window.prompt('출금액'))
    let money_str = money.toLocaleString('ko-kr')
    result.innerHTML = `${money_str}원 출금완료`
    let bank_total =total - money
    result.innerHTML += ` 잔액은${bank_total.toLocaleString('ko-kr')}원입니다.`
}
