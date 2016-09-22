whoAPP.controller('section4hCtrl', ['$scope','$rootScope', 'section4hFactory','toaster',function($scope,$rootScope, section4hFactory,toaster) {

     $scope.section = { previous:'#/section4g', next: '#/section5'};
    
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4h");
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
        $scope.section4h = section4hFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4h = JSON.parse(localStorage.getItem("section4h"));
        //.log(section4hFactory);
        //.log("Section 2 Retrieved");
    }
    
$scope.pop = function(){
    toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife.");
};
    
    $scope.save = function () {
                                section4hFactory.save($scope.section4h);
                                $scope.saveToLocalStorage($scope.section4h);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4h) {
        localStorage.setItem('section4h', JSON.stringify(section4h));
        //.log("save");
    };
    
    $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);