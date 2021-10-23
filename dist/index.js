"use strict";

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRoundNumber = 2;
module.exports = (_temp = _class = /*#__PURE__*/function () {
  function Conversions() {
    _classCallCheck(this, Conversions);
  }

  _createClass(Conversions, null, [{
    key: "milesToKM",
    value: //Distances, miles, centimeters, milimeters, yards, kilometers
    function milesToKM(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return Number((num * this.MilesToKM).toFixed(roundedNumber));
    }
  }, {
    key: "kMToMiles",
    value: function kMToMiles(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.KMToMiles).toFixed(roundedNumber);
    }
  }, {
    key: "metersToFeet",
    value: function metersToFeet(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MetersToFeet).toFixed(roundedNumber);
    }
  }, {
    key: "feetToMeters",
    value: function feetToMeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.FeetToMeters).toFixed(roundedNumber);
    }
  }, {
    key: "metersToCentimeters",
    value: function metersToCentimeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MetersToCentimeters).toFixed(roundedNumber);
    }
  }, {
    key: "centimetersToMeters",
    value: function centimetersToMeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CentimetersToMeters).toFixed(roundedNumber);
    }
  }, {
    key: "feetToYards",
    value: function feetToYards(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.YardsToFeet).toFixed(roundedNumber);
    }
  }, {
    key: "yardsToFeet",
    value: function yardsToFeet(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.YardsToFeet).toFixed(roundedNumber);
    }
  }, {
    key: "feetToMiles",
    value: function feetToMiles(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.FeetToMiles).toFixed(roundedNumber);
    }
  }, {
    key: "milesToFeet",
    value: function milesToFeet(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MileToFeet).toFixed(roundedNumber);
    }
  }, {
    key: "feetToInches",
    value: function feetToInches(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.feetToInches).toFixed(roundedNumber);
    }
  }, {
    key: "inchesToFeet",
    value: function inchesToFeet(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.InchesToFeet).toFixed(roundedNumber);
    }
  }, {
    key: "centimetersToInches",
    value: function centimetersToInches(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CentimetersToInches).toFixed(roundedNumber);
    }
  }, {
    key: "inchesToCentimeters",
    value: function inchesToCentimeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.InchesToCentimeters).toFixed(roundedNumber);
    }
  }, {
    key: "inchesToMillimeters",
    value: function inchesToMillimeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.InchesToMillimeters).toFixed(roundedNumber);
    }
  }, {
    key: "millimetersToInches",
    value: function millimetersToInches(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MillimetersToInches).toFixed(roundedNumber);
    }
  }, {
    key: "milesToYards",
    value: function milesToYards(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MilesToYards).toFixed(roundedNumber);
    }
  }, {
    key: "yardsToMiles",
    value: function yardsToMiles(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.YardsToMiles).toFixed(roundedNumber);
    }
  }, {
    key: "metersToYards",
    value: function metersToYards(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MetersToYards).toFixed(roundedNumber);
    }
  }, {
    key: "yardsToMeters",
    value: function yardsToMeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.YardsToMeters).toFixed(roundedNumber);
    }
  }, {
    key: "metersToMiles",
    value: function metersToMiles(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MetersToMiles).toFixed(roundedNumber);
    }
  }, {
    key: "milesToMeters",
    value: function milesToMeters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.MilesToMeters).toFixed(roundedNumber);
    }
  }, {
    key: "teaspoonsToTablespoons",
    value: function teaspoonsToTablespoons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.TeaspoonsToTablespoon).toFixed(roundedNumber);
    }
  }, {
    key: "tablespoonsToTeaspoons",
    value: function tablespoonsToTeaspoons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.TablespoonToTeaspoon).toFixed(roundedNumber);
    }
  }, {
    key: "cupsToTablespoons",
    value: function cupsToTablespoons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CupsToTablespoon).toFixed(roundedNumber);
    }
  }, {
    key: "tablespoonToCups",
    value: function tablespoonToCups(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.TablespoonToCups).toFixed(roundedNumber);
    }
  }, {
    key: "cupsToPints",
    value: function cupsToPints(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CupsToPints).toFixed(roundedNumber);
    }
  }, {
    key: "pintsToCups",
    value: function pintsToCups(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.PintsToCups).toFixed(roundedNumber);
    }
  }, {
    key: "quartsToPints",
    value: function quartsToPints(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.QuartsToPints).toFixed(roundedNumber);
    }
  }, {
    key: "pintsToQuarts",
    value: function pintsToQuarts(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.PintsToQuarts).toFixed(roundedNumber);
    }
  }, {
    key: "cupsToQuarts",
    value: function cupsToQuarts(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CupsToQuarts).toFixed(roundedNumber);
    }
  }, {
    key: "quartsToCups",
    value: function quartsToCups(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.quartsToCups).toFixed(roundedNumber);
    }
  }, {
    key: "quartsToGallons",
    value: function quartsToGallons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.QuartsToGallons).toFixed(roundedNumber);
    }
  }, {
    key: "gallonsToQuarts",
    value: function gallonsToQuarts(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.GallonsToQuarts).toFixed(roundedNumber);
    }
  }, {
    key: "pintsToGallons",
    value: function pintsToGallons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.PintsToGallons).toFixed(roundedNumber);
    }
  }, {
    key: "gallonsToPints",
    value: function gallonsToPints(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.GallonsToPints).toFixed(roundedNumber);
    }
  }, {
    key: "cupsToGallons",
    value: function cupsToGallons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.CupsToGallons).toFixed(roundedNumber);
    }
  }, {
    key: "gallonsToCups",
    value: function gallonsToCups(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.GallonsToCups).toFixed(roundedNumber);
    }
  }, {
    key: "litersToGallons",
    value: function litersToGallons(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.LitersToGallons).toFixed(roundedNumber);
    }
  }, {
    key: "gallonsToLiters",
    value: function gallonsToLiters(num) {
      var roundedNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoundNumber;
      return (num * this.GallonsToLiters).toFixed(roundedNumber);
    } //cooking measurments, cups, teaspoon galons leters.

  }]);

  return Conversions;
}(), _defineProperty(_class, "MilesToKM", 1.60934), _defineProperty(_class, "MilesToYards", 1760), _defineProperty(_class, "MilesToMeters", 1609.344), _defineProperty(_class, "MileToFeet", 5280), _defineProperty(_class, "KMToMiles", .62137), _defineProperty(_class, "MetersToFeet", .3048), _defineProperty(_class, "MetersToCentimeters", 100), _defineProperty(_class, "MetersToMiles", 1 / 1609.344), _defineProperty(_class, "MetersToYards", 1.0936), _defineProperty(_class, "FeetToMeters", 3.280839895), _defineProperty(_class, "CentimetersToMeters", .001), _defineProperty(_class, "FeetToYards", 1 / 3), _defineProperty(_class, "YardsToFeet", 3), _defineProperty(_class, "FeetToMiles", 1 / 5280), _defineProperty(_class, "InchesToFeet", 1 / 12), _defineProperty(_class, "FeetToInches", 12), _defineProperty(_class, "InchesToCentimeters", 2.54), _defineProperty(_class, "CentimetersToInches", 1 / 2.54), _defineProperty(_class, "InchesToMillimeters", 25.4), _defineProperty(_class, "MillimetersToInches", 1 / 25.4), _defineProperty(_class, "YardsToMiles", 1 / 1760), _defineProperty(_class, "YardsToMeters", 1 / 1.0936), _defineProperty(_class, "TeaspoonsToTablespoon", 1 / 3), _defineProperty(_class, "TablespoonToTeaspoon", 3), _defineProperty(_class, "TablespoonToCups", 1 / 16), _defineProperty(_class, "CupsToTablespoon", 16), _defineProperty(_class, "CupsToPints", 1 / 2), _defineProperty(_class, "PintsToCups", 2), _defineProperty(_class, "PintsToQuarts", 1 / 2), _defineProperty(_class, "QuartsToPints", 2), _defineProperty(_class, "CupsToQuarts", 1 / 4), _defineProperty(_class, "QuartsToCups", 4), _defineProperty(_class, "QuartsToGallons", 1 / 4), _defineProperty(_class, "GallonsToQuarts", 4), _defineProperty(_class, "PintsToGallons", 1 / 8), _defineProperty(_class, "GallonsToPints", 8), _defineProperty(_class, "CupsToGallons", 1 / 16), _defineProperty(_class, "GallonsToCups", 16), _defineProperty(_class, "LitersToGallons", 1 / 3.785412), _defineProperty(_class, "GallonsToLiters", 3.785412), _temp);