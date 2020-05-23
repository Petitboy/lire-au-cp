
// Variables générales : score, reponse, start, fin, calcul
const affichageCalcul = document.querySelector('#affichageCalcul');
const affichageFin = document.querySelector('#affichageFin');
const affichageResults = document.querySelector('#affichageResults');
const reponse = document.querySelector('#reponse');
const submit = document.querySelector('#submit');
const affichageAide = document.querySelector('#affichageAide');

// Variables nombres de calculs et score
var score = 0;
const affichageScore = document.querySelector('#affichageScore');
var count = 0;
var countLimit = 10;
var countAffichage = count+1;
const affichageCount = document.querySelector('#affichageCount');

// Variables pour les intervales premier et deuxième nombre
var firstNumbers = [];
var secondNumbers = [];
var results = [];
var type ='';

reset();

submit.addEventListener('click', check);

// FONCTIONS

function reset() {
	count = 0;
	score = 0;
	viderChaines();
	submit.disabled = true;
	reponse.value = "";
	nettoyageAffichage();	
	affichageAide.style.color = "#8AEEE7";
}

function viderChaines() {
	firstNumbers = [];
	secondNumbers = [];
	results = [];
}

function nettoyageAffichage() {
	affichageCalcul.textContent = " ";
	affichageScore.textContent = "";
	affichageFin.textContent = " ";
	affichageCount.textContent = "";
	affichageResults.textContent = "";
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumbers(countLimit, num1min, num1max, num2min, num2max, condition1, condition2) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber + secondNumber >= condition1) 
		&& (firstNumber + secondNumber <= condition2)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers2(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + secondNumber >= condition1) 
		&& ((firstNumber % modulo) + secondNumber <= condition2)
		&& (firstNumber + secondNumber <=100)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers3(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + (secondNumber % modulo) >= condition1) 
		&& ((firstNumber % modulo) + (secondNumber % modulo) <= condition2)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) >= (condition1*10))
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) <= (condition2*10))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers4(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + (secondNumber % modulo) >= condition1) 
		&& ((firstNumber % modulo) + (secondNumber % modulo) <= condition2)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) >= 20)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) <= 100)
		&& (firstNumber + secondNumber <=100)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers5(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (firstNumber > secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers6(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) >= secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers7(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) <= secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers8(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) >= (secondNumber % modulo)
		&& ((firstNumber - (firstNumber % modulo)) >= (secondNumber - (secondNumber % modulo)))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers9(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) <= (secondNumber % modulo)
		&& ((firstNumber - (firstNumber % modulo)) > (secondNumber - (secondNumber % modulo)))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function newCalculs(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' + ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function newCalculs2(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' - ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function addition1() {
		reset();
		type = 'addition';
		getRandomNumbers(10, 1, 9, 1, 9, 2, 9);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition2() {
		reset();
		type = 'addition';
		getRandomNumbers(10, 1, 9, 1, 9, 10, 18);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition3() {
		reset();
		type = 'addition';
		getRandomNumbers2(10, 10, 99, 1, 9, 2, 9, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition4() {
		reset();
		type = 'addition';
		getRandomNumbers2(10, 10, 99, 1, 9, 10, 18, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition5() {
		reset();
		type = 'addition';
		getRandomNumbers3(10, 10, 99, 10, 99, 2, 9, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition6() {
		reset();
		type = 'addition';
		getRandomNumbers4(10, 10, 99, 10, 99, 10, 18, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction1() {
		reset();
		type = 'soustraction';
		getRandomNumbers5(10, 1, 9, 1, 9);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction2() {
		reset();
		type = 'soustraction';
		getRandomNumbers6(10, 10, 99, 1, 9, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction3() {
		reset();
		type = 'soustraction';
		getRandomNumbers7(10, 10, 99, 1, 9, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction4() {
		reset();
		type = 'soustraction';
		getRandomNumbers8(10, 10, 99, 10, 99, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction5() {
		reset();
		type = 'soustraction';
		getRandomNumbers9(10, 10, 99, 10, 99, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function check() {
	count++;
	countAffichage = count+1;
	affichageCount.textContent = countAffichage;
	let userGuess = Number(reponse.value);
	if (userGuess === results[count-1]) {
		score++;
		affichageScore.textContent = score;
		affichageResults.textContent += results[count-1] + ' - ';
		reponse.focus();
		if (count !== countLimit) {
			switch (type) {
				case 'addition': 
					newCalculs(firstNumbers, secondNumbers, count);
					break;
				case 'soustraction':
					newCalculs2(firstNumbers, secondNumbers, count);
				}
		} else {
			stopGame();
		}
	}
		else if (userGuess !== results[count-1]) {
			affichageScore.textContent = score;
			affichageResults.textContent += results[count-1] + ' - ';
			reponse.focus();
			if (count !== countLimit) {
				switch (type) {
				case 'addition': 
					newCalculs(firstNumbers, secondNumbers, count);
					break;
				case 'soustraction':
					newCalculs2(firstNumbers, secondNumbers, count);
				}
			} else {
				stopGame();
			}
	}
	else if (count === countLimit) {
		stopGame();
	}
}

function stopGame() {
	let pourcentage = Math.round((score/countLimit)*100);
	affichageFin.textContent = pourcentage + " %";
	affichageScore.textContent = score;
	viderChaines();
	submit.disabled = true;
	affichageCount.textContent = count;
	score = 0;
	count = 0;
}

function aide() {
	viderChaines();
	nettoyageAffichage();
	reset();
	affichageAide.style.color = "black";
}
	
