// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed
//
// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

describe('Plane', function() {
  var Airport = require('../src/Airport.js');
  var Plane = require('../src/Plane.js');
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport(); //SPY THIS
  });

  describe('can take off', function() {
    it('takes off', function(){
      plane.takeOff();
      expect(plane._location).toEqual("air");
    });
  });

  describe('can land at an airport', function() {
    it('lands at an airport', function() {
      plane.landAt(airport);
      expect(plane._location).toEqual(airport);
    });
  });

});
