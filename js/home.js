// Add money
document.getElementById('addMoneyBtn')
.addEventListener('click', function (event){
    event.preventDefault();
    const addAmmount = document.getElementById('ammountInput').value;
    const addAmmountNumber = parseFloat(addAmmount);
    const addPin = document.getElementById('pinInput').value;

    if (addPin === '1234') {
        console.log('You can add money');        
    }
    else {
        alert('Worng Pin')
    }

    const balance = document.getElementById('balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber + addAmmountNumber

    document.getElementById('balance').innerText = newBalance;
    
});