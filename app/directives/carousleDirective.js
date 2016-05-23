/**
 * Created by rajeevan.vazhakolil on 4/24/2016.
 * This is a test for directives
 */
var carouselApp= angular.module('carosuelDirectiveModule',['carouselDataServiceModule'])

carouselApp.directive('carouselTag',['carouselDataService','$timeout',function(carouselDataService,$timeout){

    return{

        restrict:'E',
        templateUrl:'views/carousleTemplate.html',
        link:function($scope,element,attr){
         //   $scope.data=carouselDataService.getTodaysFruitDeals();


          //  element.carousel({interval: false});

       /*     element.bind('click', function() {

              //  var src = elem.find('img').attr('src');
alert("dfsd");
                // call your SmoothZoom here
            //    angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
            });
*/

           /* $timeout(function() {
                angular.element('.carousel[data-type="multi"] .item').each(function(){
                    var next = $(this).next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));

                    for (var i=0;i<2;i++) {
                        next=next.next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }

                        next.children(':first-child').clone().appendTo($(this));
                    }
                });
            });
*/

            $timeout(setCarousleMulti());
        },
        controller: function($scope, $element){
           $element.carousel({interval: false});



            $scope.prev=function()
            {

                $element.carousel("prev");
            }

            $scope.next=function()
            {

                $element.carousel("next");
            }
        }

    }


}])



function setCarousleMulti()
{
    angular.element('.carousel[data-type="multi"] .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
}