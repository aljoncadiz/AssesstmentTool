whoAPP.controller('section2Ctrl', ['$scope','$rootScope', 'section2Factory',function($scope,$rootScope, section2Factory) {

    $scope.section = { previous:'#/section1', next: '#/section3'};
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section2");
            if(data == null || data == undefined)
            {
               // //.log("section 2 not existing");
                return true;
                
            }
            else
            {
               ////.log("section 2 existing");
                return false;
            }
    };
    
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section2 = section2Factory;
       // //.log("empty");
    }
    else
    {
        $scope.section2 = JSON.parse(localStorage.getItem("section2"));
        ////.log(section2Factory);
       // //.log("Section 2 Retrieved");
    }

    
    $scope.save = function () {
                                section2Factory.save($scope.section2);
                                $scope.saveToLocalStorage($scope.section2);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section2) {
        localStorage.setItem('section2', JSON.stringify(section2));
        ////.log("save");
    };
    
}]);