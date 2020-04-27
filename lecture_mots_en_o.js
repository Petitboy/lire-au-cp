/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var mots = [];

var mots_en_o = ['mot', 'comme', 'alors', 'encore', 'homme', 'trop', 'comment', 'gros', 'soleil', 'porte', 'école', 
'chose', 'moment', 'votre', 'forêt', 'notre', 'ordre', 'fort', 'recopier', 'nos', 'bord', 'lorsque', 'dos', 'or', 
'possible', 'sol', 'forme', 'd\'abord', 'oreille', 'sortir', 'chose', 'numéro', 'grosse', 'pomme', 'chocolat', 'vélo', 
'colère', 'corps', 'objet', 'joli', 'énorme', 'propre', 'dormir', 'fromage', 'pot', 'robe', 'poche', 'docteur', 'sorcière', 
'force', 'tortue', 'note', 'objet', 'photo', 'sorte', 'voler', 'corde', 'transformer', 'dehors', 'problème', 'odeur', 
'crocodile', 'police', 'robot', 'modèle', 'proposer', 'os', 'rose', 'parole', 'sommeil', 'document', 'orage', 'poste', 
'poser', 'poème', 'désordre', 'sommet', 'coq', 'moto', 'moteur', 'colorier', 'nord', 'radio', 'apporter', 'promenade'];
var mots_en_au = ['au', 'aussi', 'autre', 'autour', 'aujourd\'hui', 'haut', 'pauvre', 'aussitôt', 'faux', 
'cause', 'jaune', 'gauche', 'haute', 'auteur', 'chaud', 'mauvais', 'autant', 'sauter', 'autrefois', 'aucun', 
'chaussure', 'sauf', 'automne', 'aucune', 'épaule', 'fauteuil', 'mauvaise', 'sauvage', 'hauteur', 'faute', 
'auto', 'auprès', 'chauffeur', 'sauver', 'autobus', 'là-haut', 'autruche', 'restaurant', 'aube', 'crapaud', 
'tuyau', 'taureau', 'chaussette', 'chauffer', 'défaut', 'applaudir', 'dauphin', 'sauce', 'automobile', 'autoroute', 
'taupe', 'fauve', 'auparavant', 'chauve-souris', 'noyau', 'auberge', 'paupière', 'chauffage', 'gaulois', 'cauchemar', 
'saucisse', 'sursaut', 'chaudron', 'aurore', 'esquimau', 'autocar', 'sauterelle', 'saucisson', 'miauler', 'chaussée', 
'cosmonaute', 'astronaute', 'naufrage', 'aubergiste'];
var mots_en_eau = ['eau', 'beaucoup', 'beau', 'oiseau', 'tableau', 'château', 'chapeau', 'peau', 'nouveau', 'gâteau', 
'morceau', 'cadeau', 'manteau', 'corbeau', 'bureau', 'museau', 'couteau', 'troupeau', 'ruisseau', 'ciseau', 'plateau', 
'chameau', 'marteau', 'agneau', 'niveau', 'rideau', 'seau', 'moineau', 'vaisseau', 'traîneau', 'pinceau', 'drapeau', 
'veau', 'beauté', 'taureau', 'râteau', 'anneau', 'radeau', 'berceau', 'chapiteau', 'panneau', 'carreau', 'poteau', 
'poireau', 'cerveau', 'tonneau', 'bouleau', 'jumeau', 'escabeau', 'rouleau', 'moineau', 'barreau', 'hameau', 'chevreau'];

var sons = ['mots en o', 'mots en au', 'mots en eau'];
var lesBases = [mots_en_o, mots_en_au, mots_en_eau];

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
