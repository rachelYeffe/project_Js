
const dom ={
    game: document.getElementById('game'),
    home: document.getElementById('home')
}

dom.game.onclick =()=>{
    console.log('j');
    window.location.href="../game/game.html"
}

dom.home.onclick =()=>{
    console.log('l');
    window.location.href="../home/home.html"
}
const picture = document.getElementById('picture');
let o = sessionStorage.getItem('c');


const drawMens = () => {

    mens.forEach(element => {
    if (element.name === o) {
      picture.innerHTML = `<img src="${element.img}"/> `
      picture.style.height = "6%";
      picture.style.marginLeft = "29%";
      picture.style.marginTop = "3%";
   

    }
  });
  }
  $.ajax({
    url: "../../data/json1.json",
    success: (result) => {
      mens = result;
      drawMens();
    },
  });