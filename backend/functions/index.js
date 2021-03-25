const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();


// Retrieve all posts from the Post collection
app.get('/posts', (req, res) => {
    admin.firestore()
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

    admin.firestore()
        .collection('posts')
        .add(newPost)
        .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully` });
        })
        .catch((err) => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err);
        });
});


exports.api = functions.https.onRequest(app);