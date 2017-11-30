/**
 * 自定义断言
 */
beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    },
    toBeAddOne: function () {
      return {
        compare: function (actual, expected) {
            console.log(actual + '#' + expected);
          return {
            pass: actual == (expected-1)
          }
        }
      };
    }
  });

});
