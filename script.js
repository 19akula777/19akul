
	let money = prompt('Ваш бюджет на месяц?');

	let time = prompt('Введите дату в формате YYYY-MM-DD');

	let question = prompt('Введите обязательную статью расходов в этом месяце');

	let answer = prompt('Во сколько обойдется?');



	appData = {
		money: money,
		timeData: time,
		expenses: {
	    question : answer
	    },
	    optionalExpenses:'' ,
	    income:[] ,
	    savings: false

	    
	};



	console.log(time);
	console.log(money);
	console.log(appData);










