async function fetchData() {
    const url = 'https://nlp-translation.p.rapidapi.com/v1/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'e6af14114dmsh6c2afb1d6a9b35ep1dd350jsnf1c1f3d168d4',
            'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
        },
        body: new URLSearchParams({
            text: 'Hello World',
            to: 'es',
            from: 'en'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();