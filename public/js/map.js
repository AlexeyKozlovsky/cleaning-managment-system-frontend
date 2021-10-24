var mymap = L.map('map', {zoomControl: false}).setView([52.5920624, 39.5245544], 13);
mymap.on("load",function() { setTimeout(() => {
    self.map.invalidateSize();
}, 1); });
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxhbm5vbmUiLCJhIjoiY2t2M3R4MHprNGJpZTJuczdtN2cxMGRxYSJ9.KGT874RF78OPPqwKS7YZWQ'
}).addTo(mymap);


// var latlngArray;
// var control = L.Routing.control({
//     waypoints: latlngArray,
//     show: false,
//     waypointMode: 'snap',
//     createMarker: function() {}
// }).addTo(map);
