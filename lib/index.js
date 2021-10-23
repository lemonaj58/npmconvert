const defaultRoundNumber = 2;
module.exports = class Conversions {
  static MilesToKM = 1.60934;
  static MilesToYards = 1760;
  static MilesToMeters = 1609.344;
  static MileToFeet = 5280;
  static KMToMiles = .62137;
  static MetersToFeet = .3048;
  static MetersToCentimeters = 100;
  static MetersToMiles = (1 / 1609.344);
  static MetersToYards = 1.0936;
  static FeetToMeters = 3.280839895;
  
  static CentimetersToMeters = .001;
  static FeetToYards = (1/3);
  static YardsToFeet = 3;
  static FeetToMiles = (1 / 5280);
  
  static InchesToFeet = (1 / 12);
  static FeetToInches = 12;
  static InchesToCentimeters = 2.54;
  static CentimetersToInches = (1/2.54);
  static InchesToMillimeters = 25.4;
  static MillimetersToInches = (1 / 25.4);
  
  static YardsToMiles = (1/1760);
  
  static YardsToMeters = (1 / 1.0936);
  
  


  static TeaspoonsToTablespoon = (1 / 3);
  static TablespoonToTeaspoon = 3;
  static TablespoonToCups = (1 / 16);
  static CupsToTablespoon = 16;
  static CupsToPints = (1 / 2);
  static PintsToCups = 2;
  static PintsToQuarts = (1 / 2);
  static QuartsToPints = 2;
  static CupsToQuarts = (1 / 4);
  static QuartsToCups = 4;
  static QuartsToGallons = (1 / 4);
  static GallonsToQuarts = 4;
  static PintsToGallons = (1 / 8);
  static GallonsToPints = 8;
  static CupsToGallons = (1 / 16);
  static GallonsToCups = 16;
  static LitersToGallons = (1 / 3.785412);
  static GallonsToLiters = 3.785412;

//Distances, miles, centimeters, milimeters, yards, kilometers
  static milesToKM(num, roundedNumber = defaultRoundNumber) {
    return Number((num * this.MilesToKM).toFixed(roundedNumber));
  };

  static kMToMiles(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.KMToMiles).toFixed(roundedNumber);
  };

  static metersToFeet(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MetersToFeet).toFixed(roundedNumber);
  };

  static feetToMeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.FeetToMeters).toFixed(roundedNumber);
  };

  static metersToCentimeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MetersToCentimeters).toFixed(roundedNumber);
  };

  static centimetersToMeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CentimetersToMeters).toFixed(roundedNumber);
  };

  static feetToYards(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.YardsToFeet).toFixed(roundedNumber);
  };

  static yardsToFeet(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.YardsToFeet).toFixed(roundedNumber);
  };

  static feetToMiles(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.FeetToMiles).toFixed(roundedNumber);
  };

  static milesToFeet(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MileToFeet).toFixed(roundedNumber);
  };

  static feetToInches(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.feetToInches).toFixed(roundedNumber);
  };

  static inchesToFeet(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.InchesToFeet).toFixed(roundedNumber);
  };

  static centimetersToInches(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CentimetersToInches).toFixed(roundedNumber);
  };

  static inchesToCentimeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.InchesToCentimeters).toFixed(roundedNumber);
  };

  static inchesToMillimeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.InchesToMillimeters).toFixed(roundedNumber);
  };

  static millimetersToInches(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MillimetersToInches).toFixed(roundedNumber);
  }

  static milesToYards(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MilesToYards).toFixed(roundedNumber);
  }

  static yardsToMiles(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.YardsToMiles).toFixed(roundedNumber);
  }

  static metersToYards(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MetersToYards).toFixed(roundedNumber);
  }

  static yardsToMeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.YardsToMeters).toFixed(roundedNumber);
  }

  static metersToMiles(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MetersToMiles).toFixed(roundedNumber);
  }

  static milesToMeters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.MilesToMeters).toFixed(roundedNumber);
  }




  static teaspoonsToTablespoons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.TeaspoonsToTablespoon).toFixed(roundedNumber);
  };

  static tablespoonsToTeaspoons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.TablespoonToTeaspoon).toFixed(roundedNumber);
  };

  static cupsToTablespoons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CupsToTablespoon).toFixed(roundedNumber);
  };

  static tablespoonToCups(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.TablespoonToCups).toFixed(roundedNumber);
  };

  static cupsToPints(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CupsToPints).toFixed(roundedNumber);
  };

  static pintsToCups(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.PintsToCups).toFixed(roundedNumber)
  };

  static quartsToPints(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.QuartsToPints).toFixed(roundedNumber);
  };

  static pintsToQuarts(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.PintsToQuarts).toFixed(roundedNumber);
  };

  static cupsToQuarts(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CupsToQuarts).toFixed(roundedNumber);
  };

  static quartsToCups(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.quartsToCups).toFixed(roundedNumber);
  };

  static quartsToGallons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.QuartsToGallons).toFixed(roundedNumber)
  };

  static gallonsToQuarts(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.GallonsToQuarts).toFixed(roundedNumber);
  };

  static pintsToGallons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.PintsToGallons).toFixed(roundedNumber)
  };

  static gallonsToPints(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.GallonsToPints).toFixed(roundedNumber);
  };

  static cupsToGallons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.CupsToGallons).toFixed(roundedNumber);
  };

  static gallonsToCups(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.GallonsToCups).toFixed(roundedNumber);
  };

  static litersToGallons(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.LitersToGallons).toFixed(roundedNumber);
  }

  static gallonsToLiters(num, roundedNumber = defaultRoundNumber) {
    return Number(num * this.GallonsToLiters).toFixed(roundedNumber);
  }



  //cooking measurments, cups, teaspoon galons leters.

} 
