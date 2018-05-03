const assert = require('assert');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done) {
    mongoose.connect('mongodb://localhost/MagicRunTesting');
    
    mongoose.connection.once('open', function() {
        console.log('Connection has been made.');
        mongoose.connection.collections.units.drop(function() {
            console.log('Database has been cleared.');
            done();
        });
    }).on('error', function(error){
        console.log('Error:');
        console.log(error);
        done();
    });
});

after(function(done) {
    mongoose.disconnect();
    done();
});
