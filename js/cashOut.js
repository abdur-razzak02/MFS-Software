document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const subAmmount = document.getElementById("cashOutAmmount").value;
    const subAmmountNumber = parseFloat(subAmmount);
    const subPin = document.getElementById("cashOutPin").value;

    if (subPin === "1234") {
      const balance = document.getElementById("balance").innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber - subAmmountNumber;

      document.getElementById("balance").innerText = newBalance;
    }
    else {
      alert("Wrong Pin");
    }
  });