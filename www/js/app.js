// photoquiz
var photoquiz =  angular.module('photoquiz', ['ionic']);

photoquiz.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});

photoquiz.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Each tab has its own nav history stack:
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('guest', {
    url: '/guest',
    templateUrl: 'templates/guest.html',
    controller: 'guestCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
