whoAPP.controller('section4fCtrl', ['$scope','$rootScope', 'section4fFactory','toaster',function($scope,$rootScope, section4fFactory,toaster) {

     $scope.section = { previous:'#/section4e', next: '#/section4g'}; 
   
    
    $scope.isLocalStorageEmpty = function () {
            var data = localStorage.getItem("section4f");
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
        $scope.section4f = section4fFactory;
        //.log("empty");
    }
    else
    {
        $scope.section4f = JSON.parse(localStorage.getItem("section4f"));
        //.log(section4fFactory);
        //.log("Section 2 Retrieved");
    }

    $scope.pop = function(){ 
        toaster.pop('Note', "*", "Please verify yourself whether these supplies, equipment, \nand medicines are present. When this is not possible,\nplease consult with BHW or midwife."); 
        };
    
    $scope.save = function () {
                                section4fFactory.save($scope.section4f);
                                $scope.saveToLocalStorage($scope.section4f);
                             };
    
    
    $scope.show = function () {
    $rootScope.$broadcast("showDiv");
    };
    
        
    $scope.saveToLocalStorage = function (section4f) {
        localStorage.setItem('section4f', JSON.stringify(section4f));
        //.log("save");
    };
    
      $scope.clear = function(){
        toaster.clear();
    };
    
    $scope.$watch('$viewContentLoaded', function(){
     $scope.pop();
    });
    
}]);