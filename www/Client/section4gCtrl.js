whoAPP.controller('section4gCtrl', ['$scope','$rootScope', 'section4gFactory','toaster',function($scope,$rootScope, section4gFactory,toaster) {

     $scope.section = { previous:'#/section4f', next: '#/section4h'};
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4g");
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
        $scope.section4g = section4gFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4g = JSON.parse(localStorage.getItem("section4g"));
        //.log(section4gFactory);
        //.log("Section 2 Retrieved");
    }
    
    $scope.pop = function(){
  toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
    };
    
    $scope.save = function () {
                                section4gFactory.save($scope.section4g);
                                $scope.saveToLocalStorage($scope.section4g);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4g) {
        localStorage.setItem('section4g', JSON.stringify(section4g));
        //.log("save");
    };
    
      $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
}]);