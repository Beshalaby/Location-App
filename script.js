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
  marker.setMap(map)

marker.addListener('click', function () {
  document.getElementById("hi").innerHTML=popup;
  ///////////////////////
  document.getElementsByClassName("intro")[0].style.animation= "growBox 1s steps(60) 1";
  document.getElementsByClassName("intro")[0].style.animationName= "growBox";
  document.getElementsByClassName("intro")[0].style.animationFillMode="forwards";
  document.getElementsByClassName("search")[0].style.display="none";
  document.getElementsByClassName("searchIcon")[0].style.display="none";
  document.getElementsByClassName("introText")[0].style.display="none";
 
})

}

/*
function link(text, link) {
  return "<a href=link>text</a>" 
}
*/

//to add marker use the updateMap function like this {lat:, lng:} , then title of marker, then you say what the marker is
addMarker({lat:39.4687493, lng:-77.740981}, "Antietam National Battlefield", "Antietam National Battlefield is a National Park along Antietam Creek. There are over 100 buildings, monuments, and demonstrations that commemorate the Civil War Battle of Antietam.\n<a href='https://www.nps.gov/anti/index.htm'>Website</a>");
addMarker({lat:39.445894, lng:-77.8433811}, "Washington Monument (Boonsboro, MD)", "This Washington Monument in Boonsboro was the first monument dedicated to George Washington. This State Park includes a museum, picknicking facilities, and access to the Appalachian Trail.\n<a href='https://dnr.maryland.gov/publiclands/pages/western/washington.aspx'>Website</a>");
addMarker({lat:39.257259, lng:-77.6316552}, "Maryland Heights", "The Maryland Heights Trail offers hikers the opportunity to see many aspects of Harpers Ferry NHP on one walk: spectacular scenery, geology, Civil War, industrial, and transportation history.\n<a href='https://www.nps.gov/hafe/planyourvisit/maryland-heights-trail.htm'>Website<a/a>");
addMarker({lat:39.4708927, lng:-78.3459939}, "Cacapon Mountain Overlook", "Cacapon Mountain Overlook is a spectacular view, the highest elevation in the eastern panhandle. The site offers a view of four states, along with a Naturalist that provides a brief history of the park and the sight of migrating hawks and butterflies. There are hiking trails, riding stables and golf at Cacapon, plus a great restaurant and rocking chairs on the veranda to sit a spell and relax.\n<a href='https://wvstateparks.com/park/cacapon-resort-state-park/'>Website<a/a>");
addMarker({lat:39.3724859, lng:-77.8673711}, "Annapolis Rock", "Annapolis Rock via Appalachian Trail is a 5.1 mile heavily trafficked out and back trail that features beautiful wild flowers and cliffs. The trail is primarily used for hiking and rock climbing and is accessible year-round.\n<a href='https://www.alltrails.com/trail/us/maryland/annapolis-rock-via-appalachian-trail'>Website<a/a>");
addMarker({lat:39.4980788,lng:-77.6768527}, "Crystal Grottoes Caverns", "Crystal grottoes caverns has more formations per square foot than any cave known to man, and is the most naturally kept cave in the world. The formations in the caverns are made of calcium carbonate and have taken thousands of years to develop.\n <a href='http://www.crystalgrottoescaverns.com/'>Website<a/a>");
addMarker({lat:39.5417934, lng:-79.1468621}, "Savage River State Forest", "Savage River State Forest is a second growth mixed hardwood forest dominated by oak species, sugar and red maple, black cherry, hickory and ash. Savage River State Forest has been intensively managed over the last nine decades. Visitors can enjoy hiking, biking, boat/canoeing, ORV trail riding, firewood cutting, fishing, snowmobiling, cross-country skiing, primitive camping, and a shooting range.\n<a href='https://dnr.maryland.gov/forests/pages/publiclands/western_savageriverforest.aspx'>Website<a/a>");
addMarker({lat:39.3867783, lng:-79.2675514}, "Potomac State Forest", "Potomac State Forest is an 11,535-acre state forest made of mountain forests, streams, and valleys. The forest offers a wide range of outdoor recreation opportunities, such as cross-country skiing, camping, fishing, hiking, and hunting.\n<a href='https://dnr.maryland.gov/forests/Pages/publiclands/western_potomacgarrettforest.aspx'>Website<a/a>");
addMarker({lat:39.6386001,lng:-78.4651611}, "Green Ridge State Forest", "At 49,000 acres, Green Ridge is the largest contiguous block of public land in Maryland. Green Ridge is located within the Ridge and Valley Province of the Appalachian Mountains. It is rich in both natural and cultural heritage and remains a “working forest” today as it is managed by the Maryland Department of Natural Resources Forest Service to conserve the natural ecological processes while supporting the economy of the region through an active forest management program.\n<a href='https://dnr.maryland.gov/forests/pages/publiclands/western_greenridgeforest.aspx'>Website<a/a>");
addMarker({lat:39.590799, lng:-77.7154694,}, "The Hagerstown Culture Trail", "The Hagerstown Cultural Trail connects two of our city’s most popular destinations -the downtown Arts & Entertainment District with City Park and the Washington County Museum of Fine Arts. The trail offers public art experiences, gathering spaces, kayaking, and other amenities along the way.\n<a href='https://hagerstownculturaltrail.com/'>Website<a/a>");

}