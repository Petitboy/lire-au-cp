/**************
 *  Variables *
 **************/

const affichageVoyelles = document.getElementById('affichage-voyelles');
const affichageConsonnes = document.getElementById('affichage-consonnes');
const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var graphemeVoyelles = [];
var graphemeConsonnes = [];
var graphemes = [];

var baseVoyellesUneLettre = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê'];
var baseVoyellesDeuxLettres = ['ou', 'oi', 'ai', 'ei', 'an', 'am',
'en', 'em', 'un', 'in', 'im', 'on', 'om', 'eu'];
var baseVoyellesTroisLettres = ['ain', 'ein', 'oin', 'oeu'];
var baseConsonnesUneLettre = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
var baseConsonnesDeuxLettres = ['ph', 'ch', 'qu', 'br', 'cr', 'dr', 'fr', 'gr', 
'pr', 'tr', 'vr', 'bl', 'cl', 'fl', 'gl', 'pl'];

/*****************************
 * Fonction de creation html *
 *****************************/
function createNewInput (base, letterRow) {
	for (let i=0; i<base.length; i++) {
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		newInput.id = base[i];
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		document.getElementById(letterRow).appendChild(newInput);
		document.getElementById(letterRow).appendChild(newLabel);
	}	
}

createNewInput(baseVoyellesDeuxLettres, 'voyelles_deux_lettres');
createNewInput(baseVoyellesUneLettre, 'voyelles_une_lettre');
createNewInput(baseVoyellesTroisLettres, 'voyelles_trois_lettres');
createNewInput(baseConsonnesUneLettre, 'consonnes_une_lettre');
createNewInput(baseConsonnesDeuxLettres, 'consonnes_deux_lettres');

/**************************
 *  FONCTION DE SÉLECTION *
 **************************/

function select (base, grapheme, grapheme2, affichage) {
	for (let i=0; i<base.length; i++) {
		const x = document.getElementById(base[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				grapheme.push(base[i]);
				grapheme2.push(base[i]);
				affichage.textContent = grapheme;
			} else {
				const index = grapheme.indexOf(base[i]);
				grapheme.splice(index, 1);
				grapheme2.splice(index, 1);
				affichage.textContent = grapheme;
				}
		});
	}
}

select(baseVoyellesUneLettre, graphemeVoyelles, graphemes, affichageVoyelles);
select(baseVoyellesDeuxLettres, graphemeVoyelles, graphemes, affichageVoyelles);
select(baseVoyellesTroisLettres, graphemeVoyelles, graphemes, affichageVoyelles);
select(baseConsonnesUneLettre, graphemeConsonnes, graphemes, affichageConsonnes);
select(baseConsonnesDeuxLettres, graphemeConsonnes, graphemes, affichageConsonnes);

/*******************************************************
 *  FONCTION DE MELANGE, D'AFFICHAGE ET DE MISE À ZÉRO *
 *******************************************************/

function melanger(donnees, affichage) {		
	affichageMelange.textContent = " ";
	titreSyllabes.textContent = "Lire les graphèmes suivants : ";	
	if (donnees.length == 0) {
		window.alert("Vous devez choisir au moins un graphème !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var lettreAleatoire = Math.floor(Math.random() * donnees.length);
		affichageMelange.textContent += donnees[lettreAleatoire] + " ";}
	}	
}

function melangerSyllabes(donneesVoyelles, donneesConsonnes, affichage) {		
	affichageMelange.textContent = " ";
	titreSyllabes.textContent = "Lire les syllabes suivantes : ";
	if (donneesVoyelles.length < 1 || donneesConsonnes < 1) {
		window.alert("Vous devez choisir au moins un graphème voyelle et un graphème consonne !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var voyelleAleatoire = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire = Math.floor(Math.random() * donneesConsonnes.length);
		affichageMelange.textContent += donneesConsonnes[consonneAleatoire] + donneesVoyelles[voyelleAleatoire] + " ";}
	}	
}

function lireDeuxSyllabes(donneesVoyelles, donneesConsonnes, affichage) {		
	affichageMelange.textContent = " ";
	titreSyllabes.textContent = "Lire les syllabes suivantes : ";
	if ((donneesVoyelles.length < 1) | (donneesConsonnes.length < 1)) {
		window.alert("Vous devez choisir au moins un graphème voyelle et un graphème consonne !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var voyelleAleatoire1 = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire1 = Math.floor(Math.random() * donneesConsonnes.length);
		var voyelleAleatoire2 = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire2 = Math.floor(Math.random() * donneesConsonnes.length);
		affichageMelange.textContent += donneesConsonnes[consonneAleatoire1] + donneesVoyelles[voyelleAleatoire1]
		+ donneesConsonnes[consonneAleatoire2] + donneesVoyelles[voyelleAleatoire2] + " ";}
	}	
}

function lireTroisSyllabes(donneesVoyelles, donneesConsonnes, affichage) {		
	affichageMelange.textContent = " ";
	titreSyllabes.textContent = "Lire les syllabes suivantes : ";
	if (donneesVoyelles.length < 1 || donneesConsonnes.length < 1) {
		window.alert("Vous devez choisir au moins un graphème voyelle et un graphème consonne !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var voyelleAleatoire1 = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire1 = Math.floor(Math.random() * donneesConsonnes.length);
		var voyelleAleatoire2 = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire2 = Math.floor(Math.random() * donneesConsonnes.length);
		var voyelleAleatoire3 = Math.floor(Math.random() * donneesVoyelles.length);
		var consonneAleatoire3 = Math.floor(Math.random() * donneesConsonnes.length);
		affichageMelange.textContent += donneesConsonnes[consonneAleatoire1] + donneesVoyelles[voyelleAleatoire1]
		+ donneesConsonnes[consonneAleatoire2] + donneesVoyelles[voyelleAleatoire2]
		+ donneesConsonnes[consonneAleatoire3] + donneesVoyelles[voyelleAleatoire3] + " ";}
	}	
}

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageVoyelles.textContent = " ";
	affichageConsonnes.textContent = " ";
	affichageMelange.textContent = " ";
	graphemeConsonnes = [];
	graphemeVoyelles = [];
	graphemes = [];
}



