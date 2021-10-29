const fs = require("fs")

//open JSON file 
const load = function(){
    const file = fs.readFileSync('data/user.json', 'utf-8')
    return JSON.parse(file);
}

//append user.json
// const saveUser = function(users){
// }

const addUser = function(user){
    const users = load();
    users.push(user);
    // saveUser(users)
    fs.writeFileSync('data/user.json', JSON.stringify(users, null, 1))

}

module.exports = {
    load: load,
    // saveUser: saveUser,
    addUser: addUser
}