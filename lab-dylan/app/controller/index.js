'use strict';

module.exports = function(app) {
  require('./auth_controller')(app);
  require('./list_controller')(app);
};