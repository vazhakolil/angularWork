
var carouselServiceModule=angular.module('carouselDataServiceModule',[])
carouselServiceModule.service('carouselDataService',function(){
     var carouselDataService=this;

    carouselDataService.getTodaysFruitDeals= function()
    {
      var fruits=[{
          'imgSrc':'tempImages/currant.jpg',
          'name':'currant',
          'price':'20.5'
          },{
          'imgSrc':'tempImages/mango.jpg',
          'name':'mango',
          'price':'20.5'
          },{
          'imgSrc':'tempImages/banana.jpg',
          'name':'banana',
          'price':'20.5'
          }
          ,{
          'imgSrc':'tempImages/strawberries.jpg',
          'name':'strawberries',
          'price':'20.5'
          }]

    return fruits;
    }
});



