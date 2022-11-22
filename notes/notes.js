// option 1 passing function handle 
setup = function () {
}
$(document).ready(setup)

// option 2 - passing function handle
function setup() {
}
$(document).ready(setup)


// option 3 - anonymous function
$(document).ready(function () { })

// option 4 - arrow function
$(document).ready(() => { })

// option 1 passing function handle 
setup = function () {
    console.log("setup");
    jQuery("#btn1").click(() => {
        console.log("clicked");
    });
}
$(document).ready(setup)

$(document).ready(function () {
    console.log("setup");

    $("#btn1").click(function () {
        console.log("clicked");
    })
})


function btn1_handler() {
    console.log(
        $("#p1").html()
    );
}

setup = function () {
    console.log("setup");
    jQuery("#btn1").click(btn1_handler);
}

$(document).ready(setup)

// css

setup = function () {
    console.log(
        $("#it2").css("background-color") // GETTER
    )
    // $("#it2").css("background-color", "grey") // SETTER

    $("#it2").css(
        {
            "background-color": "grey",
            "color": "white"
        }
    ) // SETTER
}

$(document).ready(setup)