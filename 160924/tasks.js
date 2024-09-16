class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = 'user'
    }

    login(){
        return `User ${this.name} is log in`
    }

    logout(){
        return `User ${this.name} is log out`
    }
}

class Admin extends User {
    constructor( name, email){
        super(name, email);
        this.role = "admin"
    }

    deleteUser(user){
        return `User ${user.name} was deleted by ${this.name}`
    }
}