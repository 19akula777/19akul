
	let money = prompt('Ваш бюджет на месяц?');
		time = prompt('Введите дату в формате YYYY-MM-DD');
		question = prompt('Введите обязательную статью расходов в этом месяце');
		answer = prompt('Во сколько обойдется?');
		money_day = money / 30;

	alert( money_day );

	appData = {
		butzhet: money,
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

