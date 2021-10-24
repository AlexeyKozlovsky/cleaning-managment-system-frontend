const cars_table = document.getElementById('cars__table__body')

get_cars_data();


function get_cars_data() {
    const request = `${apiUrl}/cars/?page_number=1&page_limit=10`;
    fetch(request, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Response-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(['product_name', 'statuses', 'car_job'])})
        .then(res => {
            return res.json();
        })
        .then(post => {
            post['result'].forEach(car => {

                let row = document.createElement('tr');
                let name = document.createElement('td');
                let in_work = document.createElement('td');
                let in_repair = document.createElement('td');
                let car_job = document.createElement('td')

                name.textContent = car['product_name'];
                in_work.textContent = car['statuses']['is_working'];
                in_repair.textContent = car['statuses']['in_repair'];
                car_job.textContent = car['car_job']['job_name'];

                row.appendChild(name);
                row.appendChild(in_work);
                row.appendChild(in_repair);
                row.appendChild(car_job);

                cars_table.appendChild(row);
            })
            document.createElement('tr')
        })
}