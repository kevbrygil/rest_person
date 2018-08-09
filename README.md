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
- Header "Content-Type: application/json"

## ADD
URL: http://localhost:3000/person


- UPDATE: http://localhost:3000/person/cjkmgyp3e0002g0m5ixlix7g7
- DELETE: 
- GET: 
- GETBYID: 