const login_btn = document.querySelector('#login_btn')
const userId = document.querySelector('#user_id')
const userpw = document.querySelector('#user_pw')
const error_result = document.querySelector('#error_result')
console.log(login_btn,userpw, userId,error_result)


// 1. 아이디를 안적고 로그인 누를 시 
// '아이디를 입력하세요'라고 나오게 하기 #error_result
login_btn.addEventListener('click',function(){
    if(userId.value == ''){
        error_result.innerHTML = '아이디를 입력하세요.'
    }
})
