
const enter = document.getElementById('enter');
enter.onclick = () => {
    const password = document.getElementById('password').value;
    const userStr = localStorage.getItem(password);
    if ((userStr != null)) {
        sessionStorage.setItem('password',password)
        window.location.href="../choosingPerson/choosingPerson.html"    }
    else {
        alert(" ...אתה לא מחובר ");
        window.location.href = "../home/home.html"
    }
}
