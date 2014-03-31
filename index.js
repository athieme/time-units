/**
 * Copyright (c) 2013 Alex Thieme  All rights reserved.
 */

var logger = require('winston');

module.exports = function (number) {

  var result = {};

  // TODO should be able to define the units and functions once and go up and down
  // TODO should be able to go up and down, skipping steps in between
  var convert = {
    d : {
      h : function (number) {
        return number * 24;
      }
    },
    h : {
      d : function (number) {
        return number / 24;
      },
      m : function (number) {
        return number * 60;
      }
    },
    m : {
      h : function (number) {
        return number / 60;
      },
      s : function (number) {
        return number * 60;
      }
    },
    s : {
      m : function (number) {
        return number / 60;
      },
      ms : function (number) {
        return number * 1000;
      }
    },
    ms : {
      s : function (number) {
        return number / 1000;
      }
    }
  };

  var state = { number : number};

  /**
   * Specify the number's time unit
   * @param from_unit the number's time unit
   * @returns {result}
   */
  result.from = function (from_unit) {
    state.from_unit = from_unit;
    return this;
  };

  /**
   * Convert to the specified time unit
   * @param to_unit   the time unit to convert to
   * @returns {result}
   */
  result.to = function (to_unit) {
    state.number = convert[state.from_unit][to_unit](state.number);
    state.from_unit = to_unit;
    return this;
  };

  /**
   * Returns the converted number
   * @returns {*}
   */
  result.value = function () {
    return state.number;
  };

  return result;
}

