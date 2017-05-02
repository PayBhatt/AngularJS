(function () {
  'use strict';

	angular.module('ShoppingListChecker', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	// controller ToBuyController
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		// body...
		var toBuy = this;

		toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
		 toBuy.itemBought = function (name, quantity, itemIndex){
		 	// body...
		 	ShoppingListCheckOffService.itemBought(name, quantity, itemIndex);
		 }
	}

	// controller AlreadyBoughtController
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		// body...
		var bought = this;

		bought.alreadyBoughtList = ShoppingListCheckOffService.getBoughtList();
	}

	// ShoppingListCheckOffService service 
	function ShoppingListCheckOffService() {
	 	// body...
	 	var service = this;

	 	var toBuyList = [
		 {
		 	name:"cookies",
		 	quantity: "10"
		 },
		 {
			name: "Pizzas",
			quantity: "5"
		},
		{
			name: "Burgers",
			quantity: "5"
		},
		{
			name: "Milkshakes",
			quantity: "6"
		},
		{
			name: "Avocados",
			quantity: "3"
		}
		 ];

	 	var boughtList = [];

	 	service.itemBought = function (itemName, itemQuantity, index){
	 		var item = {
	 		name: itemName,
	 		quantity: itemQuantity
	 		};
	 		boughtList.push(item);
	 		toBuyList.splice(index, 1);
	 	};

	 	service.getBoughtList = function (){
	 		return boughtList;
	 	};

	 	service.getToBuyList = function (){
	 		return toBuyList;
	 	};
	 } 
})();
