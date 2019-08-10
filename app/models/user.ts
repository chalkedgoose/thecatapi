import { Schema, model, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';


/**
 * A User to be Encoded and Decoded from JSON and BSON.
 */
declare interface UserDocument extends Document {
    image?: string;
    name?: string;
    email?: string;
    password?: string;
    _id: string;
    created?: Date;
}

/**
 * Array of Users to be Encoded and Decoded from JSON and BSON.
 */
export interface Users extends Array<UserDocument> {

}

export interface UserModel extends Model<UserDocument> { }

export class User {
    private _model: Model<UserDocument>;

    constructor() {

        const schema = new Schema({
            image: { type: String, required: true },
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            created: { type: Date, default: Date.now }
        });

        schema.pre("save", true, function (next, done) {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) console.error(err);
                bcrypt.hash(this.password, salt, function (err, hash) {
                    if (err) console.error(err);
                    try {
                        this.password = hash
                    } catch (error) {
                        console.error(error)
                    }
                });
            });
            next();
        });

        this._model = model<UserDocument>('User', schema);
    }

    public get model(): Model<UserDocument> {
        return this._model
    }

}