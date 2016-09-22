whoAPP.factory('section4cFactory', ['$http','$q',function($http,$q) {

   var section4cFactory = {};
    
    section4cFactory.Item1YesNo= " ";
    section4cFactory.Item1Func= " ";
    section4cFactory.Item2YesNo= " ";
    section4cFactory.Item2Func= " ";
    
 section4cFactory.save = function(section4c){
     
     section4cFactory = section4c;
     console.log(section4cFactory);
 };
    
section4cFactory.reset = function(){
    section4cFactory.Item1YesNo= " ";
    section4cFactory.Item1Func= " ";
    section4cFactory.Item2YesNo= " ";
    section4cFactory.Item2Func= " ";
    console.log("section 4c cleared");
};
  return section4cFactory;
}]);
