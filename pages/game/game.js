
const dom = {
  body: document.getElementById('user'),
  question: document.querySelector('#question'),
  answer0: document.getElementById('answer0'),
  answer1: document.getElementById('answer1'),
  answer2: document.getElementById('answer2'),
  answer3: document.getElementById('answer3'),
  song: document.getElementById('song'),
  pointss: document.getElementById('points')

}
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');


var el = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
const close = document.getElementById('close');
const allclose = document.getElementById('allclose');
allclose.onclick = () => {
  window.location.href = "../home/home.html";
}
allclose.onclick = () => {
  window.location.href = "../home/home.html";
}
//שליפת שם משתמש
const password = sessionStorage.getItem('password');
const userStr = localStorage.getItem(password);
const user = JSON.parse(userStr);
const idnameuser = document.createElement('div');
console.log(user.firstName, idnameuser);
idnameuser.innerHTML = user.firstName + " " + user.lastName;
dom.body.appendChild(idnameuser);
let timeLeft = 10;
let points
let correct = 6;
let answers = 10;
let random;
let interval;
let level = 0;
let r;
let arrjson = Array.from({ length: 20 }, () => false);
let p = sessionStorage.getItem('points');
if (p == 60)
  points = 70;
else
  points = 0;
const picture = document.getElementById('picture');
let o = sessionStorage.getItem('c');


const drawQuestion = () => {

  questions[2].forEach(element => {
    if (element.name === o) {
      picture.innerHTML = `<img src="${element.img}"/> `
      picture.style.height = "10%";
      picture.style.marginLeft = "70%";
      picture.style.marginTop = "5%";
   

    }
  });

  console.log(arrjson);
  console.log(points);
  let showQuestion = () => {
    if (points >= 60) {
      level = 1;
      if (points == 130) {
        window.location.href = "../win/win.html"
      }
    }
    sessionStorage.setItem('points', points);

    if (points == 60) {
      arrjson = Array.from({ length: 20 }, () => false);
      alert("עלית רמה");
      window.location.href = "../game1/game1.html"
      points += 10;
      answers = 12;
      correct = 6;
    }
    if (answers == 0)
      window.location.href = "../end/end.html"
    if (answers <= 0 || correct <= 0) {
      clearInterval(interval);
      return;
    }

    do {
      random = Math.floor(Math.random() * questions[level].length);
    } while (arrjson[random]);

    arrjson[random] = true;
    console.log(random);
    dom.song.innerHTML = `<embed src="${questions[level][random].song}"loop="false" autostart="true" width="0" height="0" >`
    console.log(dom.song);
    dom.question.innerHTML = questions[level][random].question;
    console.log(dom.question);

    for (let index = 0; index < 4; index++) {
      let a = "answer" + index;
      window[a].innerHTML = questions[level][random].array_answers[index];
    }

    answers--;
  };
  showQuestion();
  interval = setInterval(showQuestion, 11000);
};
let help = 0;
dom.answer0.onclick = () => {
  if (questions[level][random].correct_answer == 0) {
    el[help].style.filter = "hue-rotate(120deg) saturate(80%) brightness(80%)";


    answer0.style.backgroundColor = '#00ff15';
    setTimeout(() => {
      answer0.style.backgroundColor = "";
    }, 200);
    correct--;
    points += 10;
  }
  else {
      answer0.style.backgroundColor = '#FF003D';
      setTimeout(() => {
        answer0.style.backgroundColor = "";
      }, 200);
    
    el[help].style.filter = "hue-rotate(0deg) saturate(80%) brightness(40%)";
  }
  help++;
  clearInterval(interval);
  drawQuestion();

  timeLeft = 10;
  countdown();

}
dom.answer1.onclick = () => {
  if (questions[level][random].correct_answer == 1) {

    el[help].style.filter = "hue-rotate(120deg) saturate(80%) brightness(80%)";


    answer1.style.backgroundColor = '#00ff15';
    setTimeout(() => {
      answer1.style.backgroundColor = "";
    }, 200);
    correct--;
    points += 10;
  }
  else {
      answer1.style.backgroundColor = '#FF003D';
      setTimeout(() => {
        answer1.style.backgroundColor = "";
      }, 200);
    
    el[help].style.filter = "hue-rotate(0deg) saturate(80%) brightness(40%)";
  }
  help++;
  clearInterval(interval);
  drawQuestion();

  timeLeft = 10;
  countdown();

}
dom.answer2.onclick = () => {
  if (questions[level][random].correct_answer === 2) {
    el[help].style.filter = "hue-rotate(120deg) saturate(80%) brightness(80%)";


    answer2.style.backgroundColor = '#00ff15';
    setTimeout(() => {
      answer2.style.backgroundColor = "";
    },200);

    correct--;
    points += 10;

  }
  else {
      answer2.style.backgroundColor = '#FF003D';
      setTimeout(() => {
        answer2.style.backgroundColor = "";
      }, 200);
    
    el[help].style.filter = "hue-rotate(0deg) saturate(80%) brightness(40%)";
  }
  help++;
  clearInterval(interval);
  drawQuestion();

  timeLeft = 10;
  countdown();

}
dom.answer3.onclick = () => {
  if (questions[level][random].correct_answer == 3) {
    el[help].style.filter = "hue-rotate(120deg) saturate(80%) brightness(80%)";


    answer3.style.backgroundColor = '#00ff15';
    setTimeout(() => {
      answer3.style.backgroundColor = "";
    },200);
    correct--;
    points += 10;
  }
  else {
      answer3.style.backgroundColor = '#FF003D';
      setTimeout(() => {
        answer3.style.backgroundColor = "";
      }, 200);
    
    el[help].style.filter = "hue-rotate(0deg) saturate(80%) brightness(40%)";
  }
  help++;
  clearInterval(interval);
  drawQuestion();

  timeLeft = 10;
  countdown();

}
const timerElement = document.getElementById('clock');

const countdown = setInterval(() => {
  if (timeLeft >= 10)
    timerElement.textContent = `00:${timeLeft} `;
  else
    timerElement.textContent = `00:0${timeLeft} `;
  timeLeft--;

  if (timeLeft < 0) {
    timeLeft = 10;
    countdown();
  }
}, 1000);


$.ajax({
  url: "../../data/json.json",
  success: (result) => {
    questions = result;
    drawQuestion();
  },
});

