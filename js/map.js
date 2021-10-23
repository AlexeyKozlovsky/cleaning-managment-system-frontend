var mymap = L.map('map').setView([52.5920624, 39.5245544], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxhbm5vbmUiLCJhIjoiY2t2M3R4MHprNGJpZTJuczdtN2cxMGRxYSJ9.KGT874RF78OPPqwKS7YZWQ'
}).addTo(mymap);

let points = [
    [52.609432, 39.5811687],
    [52.6095023, 39.5841104],
];

// iterate through the points to dynamically create the elements
for(let i = 0; i < points.length; i++)
{
    // every point creates a circle (node)
    L.circle(points[i], {radius: 20}).addTo(mymap)

    // every pair of adjacent points creates an edge,
    // other logic can be implemented
    if(i + 1 < points.length){
        L.polyline([points[i], points[i+1]]).addTo(mymap);
    }
}