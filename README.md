## Setup for App

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Serving up the backend API
You need to start up [json-server](https://github.com/typicode/json-server) on your local machine as the back-end to simulate flow of data. The db.json file holds some customer information for use.

## Setup for API
``` bash
# Be sure to be in the project folder, then run the command below
json-server --watch db.json

# This will start up the database for CRUD operations to be carried out effectively and efficiently on the app
```
