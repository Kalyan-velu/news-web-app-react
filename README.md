# News Website 

## Purpose 
The purpose of this website is to **serve** you news from accross the world.
## Tech Stack 
1. **Mongoose ODM** 
:Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
>Usage of mongoose ODM:
```javascript
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/test');

  const Cat = mongoose.model('Cat', { name: String });

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
```
2.**React** *A Javascript libary for building user interfaces*
: React is used to build the frontend of this website.
> Creating a React App
:Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
**Usage**
```script
npx create-react-app
cd my-app
npm start

```
3. **News Api**
:This project uses NewsApi to serve news articles from around the world (My first react project)
Usage:
> Grab Your **Api key** from [News Api](https://newsapi.org)
4.**ExpressJs**
>Usage
-Install expressjs `npm install expressjs`
-Then use it
```javascript
  //commonjs
  const express=require("express")
  //module
  import express from 'express'
```
5.**Material UI**
>Usage
-Install it using 
**npm** 
:`npm install @mui/material @emotion/react @emotion/styled` or 
**yarn** 
:`yarn install @mui/material @emotion/react @emotion/styled`
