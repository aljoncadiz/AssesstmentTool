whoAPP.factory('section1Factory',['$http','$q',function($http,$q){
  var section1Factory = {};
    
	section1Factory.assessor1 = " ";
    section1Factory.assessor2 = " ";
    section1Factory.assessor3 = " ";
    section1Factory.contact1 = " ";
    section1Factory.contact2 = " ";
    section1Factory.contact3 = " ";
    section1Factory.email1 = " ";
    section1Factory.email2 = " ";
    section1Factory.email3 = " ";
    section1Factory.provinceName = " ";
    section1Factory.cityMunicipality = " ";
    section1Factory.barangayName = " ";
    section1Factory.brgyPop = " ";
    section1Factory.barangayCode = " ";
    section1Factory.hfName = " ";
    section1Factory.dohHfCode = " ";
    section1Factory.withDelivery = " ";
    section1Factory.withoutDelivery = " ";
    section1Factory.satelliteBHS = " ";
    section1Factory.lguOwnedLand = " ";
    section1Factory.privatelyOwnedLand = " ";
    section1Factory.barangayHall = " ";
    section1Factory.dedicatedBuilding = " ";
    section1Factory.formerBhs = " ";
    section1Factory.urban = " ";
    section1Factory.rural = " ";
    section1Factory.numberOfSatellite = " ";
    section1Factory.accuracy = " ";
    section1Factory.latitude = " ";
    section1Factory.longitude = " ";
    section1Factory.waypoint1 = " ";
    section1Factory.waypoint2 = " ";
    section1Factory.notesAboutGPS = " ";
    section1Factory.presencePreYolanda = " ";
    section1Factory.presencePostYolanda = " ";
    section1Factory.midwifePreYolanda = " ";
    section1Factory.midwifePostYolanda = " ";
    section1Factory.dateOfAssessment = " ";
    
    
    
 section1Factory.save = function(section1){
     
     section1Factory = section1;
     console.log(section1Factory);
   
 };
    
section1Factory.reset = function(facilityCode){
    section1Factory.assessor1 = " ";
    section1Factory.assessor2 = " ";
    section1Factory.assessor3 = " ";
    section1Factory.contact1 = " ";
    section1Factory.contact2 = " ";
    section1Factory.contact3 = " ";
    section1Factory.email1 = " ";
    section1Factory.email2 = " ";
    section1Factory.email3 = " ";
    section1Factory.provinceName = " ";
    section1Factory.cityMunicipality = " ";
    section1Factory.barangayName = " ";
    section1Factory.brgyPop = " ";
    section1Factory.barangayCode = " ";
    section1Factory.hfName = " ";
    section1Factory.dohHfCode = facilityCode;
    section1Factory.withDelivery = " ";
    section1Factory.withoutDelivery = " ";
    section1Factory.satelliteBHS = " ";
    section1Factory.lguOwnedLand = " ";
    section1Factory.privatelyOwnedLand = " ";
    section1Factory.barangayHall = " ";
    section1Factory.dedicatedBuilding = " ";
    section1Factory.formerBhs = " ";
    section1Factory.urban = " ";
    section1Factory.rural = " ";
    section1Factory.numberOfSatellite = " ";
    section1Factory.accuracy = " ";
    section1Factory.latitude = " ";
    section1Factory.longitude = " ";
    section1Factory.waypoint1 = " ";
    section1Factory.waypoint2 = " ";
    section1Factory.notesAboutGPS = " ";
    section1Factory.presencePreYolanda = " ";
    section1Factory.presencePostYolanda = " ";
    section1Factory.midwifePreYolanda = " ";
    section1Factory.midwifePostYolanda = " ";
    section1Factory.dateOfAssessment = " ";
    console.log("section 1 cleared");
};



  return section1Factory;
}]);
