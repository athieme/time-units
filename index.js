/**
 * Copyright (c) 2013 Alex Thieme  All rights reserved.
 */

var logger = require('winston');

module.exports = function (number) {

    var result = {};

    var convert = {
        s : {
            ms : function (number) {
                return number * 1000;
            }
        } ,
        ms : {
            s : function (number) {
                return number / 1000;
            }
        }
    };

    var state = { number : number};

    result.from = function (from_unit) {
        state.from_unit = from_unit;
        return this;
    };

    result.to = function (to_unit) {
        state.number = convert[state.from_unit][to_unit](state.number);
        state.from_unit = to_unit;
        return this;
    };

    result.value = function () {
        return state.number;
    };

    return result;
}

