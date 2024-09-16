# RideALyze
------------

RideALyze is a web application designed to analyze and visualize ride-hailing data. The app is built using Node.js, Express.js, and various libraries to handle data processing, searching, and visualization.

## Features
------------

* Data ingestion and processing from various sources (e.g., Uber, Lyft, For-Hire Vehicle)
* Searching and filtering capabilities for ride data
* Data visualization and analysis tools
* Support for adding, editing, and deleting ride data

## Getting Started
-------------------

### Prerequisites

* Node.js (version 14 or higher)
* npm (version 6 or higher)
* A code editor or IDE of your choice

### Installation

1. Clone the repository: `git clone https://github.com/Surya5599/RideALyze.git`
2. Navigate to the project directory: `cd RideALyze`
3. Install dependencies: `npm install`
4. Start the application: `node server.js`

### Running the App

1. Open a web browser and navigate to `http://localhost:3000`
2. Use the app's features to search, analyze, and visualize ride data

## API Endpoints
----------------

The app exposes several API endpoints for interacting with the data:

* `/search`: Search for ride data by ID, field, or other criteria
* `/addLatLon`: Add new ride data with latitude and longitude coordinates
* `/editLatLon`: Edit existing ride data with latitude and longitude coordinates
* `/deleteLatLon`: Delete ride data by ID
* `/busiest`: Retrieve the busiest ride data ( implementation incomplete )

## Data Sources
----------------

The app uses data from various sources, including:

* Uber
* Lyft
* For-Hire Vehicle

## Contributing
---------------

Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.

