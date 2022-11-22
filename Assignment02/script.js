


// GLOBAL VARIABLES
var PAGE_SIZE;
var CURRENT_PAGE = 1;
var MOVIE_PAGES;


display_page = () => {
    $("#searchResult").html("");
    $("#num_btn").empty();
    let search = $("#searchTerm").val();
    $.ajax(
        {
            // the x at the end of the url needs to be replaced with the page number from the query
            url: `https://api.themoviedb.org/3/search/movie?api_key=783a4fda42e8a87a22631b88fac07624&language=en-US&page=1&include_adult=false&query=${search}`,
            type: "GET",
            success: function (data) {
                let start_index = Number(PAGE_SIZE) * Number((CURRENT_PAGE - 1));
                let end_index = Number(PAGE_SIZE) * Number((CURRENT_PAGE - 1)) + Number(PAGE_SIZE);
                MOVIE_PAGES = data.results.length / PAGE_SIZE;
                console.log(start_index)
                console.log(end_index)
                for (i = 0; i < MOVIE_PAGES; i++) {
                    $("#num_btn").append(
                        `
                        <button class = "page_numbers">
                        ${i + 1}
                        </button>
                        `
                    )
                }
                for (i = start_index; i < end_index; i++) {
                    $("#searchResult").append(
                        `
                            <div>
                            ${data.results[i].title}
                            <p>
                                ${data.results[i].overview}
                            </p>
                            <img 
                                src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
                                style="width: 100%"
                            >
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
}

setup = function () {
    PAGE_SIZE = $("#pageSizeMenu option:selected").val();

    $("#search_btn").click(() => {
        display_page()
    })

    $("#pageSizeMenu").change(() => {
        // PAGE_SIZE = $("#pageSizeMenu").val();
        PAGE_SIZE = $("#pageSizeMenu option:selected").val();
        display_page();
    })


    $("#num_btn").on("click", ".page_numbers", function () {
        CURRENT_PAGE = $(this).text()
        $("#first_btn").css("display", "inline")
        $("#prev_btn").css("display", "inline")
        $("#num_btn").css("display", "inline")
        $("#next_btn").css("display", "inline")
        $("#last_btn").css("display", "inline")
        display_page();

    })

    $("#pagination_div").on("click", "#prev_btn", function () {
        CURRENT_PAGE = Number(CURRENT_PAGE) - 1
        if (CURRENT_PAGE <= 0) {
            CURRENT_PAGE = Number(CURRENT_PAGE) + 1
        }
        display_page()
    })

    $("#pagination_div").on("click", "#next_btn", function () {
        CURRENT_PAGE = Number(CURRENT_PAGE) + 1
        display_page()
        if (CURRENT_PAGE >= MOVIE_PAGES) {
            CURRENT_PAGE = Number(CURRENT_PAGE) - 1
        }
    })


    $("body").on("click", ".backdropBtn", function () {
        console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
        $("aside").html(
            `
        <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
      `
        )
    })
}

$(document).ready(setup)