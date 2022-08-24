let money = prompt("Ваш бюджет на месяц?", "1000"),
    time = prompt("Введите дату в формате YYYY?/MM/DD", "2022/08/24");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

// alert(money / 30); // Даёт такой же результат
alert(appData.budget / 30);