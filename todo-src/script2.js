var app = angular.module('app',[]);

app.controller('PhoneListCtrl', function($scope){
	$scope.phones = [
		{'name': 'Nexus S',
		'snippet': 'Fast just got faster with the Nexus S.'},
		{'name': 'Motorola XOOM\u2122 with Wi-Fi',
		'snippet': 'The Next, Next Generation tablet.'},
		{'name': 'MOTOROLA XOOM\u2122',
		'snippet': 'The Next, Next Generation tablet.'}
	];
	$scope.name = 'World!';
});


//describe('PhoneListCtrl', function(){
//
//	it('should create "phones" model with 3 phones', function() {
//		var scope = {},
//    		ctrl = new PhoneListCtrl(scope);
//
//		expect(scope.phones.length).toBe(3);
//	});
//
//});

