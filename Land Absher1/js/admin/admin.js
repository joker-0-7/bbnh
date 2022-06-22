import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore,
collection,
onSnapshot,
query} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAfyszpzVvNqUe23iOU4jYtP_CooyHiDWs",
  authDomain: "admin-user-f7aa6.firebaseapp.com",
  projectId: "admin-user-f7aa6",
  storageBucket: "admin-user-f7aa6.appspot.com",
  messagingSenderId: "442926887151",
  appId: "1:442926887151:web:b12958368e74406531ab1a"
});
const firestore = getFirestore();
const customerOrder = query(collection(firestore, 'the-form'));
const Order = collection(firestore, 'the-form');
  let appp = new Vue({
      el: '#app',
      data(){
              return{
                  informition: [],
              }
          },
          created(){
              onSnapshot(customerOrder, (querySnapshot)=>{
              this.informition = []
              querySnapshot.forEach((info)=>{
              this.informition.push({
              name: info.data().name,
              phone: info.data().phone,
              email: info.data().email,
              subject: info.data().subject,
              content: info.data().content,
          })
      })
  });
},
// beforeCreate(){
  // deleteDoc(doc(Order, "fjUFXsHSWktTZwRhNy1H"))
// }
})