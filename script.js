

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


marker.addListener('click', function () {
  document.getElementById("hi").innerHTML=popup;
})

}


//to add marker use the addMarker function like this {lat:, lng:} , then title of marker, then you say what the marker is
addMarker({lat:39.61629658815152, lng:-77.65704027976375}, "my house!", "my house!");



// To add the marker to the map, call setMap();
marker.setMap(map);



}

