const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields (name, email, password) are required' });
    }

    return res.status(201).json({ message: 'User registered successfully', user: { name, email } });
});

module.exports = router;
