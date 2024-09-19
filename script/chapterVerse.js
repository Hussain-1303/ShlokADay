const chapterVerseUrl = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/{chapter}/verses/{verse}'; 

async function getChapterVerse(chapter, verse) {
    const url = chapterVerseUrl.replace('{chapter}', chapter).replace('{verse}', verse);
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '056ddf58bcmsh12ac36ed2dd0e91p1ed8d7jsnfeeaf757d90d', 
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); 
        const chapterVerseElement = document.querySelector('.chapter-verse');

        if (data && data.chapter && data.verse) {
            chapterVerseElement.textContent = `Chapter: ${data.chapter}, Verse: ${data.verse}`;
        } else {
            chapterVerseElement.textContent = 'Chapter and Verse information not available.';
        }
    } catch (error) {
        console.error('Error fetching chapter and verse information:', error);
        document.querySelector('.chapter-verse').textContent = 'Error fetching chapter and verse information.';
    }
}

getChapterVerse(2, 1); 