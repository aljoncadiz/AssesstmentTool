whoAPP.factory('section4eFactory', ['$http','$q',function($http,$q) {

   var section4eFactory = {};
    
    section4eFactory.Item1YesNo= " ";
    section4eFactory.Item1Func= " ";
    section4eFactory.Item2YesNo= " ";
    section4eFactory.Item2Func= " ";
    section4eFactory.Item3YesNo= " ";
    section4eFactory.Item3Func= " ";
    section4eFactory.Item4YesNo= " ";
    section4eFactory.Item4Func= " ";
    section4eFactory.Item5YesNo= " ";
    section4eFactory.Item5Func= " ";
    
 section4eFactory.save = function(section4e){
     
     section4eFactory = section4e;
     console.log(section4eFactory);
 };
    
section4eFactory.reset = function(){
    section4eFactory.Item1YesNo= " ";
    section4eFactory.Item1Func= " ";
    section4eFactory.Item2YesNo= " ";
    section4eFactory.Item2Func= " ";
    section4eFactory.Item3YesNo= " ";
    section4eFactory.Item3Func= " ";
    section4eFactory.Item4YesNo= " ";
    section4eFactory.Item4Func= " ";
    section4eFactory.Item5YesNo= " ";
    section4eFactory.Item5Func= " ";
    console.log("section 4e cleared");
};

  return section4eFactory;
}]);
