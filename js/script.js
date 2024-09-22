document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    if (phoneNumber === '01645915231' && pinNumber === '1234') {
        console.log('Loged in');
        window.location.href = "/home.html"
    }
    else {
        alert('Wrong Number or Password');
    }
    console.log(phoneNumber,pinNumber);
    
})