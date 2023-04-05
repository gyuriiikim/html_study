const user = document.querySelectorAll('.box input')
console.log(user)
// input 마우스 커서를 올렸을 때 == focus
// 이벤트 내에 function은 this대상을 DOM 이벤트 객체로 인식하고
// 화살표 함수는 this를 js 전역객체대상으로 인식하기 때문에
// 정확하게 대상을 구분해서 작성해야 한다.
user[0].addEventListener('focus',function(){bg(this)})
user[1].addEventListener('focus',()=>{bg(user[1])})
user[2].addEventListener('focus',()=>{bg(user[2])})
// 함수
function bg(target){
    bg_reset() //함수 안에서도 함수를 불러들일 수 있음
    return target.style.backgroundColor = '#ff0'
}
function bg_reset(){
    user[0].style.background = 'none'
    user[1].style.background = 'none'
    user[2].style.background = 'none'
}
// 객체.style.backgroundColor = '#ff0'
// --------------------------------------------------------
const like = document.querySelector('.like img')
const cat = document.querySelector('.cat img')
console.log(like, cat)
// 객체.src = '../images/heart_on.png'
like.addEventListener('mouseover',()=>{like_on(like,'heart')})
like.addEventListener('mouseout',()=>{like_reset(like,'heart')})
cat.addEventListener('mouseover',()=>{like_on(cat,'cat')})
cat.addEventListener('mouseout',()=>{like_reset(cat,'cat')})
function like_on(target, name){
    return target.src = `./images/${name}_on.png`
}
function like_reset(target, name){
    return target.src = `./images/${name}_off.png`
}