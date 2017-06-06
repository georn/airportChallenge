describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane; //Spy this
  });

  describe('can confirm a plane has landed', function() {
    it('lands a plane', function() {
        airport.landingPlane(plane);
        expect(airport.hangar).toContain(plane);

    });

    it('confirms a plane has landed', function() {
      expect(airport.landingPlane(plane)).toEqual("A plane has arrived.")
    });
  });

});
