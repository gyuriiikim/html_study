let array = new Array(1,2,3,'H','e','l','l','o')
for(let i=0; i<array.length; i++){
    console.log(array[i])
    console.log(typeof array[i])
}

// let num = 100
// for(let i=1; i<10; i++){
//     num += i
//     continue; // break : 그 값이 바로 넘어와서 멈춘 상태 1 
//     console.log(num, i) //continue : 145
// }
// for(let i=0; i<5; i++){
//     // num += i //num = num+i -> 0=0+0 / 1=0+1 / 3=1+2 / 6=3+3 / 10=6+4
//     // if(i%2==0){num += i} //2로 나누었을때 나머지 값이 0과 같으면(짝수)2,4가 나옴
//     if(i%2==0){
//         continue;
//         num += i //continue는 아래 식을 초기화 한다.
//     }else{break;}
//     }
// console.log(num)

// 다중 for
// 1단 for위치
for(let i=1; i<3; i++){
    // 2단 for : 1단 for가 한번 루프할때 2단 for는
    // 조건이 거짓이 될때까지 모두 루프한다.
    for(let j=3; j>=0; j--){
        console.log(`i=${i}, j=${j}`)
    }
}

// 다중 for 활용 태그 생성
let p_tag = '<p>test</p>'
let li = '<li>list</li>'
document.write('<ul>')
for(let i=0; i<10; i++){
    document.write('<ul>')
    for(let j=0; j<5; j++){
        document.write(li)
    }
    document.write('</ul>')
}

// 다중 for 1행 3열 표*2개
// tabel, tr, td 이용
// 1행 3열 tabel, tr1, td3
// 2행 2열 1,2,2
let td = '<td>cell</td>'
document.write('<table border="1">')
for(let n=0; n<2; n++){
    for(let i=0; i<2; i++){
        document.write('<tr>')
        for(let j=0; j<3; j++){
            document.write(td)
        }
        document.write('</tr>')
    }
}
document.write('</table>')

// 다중 for 활용한 영화관 좌석 만들기
let seat = 1
let number = ['A','B','C','D']
document.write('<table border=1>')
for(let i=0; i<4; i++){
    document.write('<tr>')
    document.write(`<td>${number[i]}</td>`)
    for(let j=0; j<4; j++){
        if(seat>4){seat=1} //방법2 : 만양에 시트가 4개를 넘는 다면 1번만 반복해라
        document.write(`<td>${seat++}</td>`)
    } //모두 돌아간 다음에 (1,2,3,4)
    // seat = 1 -> 위의 for이 끝난다면 seat를 한번만 반복해라
    document.write('</tr>')
}
document.write('</table>')

//무한반복 while
for(let i=0; i<10; i++){
    console.log(i)
}

let i = 0
while(i<10){
    console.log(i)
    i++
}
console.log('------------------------------')
let qa = confirm('점심시간이에요?')
while(qa!=true){
    qa = confirm('점심시간이에요?')
}
alert('밥먹자')