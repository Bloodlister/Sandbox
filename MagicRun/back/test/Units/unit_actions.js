const assert = require('assert');
const Unit = require('../../core/Models/Unit');
const chai = require('chai');
const expect = chai.expect;

require('../connection');

describe('Unit actions.', function() {
    it("Unit taking damage changes it's health", function(done) {
        let testUnit = new Unit({
            name: "TestDummy",
            type: "Neutral",
            health: 100,
            sub_type: "Sandbag"
        });

        expect(testUnit.getHealth()).to.equal(100);

        testUnit.takeDamage(50);
        expect(testUnit.health).to.equal(50);
        done();
    });
});
