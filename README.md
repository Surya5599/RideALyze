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

### Data Endpoints

* `POST /addData`: Add new data to the system
* `DELETE /deleteData`: Delete data by ID
* `PATCH /editData`: Edit existing data
* `PATCH /editLatLonData`: Edit existing data with latitude and longitude coordinates
* `DELETE /deleteDataLatLon`: Delete data by ID with latitude and longitude coordinates

### Vehicle Endpoints

* `POST /addVehicleData`: Add new vehicle data to the system
* `DELETE /removeVehicleData`: Remove vehicle data by ID
* `PATCH /editVehicleData`: Edit existing vehicle data

### Location Endpoints

* `POST /addDataLatLon`: Add new data with latitude and longitude coordinates

## Data Sources
----------------

The app uses data from various sources, including:

* Uber
* Lyft
* For-Hire Vehicle

## Application 
-----------------
## Main Page
![image](https://github.com/user-attachments/assets/3bbab357-d11b-4d7a-8f2b-93c9f2f6d812)

## Ability to add/edit/delete data
![image](https://github.com/user-attachments/assets/f5e286ee-a7ac-41b4-ba16-4cc867e716c6)

## Charts Displaying Different Comparisions/Analysis
![image](https://github.com/user-attachments/assets/caa4c577-2094-4e11-9e87-ecb5371718cf)

### An analysis between uber and lyft usage between a few months
![image](https://github.com/user-attachments/assets/cdcbee69-2d34-43d6-8a43-748e89129005)

### Map Searching Funtionalities along with adding and removing data from the map
![image](https://github.com/user-attachments/assets/92f6466a-6e4e-4139-811e-90b0a1fccae6)


## Contributing
---------------

Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.

