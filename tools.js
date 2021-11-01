const fs = require("fs")

//open JSON file 
const load = function(){
    const file = fs.readFileSync('data/user.json', 'utf-8')
    return JSON.parse(file);
}

const loadPublic = function(){
    const file = fs.readFileSync('data/user-public.json', 'utf-8')
    return JSON.parse(file);
}

//append user.json
// const saveUser = function(users){
    // fs.writeFileSync('data/user.json', JSON.stringify(users, null, 1))
// }
// fs.writeFileSync('data/user.json', JSON.stringify(users, null, 1))


const addUser = function(user, loadfile){
    const users = loadfile;
    users.push(user);
    // saveUser(users)
    fs.writeFileSync('data/user.json', JSON.stringify(users, null, 1))
}

//to show database without showing their password
const addUserPublic = function(user, loadfile){
    const users = loadfile;
    users.push(user);
    // saveUser(users)
    fs.writeFileSync('data/user-public.json', JSON.stringify(users, null, 1))
}
module.exports = {
    load: load,
    loadPublic : loadPublic,
    addUser: addUser,
    addUserPublic : addUserPublic,
}