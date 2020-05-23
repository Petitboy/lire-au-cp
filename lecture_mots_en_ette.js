/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var mots = [];

var mots_en_er = ['vers', 'verbe', 'exercice', 'personne', 'cherche', 'vert', 'derrière', 'observe', 'herbe', 'perdu', 'personnage', 'certain',
'dernière', 'recherche', 'perdre', 'ferme', 'permet', 'verte', 'serpent', 'termine', 'mercredi', 'service', 'servir', 'aperçu', 'désert', 
'merveille', 'anniversaire', 'liberté', 'dessert', 'envers', 'couverture', 'merci', 'vertical', 'terminaison', 'ouvert', 'traverser', 'cerf-volant', 'cerf', 
'merle', 'super', 'caverne', 'divers', 'offert', 'perle', 'conversation', 'interdit', 'mer', 'persienne'];
var mots_en_es = ['question', 'est-ce que', 'presque', 'reste', 'escalier', 'espace', 'descendre', 'des', 'les', 'mes', 'tes', 'ses', 
'lesquels', 'esprit', 'espèce', 'correspondant', 'escargot', 'resta', 'veste', 'restaurant', 'geste', 'orchestre', 'estomac', 'ouest', 'respirer', 'espoir', 
'sieste', 'majesté', 'respecter', 'respect', 'description', 'test'];
var mots_en_ette = ['cette', 'lunette', 'jette', 'fillette', 'recette', 'assiette', 'bicyclette', 'toilette', 'baguette', 'casquette', 'chouette', 'trompette', 
'allumette', 'cachette', 'vignette', 'charette', 'galette', 'noisette', 'étiquette', 'fourchette', 'chaussette', 'devinette', 'roulette', 'muette', 'sonnette', 
'omelette', 'cassette', 'silhouette', 'serviette', 'violette', 'guette', 'crevette', 'raquette', 'mouette', 'alouette', 'navette', 'camionnette', 'belette', 
'brouette', 'regrette', 'maisonnette', 'banquette', 'girouette'];
var mots_en_elle = ['elle', 'quelle', 'belle', 'celle', 'nouvelle', 'laquelle', 'celle-ci', 'échelle', 'ficelle', 'nouvelle', 'hirondelle', 'lesquelles', 
'voyelle', 'vaisselle', 'femelle', 'pelle', 'selle', 'mademoiselle', 'poubelle', 'coccinelle', 'celle-là', 'dentelle', 'gazelle', 'tourterelle', 'naturelle', 
'sauterelle', 'chapelle', 'marelle', 'bretelle', 'jumelle', 'étincelle', 'semelle', 'maternelle', 'réelle', 'cervelle', 'ombrelle', 'rondelle', 'ruelle'];
var mots_en_erre = ['terre', 'pierre', 'verre', 'guerre', 'tonnerre', 'serre', 'lierre', 'paratonnerre', 'parterre', 'enterrement', 'serre-tête', 
'resserre', 'équerre', 'enserre', 'enterre', 'terre-plein'];
var mots_en_esse = ['maîtresse', 'vitesse', 'princesse', 'adresse', 'dessert', 'cesse', 'tristesse', 'presse', 'dresse', 'jeunesse', 'intéresse', 'caresse', 'presse', 
'sagesse', 'politesse', 'tendresse', 'promesse', 'paresse', 'redresse', 'richesse', 'kermesse', 'gentillesse', 'forteresse', 'hôtesse', 'détresse', 'faiblesse', 
'souplesse', 'justesse', 'maladresse', 'sécheresse', 'vieillesse', 'délicatesse', 'presse-papiers', 'comtesse', 'tresse', 'finesse', 'déesse', 'ogresse'];
var mots_en_enne = ['chienne', 'ennemi', 'ancienne', 'vienne', 'moyenne', 'antenne', 'mienne', 'sienne', 'prenne', 'devienne', 'renne', 'indienne', 'quotidienne', 
'revienne', 'musicienne', 'benne', 'aérienne', 'apprenne', 'magicienne', 'européenne', 'prenne', 'reprenne', 'comprenne', 'obtienne', 'persienne', 'convienne', 
'parvienne', 'végétarienne', 'alsacienne'];

var sons = ['er', 'es', 'ette', 'elle', 'erre', 'esse', 'enne'];
var lesBases = [mots_en_er, mots_en_es, mots_en_ette, mots_en_elle, mots_en_erre, mots_en_esse, mots_en_enne];

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
