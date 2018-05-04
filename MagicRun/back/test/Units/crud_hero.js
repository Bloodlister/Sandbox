const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const Hero = require('./../../core/Models/Hero');

const mongoose = require('mongoose');

describe('Hero Creation', function() {
    /** @type {Hero} */
    var testHero;

    before(function(done) {
        mongoose.connection.collections.heroes.drop(function() {
            testHero = new Hero({
                name: "Arthur",
                type: "Human",
                sub_type: "Paladin",
                health: 100,
                mentor: "Merlin",
                player_id: "aaaa"
            });
            done();
        });
    });
   
    it('Adding a hero to the Database', function(done) {
        testHero.save().then(function() {
            expect(testHero.isNew).to.equal(false);
            done();
        });
    });

    it('Hero returns a greeting.', function(done) {
        let greeting = testHero.greet();
        expect(testHero.greetings).to.contain(greeting);
        done();
    });
});