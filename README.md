# visited-places

# Project Overview

Visited Places is an interactive web application that allows users to create and manage a personal travel log. Users can add destinations they've visited, record descriptions of their experiences, and select the season when they visited each place. 

This travel tracking application provides a simple, elegant interface for users to:

Add travel destinations with descriptions
Organize places by season (Spring, Summer, Fall, Winter)
View detailed information about each place by clicking on it
Delete places from their travel log
Receive confirmation feedback when actions are completed

# Features

Add Places - Simple form to add destinations with name, description, and season
View Details - Click on any place to see full details in a modal
Delete Places - Remove places with confirmation
Responsive Design - Works on desktop, tablet, and mobile devices
Success Messages - Get feedback when places are added or removed
Clean, Professional UI - Modern design with smooth interactions

Languages: CSS, HTML, JavaScript

Project Setup Instructions
Prerequisites

Any modern web browser (Chrome, Firefox, Safari, Edge)
No server or installation required

Steps to Run Locally

Clone or download the project:

bash   git clone https://github.com/seangichinga/visited-places.git
cd visited-places

Open the application:

Simply double-click index.html
OR right-click index.html and select "Open with" → your browser
OR open your browser and drag index.html into it


Start using the application:

Fill out the form with a place name, description, and season
Click "Add Place" to add it to your travel log
Click on any place name to view full details
Click the Delete button to remove a place



Project Structure
visited-places/
 index.html          
 styles.css          
 script.js           
 LICENSE             
 README.md           
 .gitignore          
How to Use
Adding a Place

Fill out the form:

Place Name: Enter the destination (e.g., "Paris")
Description: Write what you experienced there
Time of Year: Select the season you visited


Click "Add Place"

The place appears in your travel log
Success message confirms the action
Form clears automatically



Viewing Place Details

Click on any place name in your travel log
A modal window opens showing:

Full place name
Season visited (with calendar emoji)
Complete description
Close button to dismiss

Deleting a Place

Click the Delete button on any place card
Confirm the deletion if prompted
Place is removed from your travel log

Live Site
View Live Site on GitHub Pages
Replace yourusername with your actual GitHub username
Business Logic Documentation
Place Constructor
The Place constructor creates objects representing travel destinations.
Constructor Parameters:
javascriptfunction Place(location, timeOfYear, description, dateAdded)

location (string) - Name of the destination
timeOfYear (string) - When visited: Spring, Summer, Fall, or Winter
description (string) - Notes about the experience
dateAdded (date) - Date when added to log

Test-Driven Development (TDD)
Test Specifications
The following tests verify all business logic functionality:
Place Constructor Tests

Place constructor sets location property
Place constructor sets timeOfYear property
Place constructor sets description property
Place constructor sets dateAdded property
Place object stores all properties correctly

TravelLog Constructor Tests

TravelLog has places array
TravelLog starts with empty places array

TravelLog Methods Tests

addPlace adds place to log
addPlace increases places count
removePlace removes place from log
removePlace decreases places count
removePlace removes correct place by index
getAllPlaces returns all places
getAllPlaces returns array
getTotalPlaces returns correct count
getTotalPlaces returns 0 for empty log

User Interface Tests

Form fields clear after submission
Success messages display
Places display correctly
Modal opens when place is clicked
Delete button works correctly

Running Tests
You can manually test by:

Opening index.html in your browser
Adding a place and checking that it appears
Clicking on a place name to open the modal
Clicking delete and confirming the removal

Code Quality
Indentation and Syntax

Consistent indentation throughout
Clean, readable code structure
Clear variable and function naming

Best Practices

Separation of Concerns - HTML, CSS, and JavaScript separated
DRY Principle - No repeated code
Object-Oriented JavaScript - Constructors and prototypes
Error Handling - Proper error messages and confirmation dialogs

Portfolio Quality Features
Professional Design

Modern, clean interface
Smooth interactions
Consistent styling
User-friendly layout

User Experience

Form fields clear automatically after submission
Success messages confirm user actions
Confirmation dialogs prevent accidental deletion
Messages auto-hide after 3 seconds
Responsive design for all screen sizes
Empty state message when no places added
Click to view place details

Code Organization

Well-structured file organization
Clear separation of HTML, CSS, and JavaScript
Comments explaining key sections
Consistent naming conventions

Copyright and License
Copyright © 2026
This project is open source and available under the MIT License.
You are free to:

Use this project for personal or commercial purposes
Modify and distribute the code
Include it in your portfolio

See LICENSE file for full details.
Future Enhancements
Possible features to add:

Photo uploads for each place
Star rating system (1-5 stars)

Contact
For questions or feedback, feel free to reach out!

Happy Travels!
Last Updated: February 2026

