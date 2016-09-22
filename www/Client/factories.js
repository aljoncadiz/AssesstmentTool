var whoAPP = angular.module('whoAPP.factories',[])

.factory('section1Factory',function(){
  var section1Factory = {};
  
 section1Factory.nameOfAssessor1 = "";

 section1Factory.save = function(section1){
     
     section1Factory = section1;
     console.log(section1Factory);
 };
  return section1Factory;
})

.factory('section2Factory',function()
           {
               var section2Factory = {};
               section2Factory.save = function(section2){
                   
                   section2Factory = section2;
                   console.log(section2Factory);
               };
               
               return section2Factory;
})
.factory('section4aFactory', [function() {

    var section4aFactory = {};
    
    
    section4aFactory.save = function (sec4a) {
        section4aFactory = sec4a;
    };
    
    return section4aFactory;
}]);
