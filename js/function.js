document.getElementById('cashOut').addEventListener('click', function () {
    document.getElementById('addMoneyForm').classList.add('hidden');
    document.getElementById('cashOutForm').classList.remove('hidden');
});

document.getElementById('addMoney').addEventListener('click', function () {
    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
})