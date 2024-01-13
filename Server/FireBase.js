require('dotenv').config()

const { initializeApp } = require("firebase/app")
const { getFirestore } = require("firebase/firestore")

const firebaseConfig ={
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESAGGINGSENDERID,
  appId: process.env.APPID
};


  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
 


module.exports = {db}