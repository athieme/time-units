/**
 * Copyright (c) 2013 Alex Thieme  All rights reserved.
 */

'use strict';

var logger = require('winston');
var should = require('should');
var convert = require('..');

describe('Session tests' , function () {

    before(function (done) {
        // do something

        done();
    });

    it('between milliseconds and seconds' , function (done) {
        convert(3000).from('ms').to('s').value().should.equal(3);
        convert(3).from('s').to('ms').value().should.equal(3000);
        convert(3000).from('ms').to('s').to('ms').value().should.equal(3000);
        done();
    });

    it('between econds and minutes' , function (done) {
        convert(120).from('s').to('m').value().should.equal(2);
        convert(2).from('m').to('s').value().should.equal(120);
        convert(120).from('s').to('m').to('s').value().should.equal(120);
        done();
    });

    after(function () {
        // do something
    });
});


