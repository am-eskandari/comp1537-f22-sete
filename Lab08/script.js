setup = function () {
    $.ajax(
        {
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=783a4fda42e8a87a22631b88fac07624&language=en-US&page=1",
            type: "GET",
            success: function (data) {
                for (i = 0; i < data.results.length; i++) {
                    $("main").append(
                        `
                            <div>
                            ${data.results[i].title}
                            <p>
                            ${data.results[i].overview}
                            </p>
                            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                            <button movieBackdropImageName="${data.results[i].backdrop_path}" class="backdropBtn"> BackDrop Image </button>
                            <hr>
                            </div>
                            `
                    )
                        ;
                }
            },
            error: function (error) {
                console.log(error);
            }
        }
    )

    $("body").on("click", ".backdropBtn", function () {
        console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
        $("aside").html(
            `
                <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
              `
        )
        console.log("clicked")
    })
}

$(document).ready(setup);