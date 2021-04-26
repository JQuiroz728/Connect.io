const functions = require("firebase-functions");
const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllPosts, singlePost } = require('./handlers/posts');
const { signup, login, uploadImage, addUserDetails, getAuthenicatedUser } = require('./handlers/users');



// Posts Route
app.get('/posts', getAllPosts);
// Create a new post
app.post('/post', FBAuth, singlePost);

// SignUp Route
app.post('/signup', signup);
// Login Route
app.post('/login', login);
// Upload Image for user profile
app.post('/user/image', FBAuth, uploadImage);
// Add user details
app.post('/user', FBAuth, addUserDetails);

app.get('/user', FBAuth, getAuthenicatedUser);



exports.api = functions.https.onRequest(app);