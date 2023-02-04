'use strict';

const start_Btn = document.querySelector('.startButton');
const ready_Btn = document.querySelector('.readyButton');
const showPerson = document.querySelector('.pickPerson');
const showPresent = document.querySelector('.pickPresent');
const readyblock = document.querySelector('.show');
const errorblock = document.querySelector('.errorshow');
const alphaPlay_Btn = document.querySelector('.alphaPlayButton');

const drumSound = new Audio('./sound/drum.m4a');
const yeahSound = new Audio('./sound/yeah.m4a');
const endingSong = new Audio('./sound/song.m4a');

const presentArr = [0,1,2,3,4,5];
const presentArr2 = [0,1,2,3,4,5];
const memberArr = ["승욱","승욱","지연" ,"지연", "윤서","윤서"];
const repeatarr = [];
let count = 0;

start_Btn.addEventListener('click', () => {
  pickPresent();
});

ready_Btn.addEventListener('click', () => {
  ready();
});

alphaPlay_Btn.addEventListener('click', () => {
  if (count === 0) {
    alphaGame();
  } else {
    readyblock.style.visibility = 'visible';
    readyblock.style.background = "url(img/finish.JPEG) center/cover"
    playSound(endingSong);
  }
})

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const playSound = (sound) => {
  sound.play();
}
const pickPresent = () => {
  showPerson.style.visibility = 'visible';
  showPresent.style.visibility = 'visible';
  playSound(drumSound);

  setTimeout(function() {
    readyblock.style.visibility = 'hidden';
  }, 3800);

  let personRandNum = random(0,memberArr.length);
  let presentRandNum = random(0,presentArr.length);

  if (memberArr.length > 0) {
    while (repeatarr.includes(presentRandNum)) {
      presentRandNum = random(0,presentArr.length);
      
    }
  }
  
  if (memberArr[personRandNum] === "승욱") {
    if (presentRandNum === 4 ) {
      while (presentRandNum === 4 || presentRandNum === 5 ||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      }      
    } else if (presentRandNum === 5) {
      while (presentRandNum === 5 || presentRandNum === 4||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      }
    }
  } 
  else if (memberArr[personRandNum] === "지연") {
    if (presentRandNum === 2 ) {
      while (presentRandNum === 2 || presentRandNum === 3||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      }    
    } else if (presentRandNum === 3 || presentRandNum === 2) {
      while (presentRandNum === 3||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      }       
    }
  } 
  else if (memberArr[personRandNum] === "윤서") {
    if (presentRandNum === 0 ) {
      while (presentRandNum === 0 || presentRandNum === 1||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      } 
    } else if (presentRandNum === 1) {
      while (presentRandNum === 1 || presentRandNum === 0||repeatarr.includes(presentRandNum)) {
        presentRandNum = random(0,presentArr.length);
      } 
    }
  }
  repeatarr.push(presentRandNum);
  if ((memberArr[personRandNum] === "승욱") && (presentRandNum !== 4) && (presentRandNum !== 5)) {
    showPerson.style.background = "url(img/wook.jpg) center/cover";
    showPresent.style.background = `url(img/${presentArr2[presentRandNum]}.jpeg) center/cover`
    memberArr.splice(personRandNum,1); 

  } else if ((memberArr[personRandNum] === "지연") && (presentRandNum !== 3) && (presentRandNum !== 2)) {
    showPerson.style.background = "url(img/ji.jpg) center/cover";
    showPresent.style.background = `url(img/${presentArr2[presentRandNum]}.jpeg) center/cover`
    memberArr.splice(personRandNum,1); 
    
  } else if ((memberArr[personRandNum] === "윤서") && (presentRandNum !== 0) && (presentRandNum !== 1)) {
    showPerson.style.background = "url(img/yun.jpg) center/cover";
    showPresent.style.background = `url(img/${presentArr2[presentRandNum]}.jpeg) center/cover`
    memberArr.splice(personRandNum,1); 

  } else {
    repeatarr.pop();
    readyblock.style.background = "url(img/again.jpeg) center/cover"
    readyblock.style.visibility = 'visible';
  }
}

const ready = () => {
  if (memberArr.length > 0) {
    readyblock.style.background = "url(img/christmas.jpg) center/cover"
    readyblock.style.visibility = 'visible';
  } else {
    alphaGameStart();
  }
}

const alphaGameStart = () => {
  playSound(yeahSound);
  readyblock.style.background = "url(img/alpha.jpeg) center/cover"
  readyblock.style.visibility = 'visible';
  alphaPlay_Btn.style.visibility = 'visible';
}

const alphaGame = () => {
  playSound(drumSound);
  setTimeout(function() {
  readyblock.style.visibility = 'hidden';
    }, 3800);
  let num1 = random(0,2);

  if (num1 === 0) {
    showPerson.style.background = "url(img/wook.jpg) center/cover";
    showPresent.style.background = `url(img/ji.jpg) center/cover`;
  } else if (num1 === 1) {
    showPerson.style.background = "url(img/yun.jpg) center/cover";
    showPresent.style.background = `url(img/ji.jpg) center/cover`;
  } else {
    showPerson.style.background = "url(img/yun.jpg) center/cover";
    showPresent.style.background = `url(img/wook.jpg) center/cover`;
  }
  count++;
}

