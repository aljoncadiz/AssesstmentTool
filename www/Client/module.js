var whoAPP = angular.module('whoAPP',['ngResource','ngRoute','ngAnimate','toaster'])
                   

whoAPP.config(['$routeProvider',function($routeProvider){
    
     $routeProvider.when('/',{
        controller:'HomeCtrl',
    });
    
    $routeProvider.when('/facility',{
        templateUrl: 'Views/facilityPage.html',
        controller:'HomeCtrl'
    });
    
       
    $routeProvider.when('/section1',{
        controller:'section1Ctrl',
        templateUrl:'Views/section1.html'
    });
    $routeProvider.when('/section2',{
        controller:'section2Ctrl',
        templateUrl:'Views/section2.html'
    });

    $routeProvider.when('/section3',{
        controller:'section3Ctrl',
        templateUrl:'Views/section3.html'
    });
    
    $routeProvider.when('/section4',{
        controller:'section4aCtrl',
        templateUrl:'Views/section4a.html'
    });
    
    $routeProvider.when('/section4b',{
        controller:'section4bCtrl',
        templateUrl:'Views/section4b.html'
    });
    
    $routeProvider.when('/section4c',{
        controller:'section4cCtrl',
        templateUrl:'Views/section4c.html'
    });
    
    $routeProvider.when('/section4d',{
        controller:'section4dCtrl',
        templateUrl:'Views/section4d.html'
    });
    
    $routeProvider.when('/section4e',{
        controller:'section4eCtrl',
        templateUrl:'Views/section4e.html'
    });
    
    $routeProvider.when('/section4f',{
        controller:'section4fCtrl',
        templateUrl:'Views/section4f.html'
    });
    
    $routeProvider.when('/section4g',{
        controller:'section4gCtrl',
        templateUrl:'Views/section4g.html'
    });
    
    $routeProvider.when('/section4h',{
        controller:'section4hCtrl',
        templateUrl:'Views/section4h.html'
    });
    
    $routeProvider.when('/section5',{
        controller:'section5aCtrl',
        templateUrl:'Views/section5a.html'
    });
    
    $routeProvider.when('/section5b',{
        controller:'section5bCtrl',
        templateUrl:'Views/section5b.html'
    });
    
     $routeProvider.when('/section6',{
        controller:'section6aCtrl',
        templateUrl:'Views/section6a.html'
    });
    
    $routeProvider.when('/section6b',{
        controller:'section6bCtrl',
        templateUrl:'Views/section6b.html'
    });
    
    
    $routeProvider.otherwise({ redirectTo: "/" });
}]);