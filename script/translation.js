const translationDiv = document.querySelector('.translation');

// Function to fetch and display translation
async function getTranslation() {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/2/verses/1/'; // Replace with the chapter and verse you want
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '056ddf58bcmsh12ac36ed2dd0e91p1ed8d7jsnfeeaf757d90d', 
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();  // Parse the JSON response
        
        // Extract and display the translation from the response
        const translationText = data.translations[0].description;  // Assuming the translation is in the first translation object
        translationDiv.textContent = translationText;  // Display the translation in the .translation div
    } catch (error) {
        console.error('Error fetching translation:', error);
        translationDiv.textContent = 'Translation not available';  // Handle any error by displaying a message
    }
}

// Call the function to display the translation
getTranslation();
