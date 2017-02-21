var app = angular.module ("itunesApp", []);

app.controller('dataController', function ($http, $log) {
    var self = this;
    self.search = "";
    self.createURL = function () {
        var url = "https://itunes.apple.com/search?term="+self.search+"&callback=JSON_CALLBACK";
        return url;
    };
    self.getData = function(){
        $http({
            url: self.createURL(),
            method: "jsonp",
            cache: false

        })
            .then(
                function (response) {
                    self.data = response.data.results;
                    $log.log('It works!', response.data)

                },
                function(response){
                    self.data = response.data || "Failed to load";
                    $log.log('The call did not work')
                }

            )
    }
});

