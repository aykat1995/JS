let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = +prompt("Во сколько обойдется?", "");
    
        if (typeof(a) === "string" && typeof(b) != null && typeof(a) !== null && a.length < 50 && a != "" && b != "") {
            appData.expenses[a] = b;
        } else {
            console.log("Введены некорректные данные");
            console.log(i);
            i--;
        }
        i++;
    }    
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

if (appData.moneyPerDay < 100) {
    console.log("Минимальный достаток: " + appData.moneyPerDay);
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний достаток: " + appData.moneyPerDay); 
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий достаток: " + appData.moneyPerDay);
} else console.log("Произошла ошибка");

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.mothIncome = save / 100 /12 * percent;
        alert("Доход в месяц с депозита: " + appData.mothIncome);
    }
}

checkSavings();