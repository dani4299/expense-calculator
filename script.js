document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const expenseInputs = document.querySelectorAll(".expense-input");
    const totalExpenses = document.getElementById("total-expenses");
  
    calculateButton.addEventListener("click", function () {
      let sum = 0;
      expenseInputs.forEach((input) => {
        const value = parseFloat(input.value) || 0;
        sum += value;
      });
  
      totalExpenses.textContent = "Total Expenses: " + sum.toFixed(2);
    });
  });
  