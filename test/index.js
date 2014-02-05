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

    it('test something...' , function (done) {
        convert(3).from('s').to('ms').value().should.equal(3000);
        convert(3000).from('ms').to('s').value().should.equal(3);
        convert(3).from('s').to('ms').to('s').value().should.equal(3);

        done();
    });

    after(function () {
        // do something
    });
});


