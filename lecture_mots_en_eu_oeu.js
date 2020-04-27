/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');

var mots = [];

var mots_en_eu1 = ['leur', 'peur', 'heure', 'seul', 'fleur', 'plusieurs', 'couleur', 'jeune', 'seule', 'seulement', 
'docteur', 'neuf', 'auteur', 'ailleurs', 'intérieur', 'odeur', 'pleurer', 'chasseur', 'fleuve', 'chaleur', 
'directeur', 'beurre', 'moteur', 'facteur', 'erreur', 'ordinateur', 'instituteur'];
var mots_en_eu2 = ['deux', 'peu', 'feu', 'vieux', 'jeu', 'peut-être', 'queue', 'milieu', 'lieu', 'cheveu', 'bleu',
 'déjeuner', 'dieu', 'jeudi'];
var mots_en_oeu1 = ['un oeuf', 'oeuvre', 'un boeuf', 'manoeuvre', 'coeur', 'choeur', 'soeur', 'chef-d\'oeuvre', 'hors-d\'oeuvre', 
'à contrecoeur', 'écoeuré', 'rancoeur', 'main-d\'oeuvre', 'désoeuvré'];
var mots_en_oeu2 = ['des oeufs', 'des boeufs', 'un noeud', 'voeu'];
var mots_en_eux = ['heureux', 'malheureux', 'sérieux', 'précieux', 'délicieux', 'affreux', 'curieux', 'furieux', 'dangereux', 'nombreux'];
var mots_en_euse = ['heureuse', 'malheureuse', 'sérieuse', 'précieuse', 'délicieuse', 'affreuse', 'curieuse', 'furieuse', 'dangereuse', 'nombreuse', 
'chanteuse', 'coiffeuse', 'voleuse'];
var mots_en_eusement = ['heureusement', 'malheureusement', 'sérieusement', 'précieusement', 'délicieusement', 'affreusement', 'curieusement', 
'furieusement', 'dangereusement'];

var sons = ['mots en eu ', 'mots en eu', 'mots en oeu ', 'mots en oeu', 'mots en eux', 'mots en euse', 'mots en eusement'];
var lesBases = [mots_en_eu1, mots_en_eu2, mots_en_oeu1, mots_en_oeu2, mots_en_eux, mots_en_euse, mots_en_eusement];

/*****************************
 * Fonction de creation html *
 *****************************/
function createNewInput (base, bases, name, btns) {
	for (let i=0; i<base.length; i++) {
		var newDivSonsBases = document.createElement('div');
		newDivSonsBases.id = base[i];
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		newDivSonsBases.appendChild(newInput);
		newDivSonsBases.appendChild(newLabel);
		var newButtonDiv = document.createElement('div');
		var newButton = document.createElement("BUTTON");
		newButton.innerHTML = "Voir la liste";
		newButton.onclick = 'afficher(base[i])';
		newButton.addEventListener ("click", function() {
			afficher(bases[i]);});
		newButtonDiv.appendChild(newButton);
		var newDivBox = document.createElement('div');
		newDivBox.id = 'box';
		newDivBox.appendChild(newDivSonsBases);
		newDivBox.appendChild(newButtonDiv);
		document.getElementById(name).appendChild(newDivBox);		
	}	
}

createNewInput(sons, lesBases, 'input_bases', 'buttons');

/**************************
 *  FONCTION DE SÉLECTION *
 **************************/
 
function selectSons (sons, lesBases, mots) {
	for (let i=0; i<sons.length; i++) {
		const x = document.getElementById(sons[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				for (j=0; j<lesBases[i].length; ++j) {
					mots.push(lesBases[i][j]);
					}
					melanger(mots);
			} else {
				for (j=0; j<lesBases[i].length; ++j) {
					const index = mots.indexOf(lesBases[i][j]);
					mots.splice(index, 1);				
				}
				melanger(mots);
			}
		});
	}
}

selectSons(sons, lesBases, mots);

/*******************************************************
 *  FONCTION DE MELANGE ET DE MISE À ZÉRO *
 *******************************************************/

function melanger(donnees) {		
	affichageMelange.textContent = " ";
	if (donnees.length == 0) {
		}
		else {
			for (compteur=0; compteur < 20; compteur +=1) {
				var lettreAleatoire = Math.floor(Math.random() * donnees.length);
				affichageMelange.textContent += donnees[lettreAleatoire] + ", ";}
		}	
}

function afficher(donnees) {		
	affichageMelange.textContent = " ";
	for (compteur=0; compteur <donnees.length; compteur +=1) {
		affichageMelange.textContent += donnees[compteur] + ", ";}
	}

function aide() {
	affichageMelange.textContent = "Cocher une liste pour l'ajouter au mélange. 20 mots au total sont mélangés à partir des listes cochées. Cliquez les boutons \"voir la liste\" pour afficher tous les mots contenus dans une liste.";
	}

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageMelange.textContent = " ";
	mots.splice(0, mots.length);
}

function All(sons, lesBases, mots) {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = true; }
	affichageMelange.textContent = " ";
	
	for (let i=0; i<sons.length; i++) {
		for (j=0; j<lesBases[i].length; ++j) {
			mots.push(lesBases[i][j]);
			}
		}
		melanger(mots);
}
