// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyV41teajToJ6nU02wage2AmEIMR627O0",
  authDomain: "flaunt-prod.firebaseapp.com",
  projectId: "flaunt-prod",
  storageBucket: "flaunt-prod.appspot.com",
  messagingSenderId: "313364113592",
  appId: "1:313364113592:web:680cf363672fdea1e7ec4d",
  measurementId: "G-5LB4K72MDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
// export const uploadUserInfo = async (instagramId, email, phoneNumber, parentUuid) => {
//     const userId = `${parentUuid}_${instagramId}`; // Unique user ID based on parent UUID and Instagram ID
//     try {
//         // Create a reference to the user data in the database
//         const userRef = ref(database, 'users/' + userId);
        
//         // Define the user data to upload
//         const userData = {
//             instagramId: instagramId,
//             email: email,
//             phoneNumber: phoneNumber,
//             parentUuid: parentUuid
//         };

//         // Set the user data at the specified reference
//         await set(userRef, userData);
//         console.log("User data uploaded successfully.");
//     } catch (error) {
//         console.error("Error uploading user data: ", error);
//     }
// };
export default database;