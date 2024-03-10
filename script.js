// let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText  = document.getElementById('author');
const twitterBtn  = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    // Check if author field is blank and replace it with "unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent= quote.author;
    }

    // Check Quote lunght to determine syling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
newQuote();


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
// getQuotes();