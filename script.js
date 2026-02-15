class place{
    constructor(location, notes, timeOfYear, description, dateAdded) {
    this.location = location;
    this.notes = notes;
    this.timeOfYear = timeOfYear;
    this.description = description;
    this.dateAdded = dateAdded;
    }
    }
    class TravelLog {
    constructor() {
        this.places = [];
    }
    
    addPlace(place) {
        this.places.push(place);
    }
    
    removePlace(index) {
        this.places.splice(index, 1);
    }
    
    getAllPlaces() {
        return this.places;
    }
}
const travelLog = new TravelLog();

const addPlaceForm = document.getElementById('placeForm');
const placeNameInput = document.getElementById('placeName');
const placeDescriptionInput = document.getElementById('placeDescription');
const timeOfYearInput = document.getElementById('timeOfYear');
const placesList = document.getElementById('placesList');

addPlaceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = placeNameInput.value.trim();
    const description = placeDescriptionInput.value.trim();
    const timeOfYear = timeOfYearInput.value;

const newPlace = new Place(name, [], timeOfYear, description, new Date(), 0);
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
                <h3>${place.location}</h3>
                <p class="place-season">🗓️ ${place.timeOfYear}</p>
                <p>${place.notes}</p>
                <div class="place-card-actions">
                    <button onclick="removePlace(${index})">Delete</button>
                </div>
            `;
            placesList.appendChild(card);
        });
    }

}
function removePlace(index) {
    travelLog.removePlace(index);
    displayPlaces();
    displayMessage('Place removed successfully!');
}
    
if (confirm(`Are you sure you want to delete "${placeToRemove.location}"?`)) {
        travelLog.removePlace(placeToRemove.location);
        displayPlaces();
    }
function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}
displayPlaces();