const User = require('../../models/user');

const UserController = {
    getAllUsers: (req, res) => {
        User.getAllUsers((error, results) => {
            if (error) {
                res.status(500).send('Error retrieving users.');
            } else {
                res.json(results);
            }
        });
    },
    
}

module.exports = UserController;