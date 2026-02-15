const travelLog = new TravelLog();

const addPlaceForm = document.getElementById('addPlaceForm');
const placeNameInput = document.getElementById('placeName');
const placeDescriptionInput = document.getElementById('placeDescription');
const timeOfYearInput = document.getElementById('timeOfYear');
const placesList = document.getElementById('placesList');

addPlaceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = placeNameInput.value.trim();
    const description = placeDescriptionInput.value.trim();
    const timeOfYear = timeOfYearInput.value;
});

const newPlace = new Place(
        name,          
        [],             
        timeOfYear,     
        description,    
        new Date(),                  
    );