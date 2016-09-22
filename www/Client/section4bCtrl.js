whoAPP.controller('section4bCtrl', ['$scope','$rootScope', 'section4bFactory','toaster',function($scope,$rootScope, section4bFactory,toaster) {

     $scope.section = { previous:'#/section4', next: '#/section4c'};
     
$scope.pop = function(){
    toaster.pop('Success', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
   };
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4b");
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
        $scope.section4b = section4bFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4b = JSON.parse(localStorage.getItem("section4b"));
        //.log(section4bFactory);
        //.log("Section 1 Retrieved");
    }

  
    
    $scope.save = function () {
                                section4bFactory.save($scope.section4b);
                                $scope.saveToLocalStorage($scope.section4b);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4b) {
        localStorage.setItem('section4b', JSON.stringify(section4b));
        //.log("save");
    };
    
    $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);