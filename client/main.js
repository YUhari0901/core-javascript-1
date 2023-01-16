

import { diceAnimation, getNode } from "./lib/index.js";


// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기 
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기 

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 




const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');



// let stopAnimation;


// IIFE

const handlerRollingDice = (() => {
 
  let isRolling = false;
  let stopAnimation;  

  return () => {
    if(!isRolling){
      // console.log('첫번째 클릭');
      stopAnimation = setInterval(diceAnimation,100)
    }else{
      // console.log('두번째 클릭');
      clearInterval(stopAnimation);
    }
  
    isRolling = !isRolling;
  }

})()





rollingDiceButton.addEventListener('click',handlerRollingDice)

// let eventOff = bindEvent(rollingDiceButton,'click',handlerRollingDice);







