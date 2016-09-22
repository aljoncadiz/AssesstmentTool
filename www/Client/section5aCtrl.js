whoAPP.controller('section5aCtrl', ['$scope','$rootScope', 'section5aFactory',function($scope,$rootScope, section5aFactory) {

    $scope.section = { previous:'#/section4h', next: '#/section5b'};
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section5a");
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
        $scope.section5a = section5aFactory;
        //.log("empty");
    }
    else
    {
        $scope.section5a = JSON.parse(localStorage.getItem("section5a"));
        //.log(section5aFactory);
        //.log("Section 2 Retrieved");
    }

    
    $scope.save = function () {
                                section5aFactory.save($scope.section5a);
                                $scope.saveToLocalStorage($scope.section5a);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section5a) {
        localStorage.setItem('section5a', JSON.stringify(section5a));
        //.log("save");
    };
    
}]); 