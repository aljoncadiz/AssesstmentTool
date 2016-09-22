whoAPP.controller('section6aCtrl', ['$scope','$rootScope', 'section6aFactory','toaster',function($scope,$rootScope, section6aFactory,toaster) {

     $scope.section = { previous:'#/section5b', next: '#/section6b'};
     
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section6a");
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
        $scope.section6a = section6aFactory;
        //.log("empty");
    }
    else
    {
        $scope.section6a = JSON.parse(localStorage.getItem("section6a"));
        //.log(section6aFactory);
        //.log("Section 2 Retrieved");
    }

    $scope.pop = function(){
    toaster.pop('Note', "**", "FYI, These are consultations done by midwife herself.\nThis excludes data from mobile medical teams and other composite teams who conducted mobile medical clinics");
    toaster.pop('Note', "*", "Please refer to the midwife's CONSULTATION LOG BOOK");
    };
    
    
    $scope.save = function () {
                                section6aFactory.save($scope.section6a);
                                $scope.saveToLocalStorage($scope.section6a);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section6a) {
        localStorage.setItem('section6a', JSON.stringify(section6a));
        //.log("save");
    };
    
    $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);