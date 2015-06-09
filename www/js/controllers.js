photoquiz.controller('mainCtrl', function($scope) {

});

photoquiz.controller('loginCtrl', function($scope) {
  $scope.user ={}
  $scope.errormsg = '';
  $scope.doLogin = function(formName){
    $scope.errormsg = '';
    if(formName.$valid){
      alert(JSON.stringify($scope.user));
      
    }else{
     $scope.errormsg = 'Invalid user name or password';
      //alert(JSON.stringify(formName));
    }
  };
});

photoquiz.controller('guestCtrl', function($scope) {
  $scope.guest ={};
  $scope.errormsg = '';
  $scope.doGuestLogin = function(formName){
    $scope.errormsg = '';
    if(formName.$valid){
      alert(JSON.stringify($scope.guest));
      
    }else{
     $scope.errormsg = 'error in guest login';
      //alert(JSON.stringify(formName));
    }
  };
});