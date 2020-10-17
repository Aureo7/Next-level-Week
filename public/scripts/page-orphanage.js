const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-6.0623179, -49.9084895], 17);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [125, 71],
  popupAnchors: [50, 50],
});

//create and add marker 'icon: icon' ficou apenas icon, pois o objeto e a variável possuem o mesmo nome
L.marker([-6.0623179, -49.9084895], { icon }).addTo(map);


/*image gallery*/

function selectImage(event) {
  
  const button = event.currentTarget;
  console.log(button.children);

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);
  
  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  

  //selecionar a imgem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  //atualizar o container de imagem
  imageContainer.src = image.src;
  //adicionar novamente a classe .active para o botão clicado

  button.classList.add('active'); 
}
