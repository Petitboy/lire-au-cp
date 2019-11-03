const affichageVoyelles = document.getElementById('affichage-voyelles');
const affichageConsonnes = document.getElementById('affichage-consonnes');
const affichageMelange = document.getElementById('affichage-melange');
const checkBoxes = document.getElementById('form-group-voyelles');
const titreSyllabes = document.getElementById('titre-syllabes');

//MODE GRAPHEMES

var graphemeVoyelles = [];
var graphemeConsonnes = [];
var graphemes = [];


var baseVoyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'ou', 'oi', 'ai', 'ei', 'an', 'am',
'en', 'em', 'un', 'in', 'im', 'on', 'om', 'ain', 'ein', 'oin'];

for (let i=0; i<baseVoyelles.length; i++) {
	const x = document.getElementById(baseVoyelles[i]).addEventListener('change', ($event) => {
		if ($event.target.checked) {
			graphemeVoyelles.push(baseVoyelles[i]);
			graphemes.push(baseVoyelles[i]);
			affichageVoyelles.textContent = graphemeVoyelles;
		} else {
			const index = graphemeVoyelles.indexOf(baseVoyelles[i]);
			graphemeVoyelles.splice(index, 1);
			graphemes.splice(index, 1);
			affichageVoyelles.textContent = graphemeVoyelles;}
	});
}

var baseConsonnes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't',
'v', 'w', 'x', 'z', 'ph', 'ch', 'qu'];

for (let i=0; i<baseConsonnes.length; i++) {
	const x = document.getElementById(baseConsonnes[i]).addEventListener('change', ($event) => {
		if ($event.target.checked) {
			graphemeConsonnes.push(baseConsonnes[i]);
			graphemes.push(baseConsonnes[i]);
			affichageConsonnes.textContent = graphemeConsonnes;
		} else {
			const index = graphemeConsonnes.indexOf(baseConsonnes[i]);
			graphemeConsonnes.splice(index, 1);
			graphemes.splice(index, 1);
			affichageConsonnes.textContent = graphemeConsonnes;}
	});
}

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

//MODE SYLLABES

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



