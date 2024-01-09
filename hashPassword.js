const bcrypt = require('bcrypt');

const password = "dummyuser";

bcrypt.hash(password, 10)
    .then(hashedPassword => console.log(hashedPassword))