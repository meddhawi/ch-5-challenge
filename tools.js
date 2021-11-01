const fs = require("fs")

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


module.exports = {
    load: load,
    // loadPublic : loadPublic,
    addUser: addUser,
    // addUserPublic : addUserPublic,
}