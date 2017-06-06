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

  describe('airport capacity',function() {
    it('check default capacity', function(){
      expect(airport.capacity).toEqual(51);
    });

    it('overrides default capacity', function() {
      airport.overrideCapacity(52);
      expect(airport.capacity).toEqual(52);
    });

    // Throw error mystery
    // xit('check if it throws an error', function() {
    //   expect( function() { airport.landingPlane(plane); } ).toThrowError("The airport is full.");
    // });
  });


});
