whoAPP.controller('section4dCtrl', ['$scope','$rootScope', 'section4dFactory','toaster',function($scope,$rootScope, section4dFactory,toaster) {

     $scope.section = { previous:'#/section4c', next: '#/section4e'};
      
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4d");
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
    
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section4d = section4dFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4d = JSON.parse(localStorage.getItem("section4d"));
        //.log(section4dFactory);
        //.log("Section 2 Retrieved");
    }
$scope.pop = function(){
      toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
};
    
    $scope.save = function () {
                                section4dFactory.save($scope.section4d);
                                $scope.saveToLocalStorage($scope.section4d);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4d) {
        localStorage.setItem('section4d', JSON.stringify(section4d));
        //.log("save");
    };
    
      $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
}]);