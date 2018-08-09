import mongoose, {Schema} from 'mongoose';

const personSchema = new Schema({
    cuid: { type: String, required: true, unique:true },
    firstName: { type: String, trim:true, required: 'First Name required',  },
    lastName: { type: String, trim: true, default: '' },
    age: { type: Number, validate: { validator: Number.isInteger, message: '{VALUE} is not an integer value' } },
    gender: { type: String },
    active: { type: Boolean, default: true},
    created: { type: Date, default: Date.now, required: true },
});

let Person = mongoose.model('Person', personSchema);

export default Person;
