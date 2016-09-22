whoAPP.factory('section4dFactory', ['$http','$q',function($http,$q) {

   var section4dFactory = {};
    
    section4dFactory.Item1YesNo= " ";
    section4dFactory.Item1Func= " ";
    section4dFactory.Item2YesNo= " ";
    section4dFactory.Item2Func= " ";
    section4dFactory.Item3YesNo= " ";
    section4dFactory.Item3Func= " ";
    section4dFactory.Item4YesNo= " ";
    section4dFactory.Item4Func= " ";
    section4dFactory.Item5YesNo= " ";
    section4dFactory.Item5Func= " ";
    section4dFactory.Item6YesNo= " ";
    section4dFactory.Item6Func= " ";
    section4dFactory.Item7YesNo= " ";
    section4dFactory.Item7Func= " ";
    
 section4dFactory.save = function(section4d){
     
     section4dFactory = section4d;
     console.log(section4dFactory);
 };

section4dFactory.reset = function(){
    section4dFactory.Item1YesNo= " ";
    section4dFactory.Item1Func= " ";
    section4dFactory.Item2YesNo= " ";
    section4dFactory.Item2Func= " ";
    section4dFactory.Item3YesNo= " ";
    section4dFactory.Item3Func= " ";
    section4dFactory.Item4YesNo= " ";
    section4dFactory.Item4Func= " ";
    section4dFactory.Item5YesNo= " ";
    section4dFactory.Item5Func= " ";
    section4dFactory.Item6YesNo= " ";
    section4dFactory.Item6Func= " ";
    section4dFactory.Item7YesNo= " ";
    section4dFactory.Item7Func= " ";
    console.log("section 4d cleared");
};
    
  return section4dFactory;
}]);
