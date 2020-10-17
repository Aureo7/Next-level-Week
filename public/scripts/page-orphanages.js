//create map
const map = L.map("mapid").setView([-6.0623179,-49.9084895], 18);


//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [200, 71],
  popupAnchors: [0, -10]
})

//create popup overlay

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//create and add marker 'icon: icon' ficou apenas icon, pois o objeto e a variável possuem o mesmo nome
L.marker([-6.0623179,-49.9084895], {icon})
  .addTo(map)
  .bindPopup(popup);


