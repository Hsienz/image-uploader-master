// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAwOXci2oWD0HRSwQu6t5-IhaG3vPEFkwc",
	authDomain: "image-uploader-master-c7f32.firebaseapp.com",
	projectId: "image-uploader-master-c7f32",
	storageBucket: "image-uploader-master-c7f32.appspot.com",
	messagingSenderId: "255765227243",
	appId: "1:255765227243:web:6f9d7b0a79f5381ff540ae",
	measurementId: "G-4MT3QFBFC7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app