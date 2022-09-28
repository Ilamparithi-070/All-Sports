alert("called index script");   

fetch("/json/index_quote.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        alert("inside data 1");
        appendData1(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData1(data) {

    for (var i = 0; i < data.length; i++) {

        var title1 = document.getElementById("quote_title_".concat((i + 1).toString()));
        var subtitle1 = document.getElementById("quote_subtitle_".concat((i + 1).toString()));
        var desc1 = document.getElementById("quote_desc_".concat((i + 1).toString()));
        title1.innerHTML = data[i].title;
        subtitle1.innerHTML = data[i].subtitle;
        desc1.innerHTML = data[i].desc;

    }

} 

fetch("/json/index_advice.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData2(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData2(data) {

    for (var i = 0; i < data.length; i++) {

        var title1 = document.getElementById("advice_title_".concat((i + 1).toString()));
        var name1 = document.getElementById("advice_author_".concat((i + 1).toString()));
        var sport1 = document.getElementById("advice_author_sport".concat((i + 1).toString()));
        title1.innerHTML = data[i].title;
        name1.innerHTML = data[i].name;
        sport1.innerHTML = data[i].sport;

    }

} 