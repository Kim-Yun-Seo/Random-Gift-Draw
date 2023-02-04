'use strict';

const start_Btn = document.querySelector('.startButton');
const ready_Btn = document.querySelector('.readyButton');
const present_Btn = document.querySelector('.present_button');

const pers = document.querySelector('.person');
const pres = document.querySelector('.present');
const fadePerson = document.querySelector('.pickPerson');
const fadePresent = document.querySelector('.pickPresent');
const fadeblock = document.querySelector('.show');

const drumSound = new Audio('./sound/drum.m4a');

start_Btn.addEventListener('click', () => {
  pickPresent();
});

ready_Btn.addEventListener('click', () => {
  ready();
});

const presentArr = [1,2,3,4,5,6];
const presentArr2 = [1,2,3,4,5,6];
let personArr = ["승욱","승욱","지연" ,"지연", "윤서","윤서"];

const playSound = (sound) => {
  sound.play();
}

//선물을 고르는 함수
const pickPresent = () => {

  fadePerson.style.visibility = 'visible';
  fadePresent.style.visibility = 'visible';

  playSound(drumSound);
  setTimeout(function() {
    fadeblock.style.visibility = 'hidden';
  }, 1000);
  //3800

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let randNum = random(0,personArr.length); 0
  let randNum2 = random(0,presentArr.length); 4

  console.log('randNum2 = ', randNum2); 2
  console.log('randNum1 = ', randNum); 1

  if (randNum2 === 4 || 5) {
    // 윤서 or 지연
    fadePresent.style.background = `url(img/${randNum2 + 1}.jpeg) center/cover`;
    while (personArr[randNum] == "승욱") {
      randNum = random(0,personArr.length);
    }
    if (personArr[randNum] == "윤서") {
      fadePerson.style.background = "url(img/wook.jpg) center/cover";
      // personArr.splice(randNum,1);
    } else if (personArr[randNum] == "지연") {
      fadePerson.style.background = "url(img/ji.jpg) center/cover";
      // personArr.splice(randNum,1);
    }
    
  } else if (randNum2 === 2 || 3 ) {
    // 승욱 or 윤서
    fadePresent.style.background = `url(img/${randNum2 + 1}.jpeg) center/cover`;
    while (personArr[randNum] === "지연") {
      randNum = random(0,personArr.length);
    }
    if (personArr[randNum] == "승욱") {
      fadePerson.style.background = "url(img/wook.jpg) center/cover";
      // personArr.splice(randNum,1);
    } else if (personArr[randNum] == "윤서") {
      fadePerson.style.background = "url(img/yun.jpg) center/cover";
      // personArr.splice(randNum,1);
    }
    
    
  } else if (randNum2 === 0 || 1) {
    // 지연 or 승욱
    fadePresent.style.background = `url(img/${randNum2 + 1}.jpeg) center/cover`;
    while (personArr[randNum] === "윤서") {
      randNum = random(0,personArr.length);
    }
    if (personArr[randNum] == "승욱") {
      fadePerson.style.background = "url(img/wook.jpg) center/cover";
      // personArr.splice(randNum,1);
    } else if (personArr[randNum] == "지연") {
      fadePerson.style.background = "url(img/ji.jpg) center/cover";
      // personArr.splice(randNum,1);
    }
    
  } 

  // personArr.splice(randNum,1); 
  // for (let i = 0; i < 5; i++) {
  //   fadePresent.style.background = `url(img/.jpg) center/cover`;
  // }
  // presentArr.splice(randNum2,1);
  // personArr.splice(randNum,1);
  presentArr.splice(randNum2,1);
  personArr.splice(randNum,1);
  console.log('personArr = ', personArr);
  console.log('presentArr = ',presentArr );
  console.log('-------------------- = ', );
  
  if (personArr.length === 0) {
    alpha();
  }
}

const ready = () => {
  fadeblock.style.visibility = 'visible';
}

const alpha = () => {
  console.log('done = ', );
}
