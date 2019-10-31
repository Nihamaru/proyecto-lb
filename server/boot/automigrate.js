'use strict';

module.exports = function (app) {
  app.dataSources.mysql.autoupdate('administrator', 'department', 'dept-emp', 'dept-manager', 'employee' ,'position', err =>{
    if(err) throw err;
    else console.log("Automigration Succesfull");
  });
}