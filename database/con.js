import mongoose from 'mongoose';
import config from '../config/config';

mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await mongoose.connect(config.mongo, { useNewUrlParser: true });

    }
    catch (err) {

      console.log(err);
    }
}

export default connectToDb;
