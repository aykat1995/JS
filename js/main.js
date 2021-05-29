let startButton = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];
let yearValue = document.getElementsByClassName("year-value")[0];
let monthValue = document.getElementsByClassName("month-value")[0];
let dayValue = document.getElementsByClassName("day-value")[0];
let expensesItem = document.getElementsByClassName("expenses-item");

let expensesItemBtn = document.getElementsByTagName("button")[0];
let optionalExpensesItemBtn = document.getElementsByTagName("button")[1];
let countBudgetBtn = document.getElementsByTagName("button")[2];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

let incomeItem = document.getElementsByClassName("choose-income")[0];
let checkSavings = document.getElementById("savings");
let sumValue = document.getElementsByClassName("choose-sum")[0];
let percentValue = document.getElementsByClassName("choose-percent")[0];

let money, time;


startButton.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");    

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.addEventListener('click', function(){
        console.log(expensesItem.length);
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
    
    
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
                appData.sumOfExpenses = sum;
            } else {
                i = i - 1;
            }
            expensesValue.textContent = sum;
        }
    });

    optionalExpensesItemBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses = opt;
            console.log(appData.optionalExpenses);
            optionalExpensesValue.textContent += appData.optionalExpenses + ' ';
        }
    });
    
    countBudgetBtn.addEventListener('click', function() {
    
        if(appData.budget != undefined) {
    
            appData.moneyPerDay = ((appData.budget / 30) - (appData.sumOfExpenses / 30)).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный достаток";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний достаток";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий достаток";
            } else levelValue.textContent = "Произошла ошибка";
        } else
            dayBudgetValue.textContent = "Произошла ошибка"; 
    });
    
    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        appData.income = items.split(",");
        incomeValue.textContent = appData.income;
    });
    
    
    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });
    
    sumValue.addEventListener('input', function(){
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum / 100 /12 * percent;    
            appData.yearIncome = sum / 100 * percent;   
    
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    
    percentValue.addEventListener('input', function(){
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum / 100 /12 * percent;    
            appData.yearIncome = sum / 100 * percent;   
    
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,  
}





