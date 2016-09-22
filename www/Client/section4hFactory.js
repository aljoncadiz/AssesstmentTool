whoAPP.factory('section4hFactory', ['$http','$q',function($http,$q) {

   var section4hFactory = {};
    
    section4hFactory.Item1YesNo= " ";
    section4hFactory.Item1Number= " ";
    section4hFactory.Item2YesNo= " ";
    section4hFactory.Item2Number= " ";
    section4hFactory.Item3YesNo= " ";
    section4hFactory.Item3Number= " ";
    section4hFactory.Item4YesNo= " ";
    section4hFactory.Item4Number= " ";
    section4hFactory.Item5YesNo= " ";
    section4hFactory.Item5Number= " ";
    section4hFactory.Item6YesNo= " ";
    section4hFactory.Item6Number= " ";

 section4hFactory.save = function(section4h){
     
     section4hFactory = section4h;
     console.log(section4hFactory);
 };
    
section4hFactory.reset = function(){
    section4hFactory.Item1YesNo= " ";
    section4hFactory.Item1Number= " ";
    section4hFactory.Item2YesNo= " ";
    section4hFactory.Item2Number= " ";
    section4hFactory.Item3YesNo= " ";
    section4hFactory.Item3Number= " ";
    section4hFactory.Item4YesNo= " ";
    section4hFactory.Item4Number= " ";
    section4hFactory.Item5YesNo= " ";
    section4hFactory.Item5Number= " ";
    section4hFactory.Item6YesNo= " ";
    section4hFactory.Item6Number= " ";
    console.log("section 4h cleared");
};
  return section4hFactory;
}]);