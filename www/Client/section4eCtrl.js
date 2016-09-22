whoAPP.controller('section4eCtrl', ['$scope','$rootScope', 'section4eFactory','toaster',function($scope,$rootScope, section4eFactory,toaster) {
    
    $scope.section = { previous:'#/section4d', next: '#/section4f'};   
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4e");
            if(data == null || data == undefined)
            {
                return true;
                
            }
            else
            {
                return false;
            }
    };
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section4e = section4eFactory;
    }
    else
    {
        $scope.section4e = JSON.parse(localStorage.getItem("section4e"));
    }
    
$scope.pop = function(){
      toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines                   are present. When this is not possible,\nplease consult with BHW or midwife.");
                        };
    
    
    $scope.save = function () {
                                section4eFactory.save($scope.section4e);
                                $scope.saveToLocalStorage($scope.section4e);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4e) {
        localStorage.setItem('section4e', JSON.stringify(section4e));
        //.log("save");
    };
    
    
  $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);