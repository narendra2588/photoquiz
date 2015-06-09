photoquiz.factory('AuthService', function($http, Session, SERVER_CREDENTIAL) {
  var authService = {};
  authService.login = function (credentials) {
    return $http.post(SERVER_CREDENTIAL.url+':'+SERVER_CREDENTIAL.port+'/account/login.json',
      credentials, SERVER_CREDENTIAL.header).success(function(response) {       
        Session.api_key = response.api_token;
        Session.uid = response.uid; 
        Session.pid = response.profile.pid;
        return response;
      });
  };
  return authService;
});
