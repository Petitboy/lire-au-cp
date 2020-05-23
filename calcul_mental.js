
// Variables générales : score, reponse, start, fin, calcul
const affichageCalcul = document.querySelector('#affichageCalcul');
const affichageFin = document.querySelector('#affichageFin');
const reponse = document.querySelector('#reponse');
const submit = document.querySelector('#submit');
const startButton = document.querySelector('#startButton');

// Variables nombres de calculs et score
var score = 0;
const affichageScore = document.querySelector('#affichageScore');
var count = 0;
var countLimit = 1;
var countAffichage = count+1;
const affichageCount = document.querySelector('#affichageCount');
const numberOfCalculs = document.querySelector('#numberOfCalculs');
const submitNumberOfCaluls = document.querySelector('#submitNumberOfCalculs');
const affichageNumberOfCalculs = document.querySelector('#affichageNumberOfCalculs');

// Variables pour les intervales premier et deuxième nombre
var num1min = 1;
var num1max = 5;
var num2min = 1;
var num2max = 5;
var firstNumbers = [];
var secondNumbers = [];
var results = [];
const number1min = document.querySelector('#number1min');
const submitnumber1min = document.querySelector('#submitnumber1min');
const affichagenumber1min = document.querySelector('#affichagenumber1min');
const number1max = document.querySelector('#number1max');
const submitnumber1max = document.querySelector('#submitnumber1max');
const affichagenumber1max = document.querySelector('#affichagenumber1max');
const number2min = document.querySelector('#number2min');
const submitnumber2min = document.querySelector('#submitnumber2min');
const affichagenumber2min = document.querySelector('#affichagenumber2min');
const number2max = document.querySelector('#number2max');
const submitnumber2max = document.querySelector('#submitnumber2max');
const affichagenumber2max = document.querySelector('#affichagenumber2max');

reset();

submit.addEventListener('click', check);
submitNumberOfCaluls.addEventListener('click', changeNumberOfCalculs);
submitnumber1min.addEventListener('click', changeNumber1min);
submitnumber1max.addEventListener('click', changeNumber1max);
submitnumber2min.addEventListener('click', changeNumber2min);
submitnumber2max.addEventListener('click', changeNumber2max);

// FONCTIONS

function changeNumber1min() {	
	num1min = Number(number1min.value);
	affichagenumber1min.textContent = num1min;
	number1min.value = "";	
}

function changeNumber1max() {
	num1max = Number(number1max.value);
	affichagenumber1max.textContent = num1max;
	number1max.value = "";	
}

function changeNumber2min() {
	num2min = Number(number2min.value);
	affichagenumber2min.textContent = num2min;
	number2min.value = "";	
}

function changeNumber2max() {
	num2max = Number(number2max.value);
	affichagenumber2max.textContent = num2max;
	number2max.value = "";	
}

function reset() {
	viderChaines();
	submit.disabled = true;
	startButton.disabled = true;
	submitNumberOfCaluls.disabled = false;
	affichageNumberOfCalculs.textContent = "";	
	reponse.value = "";
	nettoyageAffichage();
	num1min = 1;
	num1max = 5;
	num2min = 1;
	num2max = 5;
	affichagenumber1min.textContent = num1min;	
	affichagenumber1max.textContent = num1max;
	affichagenumber2min.textContent = num2min;	
	affichagenumber2max.textContent = num2max;
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
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumbers(countLimit) {
	for(i=0; i<countLimit; i++) {
		var firstNumber = getRandomInt(num1min, num1max+1);
		firstNumbers.push(firstNumber);
		var secondNumber = getRandomInt(num2min, num2max+1);
		secondNumbers.push(secondNumber);
		var result = firstNumber + secondNumber;
		results.push(result);
	}
}

function check() {
	count++;
	countAffichage = count+1;
	affichageCount.textContent = countAffichage;	
	let userGuess = Number(reponse.value);
	if (userGuess === results[count-1]) {
		score++;
		affichageScore.textContent = score;
		if (count !== countLimit) {
			newCalculs(firstNumbers, secondNumbers, count);
		} else {
			stopGame();
		}
	}
		else if (userGuess !== results[count-1]) {
			affichageScore.textContent = score;
			if (count !== countLimit) {
				newCalculs(firstNumbers, secondNumbers, count);
			} else {
				stopGame();
			}
	}
	else if (count === countLimit) {
		stopGame();
	}
}

function changeNumberOfCalculs() {	
	let userNumberOfCalculs = Number(numberOfCalculs.value);
	if (userNumberOfCalculs !== 0) {
		countLimit = userNumberOfCalculs;
		affichageNumberOfCalculs.textContent = userNumberOfCalculs;
		submitNumberOfCaluls.disabled = true;
		startButton.disabled = false;
		numberOfCalculs.value = "";
		nettoyageAffichage();
	}
}

function stopGame() {
	let pourcentage = Math.round((score/countLimit)*100);
	affichageFin.textContent = pourcentage + " %";
	affichageScore.textContent = score;
	viderChaines();
	submit.disabled = true;
	startButton.disabled = false;
	submitNumberOfCaluls.disabled = false;
	affichageCount.textContent = count;
	score = 0;
	count = 0;
}

function newCalculs(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' + ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function Start() {
	if (num1min > 999 || num1max > 999 || num2min > 999 || num2max > 999) {
		alert('Maximum 999');
	} else if (num1max < num1min || num2max < num2min) {
		alert('Min < ou = Max');
	} else {
		numberOfCalculs.value = "";
		startButton.disabled = true;
		submitNumberOfCaluls.disabled = true;
		getRandomNumbers(countLimit);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
	}
}

function aide() {
	affichageAide.style.color = "black";
}
	
