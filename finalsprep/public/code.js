receivedArray = []

function setup() {
    $("#getByNameBtn").click(function () {
        $.ajax({
            url: "http://localhost:5000/getUnicornByNameRoute",
            type: "POST",
            data: { unicornNameInHTTPBody: $("#unicornNameInHTML").val() },
            success: function (data) {
                // console.log("data", data);
                receivedArray = data;
                result = "";
                result = "<table>"
                //get all the keys in a database using map function
                result += `<tr>`
                let keys = []
                for (let i = 0; i < data.length; i++) {
                    let currentKeys = Object.keys(data[i])
                    // console.log("currentKeys", currentKeys);
                    for (let j = 0; j < currentKeys.length; j++) {
                        if (!keys.includes(currentKeys[j]))
                            keys.push(currentKeys[j])
                    }
                }
                for (let k = 0; k < keys.length; k++) {
                    result += `<th>${keys[k]}</th>`

                }
                result += `</tr>`

                data.map((aUnicorn) => {
                    // console.log("aUnicorn", aUnicorn);
                    if (aUnicorn["vaccinated"] == true)
                        result += `<tr class="red">`
                    else
                        result += `<tr class="">`

                    for (var field in aUnicorn) {
                        result += `<td>${aUnicorn[field]}</td>`
                    }
                    result += `</tr>`
                })
                result += "</table>"

                // $("#result").html(JSON.stringify(data));
                $("#result").html(result);
                // $("#result").html(JSON.stringify(receivedArray, undefined, 2));
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
                receivedArray = data;
                result = "";
                result = "<table>"
                //get all the keys in a database using map function
                result += `<tr>`
                let keys = []
                for (let i = 0; i < data.length; i++) {
                    let currentKeys = Object.keys(data[i])
                    // console.log("currentKeys", currentKeys);
                    for (let j = 0; j < currentKeys.length; j++) {
                        if (!keys.includes(currentKeys[j]))
                            keys.push(currentKeys[j])
                    }
                }
                for (let k = 0; k < keys.length; k++) {
                    result += `<th>${keys[k]}</th>`

                }
                result += `</tr>`

                data.map((aUnicorn) => {

                    if (aUnicorn["vaccinated"] == true)
                        result += `<tr class="red">`
                    else
                        result += `<tr class="">`

                    for (var field in aUnicorn) {
                        result += `<td>${aUnicorn[field]}</td>`
                    }
                    result += `</tr>`
                })
                result += "</table>"

                // $("#result").html(JSON.stringify(data));
                $("#result").html(result);
                // $("#result").html(JSON.stringify(receivedArray, undefined, 2));
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
                // console.log("data", data);
                receivedArray = data;
                result = "";
                result = "<table>"
                //get all the keys in a database using map function
                result += `<tr>`
                let keys = []
                for (let i = 0; i < data.length; i++) {
                    let currentKeys = Object.keys(data[i])
                    // console.log("currentKeys", currentKeys);
                    for (let j = 0; j < currentKeys.length; j++) {
                        if (!keys.includes(currentKeys[j]))
                            keys.push(currentKeys[j])
                    }
                }
                for (let k = 0; k < keys.length; k++) {
                    result += `<th>${keys[k]}</th>`

                }
                result += `</tr>`

                data.map((aUnicorn) => {
                    // console.log("aUnicorn", aUnicorn);
                    if (aUnicorn["vaccinated"] == true)
                        result += `<tr class="red">`
                    else
                        result += `<tr class="">`

                    for (var field in aUnicorn) {
                        result += `<td>${aUnicorn[field]}</td>`
                    }
                    result += `</tr>`
                })
                result += "</table>"

                // $("#result").html(JSON.stringify(data));
                $("#result").html(result);
                // $("#result").html(JSON.stringify(receivedArray, undefined, 2));
            }
        });
    })


    //functions that filters the results by name or weight
    $(".filterBoth").change(function () {
        if ($("#nameFilter").prop("checked") && $("#weightFilter").prop("checked")) {
            let name = receivedArray.name;
            let weight = receivedArray.weight;
            console.log(receivedArray);
            result = "";
            result = "<table>"
            //get all the keys in a database using map function
            result += `<tr>`
            result += `<th>Name</th>`
            result += `<th>Weight</th>`
            result += `</tr>`
            // console.log(name);
            // console.log(weight);
            for (let i = 0; i < name.length; i++) {
                result += `<tr>`
                result += `<td>${name[i]}</td>`
                result += `<td>${weight[i]}</td>`
                result += `</tr>`
            }
            result += "</table>"

            $("#result").html(result);

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
