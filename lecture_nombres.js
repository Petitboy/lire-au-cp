/**************
 *  VARIABLES *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreNombres = document.getElementById('titre-nombres');

/************
 *  CHAINES *
 ************/
 
var unites = [];
var dizaines = [];
var centaines = [];
var unitesMille = [];
var dizainesMille = [];
var centainesMille = [];

var baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
var baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
var baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];
var baseUnitesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnitesMille = ['zero-mille', 'un-mille', 'deux-mille', 'trois-mille', 'quatre-mille', 'cinq-mille', 'six-mille', 'sept-mille', 'huit-mille', 'neuf-mille'];
var baseDizainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizainesMille = ['zero-dix-mille', 'un-dix-mille', 'deux-dix-mille', 'trois-dix-mille', 'quatre-dix-mille', 'cinq-dix-mille', 'six-dix-mille', 'sept-dix-mille', 'huit-dix-mille', 'neuf-dix-mille'];
var baseCentainesMille = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentainesMille = ['zero-cent-mille', 'un-cent-mille', 'deux-cent-mille', 'trois-cent-mille', 'quatre-cent-mille', 'cinq-cent-mille', 'six-cent-mille', 'sept-cent-mille', 'huit-cent-mille', 'neuf-cent-mille'];

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
createNewInput(baseIdUnitesMille, baseUnitesMille, 'form-group-unites-mille');
createNewInput(baseIdDizainesMille, baseDizainesMille, 'form-group-dizaines-mille');
createNewInput(baseIdCentainesMille, baseCentainesMille, 'form-group-centaines-mille');

/*********************************************
 *  FONCTION DE SELECTION DES CASES À COCHER *
 *********************************************/
 
function select (base, baseId, unit, affichage) {
	for (let i=0; i<base.length; i++) {
		const x = document.getElementById(baseId[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				unit.push(base[i]);
			} else {
				const index = unit.indexOf(base[i]);
				unit.splice(index, 1);}
		});
	}
}

select(baseUnites, baseIdUnites, unites);
select(baseDizaines, baseIdDizaines, dizaines);
select(baseCentaines, baseIdCentaines, centaines);
select(baseUnitesMille, baseIdUnitesMille, unitesMille);
select(baseDizainesMille, baseIdDizainesMille, dizainesMille);
select(baseCentainesMille, baseIdCentainesMille, centainesMille);

/************************
 *  FONCTION DE MÉLANGE *
 ************************/

function melangerUnChiffre(donnees, affichage) {		
	affichageMelange.textContent = " ";
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

function melangerQuatreChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines et des unités de mille !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		affichageMelange.textContent += donneesUnitesMille[nombreAleatoireUnitesMille] + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerCinqChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de mille et des dizaines de mille !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		affichageMelange.textContent += donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
		+ donneesUnites[nombreAleatoireUnites] + " ";
		}
	}	
}

function melangerSixChiffres(donneesUnites, donneesDizaines, donneesCentaines, donneesUnitesMille, donneesDizainesMille, donneesCentainesMille, affichage) {		
	affichageMelange.textContent = " ";
	if ((donneesUnites.length == 0) || (donneesDizaines.length == 0) || (donneesCentaines.length == 0) || (donneesUnitesMille.length == 0) || (donneesDizainesMille.length == 0) || (donneesCentainesMille.length == 0)){
		window.alert("Vous devez choisir au moins un chiffre des unités, des dizaines, des centaines, des unités de mille, des dizaines de mille et des centaines de mille !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var nombreAleatoireUnites = Math.floor(Math.random() * donneesUnites.length);
		var nombreAleatoireDizaines = Math.floor(Math.random() * donneesDizaines.length);
		var nombreAleatoireCentaines = Math.floor(Math.random() * donneesCentaines.length);
		var nombreAleatoireUnitesMille = Math.floor(Math.random() * donneesUnitesMille.length);
		var nombreAleatoireDizainesMille = Math.floor(Math.random() * donneesDizainesMille.length);
		var nombreAleatoireCentainesMille = Math.floor(Math.random() * donneesCentainesMille.length);
		affichageMelange.textContent += donneesCentainesMille[nombreAleatoireCentainesMille] + donneesDizainesMille[nombreAleatoireDizainesMille] + donneesUnitesMille[nombreAleatoireUnitesMille] + donneesCentaines[nombreAleatoireCentaines] + donneesDizaines[nombreAleatoireDizaines] 
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
	affichageMelange.textContent = " ";
	unites.splice(0, unites.length);
	dizaines.splice(0, dizaines.length);
	centaines.splice(0, centaines.length);
	unitesMille.splice(0, unitesMille.length);
	dizainesMille.splice(0, dizainesMille.length);
	centainesMille.splice(0, centainesMille.length);
}



