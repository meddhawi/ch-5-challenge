const fs = require("fs");
const path = require("path");

//open JSON file 
const load = function(path){
    const file = fs.readFileSync(path, 'utf-8')
    return JSON.parse(file);
}

const addUser = function(user, path){
    const users = load(path);
    users.push(user);
    fs.writeFileSync(path, JSON.stringify(users, null, 1))
}

const duplicateCounter = function(email, path){
    const users = load(path);
    return users.find(user => user.email === email)
}


module.exports = {
    load: load,
    duplicateCounter : duplicateCounter,
    addUser: addUser,
}