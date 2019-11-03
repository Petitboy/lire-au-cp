const affichageUnites = document.getElementById('affichage-unites');
const affichageDizaines = document.getElementById('affichage-dizaines');
const affichageCentaines = document.getElementById('affichage-centaines');
const affichageMelange = document.getElementById('affichage-melange');
const checkBoxes = document.getElementById('form-group-voyelles');
const titreNombres = document.getElementById('titre-nombres');

//MODE CHIFFRES

var unites = [];
var dizaines = [];
var centaines = [];

var baseUnites = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdUnites = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
var baseDizaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdDizaines = ['zero-dizaines', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
var baseCentaines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var baseIdCentaines = ['zero-centaines', 'cent', 'deux-cents', 'trois-cents', 'quatre-cents', 'cinq-cents', 
'six-cents', 'sept-cents', 'huit-cents', 'neuf-cents'];

for (let i=0; i<baseUnites.length; i++) {
	const x = document.getElementById(baseIdUnites[i]).addEventListener('change', ($event) => {
		if ($event.target.checked) {
			unites.push(baseUnites[i]);
			affichageUnites.textContent = unites;
		} else {
			const index = unites.indexOf(baseUnites[i]);
			unites.splice(index, 1);
			affichageUnites.textContent = unites;}
	});
}

for (let i=0; i<baseDizaines.length; i++) {
	const x = document.getElementById(baseIdDizaines[i]).addEventListener('change', ($event) => {
		if ($event.target.checked) {
			dizaines.push(baseDizaines[i]);
			affichageDizaines.textContent = dizaines;
		} else {
			const index = dizaines.indexOf(baseDizaines[i]);
			dizaines.splice(index, 1);
			affichageDizaines.textContent = dizaines;}
	});
}

for (let i=0; i<baseCentaines.length; i++) {
	const x = document.getElementById(baseIdCentaines[i]).addEventListener('change', ($event) => {
		if ($event.target.checked) {
			centaines.push(baseCentaines[i]);
			affichageCentaines.textContent = centaines;
		} else {
			const index = centaines.indexOf(baseCentaines[i]);
			centaines.splice(index, 1);
			affichageCentaines.textContent = centaines;}
	});
}

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

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageCentaines.textContent = " ";
	affichageDizaines.textContent = " ";
	affichageUnites.textContent = " ";
	affichageMelange.textContent = " ";
	unites = [];
	dizaines = [];
	centaines = [];
}



