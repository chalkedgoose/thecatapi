/**
 * A Cat to be Encoded and Decoded from JSON and BSON
 */
export interface Cat {
    image: string,
    age: number,
    name: string,
    price: number
}

/**
 * Array of Cats to be Encoded and Decoded from JSON and BSON
 */
export interface Cats extends Array<Cat> { }