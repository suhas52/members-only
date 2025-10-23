const pool = require('./pool');

async function getUsers() {

}

async function addUser(username, password, first_name, last_name) {
    console.log(username, password, first_name, last_name)
    await pool.query("INSERT INTO users (username, password, first_name, last_name) VALUES ($1, $2, $3, $4)", [username, password, first_name, last_name]);
}

async function toggleMember(id) {
    await pool.query("UPDATE users SET is_member = NOT is_member WHERE id = $1", [id]);
}

async function toggleAdmin(id) {
    await pool.query("UPDATE users SET is_admin = NOT is_admin WHERE id = $1", [id]);
}

async function getPosts() {
    const {rows} = await pool.query("SELECT posts.title, posts.body, users.username FROM posts JOIN users ON posts.user_id = users.id;");
    return rows;
}

async function addPost() {

}

async function getUserByUsername(username) {
    const { rows } = await pool.query("SELECT * FROM users where username = $1", [username]);
    return rows[0];
}

async function getUserById(id) {
    const { rows } = await pool.query("SELECT id, username, first_name, last_name, is_member, is_admin FROM users WHERE id = $1", [id]);
    return rows[0];
}

module.exports = {
    getUsers,
    addUser,
    toggleMember,
    toggleAdmin,
    getPosts,
    addPost,
    getUserById,
    getUserByUsername
}