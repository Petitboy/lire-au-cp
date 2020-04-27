/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');
const titreSyllabes = document.getElementById('titre-syllabes');

var mots = [];

var mots_en_ga = ['gare', 'magasin', 'garage', 'gazon', 'bagage', 'gamin', 'gaz', 'gazelle', 'organise', 'galop', 'régale', 'également', 
'cigale', 'obligatoire', 'langage', 'dégage', 'nougat', 'galet', 'régal', 'galerie', 'magazine', 'gag', 'yoga', 'galopin', 'alligator', 
'bagarre', 'gage', 'égaré', 'égal', 'engagé', 'garde', 'gamelle', 'regarde'];
var mots_en_gai = ['conjugaison', 'gai', 'gaieté', 'vulgaire', 'gaine', 'gaieté', 'sagaie', 'pagaie', 'dégaine', 'rengaine', 'gaiement', 'portugais', 
'cargaison'];
var mots_en_gan = ['toboggan', 'gant', 'origan', 'slogan', 'brigand', 'élégant', 'ouragan', 'fatigant', 'arrogant', 'gigantesque'];
var mots_en_ge = ['rouge', 'neige', 'mange', 'fromage', 'village', 'voyage', 'cage', 'page', 'dangereux', 'garage', 'visage', 'bouge', 
'manège', 'singe', 'nuage', 'orange', 'genou', 'courage', 'orage', 'nage', 'passage', 'horloge', 'range', 'message', 'image', 'luge', 'dirige', 
'étrange', 'change', 'éponge', 'plage', 'ménage', 'protège', 'piège', 'arrosage', 'personnage', 'barrage', 'linge', 'tige', 'sage', 'virage', 
'plonge', 'mélange', 'emballage', 'allonge', 'âge', 'davantage', 'mensonge', 'étage', 'sauvage', 'plumage', 'dommage', 'coquillage'];
var mots_en_gea = ['orgeat', 'mangeable', 'dirigeable', 'orangeade', 'logeable', 'mangea', 'plongea', 'changea', 'dirigea', 'nagea', 'engagea', 
'bougea', 'interrogea', 'neigea'];
var mots_en_geai = ['geai', 'démangeaison', 'mangeait', 'dirigeait', 'bougeait', 'neigeait', 'rangeait', 'pataugeait', 'nageait', 'changeait', 'interrogeait', 
'dirigeait', 'obligeait'];
var mots_en_gean = ['changeant', 'dirigeant', 'nageant', 'mangeant', 'mélangeant', 'bougeant', 'rangeant', 'pataugeant', 'nageant', 'obligeant', 'interrogeant', 
'vengeance', 'assiégeant'];
var mots_en_gee = ['loger', 'géant', 'âgé', 'ronger', 'verger', 'ranger', 'génie', 'manger', 'gémir', 'génial', 'réfrigérateur', 'obliger', 'orangé', 'allonger', 'protéger', 
'décourager', 'soulager', 'rangée', 'dragée', 'mélanger', 'charger', 'plonger', 'gorgée', 'nager', 'général', 'diriger', 'changer', 'neiger'];
var mots_en_geee = ['bergère', 'fougère', 'étagère', 'légère', 'gêné', 'boulangère', 'mangèrent', 'gênant', 'légèrement', 'étrangère', 'oxygène', 'sans-gêne', 'rangèrent', 
'changèrent', 'dirrigèrent', 'interogèrent', 'nagèrent', 'obligèrent', 'mélangèrent', 'bougèrent'];
var mots_en_gen = ['les gens', 'gentil', 'sergent', 'argent', 'gigembre', 'agent', 'urgent', 'genre', 'légende', 'gencive', 'agent', 'gendarmes', 'intelligent', 
'indulgent', 'genre', 'gentille', 'agence', 'urgence', 'gendarmerie', 'légendaire'];
var mots_en_geo = ['bougeotte', 'rougeole', 'cageot', 'badigeonné', 'bourgeonné'];
var mots_en_geoi = ['villageois', 'plongeoir', 'villageoise', 'mangeoire', 'nageoire', 'bourgeois'];
var mots_en_geon = ['sauvageon', 'esturgeon', 'pigeon', 'bougeon', 'mangeons', 'plongeon', 'partageons', 'changeons', 'voyageons', 'mélangeons', 'corrigeons', 'chargeons', 
'changeons', 'nageons', 'rangeons', 'protégeons', 'bougeons', 'plongeons', 'dérangeons', 'dirigeons', 'allongeons', 'interrogeons', 'chargeons'];
 var mots_en_gi = ['aubergine', 'écologie', 'gilet', 'bougie', 'fragile', 'rugir', 'imaginé', 'magie', 'gitan', 'girafon', 'rigide', 'imagine', 'magique', 
'girafe', 'rougir', 'agiter', 'gigot', 'agir', 'gibier', 'origine', 'énergie', 'agile', 'régime', 'givre', 'original', 'logique', 'gifle', 'angine', 'giboulée', 
'girolle', 'chirurgie', 'mugir', 'gigoter', 'allergie', 'fugitif', 'frigidaire'];
var mots_en_gin = ['engin', 'gingembre', 'gindre', 'frangin', 'gingivite'];
var mots_en_go = ['escargot', 'gigot', 'gorille', 'gomme', 'gosse', 'rigolo', 'gorge', 'fagot', 'dingo', 'cigogne', 'rouge-gorge', 'gosier', 'golf', 'catégorie', 
'gobelet', 'frigo', 'cargo', 'goéland', 'égoïste', 'dégringoler', 'rigoler', 'indigo', 'angora', 'mongolfière', 'logo', 'gigoter', 'godasse', 'gober', 'ligoter', 
'argot', 'gommette'];
var mots_en_gon = ['estragon', 'gondole', 'dragon', 'wagon', 'gonfle', 'bougon', 'jargon', 'gond', 'lagon', 'gong'];
var mots_en_gou = ['cagoule', 'gourde', 'goutte', 'engourdi', 'kangourou', 'gourmand', 'pingouin', 'gourmandise', 'gouffre', 'gouache', 'gouvernement', 'goujon', 
'gourdin', 'dégouline', 'gousse', 'bigoudi', 'langouste', 'goudron', 'égout', 'goupil', 'mangouste', 'engourdit', 'dégourdit'];
var mots_en_gue = ['pirogue', 'gueule', 'algue', 'langue', 'longue', 'marguerite', 'vague', 'figue', 'bague', 'conjugue', 'dialogue', 'fatigue', 'catalogue', 'marguerite', 
'navigue', 'digue', 'orgue', 'seringue', 'meringue', 'collègue', 'fugue', 'mangue', 'dague', 'garrigue', 'tangue', 'dogue', 'blague', 'carlingue', 'dingue', 'voguer', 
'irriguer', 'élaguer', 'larguer'];
var mots_en_gui = ['guitare', 'guidon', 'guirlande', 'guide', 'guichet', 'gui', 'déguisement', 'aiguiser', 'déguiser', 'languir', ''];
var mots_en_gy = ['gym', 'gymnase', 'gymnastique', 'gymnaste', 'gyroscope', 'égyptien'];

var sons = ['ga', 'gai', 'gan', 'ge', 'gea', 'geai', 'gean', 'gé', 'gè', 'gen', 'geo', 'geoi', 'geon', 'gi', 'gin', 'go', 'gon', 'gou', 'gue', 'gui', 'gy'];
var lesBases = [mots_en_ga, mots_en_gai, mots_en_gan, mots_en_ge, mots_en_gea, mots_en_geai, mots_en_gean, mots_en_gee, 
mots_en_geee, mots_en_gen, mots_en_geo, mots_en_geoi, mots_en_geon, mots_en_gi, mots_en_gin, mots_en_go, mots_en_gon, 
mots_en_gou, mots_en_gue, mots_en_gui, mots_en_gy];
var lesNoms = ['name_ga', 'name_gai', 'name_gan', 'name_ge', 'name_gea', 'name_geai', 'name_gean', 'name_gee', 'name_geee', 'name_gen', 'name_geo', 
'name_geoi', 'name_geon', 'name_gi', 'name_gin', 'name_go', 'name_gon', 'name_gou', 'name_gue', 'name_gui', 'name_gy', ];

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
