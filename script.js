let filieres = [

{ nom: "Mathématiques", code: "mat" },
{ nom: "Informatique", code: "inf" },
{ nom: "Automatique", code: "aut" },
{ nom: "Télécommunications", code: "tel" },
{ nom: "Français", code: "fra" },
{ nom: "Anglais", code: "ang" }
];

const selectionFiliere = document.getElementById("filiere");

filieres.forEach(function(filiere) {
let option = document.createElement("option");
option.value = filiere.code;
option.textContent = filiere.nom;
selectionFiliere.appendChild(option);

});

document.getElementById("formulaire").addEventListener("submit", function(event) {

event.preventDefault();
const nom = document.getElementById("nom").value.trim();
const prenom = document.getElementById("prenom").value.trim();
if (nom.length > 24 || !verifierNomOuPrenom(nom)) {

alert("Le nom n'est pas valide.");

return;

}

if (prenom.length > 24 || !verifierNomOuPrenom(prenom)) {

alert("Le prénom n'est pas valide.");

return;

}
alert("Nom et prénom valides !");
});

function verifierNomOuPrenom(texte) {

if (texte.length === 0)
return false;
let tiret = false;
let avantTiret = 0;
let apresTiret = 0;
for (let i = 0; i < texte.length; i++) {
let c = texte[i];
if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
if (!tiret) {
avantTiret++;
} else {
apresTiret++;
}

} else if (c === '-') {
  
if (tiret || i === 0 || i === texte.length - 1) {

return false;
}
tiret = true;

} else {

return false;
}
}
if (tiret) {
return avantTiret > 0 && apresTiret > 0;
} else {
return avantTiret > 0;

}

}

document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const dateNaissanceValue = document.getElementById("dateNaissance").value;

  // Validation des champs nom et prénom
  if (nom.length > 24 || !verifierNomOuPrenom(nom)) {
    alert("Le nom n'est pas valide.");
    return;
  }

  if (prenom.length > 24 || !verifierNomOuPrenom(prenom)) {
    alert("Le prénom n'est pas valide.");
    return;
  }

  // Vérification de la date de naissance
  if (!dateNaissanceValue) {
    alert("Veuillez entrer votre date de naissance.");
    return;
  }

  const naissance = new Date(dateNaissanceValue);
  const aujourdHui = new Date();

  let age = aujourdHui.getFullYear() - naissance.getFullYear();

  // Ajustement de l'âge si l'anniversaire n'est pas encore passé cette année
  if (
    aujourdHui.getMonth() < naissance.getMonth() ||
    (aujourdHui.getMonth() === naissance.getMonth() && aujourdHui.getDate() < naissance.getDate())
  ) {
    age--;
  }

  // Affichage du résultat
  if (age < 18) {
    alert("Vous avez seulement " + age + " ans. Il faut avoir au moins 18 ans.");
  } else {
    alert("Vous avez " + age + " ans. Vous pouvez vous inscrire.");
  }





// Facultés : code → nom complet

const facultes = {
se: "Faculté des Sciences Exactes",
st: "Faculté de Technologie",
ll: "Faculté des Lettres et des Langues"
};

// Filières : code de filière → code de faculté

const filiere = {

mat: "se",
inf: "se",
aut: "st",
tel: "st",
fra: "ll",
ang: "ll"
};


function obtenirFaculte(codeFiliere) {
const codeFaculte = filiere[codeFiliere];
return facultes[codeFaculte] || "Faculté inconnue";
}

// Gestion du formulaire

const codeFiliere = document.getElementById("filiere").value;
const nomFaculte = obtenirFaculte(codeFiliere);
alert("Vous êtes inscrit à : " + nomFaculte);

  let grade = "", titreCarte = "";

  if (age <= 21) {
    grade = "Licence";
    titreCarte = "CARTE ÉTUDIANT";
  } else if (age <= 23) {
    grade = "Master";
    titreCarte = "CARTE ÉTUDIANT";
  } else if (age <= 27) {
    grade = "Doctorant";
    titreCarte = "CARTE ÉTUDIANT";
  } else {
    grade = "Enseignant-Chercheur";
    titreCarte = "CARTE ENSEIGNANT";
  }

  alert("Votre grade est : " + grade  + titreCarte);

 
  const lieu = document.getElementById("lieuNaissance").value.trim();
  const univ = document.getElementById("universite").value.trim();
  
  if ((lieu === "Bejaïa" && univ === "UAMB") || (lieu === "TiziOuzou" && univ === "UMMTO")) {
    alert("Vous êtes un étudiant interne.");
  } else if ((lieu === "Bejaïa" && univ === "UMMTO") || (lieu === "TiziOuzou" && univ === "UAMB")) {
    alert("Vous êtes un étudiant externe.");
  }
  });
const dateNaissanceValue = document.getElementById("dateNaissance").value;
const lieu = document.getElementById("lieuNaissance").value.trim();
const univ = document.getElementById("universite").value.trim();
 const codeFiliere = document.getElementById("filiere").value;
const filiereFaculte = {
  mat: "se",
  inf: "se",
  aut: "st",
  tel: "st",
  fra: "ll",
  ang: "ll"
};

const facultes = {
  se: "Faculté des Sciences Exactes",
  st: "Faculté de Technologie",
  ll: "Faculté des Lettres et des Langues"
};
 codeFac = filiereFaculte[codeFiliere];
const nomFaculte = facultes[codeFac] || "Faculté inconnue";

const utilisateur = {
  nom: nom,
  prenom: prenom,
  dateNaissance: dateNaissanceValue,
  lieuNaissance: lieu,
  universite: univ,
  codeFiliere: codeFiliere,
  nomFiliere: filieres.find(f => f.code === codeFiliere)?.nom || "Inconnue",
  faculte: nomFaculte,
  grade: grade,
  titreCarte: titreCarte,
  anneeUniversitaire: `${aujordHui.getMonth() >= 8 ? aujourdHui.getFullYear() : aujourdHui.getFullYear() - 1}/${aujordHui.getMonth() >= 8 ? aujourdHui.getFullYear() + 1 : aujourdHui.getFullYear()}`,
  statut: ((lieu === "Bejaïa" && univ === "UAMB") || (lieu === "TiziOuzou" && univ === "UMMTO")) ? "Interne" : "Externe"
};

// Affichage de la carte
const carte = document.getElementById("carte");
carte.className = `carte ${utilisateur.statut.toLowerCase()}`; // ajoute "carte interne" ou "carte externe"
carte.innerHTML = `
  <h2>${utilisateur.titreCarte}</h2>
  <p>Nom : ${utilisateur.nom}</p>
  <p>Prénom : ${utilisateur.prenom}</p>
  <p>Date de naissance : ${utilisateur.dateNaissance}</p>
  <p>Lieu de naissance : ${utilisateur.lieuNaissance}</p>
  <p>Université : ${utilisateur.universite}</p>
  <p>Filière : ${utilisateur.nomFiliere}</p>
  <p>Faculté : ${utilisateur.faculte}</p>
  <p>Grade : ${utilisateur.grade}</p>
  <p>Année universitaire : ${utilisateur.anneeUniversitaire}</p>
  <p>Statut : ${utilisateur.statut}</p>
`;

carte.style.display = "block";
document.getElementById("formulaire").addEventListener("reset", function () {
  const carte = document.getElementById("carte");
  carte.innerHTML = "";
  carte.style.display = "none";
});
  














