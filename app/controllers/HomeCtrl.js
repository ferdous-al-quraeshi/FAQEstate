//Home Controller starts with this wrapper function:
(function(){
	var HomeCtrl = function($scope){
		$scope.logoTxt = 'FAQ Real Estate Ltd.';
		
		// Iterative Main Navigation Items 
		$scope.mainNavItems =[
		{
			name:'Home',
			link:'',
			cssClass:'active',
			submenu:null
		},
		{
			name:'About',
			link:'',
			cssClass:'active',
			submenu:null
		},
		{
			name:'Projects',
			link:'',
			cssClass:'active',
			submenu:[
			{
				name:'Ongoing',
				link:''
			},
			{
				name:'Upcoming',
				link:''
			},
			{
				name:'Completed',
				link:''
			}]
		},
		{
			name:'Gallery',
			link:'',
			cssClass:'active',
			submenu:null
		},
		{
			name:'News',
			link:'',
			cssClass:'active',
			submenu:null
		}];
		
// Show/Hide submenu items
		// $scope.hoverIn = function(){
		// 	$scope.hoverEdit = true;
		// };

		// $scope.hoverOut = function(){
	 	// $scope.hoverEdit = false;
		// };

// Footer elements:
	$scope.footerTextCopy = 'FAQuraeshi | All Rights Reserved';
	};

// Invoking the Home Controller:
	angular.module('RealEstateApp')
	.controller('HomeCtrl', ['$scope', HomeCtrl]);
}());