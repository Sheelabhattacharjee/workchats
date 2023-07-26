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
yourSlackButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    if (yourSlackPopup.style.display === 'block') {
        hidePopupMenu();
    } else {
        showPopupMenu();
    }
});

// Event listener for clicks outside the popup to close it
document.addEventListener('click', function (event) {
    if (!yourSlackPopup.contains(event.target) && yourSlackPopup.style.display === 'block') {
        hidePopupMenu();
    }
});

// Close the popup when the "Sign out" button is clicked
const signOutButton = yourSlackPopup.querySelector('.button');
signOutButton.addEventListener('click', function (event) {
    hidePopupMenu();
});


// profile pop up script

 // JavaScript
 const imgElement = document.querySelector('.profile-image-nav');
 const popupElement = document.querySelector('.profile-popup');

 // Function to show the pop-up
 function showPopups() {
     popupElement.style.display = 'block';
 }

 // Function to hide the pop-up
 function hidePopups() {
     popupElement.style.display = 'none';
 }

 imgElement.addEventListener('click', function (event) {
     if (popupElement.style.display === 'block') {
         hidePopups();
     } else {
         showPopups();
     }
 });

 // Event listener to hide the pop-up when clicking outside
 document.addEventListener('click', function (event) {
     if (!imgElement.contains(event.target) && !popupElement.contains(event.target)) {
         hidePopups();
     }
 });


 //invite people

 const inviteButton = document.querySelector('.invite')
 const invitePopup = document.querySelector('.invite-people')

  // Function to show the pop-up
  function inviteShowPopups() {
    invitePopup.style.display = 'block';
}

// Function to hide the pop-up
function inviteHidePopups() {
    invitePopup.style.display = 'none';
}

inviteButton.addEventListener('click', function (event) {
    if (invitePopup.style.display === 'block') {
        inviteHidePopups();
    } else {
        inviteShowPopups();
    }
});

// Event listener to hide the pop-up when clicking outside
document.addEventListener('click', function (event) {
    if (!inviteButton.contains(event.target) && !invitePopup.contains(event.target)) {
        inviteHidePopups();
    }
});


//create-channel-popup

const createChanneButton = document.querySelector('.create-pop')
 const createChannelShow= document.querySelector('.create-channel-popup')

  // Function to show the pop-up
  function createShowPopups() {
    createChannelShow.style.display = 'block';
}

// Function to hide the pop-up
function createHidePopups() {
    createChannelShow.style.display = 'none';
}

createChanneButton.addEventListener('click', function (event) {
    if (createChannelShow.style.display === 'block') {
        createHidePopups();
    } else {
        createShowPopups();
    }
});

// Event listener to hide the pop-up when clicking outside
document.addEventListener('click', function (event) {
    if (!createChanneButton.contains(event.target) && !createChannelShow.contains(event.target)) {
        createHidePopups();
    }
});