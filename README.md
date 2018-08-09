# Rest API Person
Development of an REST API for CRUD operations of Persons

# Main Tecnologies used
- NodeJs Language
- Express Framework
- MongoDB Database
- The ODM Mongoose for mapper the objects and assign in a MongoDB document.

# Requirements
- DMongoDB Database
- Robo 3T(Optional)
- Nodejs with NPM

# Config the environment
<ol>
	<li>Open the Document rest_person/config/config.js and if is necesarry, change the following parameter:
		- port.
		- mongo(connection of MongoDB).
		- hostname.
	</li>
</ol>

# Intall Packages & Run APP
<ol>
	<li>Open Terminal</li>
	<li>Go to the source file of the APP</li>
	<li>
		Type the following in the Terminal:
		<pre name="code">npm i</pre>
	</li>
	<li>Test with eslint
		<pre name="code">npm run lint</pre>
	</li>
	<li>Run APP
		<pre name="code">npm start</pre>
	</li>
</ol>

# ENDPOINTs of Person REST API 

- ADD
<pre name="code">
Method: POST
URL: http://localhost:3000/person
Content-Type: application/json
Request:	
{
  "person": { "firstName":"gil",
        "lastName":"rios",
        "age":18,
        "gender":"Masculino"  }
}
Response:
{
    "person": {
        "lastName": "rios",
        "active": true,
        "_id": "5b6c8a530d94f669c3f71ef6",
        "firstName": "gil",
        "age": 18,
        "gender": "Masculino",
        "created": "2018-08-09T18:39:15.184Z",
        "cuid": "cjkmwpfxs0000w3spdxcu4n1h",
        "__v": 0
    }
}
</pre>
- UPDATE: 
<pre name="code">
Method: PUT
URL: http://localhost:3000/person/cjkmwpfxs0000w3spdxcu4n1h <---cuid parameter
Content-Type: application/json
Request:
{
  "person": { "firstName":"yahoo",
        "lastName":"sasdsad",
        "age":18,
        "gender":"Femenino",
        "cuid": "cjkmgyp3e0002g0m5ixlix7g7"}
}
Response:
{
    "person": {
        "lastName": "sasdsad",
        "active": true,
        "_id": "5b6c8a530d94f669c3f71ef6",
        "firstName": "yahoo",
        "age": 18,
        "gender": "Femenino",
        "created": "2018-08-09T18:39:15.184Z",
        "cuid": "cjkmwpfxs0000w3spdxcu4n1h",
        "__v": 0
    }
}
</pre>
- DELETE: 
<pre name="code">
Method: DELETE
URL: http://localhost:3000/person/cjkmwpfxs0000w3spdxcu4n1h <---cuid parameter
Response:
{
    "person": {
        "lastName": "sasdsad",
        "active": false,   <---Inactive
        "_id": "5b6c8a530d94f669c3f71ef6",
        "firstName": "yahoo",
        "age": 18,
        "gender": "Femenino",
        "created": "2018-08-09T18:39:15.184Z",
        "cuid": "cjkmwpfxs0000w3spdxcu4n1h",
        "__v": 0
    }
}
</pre>
- GET: 
<pre name="code">
Method: GET
URL: http://localhost:3000/person
Response:
{
    "persons": [
        {
            "lastName": "sasdsad",
            "active": false,
            "_id": "5b6c8a530d94f669c3f71ef6",
            "firstName": "yahoo",
            "age": 18,
            "gender": "Femenino",
            "created": "2018-08-09T18:39:15.184Z",
            "cuid": "cjkmwpfxs0000w3spdxcu4n1h",
            "__v": 0
        },
        {
            "lastName": "rios",
            "active": true,
            "_id": "5b6c5953b393263598c5b8ba",
            "firstName": "gil",
            "age": 18,
            "gender": "Masculino",
            "created": "2018-08-09T15:10:11.611Z",
            "cuid": "cjkmp8l980000l4spp5x5ycv4",
            "__v": 0
        }
    ]
}
</pre>
- GETBYID: 
<pre name="code">
Method: GET
URL: http://localhost:3000/person/cjkmwpfxs0000w3spdxcu4n1h <---cuid parameter
Response:
{
    "person": {
        "lastName": "sasdsad",
        "active": false,
        "_id": "5b6c8a530d94f669c3f71ef6",
        "firstName": "yahoo",
        "age": 18,
        "gender": "Femenino",
        "created": "2018-08-09T18:39:15.184Z",
        "cuid": "cjkmwpfxs0000w3spdxcu4n1h",
        "__v": 0
    }
}
</pre>