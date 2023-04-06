let id = 'admin'
let pw = '1234'
if(id=='admin' && pw=='1234'){
    console.log('관리자 로그인 성공')
}else{
    console.log('로그인 실패')
}
// ---------------------------------
// 1~20 사이 숫자를 입력받고 해당 숫자가
// 10보다 작다면 '10이하입니다'
// 아니라면'11이상입니다.'를 출력하세요

// let num = Number(window.prompt('1~20사이 숫자를 입력하세요'))
// if(num <= 10 && num > 0){
//     console.log('10 이하입니다.')
// }else{
//     console.log('10 이상입니다.')
// }
// -----------------------------------------------------------
let a =10
if(a > 10){
    console.log('a>10')
}else if(a == 10){
    console.log('a == 10')
}else if(a < 9){
    console.log('a<9')
}
console.log('if종료')
console.log('-------------------------------------------------')
// 1~20
let number = 1
if(number > 0 && number < 21){ //1~20
    if(number < 11){console.log('10이하')}
    console.log('1단 if 종료위치')
}else{
    console.log('error')
}
console.log('if종료')
// 1~30
let num = 1
if(num > 0 && num < 31){
    if(num < 20){console.log('20이하')}
    console.log('1단 if종료위치')
}else{
    console.log('error')
}