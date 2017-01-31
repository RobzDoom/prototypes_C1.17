//Create GLOBAL variable below here on line 2


$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;

                var arrivalMovie = console.log(global_result.feed.entry[0]);
                var arrivalMovieThirdImage = console.log(global_result.feed.entry[0]['im:image'][2].label);
            }
        });
        console.log('End of click function');
    });
});

var global_result =  null;

// var arrivalMovie = console.log(global_result.feed.entry[0]);
//
// var arrivalMovieThirdImage = console.log(global_result.feed.entry[0]['im:image'][2].label);





