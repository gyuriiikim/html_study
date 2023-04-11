// forEach, for~in, for~of
let study = ['html','css','js','jq','sass','git']
// es5 for
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
// es6 for~of 객체 값에 순차적으로 접근하는 for
for(let i of study){
    console.log(i, study)
}
// es6 for~in 객체 인덱스에 순차적으로 접근하는 for
for(let i in study){
    console.log(i)
}
//es6 forEach 객체의 인덱스, 값에 모두 접근하는 for
study.forEach((value,index,array)=>{
    console.log(value,index,array) //value,index,array가 정해진이름은 아니며 순서는고정
})
// li태그에 접근해서 객체값, 인덱스를 추출하는 JS
const li = document.querySelectorAll('#list li ')
// for ~ in
for(let i in li){
    console.log(i)
}
// for ~ of
for(let i of li){
    console.log(i,li)
}
// forEach
li.forEach((vl,ind,ar)=>{
    console.log(vl,ind,ar)
})
// -------------------------------------------------------------
// 객체와 for~in
let cat = {
    color:['white','black','red','yellow'],
    age:5,
    name:'cookie'
}
for(let i in cat){console.log(i,cat[i])}

let user = {
    name:'홍길동',
    age:20,
    id:'home',
    pw:'1234',
    lang:'ko-kr'
}
const result= document.querySelector('#result')
for(let i in user){
    result.innerHTML += `${i} : ${user[i]}<br>`
}