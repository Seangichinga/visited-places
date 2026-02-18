
    function Place(location, timeOfYear, description, dateAdded) {
    this.location = location;
    this.timeOfYear = timeOfYear;
    this.description = description;
    this.dateAdded = dateAdded;
    }
// Place Prototype Methods
Place.prototype.getDetails = function() {
    return {
        location: this.location,
        timeOfYear: this.timeOfYear,
        description: this.description,
        dateAdded: this.dateAdded
    };
};

Place.prototype.getDisplayName = function() {
    return `${this.location} (${this.timeOfYear})`;
};

// TravelLog Constructor Function
function TravelLog() {
    this.places = [];
}

// TravelLog Prototype Methods
TravelLog.prototype.addPlace = function(place) {
    this.places.push(place);
};

TravelLog.prototype.removePlace = function(index) {
    this.places.splice(index, 1);
};

TravelLog.prototype.getAllPlaces = function() {
    return this.places;
};

TravelLog.prototype.getTotalPlaces = function() {
    return this.places.length;
};
    
// Initialize TravelLog and DOM Elements
const travelLog = new TravelLog();

const addPlaceForm = document.getElementById('placeForm');
const placeNameInput = document.getElementById('placeName');
const placeDescriptionInput = document.getElementById('placeDescription');
const timeOfYearInput = document.getElementById('timeOfYear');
const placesList = document.getElementById('placesList');

//modal elements
const placeModal = document.getElementById('placeModal');
const modalPlaceName = document.getElementById('modalPlaceName');
const modalPlaceDescription = document.getElementById('modalPlaceDescription');
const modalTimeOfYear = document.getElementById('modalTimeOfYear');
const closeBtn = document.querySelector('.close');
const closeBtnModal = document.querySelector('.close-btn');

//form submission handler
addPlaceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = placeNameInput.value.trim();
    const description = placeDescriptionInput.value.trim();
    const timeOfYear = timeOfYearInput.value;

const newPlace = new Place(name, timeOfYear, description, new Date());
    travelLog.addPlace(newPlace);

    placeNameInput.value = '';
    placeDescriptionInput.value = '';
    timeOfYearInput.value = '';
    displayPlaces();
    displayMessage('Place added successfully!');
});
function displayPlaces() {
    const places = travelLog.getAllPlaces();
    placesList.innerHTML = '';

    if (places.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No places added yet.';
        placesList.appendChild(emptyMessage);
    } else {
 places.forEach((place, index) => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <h3 class="place-name" style="cursor: pointer; color: #4CAF50;">
                ${place.location} </h3>
                <p class="place-season">🗓️ ${place.timeOfYear}</p>
                <p>${place.description}</p>
                <div class="place-card-actions">
                    <button onclick="removePlace(${index})">Delete</button>
                </div>
            `;
            const placeNameElement = card.querySelector('.place-name');
            placeNameElement.addEventListener('click', () => {
                showPlaceModal(place);
            });


            placesList.appendChild(card);
        });
    }

}

function showPlaceModal(place) {
    modalPlaceName.textContent = place.location;
    modalPlaceDescription.textContent = place.description;
    modalTimeOfYear.textContent = `🗓️ ${place.timeOfYear}`;
    placeModal.classList.add('show');
}

function closeModal() {
    placeModal.classList.remove('show');
}

// Modal Event Listeners
closeBtn.addEventListener('click', closeModal);
closeBtnModal.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === placeModal) {
        closeModal();
    }
});

function removePlace(index) {
    const places = travelLog.getAllPlaces();
    const placeToRemove = places[index];
    
    if (confirm(`Are you sure you want to delete "${placeToRemove.location}"?`)) {
        travelLog.removePlace(index);
        displayPlaces();
        displayMessage('Place removed successfully!');
    }
}

function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}
displayPlaces();