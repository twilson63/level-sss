var levels = require('levels');

module.exports = function (opts, db) {

  var init = function(secret, cb) {
    var search = levels.createSearch(db, 'sss');
    var cmds = {
      query: function() {
        var args = Array.prototype.slice.call(arguments);
        var res = search.query.call(search, args[0])
        console.log(res);
        res.end(args[1]);
      }
    };

    if (opts.secret === secret) {
      cb(null, cmds);
    } else {
      cb({ message: 'Access Denied!'});
    }
  }
  return { init: init }
}
