var receivedArray = []



function createTable(data) {
    result = "";
    result = "<table>"

    //get all the keys in a database using map function
    result += `<tr>`
    let keys = []
    for (let i = 0; i < data.length; i++) {

        let currentKeys = Object.keys(data[i])

        for (let j = 0; j < currentKeys.length; j++) {
            if (!keys.includes(currentKeys[j]))
                keys.push(currentKeys[j])
        }
    }
    for (let k = 0; k < keys.length; k++) {
        result += `<th>${keys[k]}</th>`

    }
    result += `</tr>`



    // for table headers and vaccination status
    // .map is used to loop through the array
    data.map((aUnicorn) => {

        if (aUnicorn["vaccinated"] == true)
            result += `<tr class="red">`
        else
            result += `<tr class="">`
        // console.log(keys)
        //of gives the value of the array and in gives the index (for an object the keys)
        for (var field of keys) {
            result += `<td>${aUnicorn[field]}</td>`
        }
        result += `</tr>`
    })
    result += "</table>"

    $("#result").html(result);
    // $("#result").html(JSON.stringify(data));
    // $("#result").html(JSON.stringify(receivedArray, undefined, 2));
}
//================================================================================================



function setup() {
    $("#getByNameBtn").click(function () {
        $.ajax({
            url: "http://localhost:5000/getUnicornByNameRoute",
            type: "POST",
            data: { unicornNameInHTTPBody: $("#unicornNameInHTML").val() },
            success: function (data) {
                receivedArray = data;
                createTable(data)
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
                createTable(data)
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
                createTable(data)
            }
        });
    })



    //functions that filters the results by name or weight
    $(".filterBoth").change(function () {
        if ($("#nameFilter").prop("checked") && $("#weightFilter").prop("checked")) {
            console.log("both");
            const both = receivedArray.map((item) => {
                return { name: item.name, weight: item.weight };
            })
            createTable(both)
        }
        else if ($("#nameFilter").prop("checked")) {
            const nameField = receivedArray.map((item) => {
                return { name: item.name };
            })
            createTable(nameField)
        }
        else if ($("#weightFilter").prop("checked")) {
            const weightField = receivedArray.map((item) => {
                return { weight: item.weight };
            })
            createTable(weightField)
        }
        else {
            console.log("else");
            createTable(receivedArray)
        }
    })
}


$(document).ready(setup)
