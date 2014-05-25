var levels = require('levels');

module.exports = function (opts, db) {

  var init = function(secret, cb) {
    var search = levels.createSearch(db, 'sss');
    var cmds = {
      index: function () {
        var args = Array.prototype.slice.call(arguments);
        search.index.apply(search, args);
      }
    };

    if (opts.secret === secret) {
      cb(null, cmds);
    } else {
      cb({ message: 'Access Denied!'});
    }
  }
  return { init: init }
};
