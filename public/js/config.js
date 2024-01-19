// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { database } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBm2KWkzXe8Cswqe9rqvszU--pzFdGDJaE",
  authDomain: "full-medios.firebaseapp.com",
  projectId: "full-medios",
  storageBucket: "full-medios.appspot.com",
  messagingSenderId: "80521036443",
  appId: "1:80521036443:web:95d40c0c6bfcd600173c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to the Realtime Database
const databaseRef = database.ref();

// Get the data from the database
databaseRef.child("streams").on("value", (snapshot) => {
  // Procesa los datos de la base de datos
  const streams = snapshot.val();

  // Crea una lista de opciones
  const options = streams ? streams.map((stream) => {
    return {
      label: stream.title,
      value: stream.stream_url,
    };
  }) : [];

  // Muestra la lista de opciones al usuario
  const selectStreams = document.getElementById("select-streams");
  selectStreams.innerHTML = "";
  options.forEach((option) => {
    selectStreams.appendChild(document.createElement("option")).textContent = option.label;
  });
});

if (!app) {
  throw new Error("No se ha configurado Firebase");
}