/**
 * Created by rajeevan.vazhakolil on 4/23/2016.
 */
var deals=angular.module('dealsModule', [   ])

deals.service('dealsToday',[function(){

    var dealService=this;
    this.getDealsToday=function(input){


      var data=[{
          'imgSrc':'tempImages/shirt.jpg',
          'name':'Logo Shirt (Gray)',
          'price':'20.5'
      },{
          'imgSrc':'tempImages/shirt1.jpg',
          'name':'white Shirt (Gray)',
          'price':'20.5'
      },{
          'imgSrc':'tempImages/shirt.jpg',
          'name':'Logo Shirt (Gray)',
          'price':'20.5'
      }
      ,{
              'imgSrc':'tempImages/shirt.jpg',
              'name':'Logo Shirt (Gray)',
              'price':'20.5'
          },{
              'imgSrc':'tempImages/shirt.jpg',
              'name':'Logo Shirt (Gray)',
              'price':'20.5'
          },{
              'imgSrc':'tempImages/shirt.jpg',
              'name':'Logo Shirt (Gray)',
              'price':'20.5'
          },{
              'imgSrc':'tempImages/shirt.jpg',
              'name':'Logo Shirt (Gray)',
              'price':'20.5'
         } ]


        return data;
    }


}])