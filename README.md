# jwt-socket.io
This is my first npm package, just to test how to upload npm packages
=========

A small library for authentication with a user, JWT and socket.io

## Installation

  `npm install jwt-socket.io`
  
It is required to have a folder config/ 
with index.json in the root of the project

```json
{
  "dbUri": "databaseURI",
  "jwtSecret": "secretkey"
}

```

the package is assuming you are using mongoose with a user table

I will change all of this later to make it dynamic and flexible

## Usage

  ```javascript
  const io = require('socket.io')(server)
  const ioAuthCheck = require('io-auth-check')
  io.use(ioAuthCheck)
  ```


## Tests

  They are not available now
