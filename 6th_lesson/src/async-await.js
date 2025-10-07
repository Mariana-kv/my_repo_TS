async function getCat() {
    const url = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    console.log('url:', url);
    const json = await url.json();
    console.log('body:', json);
    return json;
}
async function runData() {
    const data = await getCat();
    console.log(data);
}
runData();
(async () => {
    console.log('before start');
    await runData();
    console.log('after start');
})();
