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

                var arrivalMovie = global_result.feed.entry[0];
                var arrivalMovieThirdImage = global_result.feed.entry[0]['im:image'][2].label;

                console.log(arrivalMovie);
                console.log(arrivalMovieThirdImage);

                var threeImages = [];
                var moviesInformation = [];
                for (var i = 0; i <global_result.feed.entry.length; i++){ ///Loop through movies.
                    threeImages[i] = global_result.feed.entry[i]['im:image'][2].label; // Find the THIRD img from each movie.
                    var images = $('<img>').attr('src', threeImages[i]); //Make var create image with src and threeImages[i]
                    $('#main').append(images); //Append var images to id main in HTML

                    moviesInformation[i] = global_result.feed.entry[i].title.label;
                    var movieTitle = $('<h1>').text(moviesInformation[i]);
                    $('#main').append(movieTitle);
                }
            }
        });
        console.log('End of click function');
    });
});

var global_result =  null;



