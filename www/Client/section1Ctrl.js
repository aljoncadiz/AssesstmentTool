whoAPP.controller('section1Ctrl', ['$scope','$rootScope', 'section1Factory','toaster',function($scope,$rootScope, section1Factory,toaster) {
    
    $scope.section = { previous:'/', next:'#/section2',displayPrev:'none',displayNext:'block'};

    $scope.facility = {};
    
    $scope.setFacility = function(){
        
    };
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section1");
            if(data == null || data == undefined)
            {
                ////.log("section 1 not existing");
                return true;
                
            }
            else
            {
               // //.log("section 1 existing");
                return false;
            }
    };
    
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section1 = section1Factory;
        //.log("empty");
    }
    else
    {
        $scope.section1 = JSON.parse(localStorage.getItem("section1"));
        //.log(section1Factory);
        //.log("Section 1 Retrieved");
    }

    
    $scope.save = function () {
                                section1Factory.save($scope.section1);
                                $scope.saveToLocalStorage($scope.section1);
                                console.log("section 1 saved");
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
    $scope.bindFacilityCode= function () {
    $rootScope.$broadcast("bindFacilityCode");
    };
    
    $scope.getFacility = function($scope,Facility){
        var name = Facility.getProperty();
        console.log(name);
    };
    
        
    $scope.saveToLocalStorage = function (section1) {
        localStorage.setItem('section1', JSON.stringify(section1));
        //.log("save");
    };
    

    
}]);