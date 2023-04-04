const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)

order.addEventListener('click',japangi)

// japangi() //함수호출
// 함수 기본 문법
// function 함수명() {실행재사용문법}
// 함수 생성과 작성과 호츌은 별개로 처리한다.
function japangi() {
    let menu = window.prompt('주문하시겟습니까?')
    result.innerHTML = `주문하신 ${menu} 나왔습니다`
}