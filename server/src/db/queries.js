const pool = require('./pool');

async function getUsers() {

}

async function addUser(username, password, first_name, last_name) {
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

module.exports = {
    getUsers,
    addUser,
    toggleMember,
    toggleAdmin,
    getPosts,
    addPost
}