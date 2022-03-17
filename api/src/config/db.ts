import { MONGOUSERNAME, MONGOPASSWORD } from './dbInfo'

const {
    MONGO_USERNAME=MONGOUSERNAME,
    MONGO_PASSWORD=MONGOPASSWORD,
    MONGO_HOST='localhost',
    MONGO_PORT=27017,
    MONGO_DATABASE='auth'
} = process.env

export const MONGO_OPTIONS={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
export const MONGO_URI=`mongodb+srv://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@cluster0.oidd8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
