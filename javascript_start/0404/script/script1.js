// 배열, 객체
// 배얄 : 2개 이상의 값 저장소
// 객체 : 2개 이상의 속성:값 저장소
// 배열 vs 객체 : 값에 대한 속성의 유무
// 객체는 값의 의미있는 속성명이 함께 지정되기 때문에
// 의미잇는 지정으로 대상을 쉽게 구분가능하다.
let num = new Array(5,4,3)
console.log(num)
num[4] = 1  //0부터시작함. ex)0,1,2,3,4 = 5
console.log(num)
// vs
let num2 = [1,2,3,4,5,6,7,8,9]
console.log(num2)
num2[20] = 'last'
console.log(num2)
// ------------------------------------- 객체
console.log('---------객체(학원정보예시)')
let study = {
    subiect:['html', 'css', 'js', 'jq', 'sass', 'git', 'photoshop', 'illustrator'],
    name:'홍길동',
    age:20, //나이는 생일이 지날때마다 변하여서 생일 같이 기재
    area:'인천',
    goals:'풀스택',
    birthday:'1990-04-05' //날짜는 문자로들어감
}
console.log(study)
console.log(study.age)
console.log(study.subiect[2])
//study.age++ 를 미리 적어서 콘솔로그에 study.age로 해줘도 됨
console.log(`내일 ${study.name}은 ${++study.age}살이 됩니다.축하해주세요!`) 
console.log(`${study.name}의 시험점수는 ${study.subiect[0]}+${study.subiect[1]}70점, ${study.subiect[2]} 60점입니다.`)