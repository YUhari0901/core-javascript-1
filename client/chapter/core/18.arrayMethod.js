
/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10,100,1000,10000]
Array.isArray([])

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}


/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item,index){
  // user[0] = 10
  this[index] = item
},user)


const span = document.querySelectorAll('span');


span.forEach((item,index)=>{

  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    console.log(index);
  })
  
})


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()
// console.log(arr);
// splice
//        시작 제거 [추가] 
arr.splice(1,0,23,5)
// console.log(arr);
// sort


// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

arr.sort((a,b)=>{
  return a - b
})

console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let nickName = 'tiger';
`안녕 나는 ${nickName} 이야`

let todo = ['밥먹기','미용실가기','코딩공부하기'];


let template = todo.map((todoList)=>{
  return /* html */ `<li>${todoList}</li>`
  // return /* html */ '<li>'+ todoList +' </li>'
})

template.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item)
})


// console.log(template);

let newArray = arr.map( item => item * 2 )
// console.log(newArray);


/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

// console.log( arr.indexOf(999) );

// lastIndexOf

// includes
// console.log( arr.includes(99) );

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join





















