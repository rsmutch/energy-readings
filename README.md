# Energy Readings
A basic back-end designed to mimic an energy company. 
Built to explore the functionality of importing different filetypes, the API has the functionality to POST .csv files with customer meter readings.


## Tech Used

- Express
- PSQL/node-postgres
- Knex
- knex-seed-file
- fast-csv
- multer

## Instructions
```
npm install
npm run setup-dbs
npm run migrate-latest
npm run seed-dev
npm run start
```

### 1 - Install dependencies
```
npm install
```

### 2 - Setup Database
```
npm run setup-dbs
```

### 3 - Migrations
```
npm run migrate-latest
```

### 4 - Seed Table
```
npm run seed-dev
```

### 5 - Start Server
```
npm run start
```

## Endpoints Available
```
GET http://localhost:9090/meter-readings/

// Successful Response:
Status Code 200
{
  "readings": [
    {
      "meter_reading_id": "5213f61f-fcfe-4b70-940a-21a4dace7dc4",
      "account_id": "955e6866-18f8-4746-8dbb-028ca1ed213a",
      "reading": 6695
    },
    {
      "meter_reading_id": "4b3e8df4-595c-4463-be0a-25b9736c0858",
      "account_id": "8fad89df-b2e7-4eaf-8863-cb04a241e739",
      "reading": 7368
    },...
```
```
DELETE http://localhost:9090/meter-readings/:meter_reading_id

// Successful Response:
Status Code 204
```
```
POST http://localhost:9090/meter-readings-uploads/

// Successful Response: 
Status Code 201
{
  "readings": {
    "report": {
      "successful": 878,
      "failed": 122
    },
    "data": [
      {
        "meter_reading_id": "47596d95-9e02-4c96-a003-6d808905b1b5",
        "account_id": "8cf7c376-1f2e-436d-9498-44dae681bc8a",
        "reading": 7261
      },
      {
        "meter_reading_id": "5213f61f-fcfe-4b70-940a-21a4dace7dc4",
        "account_id": "955e6866-18f8-4746-8dbb-028ca1ed213a",
        "reading": 6695
      },...

// Unsuccessful Response (0 submissions were successful):
Status Code 409
{
  "successful": 0,
  "failed": 1000
}
```


To correctly use the POST endpoint, the request must be sent as a Multipart Form/enctype="multipart/form-data".
Add the meter_reading.csv file to the value of a key with the name of 'file'
![image](https://user-images.githubusercontent.com/71641507/114737987-736dac80-9d3f-11eb-9e50-8ccfa32b166b.png)


## Making of
Having made a previous API with Express, node-postgres and Knex, I decided that these familiar tech would serve me well in the creation of this project. 
Packages knex-seed-file, fast-csv and multer are new tech on this project.
setup.sql contains scripts to create (and delete if already exists) the database that the rest of the project relies on. 
Knex migrations were then used to create two tables within the database, accounts and meter_readings, along with their schemas. 
knex-seed-file was then used to seed the test_accounts.csv file into the accounts table.

Once the base of the database was setup, I installed Express and initialized the server.
Using routes for endpoints keeps code clean and modularised - enabling easy debugging.
Operations are divided into an MVC architecture - separating controllers from models.

Multer and fast-csv were used in conjunction for the POST endpoint, so to enable parsing of the CSV file and facilitate uploading.

Before the CSV file is passed to the database via Knex, its vital to ensure that the data is validated. 
The validation function checks for:
- Blank account_id
- An invalid account_id (not matching one present in accounts table)
- A duplicate of meter_reading_id
- Meter reading is in the format of nnnn.

And also returns metadata of successful and failed entry attempts, to potentially utilise in a front-end application.

## To Do 
Things I'd like to achieve with this project in the future:
- Additional endpoints. As an admin of an energy company would have, additional CRUD endpoints to the database so to enable account & meter reading data manipulation.
- Front end/UI. To complete this project, it would be a priority to marry this up to an interface, potentially on familiar tech such as React. 
- Error handling. To provide more feedback to the user and to prevent bugs, it would be vital to include error routing and handling.
- Implement testing with Supertest to ensure all endpoints are working correctly
- Use a smaller set of data for a 'test' environment for testing and development. The infrastructure and scripts are there to do this.
- As all validation tests are done individually, it could be beneficial to provide a more detailed Report object in the POST response to have a breakdown of failed meter reading attempts.
- Deployment on a hosting service such as Heroku. 
