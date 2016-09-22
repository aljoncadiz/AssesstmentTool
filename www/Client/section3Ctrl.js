whoAPP.controller('section3Ctrl', ['$scope','$rootScope', 'section3Factory',function($scope,$rootScope, section3Factory) {

     $scope.section = { previous:'#/section2', next: '#/section4'};
    
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section3");
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
        $scope.section3 = section3Factory;
        //.log("empty");
    }
    else
    {
        $scope.section3 = JSON.parse(localStorage.getItem("section3"));
        //.log(section3Factory);
        //.log("Section 1 Retrieved");
    }

    
    $scope.save = function () {
                                section3Factory.save($scope.section3);
                                $scope.saveToLocalStorage($scope.section3);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section3) {
        localStorage.setItem('section3', JSON.stringify(section3));
        //.log("save");
    };
    
}]);