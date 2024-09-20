//date

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];
let dateElemnet = document.querySelector(".date .current-date")
dateElemnet.textContent =  `${d.getDate()}, ${month} ${d.getFullYear()}`

// time

let timeElement = document.querySelector('.date .time')


function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    timeElement.textContent = 
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  }
  
  setInterval(time, 1000);


//verse

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

//Greeting 

let good = document.querySelector(".hello")
let word = ""

if (d.getHours() < 12) {
    word = "Good Morning, "
} else if (d.getHours() < 18) {
    word = "Good Afternoon, "
} else if (d.getHours() < 20) {
    word = "Good Evinning, "
} else if (d.getHours() < 24) {
    word = "Good Night, "
}

good.textContent = word