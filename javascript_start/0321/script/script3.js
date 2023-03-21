// 변수
const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')
// 출력
console.log(btn1)
console.log(btn1.innerHTML)
console.log(btn[0])
console.log(btn[1])
console.log(btn[2])
console.log(btn[3])
// 내용변경 == 대입한다
btn1.innerHTML = '확인완료' // =은 대입한다는 의미르 지늬고 있다
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'caffe'
btn[3].innerHTML = 'blog'