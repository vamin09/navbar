'use strict';
const images = [
    "https://skydivesuffolk.com/wp-content/uploads/2024/09/IMG_4866_proc_745000475-2.jpg",
    "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_900,h_506/https://skydivingstl.com/wp-content/uploads/Woman-screaming-with-joy-during-freefall-on-a-tandem-skydiving-at-Skydive-STL-in-St-Louis-900x506.jpg",
    "https://skydiveperris.com/wp-content/uploads/2023/09/skydive-perris-experience-learn-to-skydive.jpg",
    "https://www.uspa.org/Portals/parachutist/EasyDNNnews/9403/img-HSCML_PO_2406.jpg"
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("image");
  
  const updateImage = () => {
    imageElement.src = images[currentImageIndex];
  };
  
  document.getElementById("nextButton").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });
  
  document.getElementById("backButton").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  updateImage();