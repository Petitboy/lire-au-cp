/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');

var mots_en_k = ['koala', 'kimono', 'kilo', 'kangourou', 'bikini', 'kiosque', 'kaki'];
var mots_en_c = ["cacao"];
var mots_en_qu = ['qui', 'que', 'quoique', 'pourquoi', 'quoi', 'turquoise', 'quand', 'piquant', 'quart', ];
var mots_en_q = ['coq', 'cinq'];
var mots_en_ch = ["chorale", "choriste", "choeur"];
var mots_avec_son_k = [mots_en_k, mots_en_c, mots_en_ch, mots_en_q, mots_en_qu];

var mots_en_eur_1 = [];
var mots_en_eur_2 = [];


/***************************************
 *  FONCTION DE MELANGE ET D'AFFICHAGE *
 ***************************************/

function melangerListes(donnees) {		
	affichageMelange.textContent = " ";
	var x = donnees.concat(mots_en_c, mots_en_q, mots_en_qu, mots_en_ch);
	for (compteur=0; compteur <60; compteur +=1) {
		var motsAleatoire = Math.floor(Math.random() * x.length);
		affichageMelange.textContent += x[motsAleatoire] + " ";
		affichageMelange.style.fontSize = "60px";
		}
	}	

function afficher_listes(taille) {
	affichageMelange.textContent = " ";
	for(i=0; i<=taille; i +=1) {
		var newDiv = document.createElement('div');
		var newParagraph = document.createElement('p');
		newParagraph.textContent = mots_avec_son_k[i];
		newDiv.appendChild(newParagraph);
		affichageMelange.appendChild(newDiv);
		affichageMelange.style.fontSize = "30px";
	}
}


