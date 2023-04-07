// 반복문 ★★★★★ ⭐⭐⭐
/*
    for(초기값; 조건식; 증감식){
        조건식이 참일 때 반복실행구문
    }
*/
// for 초기 변수명 : i, j, m ,n
//i가 0으로 시작해서 i가 10보다 작을때까지 i가증가한다는 말
for(let i=0; i<10; i++){
    console.log(`javascript ${i+1}`)
}
// day1
// day2
// day3
// day4
for(let i=0; i<4; i++){
    console.log(`day${i+1}`)
}
let a = ['html', 'css', 'javascript']
for(let i=0; i<3; i++){
    console.log(a[i])
}

let coffee = ['아메리카노', '카페라떼', '카푸치노', '에스프레소', '돌체라떼']
// 1번 메뉴 아메리카노
// 2번 메뉴 카페라떼....출력
// for(let i=0; i<5; i++){
//     console.log(`${i+1}번 메뉴 ${coffee[i]}`)
// }
console.log('-----------------------------------')
//역순출력 43210
// i가 4부터 시작해서 i가 0과 같거나 클때가지 i가 감소된다.
for(let i=4; i>=0; i--){
    // console.log(i)
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
// ----------------------------------------------------------
let fruits = new Array('사과','망고','오렌지');
console.log(fruits.length) //7 lenght :값이 사라져도 결과 값이 나오게하는
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
//역순 출력 
for(let i=fruits.length-1; i>=0; i--){
    // console.log(i)
    console.log(fruits[i])
}
console.log('----------------------------------------------')
// 반복문 + 조건문
// 반복 { 조건문 }
// 1~20 홀수만 출력
for(let i=1; i<21; i++){
    if(i%2){
        console.log(i)
    }
}
// 5~15까지 짝수만 출력
console.log('-------------------')
for(let i=5; i<16; i++){
    if(i%2==0){
        console.log(i)
    }
}

// 1~10까지 역순 홀수 출력
console.log('--------------------')
for(let i=10; i>0; i--){
    if(i%2){console.log(i)}
}
// 10~20 역순 짝수 출력
console.log('--------------------')
for(let i=20; i>10; i--){
    if(i%2==0){console.log(i)}
}
console.log('-----------------------------')
// 반복문 이용 총 합 구하기
let data = [10,20,30,40,50]
let result = 0
/*result += data[0] //undefined + 10 =NaN
result += data[1] NAN +20 =NaN
result += data[2]
result += data[3]
result += data[4]
*/
for(let i=0; i<data.length; i++){
    result += data[i]
}
console.log(`data 변수의 총 합은 ${result}입니다.`)
console.log('-------------------------------------------')
// 1~10 반복문
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`)
    }else{document.write(`<p class="bg2">${i}</p>`)}
    // document.write(`<p class="bg1">${i}</p>`)
}