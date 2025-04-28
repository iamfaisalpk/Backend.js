const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Users array to store user data
let users = [];

// Route to create a new user
app.post('/users', (req, res) => {
    const { name, email, username } = req.body;

    // Basic validation
    if (!name || !email || !username) {
        return res.status(400).json({ message: 'All fields (name, email, username) are required.' });
    }

    const newUser = {
        id: users.length + 1, 
        name,
        email,
        username
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Route to get all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Route to get a specific user by id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user);
});

// Route to update a specific user by id
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, username } = req.body;

    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (username) user.username = username;

    res.json(user);
});

// Route to delete a specific user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found.' });
    }

    // Remove user from array
    const deletedUser = users.splice(userIndex, 1);

    res.json({ message: 'User deleted successfully.', user: deletedUser[0] });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
