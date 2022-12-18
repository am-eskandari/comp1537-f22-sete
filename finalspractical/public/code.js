var receivedArray = []



function createTable(data) {
    console.log(data)
    result = "";
    result = "<ul>"

    //get all the keys in a database using map function
    result += `<li>`
    let keys = []
    // console.log(keys)

    for (let i = 0; i < data.length; i++) {

        let currentKeys = Object.keys(data[i])

        for (let j = 0; j < currentKeys.length; j++) {
            if (!keys.includes(currentKeys[j]))
                keys.push(currentKeys[j])
        }
    }
    for (let k = 0; k < keys.length; k++) {
        // result += `<li>${keys[k]}</li>`
        console.log(keys[k])
        for(let l = 0; l < data.length; l++){
            // result += `<li>${keys[k]}</li>`
            result += `<li>${data[l]["name"]}</li>`
        }
        // data.map((aUnicorn) => {
        //     // console.log(keys)
        //     //of gives the value of the array and in gives the index (for an object the keys)
        //     for (var field of keys) {
        //         result += `<li>${aUnicorn[field]}</li>`
        //         // console.log(field)
        //     }
        //     result += `</li>`
        // })

    }
    result += `</li>`
    // console.log(result)



    // for table headers and vaccination status
    // .map is used to loop through the array
    result += "</ul>"

    $("#result").html(result);
    // $("#result").html(JSON.stringify(data));
    // $("#result").html(JSON.stringify(receivedArray, undefined, 2));
}
//================================================================================================



function setup() {
    $("#genderSelection").change(function () {
        let gender = []
        UNICORN_GENDER = $("#genderSelection option:selected").val();
        if (UNICORN_GENDER == "male") {
            gender.push("m")
        }
        else if (UNICORN_GENDER == "female"){
            gender.push("f")
        }
        
        // console.log(gender)
        // console.log(UNICORN_GENDER)
        $.ajax({
            url: "http://localhost:5000/getUnicornByGenderRoute",
            type: "POST",
            data: { genderInHTTPBody: gender},
            success: function (data) {
                receivedArray = data;
                // console.log(receivedArray)
                createTable(data)
            }
        });
    })
}


$(document).ready(setup)
