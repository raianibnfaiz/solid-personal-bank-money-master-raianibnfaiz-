function getAmountOfExpenses(item) {
    const itemExpenseText = document.getElementById(item + '-cost').value;
    const itemExpenseNumber = parseFloat(itemExpenseText);
    return itemExpenseNumber;

}
function getSalary() {
    const salaryText = document.getElementById('total-income').value;
    const salaryNumber = parseFloat(salaryText);
    return salaryNumber;

}
document.getElementById('calculate-btn').addEventListener('click', function () {

    const foodExpenseNumber = getAmountOfExpenses('food');
    const rentExpenseNumber = getAmountOfExpenses('rent');
    const clothesExpenseNumber = getAmountOfExpenses('clothes');
    const fullCost = foodExpenseNumber + rentExpenseNumber + clothesExpenseNumber;
    console.log(fullCost);
    const totalCost = document.getElementById('total-expenses');
    totalCost.innerText = fullCost;
    console.log(totalCost.innerText);


    const salary = getSalary();
    console.log(salary);
    const remainingBalanceText = document.getElementById('total-balance')
    remainingBalanceText.innerText = salary - fullCost;

})
document.getElementById('save-btn').addEventListener('click', function () {
    const amountOfSavingText = document.getElementById('savings-percent').value;
    const percentageSaving = parseFloat(amountOfSavingText);
    const salaryAmount = getSalary();
    const savingsOfSalary = percentageSaving / 100 * salaryAmount;
    console.log(savingsOfSalary);
    const remainingBalanceText = document.getElementById('total-balance').innerText;
    const saving = document.getElementById('saving-amount');
    saving.innerText = savingsOfSalary;
    const remainingBalanceAfterSaving = document.getElementById('remain-after-saving');
    remainingBalanceAfterSaving.innerText = parseFloat(remainingBalanceText) - savingsOfSalary;
})