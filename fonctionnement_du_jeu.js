document.addEventListener("DOMContentLoaded", () => {
  const nombreDePokémon = 1621;
  const images = [];
  const titreElement = document.getElementById("titre");
  const imageFolder = "yo-kai/";
  const boomImage = "boum.gif";

  const boutonCapture = document.getElementById("viewCaptured");
  const mainImage = document.getElementById("mainImage");
  const capturedDiv = document.getElementById("capturedImages");
  const viewCapturedBtn = document.getElementById("viewCaptured");
  let imageTrouver = false;
  let mesPokémonSauvgarderALeVoletOuvert = false;

  let capturer = false;
  let nomDeLaCapture = "vide.png";
  let choieDejaFaitPourMonEquipe = false;

  let cesUnChromatique = false;

  let phrase = [
    "Salut, c'est moi, professeur Tonneau !",
    "Bonsoir. Euh... est-on bien le soir ?",
    "J'ai un cookie dans ma poche. Il est périmé.",
    "Je me demande comment va mon frère M. Tonneau. Vu l'heure, il doit se faire cuire un oeuf.",
    "Je me demande bien quel est mon prénom.",
    "Je me demande ce qu'il peut bien se passer dans un frigo, la nuit, quand personne n'y met le nez.",
    "Un jour, professeur Chroma m'a dit que j'avais de gros biscotos. J'ai regardé mes biscotos, j'avais de très gros biscotos !... Là, je me suis réveillé.",
    "Peut-être devrais-je monter un coup d'état ?",
    "Sourimide évolue en Ratonné. EH OUAIS !",
    "Ma maison est sur une plage. J'adore ma maison. J'adore ma plage. Mais ce n'est pas ma plage. J'y ai construit ma maison dans la plus grande illégalité.",
    "Le type feu est fort face au type plante, car le feu brûle les plantes.",
    "Le type plante est fort face à l'eau, car une plante boit de l'eau.",
    "Le type eau est fort face au feu, car l'eau éteint le feu.",
    "Pourquoi travailler quand on peut faire apprendre l'attaque Jackpot à son Miaouss ?",
    "Un jour, le boss de la team Rocket m'a révélé pourquoi il était si méchant. Il m'a dit que c'est parce qu'il était jaloux de moi... Parfois, être parfait comme moi présente des désavantages, tu vois.",
    "J'adore partir en voyage scolaire avec mes élèves ! Comme ça, je ne travaille pas !",
    "J'adore partir en voyage scolaire avec mes élèves ! Comme ça, les collègues me font mes courses et me lavent la vaisselle, haha !",
    "Je suis un héros, tu sais ! Il n'y a pas si longtemps, j'ai affronté le désert aride d'une contrée lointaine en me cachant dans une grotte, face à la terrible team Bald ! J'ai sauvé tout le monde.",
    "Dans ma jeunesse, je n'avais pas de barbe. Surpris ?",
    "Dans ma jeunesse, je n'étais pas professeur. J'étais pourtant déjà immensément intelligent.",
    "Connais-tu l'histoire de ma vie ? Non. Et pourtant, je te parle. Alors... tu en fais partie. Te rends-tu compte ? On fait partie de l'histoire de la vie de tellement de gens.",
    "J'aime bien manger. C'est drôle, haha, parce que, quand on mange, ça fait SCRUNCH SCRUNCH. Hahah. Ha. Ha. Hahahahahahaha.",
    "HAHAHAHAHAHAHAHahahahahahahahahahHAHAHAHAHAH ! ... ... La blague de tout à l'heure était très drôle mais t'es arrivé trop tard, désolé. Si on répète une blague, ce n'est plus drôle.",
    "Un jour je seraaai le meilleur dresseur. Je meeee battrai sans répiiiiiiit !",
    "Je suis ton professeur. Alors, heureux ?",
    "Ma stratégie pédagogique, c'est de laisser l'élève apprendre par lui-même. Du coup, je ne fais rien.",
    "Je connais un vendeur de vélo, il est fort, il fait plein de choses, mais tu sais quoi ? Il ne vend pas des vélos. On m'a appris un jour qu'il n'était même jamais monté sur un seul vélo de sa vie.",
    "Les gens se plaisent à penser que Balthazar est l'éternel rival de professeur Chroma. Mais QUELLE ERREUR ! C'est MOI, son RIVAL !",
    "Tu savais qu'un jour j'ai relâché une ultra-chimère ultra dangereuse dans la nature, ce qui a malencontreusement libéré une deuxième ultra-chimère ultra dangereuse ? Gnéhé. Je suis quand même ultra dangereux.",
    "Je me lave les cheveux avec du beurre. Comme ça, s'il sont gras car je me lave peu, je peux dire que c'est normal !",
    "Quand je serai grand, je serai astronaute !" ,
    "Tu voudrais pas me faire à manger ? J'ai faim. Ou, je sais pas, commande moi des pizzas. Fait quelque chose.",
    "Aujourd'hui c'est mon anniversaire, youhouu !",
    "Tu arrives à te lécher le coude, toi ? ... Moi, je n'ai pas de coude. Je n'ai pas de langue, non plus. Je suis un playmobil. T'avais remarqué ?",
    "Une fois, j'ai rencontré un Giratina shiny niveau 100 espèce Delta en forme Gigamax !!!! J'ai voulu le capturer mais j'avais confondu mon stock de pokéball avec mon stock de clémentines. J'ai lancé une clémentine mais il n'a pas voulu rentrer. Dommage. Ce jour-là, j'ai loupé la capture d'un super Giratina.",
    "Ma maman m'a dit que j'avais de beaux yeux. Tu trouves que j'ai de beaux yeux ?",
    "BATAILLE DE REGARD !! Vas-y regarde moi dans les yeux, on va voir qui cligne des yeux le premier !!",
    "Emerick ? Oui, je le connais bien Emerick, c'est moi qui l'ai accueilli sur la belle île de Malo-Malo. Je lui ai tout appris, je suis son professeur.",
    "Quand je joue à Smash Bros, je joue toujours Mario ! Parce qu'il a une salopette et que c'est un héros, comme moi !",
    "Je ne paie pas mes impôt.",
    "T'as déjà mangé l'écorce d'un arbre ? Je me demande si c'est meilleur que les fruits. Peut-être qu'en fait c'est carrément meilleur mais on n'est pas au courant, vu que personne n'a encore essayé. Tu voudrais pas tenter ?",
    "J'ai redoublé tellement de fois que je suis devenu professeur. Non, non, je blague pas ! Comme j'étais plus vieux que tout le monde, mon école primaire a cru que j'étais prof et on m'a emboché.",
    "Ne le dis à personne, mais je suis terriblement mauvais en cuisine. Comment ça on s'en fiche ? Mais non, je m'en fiche pas, moi ! Du coup je suis obligé de voler des repas au resto asiatique du coin de la rue !",
    "Un jour, j'ai rencontré Sacha du Bourg Palette. Son pikachu voulait rester à mes côtés, tellement il avait reconnu ma valeur... J'ai refusé, j'ai insisté pour qu'il reste aux côtés de Sacha : ils avaient encore tant de choses à accomplir. Eh ouais, je suis comme ça, moi.",
    "Tu connais Roman Opalka ? Il a capturé une infinité de Zarbi ayant tous des formes de chiffre ! Comment ça, ça n'existe pas ? Bien sûr que si que ça existe.. seulement voilà, il les a tous capturés, alors il n'en reste plus pour nous.",
    "Je me demande combien j'ai d'élèves... Un jour, il faudra que je fasse une liste.",
    "Tu connais La Plume Numérique ? Non ? Alors vas-y, tape ça sur google, allez.",
    "Le monde est si grand, l'univers est si vaste... Alors je peux bien manger ce que je veux, mon ventre semblera toujours minuscule en comparaison. eh ouais.",
    "J'ai envie de faire pipi.",
    "Il était une fois... Moi. ... ... Ouah, quelle histoire merveilleuse.",
    "Un jour, on m'appellera pour me supplier de devenir roi. J'en suis convaincu. Alors, en attendant, je garde toujours à proximité mon téléphone. Je ne voudrais pas manquer l'appel d'une vie.",
    "Je me demande à quel point je suis supérieur à toi. Mmh. Ce n'est pas quantifiable, j'imagine.",
    "Au fond de moi sommeille un tigre, grrrRRrrr. Grrr ! Grrr ! GRRRRRRRRRRRRRRRR !!!!!!!",
    "Roooonn..... Zzzzzzzzzzzzzzzzzzz",
    "Pour faire une bonne gaufre, il te faudra de la farine, du beurre, du sucre, des oeufs et du lait. Tu peux aussi y mettre de la patate.",
    "Mes techniques d'apprentissage sont peu orthodoxes, elles ne sont pas très catholiques. Elles sont bouddistes.",
    "Touche-moi le nez. ... C'est fait ? ... BAAh, beurk !! T'as une trace de doigt sur ton écran !!",
    "Aujourd'hui nous sommes la Saint Thomas, il fait 19°C et le ciel est nuageux. Aux alentours de 14h, vous pourrez admirer sur votre gauche des aurores boréales.",
    "J'aime bien bousculer les gens puis m'excuser exagérément. Le problème, c'est quand on le fait tous les matins à la même personne, après, la personne, elle râle. Enfin mon voisin lui il râle en tout cas."
  ]


  function RécupéréLesCaptures() {
    return JSON.parse(localStorage.getItem("captured") || "[]");
  }

  function Sauvgarder(image) {
    if (capturer == false){
      const captured = RécupéréLesCaptures();
      let stop = false;
      for (let i = 0; i < captured.length; i++) {
        if (captured[i] == image){
          stop=true;
        }
      }
      if (stop == false){
        captured.push(image);
        localStorage.setItem("captured", JSON.stringify(captured));
        if (mesPokémonSauvgarderALeVoletOuvert == true){
          AfficheLesImagesEnregistrer();
        } 
      }
      capturer = true;
      nomDeLaCapture = "yo-kai/"+image;
    }
    boutonCapture.innerText = "Voir les captures ("+RécupéréLesCaptures().length+")"
  }

  function AfficherUneNouvelleImage() {
    if (imageTrouver == false){
      imageTrouver = true;
      const randomImage = images[Math.floor(Math.random() * images.length)];
      mainImage.dataset.original = randomImage;
      mainImage.src = imageFolder + randomImage;
      valeur = RécupéréLesCaptures();
      nouveau = true;
      for (let i = 0; i < valeur.length; i++) {
        if (valeur[i] == randomImage){
          nouveau = false;
        }
      }
      if (nouveau == true){
        if (!cesUnChromatique){
          titreElement.className = "nouveau";
        }
      }
    }else{
      mainImage.src = "vide.png";
      newImage.src = "vide.png"
    }
  }

  function AfficheLesImagesEnregistrer() {
    mesPokémonSauvgarderALeVoletOuvert = true;
    capturedDiv.innerHTML = "";
    const captured = RécupéréLesCaptures();
    aAficher = [];
    for (let i = captured.length-1 ; i >= 0; i--) {
      aAficher.push(captured[i]);
    }
    aAficher.forEach(img => {
      const imageElement = document.createElement("img");
      imageElement.src = imageFolder + img;
      capturedDiv.appendChild(imageElement);
    });
  }

  mainImage.addEventListener("click", () => {
    if (capturer == false){
      const currentImage = mainImage.dataset.original;
      Sauvgarder(currentImage);
      mainImage.classList.add("boum");
      mainImage.src = "assets/" + boomImage;
      newImage.src = "vide.png";
      newImage.class = "gif"; 
      setTimeout(AfficherUneNouvelleImage, 1000);//1000 pour une seconde
    }
  });

  //équipe :
  function RécupéréMonEquipe() {
    tableaux = JSON.parse(localStorage.getItem("équipe") || "[]");
    if (tableaux.length < 2){
      for (let index = 0; index < 8; index++) {
        tableaux.push("vide.png");//se serai true s'il est chromatique
      }
      localStorage.setItem("équipe", JSON.stringify(tableaux));
    }
    casse1.src = tableaux[0];
    casse2.src = tableaux[1];
    casse3.src = tableaux[2];
    casse4.src = tableaux[3];
    casse5.src = tableaux[4];
    casse6.src = tableaux[5];
    /*
    if (tableaux[0][1]==true){casse2t.src = "carré².PNG";}
    if (tableaux[1][1]==true){casse1t.src = "carré².PNG";}
    if (tableaux[2][1]==true){casse4t.src = "carré².PNG";}
    if (tableaux[3][1]==true){casse3t.src = "carré².PNG";}
    if (tableaux[4][1]==true){casse6t.src = "carré².PNG";}
    if (tableaux[5][1]==true){casse5t.src = "carré².PNG";}
    */
  }

  function nouveauPokémonDansMonEquipe(ID) {//l'ID est le numéro de la casse (0,1,2,3,4,5)
    if (capturer == true && choieDejaFaitPourMonEquipe == false){
      choieDejaFaitPourMonEquipe=true;
      tableaux = JSON.parse(localStorage.getItem("équipe") || "[]");
      for (let index = ID; index > 0; index--) {
        if (tableaux[ID-1] == "vide.png"){
          ID-=1;
        }
      }


      tableaux[ID] = nomDeLaCapture;
      /*
      if (cesUnChromatique){
        tableaux[ID][1] = true;
      }else{
        tableaux[ID][1] = false;
      }*/
      localStorage.setItem("équipe", JSON.stringify(tableaux));
      RécupéréMonEquipe();
    }
  }

  function Start(){//jeSuisChromatique
    lettre = "y";
    for (let i = 0; i < nombreDePokémon; i++) {
      images.push(lettre+" ("+i+").png");
    }
    AfficherUneNouvelleImage();
    RécupéréMonEquipe();
    
    if (cesUnChromatique){
      titreElement.className = "chromatique";
    }
    boutonCapture.innerText = "Voir les captures ("+RécupéréLesCaptures().length+")"
  }
  viewCapturedBtn.addEventListener("click", AfficheLesImagesEnregistrer);
  Start();
  document.getElementById("casse1").addEventListener("click", () => {
      nouveauPokémonDansMonEquipe(0);
  });
  document.getElementById("casse2").addEventListener("click", () => {
    nouveauPokémonDansMonEquipe(1);
  });
  document.getElementById("casse3").addEventListener("click", () => {
    nouveauPokémonDansMonEquipe(2);
  });
  document.getElementById("casse4").addEventListener("click", () => {
    nouveauPokémonDansMonEquipe(3);
  });
  document.getElementById("casse5").addEventListener("click", () => {
    nouveauPokémonDansMonEquipe(4);
  });
  document.getElementById("casse6").addEventListener("click", () => {
    nouveauPokémonDansMonEquipe(5);
  });
  valeur = Math.floor(Math.random() * phrase.length);
  document.getElementById("phraseDeProfesseurTonneau").innerText = phrase[valeur];

  
  function ajouterEffetRebond(element) {
    if (!element) return;
    element.classList.remove("bounce"); // pour pouvoir relancer l'anim
    void element.offsetWidth;           // force un "reflow" du navigateur
    element.classList.add("bounce");
  }
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      ajouterEffetRebond(img);
    });
  });
});