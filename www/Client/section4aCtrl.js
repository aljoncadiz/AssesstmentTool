whoAPP.controller('section4aCtrl', ['$scope','$rootScope', 'section4aFactory','toaster',function($scope,$rootScope, section4aFactory,toaster) {

$scope.section = { previous:'#/section3', next: '#/section4b'};
    
$scope.pop = function(){
    toaster.pop('Success', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
   }; 
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4a");
            if(data == null || data == undefined)
            {
                //.log("section 1 not existing");
                return true;
                
            }
            else
            {
                //.log("section 1 existing");
                return false;
            }
    };
    
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section4a = section4aFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4a = JSON.parse(localStorage.getItem("section4a"));
        //.log(section4aFactory);
        //.log("Section 1 Retrieved");
    }
   
    $scope.save = function () {
                                section4aFactory.save($scope.section4a);
                                $scope.saveToLocalStorage($scope.section4a);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4a) {
        localStorage.setItem('section4a', JSON.stringify(section4a));
        //.log("save");
    };
    
    $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
   
}]);