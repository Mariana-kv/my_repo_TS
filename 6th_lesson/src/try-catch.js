async function getCat(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error after the 1st URL');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('1st URL:', error.message);
        const urlNew = 'https://api.thecatapi.com/v1/images/search?limit=10';
        try {
            const urlNewResponse = await fetch(urlNew);
            if (!urlNewResponse.ok) {
                throw new Error('Error after the 2nd URL');
            }
            const urlNewData = await urlNewResponse.json();
            console.log(urlNewData);
        } catch (urlNewError) {
            console.error('2nd URL:', urlNewError.message);
            throw new Error('Both requests failed. Please try another URL.');
        }
    }
}

const url = 'https://api.thecatapi.com/v1/test/search?limit=10';
getCat(url);
