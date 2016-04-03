# mean-from-scratch
How to create, step by step,  a simple MEAN application from scratch.

## Overview
Build your first MEAN application from scratch step by step.

MongoDB, ExpressJS, AngularJS, NodeJS.

## Prerequisites
- git
- nodejs
- npm
- bower
- mongodb installed and running
- Chrome postman



## Tutorial

Proceed step by step by checking out the corresponding tag:

> $ git checkout -f step-?

Make sure to run npm install / bower install after each checkout to have the latest dependencies installed locally (node_modules/bower_components).

To run the application execute:

> $ node server.js

Make sure to create a mongo db instance from scratch through the mongo console ($mongo)
> use mongodbdemo


### step-1

- setup express and simple HelloWord.

### step-2

- Integration with mongodb through mongoose.
- get retrieving the element from the people collection.

In order to check the correct behaviour opulate some elements in the people collection through the mongo console.

> $ mongo

> use mongodbdemo

> db.people.insert({"firstName":"Enrico", "lastName":"Giurin"})


### step-3

- implemented post.
- body-parser library.


### step-4

- express router.
- serving Angular static files.
- use postman at this url: http://localhost:3000/api/people.


### step-5

- first setup Angular and integration with express.

### step-6

- Implemented list and add person in angular.



### Installing dependencies

To install node dependencies use:
- $ npm install

To install angular dependencies use:
- $ bower install



### Running the app during development

- $ node server.js
- From chrome http://localhost:3000



## Application Directory Layout
TBD

## Contact

Enrico Giurin
