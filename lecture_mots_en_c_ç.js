/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var mots = [];

var mots_en_ca = ['car', 'carte', 'cas', 'cahier', 'café', 'escalier', 'cadeau', 'camarade', 'cage', 'canard', 'cabane', 'cacher', 'capitaine',
'carton', 'cartable', 'camion', 'capable', 'cave', 'case', 'carnaval', 'casser', 'escargot', 'calme', 'carotte', 'casserole', 'placard', 
'canot', 'caractère', 'encadrer', 'bocal', 'canne', 'caverne', 'casque', 'chacal'];
var mots_en_ce = ['ce', 'cela', 'place', 'exercice', 'est-ce que', 'celui', 'vacance', 'parce que', 'France', 'pièce', 'glace', 'doucement', 
'silence', 'prince', 'force', 'grâce', 'chance', 'espace', 'face', 'police', 'service', 'surface', 'douce', 'avance', 'lance', 'distance', 
'annonce', 'ceci', 'naissance', 'recevoir', 'sorce', 'trace'];
var mots_en_ci = ['voici', 'exercice', 'ceci', 'ici', 'ciel', 'difficile', 'cirque', 'participe', 'cinéma', 'facile', 'décider', 'sorcière', 'récit', 
'accident', 'ciseau', 'merci', 'citron', 'circulation', 'racine', 'souci', 'électricité', 'acier', 'principal', 'cité', 'pharmacie', 'coccinelle', 'policier', 
'citrouille', 'cigogne', 'saucisse', 'imbécile', 'sorcier', 'domicile', 'précis'];
var mots_en_co = ['comme', 'encore', 'comment', 'école', 'recopier', 'chocolat', 'colère', 'corps', 'corde', 'connaître', 'cochon', 'crocodile', 
'corbeau', 'coq', 'colorier', 'colonne', 'copain', 'costume', 'collier', 'cocher', 'coffre', 'colle', 'corne', 'code', 'commun', 'col', 'score', 
'coton', 'haricot', 'coque'];
var mots_en_cu = ['chacune', 'masculin', 'document', 'cuisine', 'écureuil', 'cuire', 'occuper', 'curieux', 'circulation', 'minuscule', 'obscurité', 
'calcul', 'sécurité', 'véhicule', 'écurie', 'culotte', 'écume', 'majuscule', 'curiosité', 'particulier', 'ridicule', 'curé', 'discuter', 'vécu', 
'recule', 'cube', 'culture', 'circule'];
var mots_en_cai = ['caisse', 'caissière', 'caissier', 'américaine', 'africaine', 'calcaire', 'bancaire', 'bibliothécaire', 'précaire', 'caisson', 'urticaire'];
var mots_en_cam = ['campagne', 'camp', 'camping', 'camper', 'campement', 'cambrioleur', 'campanule', 'campeur', 'décamper', 'hippocampe'];
var mots_en_can = ['vacance', 'volcan', 'cantine', 'pélican', 'canton', 'candidat', 'fabricant', 'boucan', 'scandale', 'cancre', 'cantique', 'brocante', 'carcan', 'cancaner', 
'toucan'];
var mots_en_cau = ['cause', 'cauchemar', 'bocaux', 'amicaux', 'locaux', 'causer', 'tropicaux', 'médicaux', 'causons'];
var mots_en_coi = ['coiffeur', 'coiffure', 'coiffé'];
var mots_en_com = ['complète', 'combien', 'comprendre', 'compris', 'compte', 'compagnon', 'complet', 'compagnie', 'comte', 'combat', 'comptine', 'composé', 'compère', 'comptoir'];
var mots_en_con = ['contre', 'raconte', 'conte', 'content', 'contraire', 'continue', 'construire', 'rencontre', 'conduire', 'concours', 'conjugaison', 'flocon', 'consonne', 'contenu', 
'contraire', 'contrôle', 'balcon', 'flacon', 'conserve', 'consultation', 'consigne', 'confortable', 'conduite'];
var mots_en_cou = ['beaucoup', 'coup', 'couleur', 'course', 'courir', 'cou', 'secours', 'écouter', 'cours', 'couche', 'courage', 'couper', 
'courant', 'court', 'couverture', 'cousin', 'coussin', 'couteau', 'coule', 'coupe', 'couple', 'parcourir', 'coudre', 'couvrir', 'coureur', 'soucoupe', 'coude'];
var mots_en_cen = ['cent', 'descendre', 'centre', 'accent', 'centaine', 'centrale', 'centre', 'cendre', 'centimètre', 'incendie', 'ascenseur', 'innocent', 'récent', 
'centime', 'concentrer'];
var mots_en_cin = ['cinq', 'médecin', 'cinquante', 'scintille', 'vaccin', 'cintre', 'clavecin', 'larcin'];
var mots_en_cein = ['ceinture', 'ceinturon', 'enceinte'];
var mots_en_cain = ['africain', 'américain', 'marocain', 'républicain'];
var mots_en_coin = ['coin', 'coincé', 'recoin', 'coing', 'décoinça'];
var mots_en_ceu = ['ceux-ci', 'douceur', 'ceux-là', 'berceuse', 'perceuse', 'farceur', 'chanceux', 'lanceur', 'noirceur', 'effaceur'];
var mots_en_ça = ['ça', 'commença', 'avança', 'lança', 'enfonça', 'plaça', 'façade', 'fonça', 'balança', 'traça', 'grinça'];
var mots_en_çu = ['aperçu', 'reçu', 'déçu', 'conçu', 'inaperçu'];
var mots_en_çai = ['français', 'commençait', 'avançait', 'lançait', 'enfonçait', 'plaçait', 'fonçait', 'balançait', 'traçait', 'grinçait'];
var mots_en_çan = ['remplaçant', 'commençant', 'plaçant', 'menaçant', 'lançant', 'avançant', 'balançant', 'grinçant', 'perçant', 'déplaçant', 'agaçant', 'fronçant', 'prononçant', 'forçant', 
'traçant', 'pinçant', 'grimaçant', 'rinçant'];
var mots_en_çau = ['provençaux'];
var mots_en_çoi = ['aperçoit', 'reçoit', 'balançoire', 'perçoit', 'conçoit'];
var mots_en_çon = ['garçon', 'façon', 'leçon', 'maçon', 'hameçon', 'glaçon', 'caleçon', 'soupçon', 'tronçon', 'colimaçon', 'rançon', 'avançons', 'plaçons', 'charançon', 'limaçon', 'effaçons'];
var mots_en_cy = ['bicyclette', 'cycliste', 'cygne', 'cylindre', 'cycle', 'tricycle', 'cyclope', 'cyclone', 'encyclopédie', 'cyprès', 'cyclable'];
var mots_en_cym = ['cymbales'];
var mots_en_ceau = ['morceau', 'pinceau', 'berceau', 'cerceau', 'lionceau', 'souriceau', 'sceau', 'faisceau'];
var mots_en_cee = ['océan', 'célèbre', 'placé', 'lancé', 'rhinocéros', 'glacé', 'cérémonie', 'foncé', 'céréales', 'coincé', 'prononcé', 'lycée', 'tracé', 'céleri', 'cétacé', 'pincée', 'forcé', 'fiancée', 'célébrité'];

var sons = ['ca', 'ce', 'ci', 'co', 'cu', 'cai', 'cam', 'can', 'cau', 'coi', 'com', 'con', 'cou', 'cen', 'cin', 'cein', 
'cain', 'coin', 'ceu', 'ça', 'çu', 'çai', 'çan', 'çau', 'çoi', 'çon', 'cy', 'cym', 'ceau', 'cé'];
var lesBases = [mots_en_ca, mots_en_ce, mots_en_ci, mots_en_co, mots_en_cu, mots_en_cai, mots_en_cam, mots_en_can, 
mots_en_cau, mots_en_coi, mots_en_com, mots_en_con, mots_en_cou, mots_en_cen, mots_en_cin, mots_en_cein, mots_en_cain, 
mots_en_coin, mots_en_ceu, mots_en_ça, mots_en_çu, mots_en_çai, mots_en_çan, mots_en_çau, mots_en_çoi, mots_en_çon, 
mots_en_cy, mots_en_cym, mots_en_ceau, mots_en_cee];

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
