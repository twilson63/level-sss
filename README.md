# level-sss

A Leveldb Simple Search Server. Using a dnode interface.

The server listens on two ports, the index port and the query
port.  Each port can have a secret to gain authorization
to either index or search.

## install and start servers

``` sh
npm install level-sss -g
sss --index=[ --port=5000 --secret=foo ] --query[ --port=6000 --secret=bar ]
```

## sss index server client example

``` js
require('upnode').connect(5000, function (remote) {
  remote.init('foo', ready);
  function ready(err, index) {
    // index string, id
    index('some string', 1);
  }
});
```

## sss query server client example

``` js
require('upnode').connect(6000, function (remote) {
  remote.init('bar', ready);
  function ready(err, query) {
    query('some string', function(err, ids) {
      // take ids and get data
    });
  }
});
```

## In Development Mode

It does work, but will most likely have several bugs to work out.
