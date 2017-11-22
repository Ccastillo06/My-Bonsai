const path = require('path');
const rootPath = path.normalize(__dirname+'/../');

module.exports = {
  db: process.env.mongoDB,
  rootPath: rootPath
};
