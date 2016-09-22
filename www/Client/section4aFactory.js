whoAPP.factory('section4aFactory', ['$http','$q',function($http,$q) {

   var section4aFactory = {};
    
    section4aFactory.Item1YesNo= " ";
    section4aFactory.Item1Func= " ";
    section4aFactory.Item2YesNo= " ";
    section4aFactory.Item2Func= " ";
    section4aFactory.Item3YesNo= " ";
    section4aFactory.Item3Func= " ";
    section4aFactory.Item4YesNo= " ";
    section4aFactory.Item4Func= " ";
    section4aFactory.Item5YesNo= " ";
    section4aFactory.Item5Func= " ";
    section4aFactory.Item6YesNo= " ";
    section4aFactory.Item6Func= " ";
    section4aFactory.Item7YesNo= " ";
    section4aFactory.Item7Func= " ";
    section4aFactory.Item8YesNo= " ";
    section4aFactory.Item8Func= " ";
    section4aFactory.Item9YesNo= " ";
    section4aFactory.Item9Func= " ";
    section4aFactory.Item10YesNo= " ";
    section4aFactory.Item10Func= " ";
    section4aFactory.Item11YesNo= " ";
    section4aFactory.Item11Func= " ";
    
 section4aFactory.save = function(section4a){
     
     section4aFactory = section4a;
     console.log(section4aFactory);
 };
    
section4aFactory.reset = function(){
    section4aFactory.Item1YesNo= " ";
    section4aFactory.Item1Func= " ";
    section4aFactory.Item2YesNo= " ";
    section4aFactory.Item2Func= " ";
    section4aFactory.Item3YesNo= " ";
    section4aFactory.Item3Func= " ";
    section4aFactory.Item4YesNo= " ";
    section4aFactory.Item4Func= " ";
    section4aFactory.Item5YesNo= " ";
    section4aFactory.Item5Func= " ";
    section4aFactory.Item6YesNo= " ";
    section4aFactory.Item6Func= " ";
    section4aFactory.Item7YesNo= " ";
    section4aFactory.Item7Func= " ";
    section4aFactory.Item8YesNo= " ";
    section4aFactory.Item8Func= " ";
    section4aFactory.Item9YesNo= " ";
    section4aFactory.Item9Func= " ";
    section4aFactory.Item10YesNo= " ";
    section4aFactory.Item10Func= " ";
    section4aFactory.Item11YesNo= " ";
    section4aFactory.Item11Func= " ";
    console.log("section 4a cleared");
};
    
  return section4aFactory;
}]);
