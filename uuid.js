const { v4: uuidv4 } = require('uuid');

const uuids = Array.from({ length: 11 }, () => uuidv4());

console.log(uuids);