/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const affichageListes = document.getElementById('affichage-listes');


var mots_en_k = ['koala', 'kimono', 'kilo', 'kangourou', 'bikini', 'kiosque', 'kaki'];
var mots_en_c = ['cacao', 'café', 'cube'];
var mots_en_qu = ['qui', 'que', 'quoique', 'pourquoi', 'quoi', 'turquoise', 'quand', 'piquant', 'quart', ];
var mots_en_q = ['coq', 'cinq'];
var mots_en_ch = ['chorale', 'choriste', 'choeur'];
//var mots_avec_son_k = [];
var listes_mots_avec_son_k = [mots_en_c, mots_en_ch, mots_en_k, mots_en_q, mots_en_qu];
var id_mots_en_k = ['zero', 'un', 'deux', 'trois', 'quatre']

var mots_en_eur_1 = ['peur', 'leur', 'beurre'];
var mots_en_eur_2 = ['peu', 'jeu', 'heureux', 'peureux'];
var mots_en_oeur_1 = ['coeur', 'soeur', 'un oeuf', 'un boeuf'];
var mots_en_oeur_2 = ['voeu', 'des boeufs', 'des oeufs'];
//var mots_avec_sons_eu_oeu = [];
var listes_de_mots_avec_sons_eu_oeu = [mots_en_eur_1, mots_en_eur_2, mots_en_oeur_1, mots_en_oeur_2];
var id_mots_en_eu_oeu = ['zero', 'un', 'deux', 'trois']


var mots_en_o = ['moto', 'loto', 'mot'];
var mots_en_au = ['saut', 'autruche', 'épaule', 'pauvre'];
var mots_en_eau = ['peau', 'beau', 'de l\'eau', 'radeau', 'gâteau'];
//var mots_avec_son_o = [];
var listes_de_mots_avec_son_o = [mots_en_o, mots_en_au, mots_en_eau];
var id_mots_en_o = ['zero', 'un', 'deux']

var mots_selectionnes = []


/***************************************
 *  FONCTION DE MELANGE ET D'AFFICHAGE *
 ***************************************/

function melangerListes(donnees) {		
	affichageMelange.textContent = " ";
	if (donnees.length == 0) {
		window.alert("Vous devez choisir au moins une liste !");}
		else {
	for (compteur=0; compteur <60; compteur +=1) {
		var motsAleatoire = Math.floor(Math.random() * donnees.length);
		affichageMelange.textContent += donnees[motsAleatoire] + " ";
		affichageMelange.style.fontSize = "50px";
		}
	}
	}	

function afficher_listes(donnees, identy, taille) {
	affichageListes.textContent = " ";
	affichageMelange.textContent = " ";
	mots_selectionnes = [];
	for(i=0; i<=taille; i +=1) {
		var newDiv = document.createElement('div');
		var newInput = document.createElement('input');
		var newParagraph = document.createElement('span');
		newInput.type = 'checkbox';
		newInput.id = identy[i];
		newParagraph.textContent = donnees[i];
		newDiv.appendChild(newInput);
		newDiv.appendChild(newParagraph);
		affichageListes.appendChild(newDiv);
		affichageListes.style.fontSize = "30px";
	}
}

function select (base, identy, unit) {
	for (let i=0; i<base.length; i++) {
		var x = document.getElementById(identy[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				for (y=0; y<base[i].length; y++) {
				unit.push(base[i][y]);}
			} else {
				const index = unit.indexOf(base[i][0]);
				unit.splice(index, base[i].length);}
		});
	}
}






















