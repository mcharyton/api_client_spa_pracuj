app.factory('builds', ['$http', function($http){
    return $http.get('')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);