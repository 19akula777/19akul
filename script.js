
	let money = prompt('Ваш бюджет на месяц?');
		time = prompt('Введите дату в формате YYYY-MM-DD');
		money_day = money / 30;


	let appData = {
		budget: money,
		timeData: time,
		expenses: {},
	    optionalExpenses:'' ,
	    income:[] ,
	    savings: false,
	    money_day: money_day
	    
	};

	for (let i = 0; i < 2; i++) {
		let question1 = prompt('Введите обязательную статью расходов в этом месяце');
			question2 = prompt('Во сколько обойдется?');

		if ( typeof (question1) != null && question1 != '' && typeof (question2) != null && question2 != ''
		&& typeof (question1) === "string") {
			appData.expenses[question1] = question2;
			
		} else {

		}	
	};

	console.log(appData);

	switch (true){
		case appData.money_day < 100:
			console.log('Низкий уровень достатка');
			break;
		case appData.money_day >= 100 && appData.money_day <= 1000:
			console.log('Средний уровень достатка');
			break;
		case appData.money_day > 1000:
			console.log('Высокий уровень достатка');
			break;
	};





	

