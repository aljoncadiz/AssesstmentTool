whoAPP.controller('section4cCtrl', ['$scope','$rootScope', 'section4cFactory','toaster',function($scope,$rootScope, section4cFactory,toaster) {
     $scope.section = { previous:'#/section4b', next: '#/section4d'};                               
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4c");
            if(data == null || data == undefined)
            {
                //.log("section 2 not existing");
                return true;
                
            }
            else
            {
                //.log("section 2 existing");
                return false;
            }
    };
    $scope.pop = function()
    {
      toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
    };
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section4c = section4cFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4c = JSON.parse(localStorage.getItem("section4c"));
        //.log(section4cFactory);
        //.log("Section 2 Retrieved");
    }

    
    $scope.save = function () {
                                section4cFactory.save($scope.section4c);
                                $scope.saveToLocalStorage($scope.section4c);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4c) {
        localStorage.setItem('section4c', JSON.stringify(section4c));
        //.log("save");
    };
    
      $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);