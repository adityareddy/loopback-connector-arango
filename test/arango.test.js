describe('arango imported features', function() {

    before(function() {
        require('./init.js');
    });

    require('jugglingdb/test/common.batch.js');
    //require('jugglingdb/test/include.test.js');
    require('./arango.js');
});
