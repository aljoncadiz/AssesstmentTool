whoAPP.controller('section6bCtrl', ['$scope','$rootScope', 'section6bFactory','toaster',function($scope,$rootScope, section6bFactory,toaster) {
    
    $scope.section = { previous:'#/section6', next: '/',displayPrev:'block',displayNext:'none'};
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section6b");
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
    
    $scope.pop = function(){
    toaster.pop('Note', "**", "FYI, These are consultations done by midwife herself.\nThis excludes data from mobile medical teams and other composite teams who conducted mobile medical clinics");
     toaster.pop('Note', "*", "Please refer to the midwife's CONSULTATION LOG BOOK");
    
};
    
    if($scope.isLocalStorageEmpty())
    {
        $scope.section6b = section6bFactory;
        //.log("empty");
    }
    else
    {
        $scope.section6b = JSON.parse(localStorage.getItem("section6b"));
        //.log(section6bFactory);
        //.log("Section 2 Retrieved");
    }

    
    $scope.save = function () {
                                section6bFactory.save($scope.section6b);
                                $scope.saveToLocalStorage($scope.section6b);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section6b) {
        localStorage.setItem('section6b', JSON.stringify(section6b));
        //.log("save");
    };
    
    $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);