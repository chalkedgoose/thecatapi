
/**
 * A User to be Encoded and Decoded from JSON and BSON.
 */
export interface User {
    image: String
    name: String, 
    email: string,
    password: String, 
    _id : String
}

/**
 * Array of Users to be Encoded and Decoded from JSON and BSON.
 */
export interface Users extends Array<User> {

}

