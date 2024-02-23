
const submit = document.getElementById('submit')


submit.onclick = () => {
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        password: document.getElementById('password').value,
    }
    localStorage.setItem(user.password, JSON.stringify(user))
    sessionStorage.setItem('password',user.password)
    window.location.href="../choosingPerson/choosingPerson.html"
}