whoAPP.controller('section5bCtrl', ['$scope','$rootScope', 'section5bFactory',function($scope,$rootScope, section5bFactory) {

     $scope.section = { previous:'#/section5', next: '#/section6'};
    
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section5b");
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
        $scope.section5b = section5bFactory;
        //.log("empty");
    }
    else
    {
        $scope.section5b = JSON.parse(localStorage.getItem("section5b"));
        //.log(section5bFactory);
        //.log("Section 2 Retrieved");
    }

    
    $scope.save = function () {
                                section5bFactory.save($scope.section5b);
                                $scope.saveToLocalStorage($scope.section5b);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section5b) {
        localStorage.setItem('section5b', JSON.stringify(section5b));
        //.log("save");
    };
    
}]);