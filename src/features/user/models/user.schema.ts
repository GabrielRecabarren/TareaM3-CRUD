import { IUserDocument } from '@root/features/user/interfaces/IUserDocument.interface';

import { model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    //Llevamos los elementos sensibles al Auth
    authId: { type: Schema.Types.ObjectId, ref: 'Auth' },
    tasks:[{type: Schema.Types.ObjectId, ref: 'Task'}],
    notifications: {
        messages: { type: Boolean, default: true },
        comments: { type: Boolean, default: true }
    }

});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');
export { UserModel };

//modificar la estructura del usuario para que tenga sentido y diferenciación.
//tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
