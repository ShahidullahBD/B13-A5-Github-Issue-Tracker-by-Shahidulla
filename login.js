const btnSingin = document.getElementById('btn-singin');

btnSingin.addEventListener('click', function () {
    const user = document.getElementById('inpurUsername').value;
    const pass = document.getElementById('inpurPassword').value;

    if (user === 'admin' && pass === "admin123") {        
        alert('Sing in successful')
        window.location.href ='index.html';
    }else{
        alert('Invalid credentials')
    }
})
