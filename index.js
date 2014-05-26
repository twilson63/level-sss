var upnode = require('upnode');
var EventEmitter = require('events').EventEmitter;
var index = require('./lib/search-index');
var query = require('./lib/search-query');

var levelup = require('levelup');
var db = levelup('sss', { keyEncoding: 'bytewise', valueEncoding: 'json'});

module.exports = function (opts) {
  // TODO validate opts document
  
  return {
    query: upnode(query(opts.query, db)),
    index: upnode(index(opts.index, db))
  };

};
