// import modules.
var path = require('path');

// export router.
module.exports = function(router) {

  console.log(router);
  router.route('/api/recipe')
    .get(function(req, res, next) {
      res.status(200)
        .end('Tada');
    });

};
