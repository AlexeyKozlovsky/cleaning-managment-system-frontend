const apiUrl = 'http://80.87.111.51:8000';
const map = document.getElementById("map");
document.getElementById('show__edges__checkbox').addEventListener('change', (event) => {
    if (event.currentTarget.checked) edgeGroup.addTo(mymap);
    else edgeGroup.removeFrom(mymap);
})

var edgeGroup = L.layerGroup();
get_data();


function get_data() {
    const request = `${apiUrl}/routes/in-points?page_number=1&page_limit=10`;
    fetch(request)
        .then(res => {
            return res.json();
        })
        .then(post => {
            Array.from(post['result']).forEach(route => {
                Array.from(route['points']).forEach((point, index) => {
                    L.circle(point, {color: route['hex_color'], radius: 10}).addTo(mymap);
                    if (index > 1) {
                        edgeGroup.addLayer(L.polyline([route['points'][index - 1], point], {color: route['hex_color']}))
                    }
                })
            })
        })
}