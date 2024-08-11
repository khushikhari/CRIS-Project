
// app.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic form validation or additional logic can be added here

    const username = event.target.username.value;
    const password = event.target.password.value;

    // For demonstration purposes, we'll assume successful login if any username/password is entered
    if (username && password) {
        // Redirect to dashboard.html
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter both username and password.");
    }
});


/*const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/dashboard.html', (req, res) => {
    // Validate user's credentials (replace this with actual validation)
    if (req.body.username === 'user' && req.body.password === 'password') {
        req.session.loggedIn = true;
        res.redirect('/dashboard.html');
    } else {
        res.redirect('/');
    }
});

app.get('dashboard.html', (req, res) => {
    if (req.session.loggedIn) {
        res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
    } else {
        res.redirect('/');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
