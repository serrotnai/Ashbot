'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * TestBot221
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _decisions = require('leftovers-again/lib/decisions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Your code is pre-built with a very simple bot that chooses a team, then
 * picks randomly from valid moves on its turn.
 */
var TestBot221 = function () {
  function TestBot221() {
    _classCallCheck(this, TestBot221);
  }

  _createClass(TestBot221, [{
    key: 'decide',


    /**
     * Here's the main loop of your bot. `state` contains everything about the
     * current state of the game. Please read the documentation for more
     * details.
     *
     * @param  {Object} state The current state of the game.
     *
     * @return {Decision}     A decision object.
     */
    value: function decide(state) {
      // `forceSwitch` occurs if your Pokemon has just fainted, or other moves
      // that mean you need to switch out your Pokemon
      if (state.forceSwitch) {
        var myMon = this.pickOne(
        // filter through your reserve of Pokemon for ones that aren't dead
        state.self.reserve.filter(function (mon) {
          return !mon.active && !mon.dead;
        }));
        // return a Decision object. SWITCH takes Pokemon objects, Pokemon names,
        // and the reserve index [0-5] of the Pokemon you're switching into.
        return new _decisions.SWITCH(myMon);
      }

      var myMove = this.pickOne(
      // filter through your active Pokemon's moves for a move that isn't disabled
      state.self.active.moves.filter(function (move) {
        return !move.disabled;
      }));
      // return a Decision object. MOVE takes Move objects, move names, and
      // move indexes [0-3].
      return new _decisions.MOVE(myMove);
    }

    // randomly chooses an element from an array

  }, {
    key: 'pickOne',
    value: function pickOne(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }]);

  return TestBot221;
}();

exports.default = TestBot221;