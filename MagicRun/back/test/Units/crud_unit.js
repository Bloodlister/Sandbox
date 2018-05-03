const assert = require('assert');
const Unit = require('./../../core/Models/Unit');

describe('Manipulating Unit data in the database.', function () {
    var testUnit;
    it('Adds a new record to the database', function (done) {
        testUnit = new Unit({
            name: "Enthys",
            type: "Wizard",
            sub_type: "Gray"
        });

        testUnit.save().then(function () {
            assert(testUnit.isNew === false);
            done();
        });
    });

    it('Get a saved record from the database.', function (done) {
        Unit.findOne({ name: "Enthys" }).then(function (result) {
            assert(result.name === "Enthys");
            done();
        });
    });

    it('Find unit by id from the database.', function (done) {
        Unit.findOne({ _id: testUnit._id }).then(function (result) {
            assert(result._id.toString() === testUnit._id.toString());
            done();
        });
    });

    it('Update unit info in database.', function (done) {
        Unit.findOneAndUpdate({ name: "Enthys" }, { type: 'Warrior' })
            .then(function() {
                Unit.findOne({ name: "Enthys" }).then(function (result) {
                    assert(result.type === 'Warrior');
                    done();
                });
            });
    });

    it('Delete one unit from database.', function (done) {
        Unit.findOneAndRemove({ name: "Enthys" }).then(function () {
            Unit.findOne({ name: "Enthys" }).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });
});