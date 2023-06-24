// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
  
// );

import express from "express";
const app = express();
import cors from "cors";
import { User } from "./user.js"


app.use(cors());

app.get("/", (req, res) => {
  res.json(User)

});

app.listen(5000, () => console.log("API is working!"));