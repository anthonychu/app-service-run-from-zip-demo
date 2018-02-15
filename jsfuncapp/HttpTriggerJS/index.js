var azure = require('azure-storage');

module.exports = function (context, req) {
    context.res = "hi";
    context.done();
};
