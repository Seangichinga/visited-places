# visited-places
Website to track the places one has been to
Visited Places 🌍
A simple web application to remember and track the places you've visited. Record the location, time of year, and your favorite memories from each destination.
Features

Add new places with descriptions and seasons
View all visited places in an organized list
Delete places from your travel log
Persistent tracking of your travel memories

Project Structure
.
index.html   
styles.css      
script.js             
Setup

Open index.html in your web browser
No dependencies or build process required

Testing
This project uses Test-Driven Development principles. All business logic is thoroughly tested.
Test Coverage
The following functionality should be tested:
Place Class Tests

Place constructor initializes with correct location, timeOfYear, description, and dateAdded properties
Place stores location correctly
Place stores timeOfYear correctly
Place stores description correctly
Place stores dateAdded as a Date object

TravelLog Tests

TravelLog initializes with an empty places array
addPlace() increases the places array length
addPlace() stores the correct place object
addPlace() can handle multiple place additions
getAllPlaces() returns all added places in order
removePlace() decreases the array length when removing an item
removePlace() removes the correct place by index

How to Write and Run Tests

Test each method of the Place and TravelLog classes
Verify that objects are created correctly
Verify that data is stored and retrieved accurately
Test edge cases like empty arrays and boundary conditions
Run tests in the browser console to verify all business logic works correctly

Test Methodology
Use simple assertions to validate:

Constructor behavior and property initialization
Method functionality and return values
Data integrity (correct objects stored and retrieved)
Edge cases and error handling

How to Use

Add a Place: Fill in the form with the place name, description, and season, then click "Add Place"
View Places: See all your visited places displayed as cards
Delete a Place: Click the "Delete" button on any place card to remove it

Business Logic
The application's business logic consists of two main classes:

Place: Represents a visited location with metadata
TravelLog: Manages a collection of Place objects with add, remove, and retrieve operations


