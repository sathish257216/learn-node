const User = require('../../model/user');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');


router.post('', async (req, res) => {
    try {
      // For single user
      if (!Array.isArray(req.body)) {
        const user = new User(req.body);
        await user.save();
        return res.status(201).json(user);
      }
      
      // For multiple users
      const users = await User.insertMany(req.body);
      res.status(201).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

router.get('', async (req, res) => {
    try {
        const users = await User.find();
        debugger;
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
