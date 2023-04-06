// 로그인 정보 admin /1234
let userId = 'admin'
let userPw = '5678'

// var2 --------------------------
if(userId =="admin" && userPw == '1234'){
    console.log('로그인 성공')
}else{
    // 아이디 오류, 비밀번호 오류
    if(userId =='admin'){console.log('비밀번호 틀림')}
    else{console.log('아이디 오류')}
}

// var1------------------------------------
// console.log(userId)
// if(userId == 'admin'){
//     if(userPw != 1234){
//         console.log('비밀번호 오류')
//     }else{
//         console. log('로그인 성공')
//     }
// }else{
//     console.log('아이디 오류')
// }
// ---------------------------------------------
/*
true || true == true
true && true == true

true || false == true
true && false == false

false || false == false
false && false == false
*/

// if(value=="오른쪽"){
//     console.log('오른쪽버튼을 눌렀군요!')
// }else if(value=='왼쪽'){
//     console.log('왼쪽버튼을 눌렀군요!')
// }else if(value=='가운데'){
//     console.log('가운데버튼을 눌렀군요!')
// }else {
//     console.log()
// }


let value ="왼쪽"
if(value == '왼쪽' || value == '오른쪽' || value == '가운데'){
    console.log(`${value}버튼을 눌렀군요!`)
}else {
    console.log('확인 할 수없습니다.')
}