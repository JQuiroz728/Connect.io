const functions = require("firebase-functions");
const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllPosts, singlePost } = require('./handlers/posts');
const { signup, login } = require('./handlers/users');



// Posts Route
app.get('/posts', getAllPosts);
// Create a new post
app.post('/post', FBAuth, singlePost);

// SignUp Route
app.post('/signup', signup);
// Login Route
app.post('/login', login);



exports.api = functions.https.onRequest(app);