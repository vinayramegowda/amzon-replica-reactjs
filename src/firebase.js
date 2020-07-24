import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDjUpXx6vqPUHXHBiid8xGDjoP_a5p3hVQ",
	authDomain: "replica-vinay704.firebaseapp.com",
	databaseURL: "https://replica-vinay704.firebaseio.com",
	projectId: "replica-vinay704",
	storageBucket: "replica-vinay704.appspot.com",
	messagingSenderId: "429772158913",
	appId: "1:429772158913:web:758a8747df81a1cd1fa140",
	measurementId: "G-DMM8E6RGEF",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth }; //can also add db
