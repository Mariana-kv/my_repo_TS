function getCat() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch(err => console.error('error:', err));
}
function processData(data) {
    console.log(data);
}
getCat();
