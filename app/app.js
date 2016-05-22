'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute','dealsModule','carosuelDirectiveModule'

])

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/",
  {
    templateUrl:'views/Deals.html',
     controller :'deals',
     controllerAs:'deals'



  });
   $routeProvider.when("/cupons",
        {
            templateUrl:'views/cupons.html',
            controller :'cupons',
            controllerAs:'cupons'



        });
    $routeProvider.when("/forms",
        {
            templateUrl:'views/forms.html',
            controller :'forms',
            controllerAs:'forms'



        });
    $routeProvider.when("/signIn",
        {
            templateUrl:'views/signIn.html',
            controller :'signIn',
            controllerAs:'signIn'



        });

}]);
app.controller('deals',['dealsToday',function(dealsToday){

    var ctr=this;

    ctr.text="deals page";
    ctr.dealsOfDayData=dealsToday.getDealsToday('test');
   ctr.addToCatr=function(itemSelected)
   {

       alert(itemSelected);
   }
}])

app.controller('cupons',['dealsToday',function(dealsToday){

    var ctr=this;

    ctr.text="deals page";
    //dealsToday.dealsOfDayData=dealsToday.getDealsToday('test');

}])
app.controller('forms',function(){

    var ctr=this;

    ctr.text="deals page"

})

app.controller('signIn',['$scope','loginHandler',function($scope,loginHandler){

    var ctr=this;

    ctr.text="deals page";

    $scope.modalShown = false;
    ctr.toggleModal = function() {
       // $scope.modalShown = !$scope.modalShown;
     //   $scope.modalShown=true;
        var myParams = {
            'clientid' : '549190158486-1ekun8kfa76tthcpmf6jq2g3j7kmni2n.apps.googleusercontent.com', //You need to set client id
            'cookiepolicy' : 'single_host_origin',
            'callback' : loginCallback, //callback function
            'approvalprompt':'force',
            'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);
      //  ctr.modalShown = !ctr.modalShown;
    };
   ctr.login=function(e)
   {
     alert(e);

   }

    var loginCallback= function(e)
    {
        alert(e);
    }
}])


app.controller('navigaotrController',['$location',function($location){

    var ctrl=this;

   ctrl.signIn=function(page)
   {
       console.log(" testing rediret "+page)

       $location.path(page);
   }

}])


app.controller('login',['$location',function($location){

    var ctrl=this;

    ctrl.signIn=function(page)
    {
        console.log(" testing rediret "+page)

        $location.path(page);
    }

}])

app.directive('loginModal1',[function(){

    var myvar = '\'<div modal="showModal" close="cancel()" >'+
        '     <div class="modal-header">'+
        '     <h4>Modal Dialog</h4>'+
        '    </div>'+
        '    <div class="modal-body">'+
        '        <p>Example paragraph with some text 123.</p>'+
        '    </div>'+
        '    <div class="modal-footer">'+
        '        <button class="btn btn-success" ng-click="ok()">Okay</button>'+
        '        <button class="btn" ng-click="cancel()">Cancel</button>'+
        '        </div>'+
        '        </div>sdfdsfdsfds';


    return{

     restrict:'E',
     templateUrl:'views/login.html'

 }

}


])

app.directive('loginModal', function() {
    return {
        restrict: 'E',
      /*  scope: {
            show: '='
        },*/
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            scope.showVariable=true;
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.showVariable = false;
            };
        },
        templateUrl:'views/login.html' // See below
    };
});


app.service('loginHandler',[function(){





}])


/*
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/
