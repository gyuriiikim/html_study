let study = ['html', 'css', 'js', 'jq', 'sass', 'git']
let device = ['desktop', 'tablet', 'mobile', 'tv']
let weather = ['맑음', '비', '눈', '흐림', '태풍']
let num = 0
console.log(study, device, weather)
// -------------- 배열속성 및 메서드()
console.log(Array.isArray(study)) //true(참참참)
console.log(Array.isArray(device))
console.log(Array.isArray(weather))
console.log(Array.isArray(num)) //false
// -----------------------
// console.log(study.pop())
// console.log(study) // git이 사라지고 마지막값은 sass가 된다
// console.log(study.pop())
// console.log(study) // sass가 사라지고 jq가 마지막 값이 된다
console.log(study.shift()) // 첫번째 값인html이 사라진다
console.log(study)
study.unshift('html5') //html5 추가
console.log(study)
study.pop()
console.log(study)
study.push('github')
console.log(study)
study.concat(device)
// console.log(study) 결과 변하지않음 (원본을 건들일 수 없음)
console.log(study.concat(device))
console.log(device.concat(study))
console.log('----------------------------------------------------')
study.reverse()
console.log(study)
device.sort()
console.log(device)
console.log('----------------')
// let weather = ['맑음', '비', '눈', '흐림', '태풍']
console.log(weather.slice(0,2)) //순서 0부터 2의 '전'까지나오게 해라
console.log(weather.slice(1,4)) // 1부터 4의전까지인 3가지만 나오게해라
console.log(weather.slice(0,-1)) 
console.log(weather.slice(0)) // 전부 보이게 해라
console.log(weather.slice(2)) //2번째부터 다 보이게 해라
console.log(weather.slice(-1)) //맨뒤에를 지정하기에 좋음
console.log('----------------------------------------------')
// let weather = ['맑음', '비', '눈', '흐림', '태풍']
// weather.splice(0,2)
weather.splice(0,2,'sunny')
console.log(weather)
console.log('--------------------------------')
let yoil = ['월', '화', '수', '목', '금', '토', '일', '']
yoil.push('')
console.log(yoil.join('요일 ')) //마지막데이터는 적용X
console.log('-------------------------------------------------')
let  food = ['김치', '피자', '치킨', '떡볶이', '']
let game = ['롤', '피파', '서든', '메이플']
console.log(food.join('냠냠'))
