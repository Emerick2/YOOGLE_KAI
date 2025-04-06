document.addEventListener("DOMContentLoaded", () => {
  const images = [];
  const imageFolder = "yo-kai/";
  const boomImage = "boum.gif";

  const mainImage = document.getElementById("mainImage");
  const capturedDiv = document.getElementById("capturedImages");
  const viewCapturedBtn = document.getElementById("viewCaptured");
  let imageTrouver = false;
  let mesYoKaiSauvgarderALeVoletOuvert = false;

  function RécupéréLesCaptures() {
    return JSON.parse(localStorage.getItem("captured") || "[]");
  }

  function Sauvgarder(image) {
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
      if (mesYoKaiSauvgarderALeVoletOuvert == true){
        AfficheLesImagesEnregistrer();
      } 
    }
  }

  function AfficherUneNouvelleImage() {
    if (imageTrouver == false){
      const randomImage = images[Math.floor(Math.random() * images.length)];
      mainImage.dataset.original = randomImage;
      mainImage.src = imageFolder + randomImage;
    }else{
      mainImage.src = "vide.png";
    }
    imageTrouver = true;
  }

  function AfficheLesImagesEnregistrer() {
    mesYoKaiSauvgarderALeVoletOuvert = true;
    capturedDiv.innerHTML = "";
    const captured = RécupéréLesCaptures();
    captured.forEach(img => {
      const imageElement = document.createElement("img");
      imageElement.src = imageFolder + img;
      capturedDiv.appendChild(imageElement);
    });
  }

  mainImage.addEventListener("click", () => {
    const currentImage = mainImage.dataset.original;
    Sauvgarder(currentImage);
    mainImage.classList.add("boum");
    mainImage.src = imageFolder + boomImage;

    setTimeout(AfficherUneNouvelleImage, 1000);//1000 pour une seconde
  });
  function Start(){
    for (let i = 0; i < 1620; i++) {
      images.push("y ("+i+").png");
    }
    AfficherUneNouvelleImage();
  }
  viewCapturedBtn.addEventListener("click", AfficheLesImagesEnregistrer);

  Start();
  
});