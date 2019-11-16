/**************
 *  VARIABLES *
 **************/

const affichageUnites = document.getElementById('affichage-unites');
const affichageDizaines = document.getElementById('affichage-dizaines');
const affichageCentaines = document.getElementById('affichage-centaines');
const affichageMelange = document.getElementById('affichage-melange');
const titreNombres = document.getElementById('titre-nombres');

/************
 *  CHAINES *
 ************/
 
var unites = [];
var dizaines = [];
var centaines = [];

var baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
var baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
var baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];

/***************************************
* FONCTION DE CREATION DE CONTENU HTML *
****************************************/
function createNewInput (baseId, base, letterRow) {
	for (let i=0; i<base.length; i++) {
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		newInput.id = baseId[i];
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		document.getElementById(letterRow).appendChild(newInput);
		document.getElementById(letterRow).appendChild(newLabel);
	}	
}

createNewInput(baseIdUnites, baseUnites, 'form-group-unites');
createNewInput(baseIdDizaines, baseDizaines, 'form-group-dizaines');
createNewInput(baseIdCentaines, baseCentaines, 'form-group-centaines');


/*********************************************
 *  FONCTION DE SELECTION DES CASES À COCHER *
 *********************************************/
 
function select (base, baseId, unit, affichage) {
	for (let i=0; i<base.length; i++) {
		const x = document.getElementById(baseId[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				unit.push(base[i]);
				affichage.textContent = unit;
			} else {
				const index = unit.indexOf(base[i]);
				unit.splice(index, 1);
				affichage.textContent = unit;}
		});
	}
}

select(baseUnites, baseIdUnites, unites, affichageUnites);
select(baseDizaines, baseIdDizaines, dizaines, affichageDizaines);
select(baseCentaines, baseIdCentaines, centaines, affichageCentaines);

/************************
 *  FONCTION DE MÉLANGE *
 ************************/

function melangerUnChiffre(donnees, affichage) {		
	affichageMelange.textContent = " ";
	titreNombres.textContent = "Lire les nombres suivants : ";	
	if (donnees.length == 0) {
		window.alert("Vous devez choisir au moins un chiffre des unités !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoire = Math.floor(Math.random() * donnees.length);
		affichageMelange.textContent += donnees[nombreAleatoire] + " ";}
	}	
}

function melangerDeuxChiffres(donneesUnites, donneesDizaines, affichage) {		
	affichageMelange.textContent = " ";
	titreNombres.textContent = "Lire les nombres suivants : ";	
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités et un chiffre des dizaines !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		affichageMelange.textContent += donneesDizaines[nombreAleatoireDizaines] + donneesUnites[nombreAleatoireUnites] + " ";	}
		}	
}

function melangerTroisChiffres(donneesUnites, donneesDizaines, donneesCentaines, affichage) {		
	affichageMelange.textContent = " ";
	titreNombres.textContent = "Lire les nombres suivants : ";	
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, un chiffre des dizaines et un chiffre des centaines !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		affichageMelange.textContent += donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

/****************************
 *  FONCTION DE MISE À ZÉRO *
 ****************************/

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageCentaines.textContent = " ";
	affichageDizaines.textContent = " ";
	affichageUnites.textContent = " ";
	affichageMelange.textContent = " ";
	unites.splice(0, unites.length);
	dizaines.splice(0, dizaines.length);
	centaines.splice(0, centaines.length);
}



