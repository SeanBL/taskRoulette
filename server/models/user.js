//I'm not sure if I set up the models correctly.

const connection = require('../config/connection');

const user = {
    name: 'Vlad',
    email: 'vlad@test.com',
};

const User = {
    getAllUsers: (callback) => {
        const query = 'SELECT * FROM users';

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
    
}

module.exports = User;