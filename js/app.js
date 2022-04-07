//------ function of get amount of expenses------
function getAmountOfExpenses(item) {
    const itemExpenseText = document.getElementById(item + '-cost').value;
    const itemExpenseNumber = parseFloat(itemExpenseText);
    return itemExpenseNumber;

}
// ----- function of get the salary income----
function getSalary() {
    const salaryText = document.getElementById('total-income').value;
    const salaryNumber = parseFloat(salaryText);
    return salaryNumber;

}

//------ calculation of expenses-------
document.getElementById('calculate-btn').addEventListener('click', function () {

    const foodExpenseNumber = getAmountOfExpenses('food');
    const rentExpenseNumber = getAmountOfExpenses('rent');
    const clothesExpenseNumber = getAmountOfExpenses('clothes');
    if (foodExpenseNumber < 0 || rentExpenseNumber < 0 || clothesExpenseNumber < 0) {
        const errorMessage = "Input number not valid. Please input a valid number";
        alert(errorMessage);
    }
    const fullCost = foodExpenseNumber + rentExpenseNumber + clothesExpenseNumber;
    //console.log(fullCost);
    const totalCost = document.getElementById('total-expenses');
    totalCost.innerText = fullCost;
    //console.log(totalCost.innerText);


    const salary = getSalary();
    //console.log(salary);
    if (fullCost > salary) {
        const warningMessage = "There is not enough balance available. You cannot spend this amount of money";
        alert(warningMessage);
    }
    const remainingBalanceText = document.getElementById('total-balance')
    remainingBalanceText.innerText = salary - fullCost;

})
//----savings part js--------
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
    const remainingBalanceNumber = parseFloat(remainingBalanceText)
    remainingBalanceAfterSaving.innerText = remainingBalanceNumber - savingsOfSalary;
    if (savingsOfSalary > remainingBalanceNumber) {
        var message = "This percent of money cannot be saved because there is not enough money in the remaining balance";

        alert(message);
        remainingBalanceAfterSaving.innerText = 'Not enough balance';
    }
})