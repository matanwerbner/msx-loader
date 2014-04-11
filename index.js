var msx = require('msx')

module.exports = function(source) {
  this.cacheable();
  return msx.transform(source);
};
