var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this

    //Create a variable to hold your api key but set it to an empty string
    self.api_key = "";
    //Create a variable to hold the API url but set it to an empty string
    self.api_url = "";
    //Add the necessary services to the function parameter list
    this.$get = function($http, $log, $q){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function(){
                var dataToApi = "api_key=" + self.api_key;
                var defer = $q.defer();
                $http({
                    url: api_url,
                    method: 'post',
                    data: dataToApi,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(
                    function (response) {
                        defer.resolve(response);
                        $log.log("This call worked!", response);
                    },
                    function (response) {
                        defer.reject("Error within the call");
                        $log.log('This is an error message', response);
                    }
                );
                return defer.promise;
            }
        }
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    api_key = 'wmQ18F1wpq',
    api_url = 'http://s-apis.learningfuze.com/sgt/get'
});


//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(){
    //Create a variable to hold this, DO NOT use the same name you used in your provider

    //Add an empty data object to your controller, make sure to call it 'data'


    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help

});