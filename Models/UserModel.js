
class UserDetails {
    constructor(name, lastName, picture, age, from, friends) {
        this.name = name;
        this.lastName = lastName;
        this.picture = picture;
        this.age = age;
        this.from = from
        this.friends = friends
    }
}


class User {
    constructor(id, userDetails, userData) {
        this.id = id;
        this.userDetails = new UserDetails(...userDetails);
        this.userData = userData;   
    }
}

export default User