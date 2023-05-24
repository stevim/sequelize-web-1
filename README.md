# Sequelize console API
This API allows you to perform CRUD operations on a database of gaming consoles!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Gaming Console

**Method**: ```POST```

**Endpoint**: ```/api/consoles```

**Description**: This endpoint creates a new console with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "releaseYear": integer,
  "company": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "releaseYear": integer,
  "company": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Consoles

**Method**: GET

**Endpoint**: ```/api/consoles```

**Description**: This endpoint retrieves all the consoles stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "releaseYear": integer,
    "company": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Console

**Method**: ```PUT```

**Endpoint**: ```/api/consoles/:consoleId```

**Description**: This endpoint updates the console with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "releaseYear": integer,
  "company": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "releaseYear": integer,
  "company": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Console

**Method**: ```DELETE```

**Endpoint**: ```/api/consoles/:consoleId```

**Description**: This endpoint deletes the console with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "releaseYear": integer,
  "company": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```
