
const workDetail = document.querySelector('.work-detail');
const popupContainer = document.querySelector('.popup-container');
const cancelButton = document.querySelector('.button[data-action="cancel"]');
const dimmedBackground = document.createElement('div');
dimmedBackground.classList.add('dimmed-background');

// Show the popup and dim the background when work-detail is clicked
workDetail.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    document.body.appendChild(dimmedBackground);
});

// Hide the popup and remove the dimmed background
function hidePopup() {
    popupContainer.style.display = 'none';
    document.body.removeChild(dimmedBackground);
}

// Hide the popup and remove the dimmed background when clicked outside
window.addEventListener('click', (event) => {
    if (event.target !== workDetail && !popupContainer.contains(event.target)) {
        hidePopup();
    }
});

// Hide the popup and remove the dimmed background when the escape key is pressed
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hidePopup();
    }
});

cancelButton.addEventListener('click', () => {
    hidePopup();
});



//your slack popup

 // Get the elements
 const yourSlackButton = document.getElementById('yourSlackButton');
 const yourSlackPopup = document.getElementById('yourSlackPopup');
 
 // Function to show the popup menu
 function showPopupMenu() {
     yourSlackPopup.style.display = 'block';
 }
 
 // Function to hide the popup menu
 function hidePopupMenu() {
     yourSlackPopup.style.display = 'none';
 }
 
 // Event listener for the "Your slack" button click
 yourSlackButton.addEventListener('click', function(event) {
     event.stopPropagation(); // Prevent the click from propagating to the document
     if (yourSlackPopup.style.display === 'block') {
         hidePopupMenu();
     } else {
         showPopupMenu();
     }
 });
 
 // Event listener for clicks outside the popup to close it
 document.addEventListener('click', function(event) {
     if (!yourSlackPopup.contains(event.target) && yourSlackPopup.style.display === 'block') {
         hidePopupMenu();
     }
 });
 
 // Close the popup when the "Sign out" button is clicked
 const signOutButton = yourSlackPopup.querySelector('.button');
 signOutButton.addEventListener('click', function(event) {
     hidePopupMenu();
 });