// 날씨 : 맑음 / 강수 : 20% / 바람 : 3.4m/s / 습도 : 15%
const infor = {
    weather:'맑음',
    rain:'20%',
    wind:'3.4m/s',
    humidity:'15%'
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(infor)
console.log(result, btn)

btn[0].addEventListener('click',function(){
    result.innerHTML = infor.weather
})
btn[1].addEventListener('click',function(){
    result.innerHTML = infor.rain
})
btn[2].addEventListener('click',function(){
    result.innerHTML = infor.wind
})
btn[3].addEventListener('click',function(){
    result.innerHTML = infor.humidity
})