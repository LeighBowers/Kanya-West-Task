fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        document.querySelector('#quote').innerHTML = data.quote

    });