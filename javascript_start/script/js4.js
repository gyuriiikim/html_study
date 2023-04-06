// 아메리카노 1개 가격 4700원
const order = document.querySelector('#order')
const number = document.querySelector('#number')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
console.log(order,number,result,reset)
const price = 4700 //고정가격
let num = 0 //변경 수략 변수(초기값 0)
let total = 0 //변경 최종가격 변수(초기값 0)
console.log(price,num,total)


// 함수
// 조건문추가 (10개까지만 구입되게 해라)
function order_add(){
    if(num <10){
        num++
    total = price*num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최대구매수량입니다.')
    }
}
function reset_btn(){
    num =0
    total =0
    number.innerHTML = num
    result.innerHTML = total
}
// 이벤트
order.addEventListener('click',order_add)
reset.addEventListener('click',reset_btn)

