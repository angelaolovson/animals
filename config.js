const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sei.xcwuzcs.mongodb.net/animalDB?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 4000;

module.exports = {
    DATABASE_URL, PORT
}