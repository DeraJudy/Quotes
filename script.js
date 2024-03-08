// let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const AuthorText  = document.getElementById('author');
const twitterBtn  = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// show New Quotes
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    AuthorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    if (!quote.author) {
        AuthorText.textContent = 'Unknown';
    } else {
        AuthorText.content = quote.author;
    }
}

//  Get Quotes from API(Internet)
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch error Here
//     }
// }

// On load
newQuote();
// getQuotes();