const userDb = [];
class usersService {

    /**
     * Retrieve user by username
     * @param {string} username 
     */
    get(username) {
        return userDb[username];
    }

    /**
     * Create user
     * @param {*} user 
     */
    create(user) {
        userDb[user.username] = user;
    }

    /**
     * Update user
     * @param {User} user 
     */
    put(user) {
        userDb[user.username] = user;
    }
}

module.exports = new usersService();