/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
 
 /* Survey form to select the best pathway for someone */
 document.addEventListener('DOMContentLoaded', function() {
	 
	 /* Variable for the form */
	 const surveyForm = document.getElementById('searchForm');
	 
	 /* NO DEFAULT SETTINGS */
	 surveyForm.addEventListener('submit', function(event) {
		 event.preventDefault();
	 }
	 
	 const usrInp = document.getElementById('searchQuery');
	 const searchQuery = searchInput.value.trim();
	 
	 /* Notification */
	 if (searchQuery !== '') {
		 alert('Seached: ' + searchQuery);
	 }
	 
	 else {
		 alert('Select an option that best suits you');
	 }
	 
	 
 }


const FINANCE = "https://blog.salespanel.io/wp-content/uploads/2022/06/40450-1024x768.jpg";
const WISDOM = "https://img.tpt.cloud/nextavenue/uploads/2018/04/Does-Wisdom-Come-With-Age_147173533.inside.1200x776.jpg"
const MENTALITY_SPIRITUALITY= "https://qph.cf2.quoracdn.net/main-qimg-e4dad85f12e2b41916a0e163a4c35d87"


// This is an array of strings (TV show titles)
let titles = [
    "Finances",
    "Wisdom",
    "Mentality / Spirituality"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FINANCE;
			
        } else if (i == 1) {
            imageURL = WISDOM;
        } else if (i == 2) {
            imageURL = MENTALITY_SPIRITUALITY;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);



/*
function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
*/