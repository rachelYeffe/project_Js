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