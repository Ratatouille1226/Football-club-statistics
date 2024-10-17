const goals = [8, 1, 1, 3, 2, -1, 5];

//  1 Самое большое количество забитых мячей
function statisticsMostGoals(arr) {
	let maxNum = 0,
    	indexArr = 0;

    arr.forEach((item, i) => {
        if (item > maxNum) {
            maxNum = item;
            indexArr = i + 1;
        }
    });
    console.log(`Самый результативный матч был под номером ${indexArr}. В нем было забито ${maxNum} гол(ов).`);
};

// 2 Самые не результативные игры
function ineffectiveGames(arr) {
	let minGoalsSort = arr.filter(item => item >= 0); //Удаляем всё что меньше 0 из массива
	let minGoal = Math.min(...minGoalsSort); //Самое маленькое значение
	let game = []; //Индекс не результативных игр

		arr.forEach((item, i) => {
			if (item === minGoal) {
				game.push(i + 1);
			}
		});
	console.log(`Самые нерезультативные матчи были под номерами ${game.join(", ")}. В каждом из них было забито по ${minGoal} мячу(а).`)
}	

//  3 Общее количество голов за сезон
function statisticsLessGoals(arr) {
	let allGoals = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
			allGoals += arr[i];
        }
    }
    console.log('Общее количество голов за сезон', allGoals);
};

// 4 Были ли автоматические поражения
function automaticDefeats(arr) {
	let automaticDefeatsYes = 0;

	arr.forEach(item => {
		if (item < 0) {
			automaticDefeatsYes++;
		} 
	});

	if (automaticDefeatsYes) {
		console.log('Были автоматические поражения: да');
	} else {
		console.log('Были автоматические поражения: нет')
	}
}

// 5 Среднее количесво голов за матч
function averageNumberOfGoals(arr) {
	let	sumAllGoals = arr.reduce((a, b) => a + b, 0);
	let average = (sumAllGoals / arr.length).toFixed(1);

	console.log(`Среднее количество голов за матч равно ${average}`);
}

// 6 Сортировка массива в порядке возрастания
function sortArray(arr) {
	const newSortArray = arr.toSorted();
	console.log(newSortArray, 'Отсортированный массив в функции');
}

statisticsMostGoals(goals);
ineffectiveGames(goals);
statisticsLessGoals(goals);
automaticDefeats(goals);
averageNumberOfGoals(goals);
sortArray(goals);

console.log(goals, 'Основной массив не изменился');


