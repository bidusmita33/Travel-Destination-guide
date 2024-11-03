// Example: Initialize Google Map
function initMap() {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: paris,
    });
    new google.maps.Marker({
        position: paris,
        map: map,
        title: "Paris, France",
    });
}
