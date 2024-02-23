
const dom = {
    kind: document.getElementById('kind'),
    eda: document.getElementById('eda'),
    size: document.getElementById('size'),
    submit: document.getElementById('submit'),
    picture: document.getElementById('picture'),
    comeback: document.getElementById('comeback'),
    toGame: document.getElementById('toGame')
}
let choose = "";
dom.submit.onclick = () => {
    const optionKind = dom.kind.value;
    const optioneda = dom.eda.value;
    const optionsize = dom.size.value;
    choose = `${optioneda} ${optionsize} ${optionKind}`
    showChoice();
}


const showChoice = () => {
    let c;
    choices.forEach(element => {
        if (element.name === choose)
            dom.picture.innerHTML = ` <img src="${element.img}" width="90%"/>   `
     dom.picture.style.marginLeft="42%"
     dom.picture.style.marginTop="7%"
     sessionStorage.setItem('c', choose);
    });
}
dom.toGame.onclick=()=>{
    dom.toGame.style.display="inline-flex";
    dom.toGame.style.padding= "7px 45px";
    dom.toGame.style.justifyContent= "center";
    dom.toGame.style.alignItems="center" ;
    dom.toGame.style.gap="10px";
    dom.toGame.style.borderRadius= "69px";
    dom.toGame.style.background="linear-gradient(141deg, rgba(255, 255, 255, 0.25) 0%, #BD00FF 15.04%, #00E0FF 65.14%, rgba(0, 224, 255, 0.12) 68.68%, rgba(255, 255, 255, 0.15) 93.50%)";
    dom.toGame.style.boxShadow= "0px 0px 21px 0px #0FF";
    dom.toGame.style.color= "#FFF";
    dom.toGame.style.textAlign="center";
    dom.toGame.style.fontFamily= "Rubik";
    dom.toGame.style.fontSize= "25px";
    dom.toGame.style.fontStyle= "normal";
    dom.toGame.style.fontWeight= "500";
    dom.toGame.style.lineHeight="normal";
    dom.toGame.style.mixBlendMode= "hard-light";
    window.location.href="../game/game.html"
}
dom.comeback.onclick=()=>{
    window.location.href="../home/home.html"
}
$.ajax({
    url: "../../data/json1.json",
    success: (result) => {
        choices = result;
    },
});
