const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
const app = express();

admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyBvRcUV8yJhrIxACC99-bxrtpF43DTzzRU",
    authDomain: "connectio-2df43.firebaseapp.com",
    projectId: "connectio-2df43",
    storageBucket: "connectio-2df43.appspot.com",
    messagingSenderId: "958725951488",
    appId: "1:958725951488:web:e72f0987bef3111e9c08e5"
  };

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();

// Retrieve all posts from the Post collection
app.get('/posts', (req, res) => {
    db
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let posts = [];
            data.forEach((doc) => {
                posts.push({
                    postId: doc.id,
                    body: doc.data().body,
                    userName: doc.data().userName,
                    createdAt: doc.data().createdAt
                });
            });
            return res.json(posts);
        })
        .catch(err => console.error(err));
});


// Create a new post
app.post('/post', (req, res) => {
    const newPost = {
        body: req.body.body,
        userName: req.body.userName,
        createdAt: new Date().toISOString()
    };

    db
        .collection('posts')
        .add(newPost)
        .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully` });
        })
        .catch((err) => {
            res.status(500).json({ error: 'something went wrong' });
            console.error(err);
        });
});

// SignUp Route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };

    let token, userId;
    db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if (doc.exists) {
                return res.status(400).json({ handle: 'this handle is already taken' });
            } else {
                return firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            };
            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .catch(err => {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                return res.status(400).json({ email: 'Email is already in use' });
            } else {
                return res.status(500).json({ error: err.code });
            }
        });
});

exports.api = functions.https.onRequest(app);