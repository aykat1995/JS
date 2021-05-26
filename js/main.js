let startButton = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName("income-value");
let mothsavingsValue = document.getElementsByClassName("mothsavings-value");
let yearsavingsValue = document.getElementsByClassName("yearsavings-value");
let yearValue = document.getElementsByClassName("year-value")[0];
let monthValue = document.getElementsByClassName("month-value")[0];
let dayValue = document.getElementsByClassName("day-value")[0];
let expensesItem = document.getElementsByClassName("expenses-item");

let expensesItemBtn = document.getElementsByTagName("button")[0];
let optionalExpensesItemBtn = document.getElementsByTagName("button")[1];
let countBudgetBtn = document.getElementsByTagName("button")[2];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

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
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

      chooseLevel: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        if (appData.moneyPerDay < 100) {
            console.log("Минимальный достаток: " + appData.moneyPerDay);
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний достаток: " + appData.moneyPerDay); 
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий достаток: " + appData.moneyPerDay);
        } else console.log("Произошла ошибка");
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.mothIncome = save / 100 /12 * percent;
            alert("Доход в месяц с депозита: " + appData.mothIncome);
        }
    },

    chooseIncome: function() {
        let check = prompt("Что может принести дополнительный доход? (Перечислите через запятую)", "");
        if (typeof(check) != "string" || check == "" || isNaN(check) == false) {
            alert("Неправильно внесены данные!","");
        } else {
            appData.income = check.split(",");
            appData.income.push(prompt("Может быть что-то еще?",""));
            appData.income.sort();
        }

        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i+1) + ". " + item);
         });
        
    },    
}



