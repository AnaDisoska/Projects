function Event(name) {
    
 this.name = name;
 this.registeredUsers = [];
   
 this.registerUser = function(target) {
    this.registeredUsers.push(target);
}

    

}