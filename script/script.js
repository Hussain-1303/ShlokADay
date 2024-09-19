let verse = document.querySelector(".geeta .verse")



//
// async function getVerse() {
//     const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/1/`)
//     const data = await response.json()
//     let textVerse = document.createTextNode(data.data.text)
//     verse.appendChild(textVerse)
// }

// getVerse()


const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/2/verses/1/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '056ddf58bcmsh12ac36ed2dd0e91p1ed8d7jsnfeeaf757d90d',
		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

async function getVerse() {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the JSON response
    let textVerse = document.createTextNode(data.text);
    verse.appendChild(textVerse);
}

getVerse();

