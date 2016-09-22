heRAMS = angular.module('whoAPP.controllers', [])

.controller('HomeCtrl',['$scope', function($scope) {
    $scope.indexPage = true;
    
    $scope.show = function () {
        $scope.indexPage = !$scope.indexPage;
    };
    
    $scope.hide = function(){ 
        $scope.indexPage = true;
    };
}])
.controller('section1Ctrl', ['$scope', 'section1Factory',function($scope, section1Factory) {

    $scope.section1 = section1Factory;
   
    
    $scope.save = function () {
                             section1Factory.save($scope.section1);
                             };
                             
}])
.controller('section2Ctrl',['$scope','section2Factory',function($scope,section2Factory){
    
     $scope.section2 = section2Factory;
     
     $scope.save = function()
     {
         section2Factory.save($scope.section2);
     };
}])

.controller('section3Ctrl',[function(){
}])

.controller('section4aCtrl',['$scope', 'section4aFactory',function($scope,section4aFactory){  
    
    $scope.sec4a = section4aFactory;
    
    $scope.save = function()
    {
        section4aFactory.save($scope.sec4a);
    };
    
}])

.controller('section4bCtrl',[function(){   
}])

.controller('section4cCtrl',[function(){   
}])

.controller('section4dCtrl',[function(){   
}])

.controller('section4eCtrl',[function(){   
}])

.controller('section4fCtrl',[function(){   
}])

.controller('section4gCtrl',[function(){   
}])

.controller('section4hCtrl',[function(){   
}])

.controller('section5Ctrl',[function(){
}])

.controller('section6Ctrl',['testFactory',function(){
}]);