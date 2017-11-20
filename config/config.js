const path = require('path');
const rootPath = path.normalize(__dirname+'/../');

module.exports = {
  db: 'mongodb://localhost/mybonsai',
  rootPath: rootPath
};
