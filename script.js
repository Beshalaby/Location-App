var map;
var marker

function initMap () {
  var mapOptions = {
    zoom: 7,
    center: {lat:38.725114, lng:-80.767577},
    mapId: "8db54dfb3396357e",
    mapTypeControl: false, // option for map or satellite 
    disableDefaultUI: true,

  }

  map=new google.maps.Map(document.getElementById("map"), mapOptions);


//function to add marker
function addMarker (coords, title, popup) {
  marker = new google.maps.Marker({
    position: coords,
    title: title,
    icon:"pictures/Smol Marker.png" 
});

function thingy(coords, title, popup) {
  addMarker(coords, title, popup);
  marker.setMap(map);
}

marker.addListener('click', function () {
  document.getElementById("hi").innerHTML=popup;
})

}


//to add marker use the addMarker function like this {lat:, lng:} , then title of marker, then you say what the marker is
addMarker({lat:39.61629658815152, lng:-77.65704027976375}, "landmark", "description");
addMarker({lat:39.47816050082987, lng:-77.71434117301506}, "Antietam National Battlefield", "placeholder");
addMarker({lat:39.51532141437621, lng:-77.63052100986665}, "Washington Monument", "placeholder");
addMarker({lat:39.35555044758504, lng:-77.72229239966968}, "Maryland Heights", "placeholder");
addMarker({lat:, lng:}, "", "");
addMarker({lat:, lng:}, "", "");
addMarker({lat:, lng:}, "", "");
addMarker({lat:, lng:}, "", "");
addMarker({lat:, lng:}, "", "");

// To add the marker to the map, call setMap();
// marker.setMap(map);

}

