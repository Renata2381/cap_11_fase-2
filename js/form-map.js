// CREATE MAP
var map = L.map('mapid').setView([-23.560530, -46.657421], 15);
//localização que o mapa abre

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3i5wTD8BRrIzU2VKnAZU').addTo(map);


// RESIZING MAP

const botao = document.getElementById('redimensionaMapa')

botao.onclick = function() {
  window.dispatchEvent(new Event('resize'))
}

/*CREATE ICON*/
const icon = L.icon({
  iconUrl: "/img/marker-map.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;   // a partir daqui começa a função para add o ícone

/*create and add marker*/
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], { icon })
      .addTo(map)
})