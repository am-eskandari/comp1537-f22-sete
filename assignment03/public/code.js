receivedArray = []

function setup() {
    $("#getByNameBtn").click(function () {
        $.ajax({
            url: "http://localhost:5000/getUnicornByNameRoute",
            type: "POST",
            data: { unicornNameInHTTPBody: $("#unicornNameInHTML").val() },
            success: function (data) {
                console.log("data", data);
                receivedArray = data;
                // result = "";
                // result = "<table>"
                // data.map((aUnicorn) => {
                //     console.log("aUnicorn", aUnicorn);
                //     if (aUnicorn["vaccinated"] == true)
                //         result += `<tr class="red">`
                //     else
                //         result += `<tr class="">`

                //     for (var field in aUnicorn) {
                //         result += `<td>${aUnicorn[field]}</td>`
                //     }
                //     result += `</tr>`
                // })
                // result += "</table>"

                // $("#result").html(JSON.stringify(data));
                // $("#result").html(result);
                $("#result").html(JSON.stringify(receivedArray, undefined, 2));
            }
        });
    })

    $("#getByWeightBtn").click(function () {
        $.ajax({
            url: "http://localhost:5000/getUnicornByWeightRoute",
            type: "POST",
            data: {
                minWeightInHTTPBody: $("#minWeightInHTML").val(),
                maxWeightInHTTPBody: $("#maxWeightInHTML").val()
            },
            success: function (data) {
                console.log("data", data);
                receivedArray = data;
                // result = "";
                // result = "<table>"
                // data.map((aUnicorn) => {
                //     console.log("aUnicorn", aUnicorn);
                //     if (aUnicorn["vaccinated"] == true)
                //         result += `<tr class="red">`
                //     else
                //         result += `<tr class="">`

                //     for (var field in aUnicorn) {
                //         result += `<td>${aUnicorn[field]}</td>`
                //     }
                //     result += `</tr>`
                // })
                // result += "</table>"

                // $("#result").html(JSON.stringify(data));
                // $("#result").html(result);
                $("#result").html(JSON.stringify(receivedArray, undefined, 2));
            }
        });
    })

    // get all the unicorns based on food filter
    $("#getByFavFoodBtn").click(function () {
        let foods = []
        if ($("#appleFilter").prop("checked"))
            foods.push("apple")
        if ($("#carrotFilter").prop("checked"))
            foods.push("carrot")
        $.ajax({
            url: "http://localhost:5000/getUnicornByFavFoodRoute",
            type: "POST",
            data: {
                foodInHTTPBody: foods
            },
            success: function (data) {
                console.log("data", data);
                receivedArray = data;
                // result = "";
                // result = "<table>"
                // data.map((aUnicorn) => {
                //     console.log("aUnicorn", aUnicorn);
                //     if (aUnicorn["vaccinated"] == true)
                //         result += `<tr class="red">`
                //     else
                //         result += `<tr class="">`

                //     for (var field in aUnicorn) {
                //         result += `<td>${aUnicorn[field]}</td>`
                //     }
                //     result += `</tr>`
                // })
                // result += "</table>"

                // $("#result").html(JSON.stringify(data));
                // $("#result").html(result);
                $("#result").html(JSON.stringify(receivedArray, undefined, 2));
            }
        });
    })


    //functions that filters the results by name or weight
    $(".filterBoth").change(function () {
        if ($("#nameFilter").prop("checked") && $("#weightFilter").prop("checked")) {
            anotherArray = receivedArray.map((item) => {
                return [item.name, item.weight];
            })
            $("#result").html(JSON.stringify(anotherArray, undefined, 2));

        }
        else if ($("#nameFilter").prop("checked")) {
            anotherArray = receivedArray.map((item) => {
                return item.name;
            })
            $("#result").html(JSON.stringify(anotherArray, undefined, 2));
        }
        else if ($("#weightFilter").prop("checked")) {
            anotherArray = receivedArray.map((item) => {
                return item.weight;
            })
            $("#result").html(JSON.stringify(anotherArray, undefined, 2));
        }
        else {
            anotherArray = receivedArray.map((item) => {
                return item;
            })
            $("#result").html(JSON.stringify(anotherArray, undefined, 2));

        }
    })
}


$(document).ready(setup)
