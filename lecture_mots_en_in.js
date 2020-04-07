/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');

var mots = [];

var mots_en_ein = ['peinture', 'plein', 'ceinture', 'peindre', 'éteindre', 'frein', 'peintre', 'atteindre', 'sein', 'teint'];
var mots_en_ain = ['maintenant', 'main', 'train', 'pain', 'demain', 'lendemain', 'bain', 'soudain', 'ainsi',
  'copain', 'grain', 'nain', 'terrain', 'prochain', 'poulain', 'refrain', 'certain', 'vilain', 'maintenant', 'pain', 'crainte', 'saint', 'vainqueur', 
  'romain', 'souterrain', 'lointain', 'plaindre', 'forain', 'plainte', 'métropolitain', 'humain', 'levain', 'américain'];
var mots_en_ain_ein_aine_eine = ['vilain vilaine', 'un grain une graine', 'éteint éteinte', 'romain romaine', 'le frein il freine', 'plein pleine',
 'Lorrain Lorraine', 'prochain prochaine'];
var mots_en_in = ['jardin', 'matin', 'lapin', 'dessin', 'enfin', 'cinq', 'chemin', 'sapin', 'fin', 'magasin', 'prince', 'moulin', 'princesse', 
'printemps', 'poussin', 'singe', 'cousin', 'installe', 'voisin', 'coussin', 'pinceau', 'brin', 'raisin', 'invité', 'indien', 'patin', 'requin', 'index', 
'instant', 'dauphin', 'invente', 'vin', 'infirmière', 'quinze', 'pin', 'marin', 'engin', 'linge', 'médecin', 'vingt', 'pingouin', 'arlequin', 'pince', 'malin', 
'gamin', 'interdit', 'bassin', 'insecte', 'dinde', 'ravin', 'malin', 'pantin', 'chagrin', 'juin', 'romarin', 'lutin', 'dindon', 'tambourin', 'mince', 'cintre', 
'instituteur', 'tintamarre', 'indigo', 'pépin', 'inquiet', 'inscrire', 'câlin', 'taquin', 'instrument', 'sous-marin', 'brindille', 'invisible', 'satin', 'bulletin', 
'incroyable', 'gourdin', 'cinquante', 'invasion', 'pétrin', 'lin', 'vaccin', 'inconnu', 'latin', ];
var mots_en_im = ['grimpe', 'impossible', 'simple', 'imperméable', 'simplement', 'imprudent', 'important', 'impoli', 'imprimerie', 'chimpanzé', 'impasse', 
'simplet', 'imbuvable', 'imbattable', 'timbre'];
var mots_en_en_ien = ['bien', 'chien', 'rien', 'bientôt', 'gardien', 'combien', 'mien', 'pharmacien', 'indien', 'mécanicien', 'musicien', 'moyen', 'magicien', 'sien', 
'examen', 'ancien', 'électricien', 'bohémien', 'lycéen', 'terrien', 'comédien', 'italien', 'parisien', ];
var mots_en_oin = ['loin', 'point', 'coin', 'besoin', 'moins', 'soin', 'pointu', 'pointe', 'poing', 'foin', 'moindre', 'rejoindre', 'coincé', 'témoin', 
'lointain', 'groin'];

var sons = ['mots en in', 'mots en im', 'mots en ain', 'mots en ein', 'mots en oin', 'mots en ien en', 'mots en ain aine ein eine'];
var lesBases = [mots_en_in, mots_en_im, mots_en_ain, mots_en_ein, mots_en_oin, mots_en_en_ien, mots_en_ain_ein_aine_eine];

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
			for (compteur=0; compteur <20; compteur +=1) {
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
