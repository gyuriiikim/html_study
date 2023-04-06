let point = 5000
const point_all_btn = document.querySelector('#point_all_btn')
const user_point = document.querySelector('#user_point')
const use_point =document.querySelector('#use_point')
const point_reset = document.querySelector('#point_reset')
console.log(point,point_all_btn,user_point,use_point,point_reset)


// 1. 보유포인트가 미리 적립
user_point.value = point
point_reset.style.display = 'none'
// 2. 전액사용 클릭 시 보유 -> 사용 값 전환 (전환 후 보유 0)
point_all_btn.addEventListener('click',()=>{
    use_point.value = user_point.value
    user_point.value = 0
    reset_display()
})
// 3. X 클릭 시 사용 -> 보유 값 전환(전환 후 사용0)
point_reset.addEventListener('click',()=>{
    user_point.value = use_point.value
    use_point.value = 0
    reset_display()
})
// 4. 사용값 1 이상이면 X 보이고 아니면 X 숨기기
function reset_display(){
    if(use_point.value >= 1){
        point_reset.style.display = 'inline-block'
    }else{
        point_reset.style.display = 'none'
    }
}
