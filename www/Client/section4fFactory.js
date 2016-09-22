whoAPP.factory('section4fFactory', ['$http','$q',function($http,$q) {

   var section4fFactory = {};
    
    section4fFactory.Item1YesNo= " ";
    section4fFactory.Item1Func= " ";
    section4fFactory.Item2YesNo= " ";
    section4fFactory.Item2Func= " ";
    section4fFactory.Item3YesNo= " ";
    section4fFactory.Item3Func= " ";
    section4fFactory.Item4YesNo= " ";
    section4fFactory.Item4Func= " ";

 section4fFactory.save = function(section4f){
     
     section4fFactory = section4f;
     console.log(section4fFactory);
 };
    
section4fFactory.reset = function(){
    section4fFactory.Item1YesNo= " ";
    section4fFactory.Item1Func= " ";
    section4fFactory.Item2YesNo= " ";
    section4fFactory.Item2Func= " ";
    section4fFactory.Item3YesNo= " ";
    section4fFactory.Item3Func= " ";
    section4fFactory.Item4YesNo= " ";
    section4fFactory.Item4Func= " ";
    console.log("section 4f cleared");
};
  return section4fFactory;
}]);
