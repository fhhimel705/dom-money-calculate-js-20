function getValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}
function getInnerTextById(textId) {
  const text = document.getElementById(textId);
  const value = parseFloat(text.innerText);
  return value;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeValue = getValueById("income-field");
  const foodValue = getValueById("food-field");
  const rentValue = getValueById("rent-field");
  const clothseValue = getValueById("clothes-field");
  //   console.log(incomeValue,foodValue,rentValue,clothseValue);

  const expenses = foodValue + rentValue + clothseValue;
  //   console.log(expenses);
  const totalExpense = document.getElementById("total-expense");
  const balance = document.getElementById("balance");
  if (isNaN(expenses)) {
    alert("please enter an amount");
  } else {
    if (expenses > incomeValue) {
      alert("moye moye");
    } else {
      totalExpense.innerText = expenses;
      balance.innerText = incomeValue - expenses;
    }
  }
});
document.getElementById("save-btn").addEventListener("click", function () {
  const saveValue = getValueById("save-field");
  const income = getValueById("income-field");
  const savingAmount = income * (saveValue / 100);
  const balance = getInnerTextById("balance");
  const saving = document.getElementById("saving-amount");
  const remaining = document.getElementById("remaining-amount");
  const remainingAmount = balance - savingAmount;

  if(savingAmount > balance){
    alert('moye moye');
  }
  else{
    saving.innerText = savingAmount;
    remaining.innerText = remainingAmount;
  }
  
});
