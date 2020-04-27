/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');

var mots = [];

var mots_en_c = ['avec', 'comme', 'encore', 'beaucoup', 'comment', 'coup', 'école', 'car', 'donc', 'côté', 'contre', 'recopier', 
'comment', 'couleur', 'combien', 'coeur', 'sac', 'vacance', 'cusine', 'raconter', 'course', 'dictionnaire', 'carte', 'lecture', 
'colère', 'corps', 'comprendre', 'coin', 'courir', 'cou', 'commencer', 'cour', 'cas', 'cause', 'conte', 'écouter', 'docteur', 
'cours', 'content', 'contraire', 'campagne', 'complément', 'cahier', 'café', 'escalier', 'bec', 'cadeau', 'secours', 'corde', 
'connaître', 'indicatif', 'camarade', 'cage', 'compte', 'canard', 'continuer', 'corbeau', 'lac', 'aucun', 'écureuil', 'document', 
'courage', 'couper', 'cabane', 'capitaine', 'courant', 'coq', 'carton', 'aucune', 'caisse', 'parc', 'cartable', 'construire'];
var mots_en_ch = ['orchestre', 'chrono', 'choeur', 'écho', 'technique', 'chronomètre', 'chorale', 'technicien', 'chronologie', 
'technologie', 'chlorophylle', 'auroch', 'chrysalide', 'chronique', 'chrysanthème', 'chrome', 'chorégraphie', 'psychologie', 
'chrétien', 'polychrome', 'lichen', 'psychiatre', 'archéologie', 'chaos', 'choléra', 'chronométrer', 'orchidée', 'almanach', 
'chlore', 'choriste', 'psychologue', 'varech', 'psychiatrie'];
var mots_en_cc =['accord', 'accorder', 'occuper', 'accompagner', 'accueil', 'accordéon', 'accomplir', 'accueillir', 'occupation', 
'accourir', 'accuser', 'occasion', 'préoccuper', 'succulent', 'accrocher', 'raccrocher', 'succomber', 'accumulation', 'accabler', 
'désaccord', 'accumuler', 'raccommoder', 'impeccable', 'saccager', 'accolade', 'accoster', 'accoudoir', 'accalmie', 'acclamer'];
var mots_en_k = ['képi', 'ski', 'okapi', 'karaté', 'koala', 'kilt', 'kayak', 'kangourou', 'kilomètre', 'kilo', 
'kaki', 'kimono', 'bikini', 'kiosque', 'parking', 'kermesse', 'anorak', 'week-end', 'skieur', 'basket', 'kilogramme', 
'klaxon', 'skier', 'kiwi', 'kiosque', 'polka', 'moka', 'fakir', 'kaléidoscope', 'drakkar', 'sketch', 'pékinois', 
'parka', 'kidnapper', 'karting', 'skateboard', 'yak'];
var mots_en_ck = ['bifteck', 'crack', 'frick', 'pack', 'rock', 'snack', 'ticket', 'rocket', 'hockey', 'jockey', 'haddock', 
'teckel', 'blockhaus', 'cockpit'];
var mots_en_q = ['coq', 'cinq', 'piqûre'];
var mots_en_qu = ['qui', 'que', 'quand', 'chaque', 'quel', 'quelle', 'pourquoi', 'quelque', 'question', 'jusqu\'à', 'quoi', 
'quatre', 'est-ce que', 'queue', 'lorsque', 'indiquer', 'parce que', 'presque', 'quelqu\'un', 'musique', 'laquelle', 'lequel', 
'explique', 'cirque', 'magique', 'puisque', 'magnifique', 'équipe', 'tranquille', 'lesquels', 'manquer', 'paquet', 'fabriquer', 
'brusquement', 'quartier', 'bibliothèque', 'époque', 'barque', 'tranquillement', 'quelquefois', 'quitter', 'marque', 'bouquet', 
'italique', 'quinze', 'perroquet', 'électrique', 'inquiet', 'qualité', 'disque', 'lesquelles', 'quart', 'quitte', 'remarque', 
'boutique', 'coquille', 'casquette', 'enquête', 'cinquante', 'équilibre', 'masque', 'remarque', 'quarante', 'quantité', 'quai', 'casque', 
'requin', 'auquel', 'plastique', 'équipage', 'unique', 'piquer', 'phoque'];


var sons = ['mots en c', 'mots en ch', 'mots en cc', 'mots en k', 'mots en ck', 'mots en q', 'mots en qu'];
var lesBases = [mots_en_c, mots_en_ch, mots_en_cc, mots_en_k, mots_en_ck, mots_en_q, mots_en_qu];

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



